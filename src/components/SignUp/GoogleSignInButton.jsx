import React from 'react';
import { GoogleLogin } from 'react-google-login';
import Button from '@mui/material/Button';

const GoogleSignInButton = ({ onSuccess, onFailure }) => {
    return (
        <GoogleLogin
            clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
            render={(renderProps) => (
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    style={{
                        textTransform: 'none',
                        padding: '10px 20px',
                        fontSize: '16px',
                    }}
                >
                    Sign in with Google
                </Button>
            )}
            responseType="code"
            redirectUri="https://vitruvianshield.com/"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
        />
    );
};

export default GoogleSignInButton;
