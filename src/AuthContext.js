import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));
    const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken'));

    const login = (token, refresh) => {
        setAuthToken(token);
        setRefreshToken(refresh);
        localStorage.setItem('authToken', token);
        localStorage.setItem('refreshToken', refresh);
    };

    const logout = () => {
        setAuthToken(null);
        setRefreshToken(null);
        localStorage.removeItem('authToken');
        localStorage.removeItem('refreshToken');
    };

    const isTokenExpired = (token) => {
        if (!token) return true;
        const payload = JSON.parse(atob(token.split('.')[1]));
        const expiry = payload.exp * 1000;
        return Date.now() > expiry;
    };

    const refreshAccessToken = async () => {
        if (!refreshToken) return;
        const response = await fetch('https://site.vitruvianshield.com/api/v1/token/refresh/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ refresh: refreshToken }),
        });

        const data = await response.json();
        if (response.ok) {
            setAuthToken(data.access);
            localStorage.setItem('authToken', data.access);
        } else {
            logout();
        }
    };

    return (
        <AuthContext.Provider value={{ authToken, refreshToken, login, logout, isTokenExpired, refreshAccessToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

// Scenarios:
// 1. Use login(token, refresh) to log in and save tokens.
// 2. Call logout() to log out and clear tokens.
// 3. Check token expiry with isTokenExpired(token) before making requests.
// 4. Refresh access token using refreshAccessToken() if the token is expired.
