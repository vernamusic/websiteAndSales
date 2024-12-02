import React from "react";

const GoogleSignInButton = () => {
  const googleClientId = "1037115696115-5cvfcpvi40n6fhk2hepv8450vn712qud.apps.googleusercontent.com"
  const redirectUri = "https://vitruvianshield.com/google/callback";

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
