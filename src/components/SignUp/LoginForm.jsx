import React, { useState } from 'react';
import {
    FormControl, InputLabel, OutlinedInput, Box, Button, Link,
    InputAdornment, IconButton, Snackbar, Alert
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
    },
});

const LoginForm = ({ onForgotPassword, onLoginSuccess }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('error');

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = (event) => event.preventDefault();
    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateEmail(email)) {
            setSnackbarMessage('Please enter a valid email address.');
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
            return;
        }

        try {
            const response = await fetch('https://site.vitruvianshield.com/api/v1/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('authToken', data.token);
                onLoginSuccess();
            } else {
                setSnackbarMessage(data.message || 'Login failed. Please try again.');
                setSnackbarSeverity('error');
                setOpenSnackbar(true);
            }
        } catch (error) {
            setSnackbarMessage('Login failed. Please try again.');
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
        }
    };

    const handleCloseSnackbar = () => setOpenSnackbar(false);

    return (
        <Box sx={{ width: 380 }}>
            <form onSubmit={handleSubmit}>
                <FormControl variant="outlined" fullWidth sx={{ mb: 4 }}>
                    <InputLabel
                        htmlFor="email-input"
                        sx={{
                            ...theme.typography.text06,
                            color: '#000000',
                            '&.MuiInputLabel-shrink': {
                                transform: 'translate(10px, 1px) scale(0.75)',
                                transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out',
                                color: '#ec0000',
                            },
                        }}
                    >
                        Enter your email
                    </InputLabel>
                    <OutlinedInput
                        id="email-input"
                        value={email}
                        onChange={handleEmailChange}
                        sx={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: '4px',
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#a80d0d',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#a80d0d',
                                borderWidth: '2px',
                            },
                        }}
                        aria-label="Email address"
                    />
                </FormControl>
                <FormControl variant="outlined" fullWidth sx={{ mb: 4 }}>
                    <InputLabel
                        htmlFor="password-input"
                        sx={{
                            ...theme.typography.text06,
                            color: '#000000',
                            '&.MuiInputLabel-shrink': {
                                transform: 'translate(10px, 1px) scale(0.75)',
                                transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out',
                                color: '#ec0000',
                            },
                        }}
                    >
                        Enter your password
                    </InputLabel>
                    <OutlinedInput
                        id="password-input"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={handlePasswordChange}
                        sx={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: '4px',
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#a80d0d',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#a80d0d',
                                borderWidth: '2px',
                            },
                        }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        aria-label="Password"
                    />
                </FormControl>
                <Box display="flex" justifyContent="left" width="380px">
                    <Link
                        href="#"
                        variant="h6"
                        color="#5EA5D4"
                        sx={{ textDecoration: 'none', fontSize: '14px', color: 'white' }}
                        onClick={onForgotPassword}
                    >
                        Forgot your password?
                    </Link>
                </Box>
                <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    sx={{
                        mt: 2,
                        backgroundColor: '#a80d0d',
                        '&:hover': {
                            backgroundColor: '#ec0000',
                        },
                    }}
                >
                    Log in
                </Button>
            </form>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
            >
                <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
};

LoginForm.propTypes = {
    onForgotPassword: PropTypes.func.isRequired,
    onLoginSuccess: PropTypes.func.isRequired,
};

export default LoginForm;
