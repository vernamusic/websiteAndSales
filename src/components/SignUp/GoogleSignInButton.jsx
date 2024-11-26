import React from "react";

const GoogleSignInButton = () => {
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const redirectUri = "http://localhost:5173/google/callback";

  const handleSignIn = () => {
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&redirect_uri=${redirectUri}&response_type=code&scope=openid%20email%20profile&access_type=offline`;

    window.location.href = authUrl;
  };

  return (
    <button onClick={handleSignIn} style={{ padding: '10px 20px', fontSize: '16px' }}>
      Sign in with Google
    </button>
  );
};

export default GoogleSignInButton;
