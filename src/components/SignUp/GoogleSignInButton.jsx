import React from "react";
import {Box, Button} from "@mui/material";
import google from '../../assets/Google.png';

const GoogleSignInButton = () => {
  const googleClientId = "1037115696115-5cvfcpvi40n6fhk2hepv8450vn712qud.apps.googleusercontent.com"
  const redirectUri = "https://vitruvianshield.com/google/callback";

  const handleSignIn = () => {
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&redirect_uri=${redirectUri}&response_type=code&scope=openid%20email%20profile&access_type=offline`;

    window.location.href = authUrl;
  };

  return (
      <Box display="flex" justifyContent="center" width="100%" mb={2}>
        <Button
            onClick={handleSignIn}
            variant="outlined"
            sx={{
              borderColor: 'white',
              color: '#FFFFFF',
              maxWidth: '380px',
              width: '100%',
              height: '44px',
              textTransform: 'none',
              fontFamily: 'Lato',
              fontWeight: 500,
              fontSize: '14px',
            }}
            startIcon={<img src={google} alt="Google Logo" style={{ width: 24, height: 24 }} />}
            aria-label="Sign in with Google"
        >
          Sign in with Google
        </Button>
      </Box>
  );
};

export default GoogleSignInButton;
