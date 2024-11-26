import React from "react";

const GoogleSignInButton = () => {
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const redirectUri = "http://127.0.0.1:8000/api/v1/auth/google/callback/";

  const handleSignIn = () => {
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&redirect_uri=${redirectUri}&response_type=code&scope=openid%20email%20profile&access_type=offline`;

    // Redirect the user to Google's OAuth2 login page
    window.location.href = authUrl;
  };

  // Handle when the Google login redirects back
  const handleGoogleCallback = async (code) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/auth/google/callback/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ code })
      });

      if (!response.ok) {
        throw new Error('Failed to exchange code for tokens');
      }

      const data = await response.json();
      // Store the tokens in localStorage or cookies
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('refresh_token', data.refresh_token);

      // Redirect the user to the frontend dashboard
      window.location.href = "/dashboard"; // Example frontend redirect

    } catch (error) {
      console.error('Error during Google login:', error);
      alert('Login failed');
    }
  };

  // Check if the URL contains a 'code' parameter
  const urlParams = new URLSearchParams(window.location.search);
  const googleAuthCode = urlParams.get('code');
  if (googleAuthCode) {
    handleGoogleCallback(googleAuthCode);
  }

  return (
    <button onClick={handleSignIn} style={{ padding: '10px 20px', fontSize: '16px' }}>
      Sign in with Google
    </button>
  );
};

export default GoogleSignInButton;
