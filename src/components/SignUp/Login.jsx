import React, { useState } from 'react';
import {
    Box, Typography, Fade, Snackbar, Alert, Button
} from '@mui/material';
import logo from '../../assets/redvslogo.svg';
import google from '../../assets/Google.png';
import apple from '../../assets/Apple.png';
import LoginForm from './LoginForm';

const LoginDialog = ({ onForgotPassword, onClose, onLoginSuccess }) => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('error');

    const handleCloseSnackbar = () => setOpenSnackbar(false);

    return (
        <Fade in={true} timeout={1000}>
            <Box display="flex" flexDirection="column" alignItems="center" width="100%">
                <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
                    <img src={logo} alt="Site Logo" style={{ marginBottom: 13, width: '12%' }} />
                    <Typography variant="h5" style={{ marginBottom: 10 }}>Get Started</Typography>
                    <Typography variant="h6" style={{ marginBottom: 10, color: '#9f9b9b' }}>Welcome to Vitruvian Shield</Typography>
                </Box>
                <LoginForm onForgotPassword={onForgotPassword} onLoginSuccess={onLoginSuccess} />

                <Box display="flex" alignItems="center" width="100%" maxWidth="380px" mb={2}>
                    <Box flexGrow={1} height="1px" bgcolor="#9f9b9b" />
                    <Typography variant="h6" sx={{ mx: 1.3, color: '#9f9b9b' }}>Or</Typography>
                    <Box flexGrow={1} height="1px" bgcolor="#9f9b9b" />
                </Box>

                <Box display="flex" justifyContent="center" width="100%" mb={2}>
                    <Button
                        variant="outlined"
                        sx={{
                            borderColor: 'white',
                            color: '#FFFFFF',
                            maxWidth: '380px',
                            width: '100%',
                            height: '50px',
                            textTransform: 'none',
                        }}
                        startIcon={<img src={google} alt="Google Logo" style={{ width: 24, height: 24 }} />}
                        aria-label="Sign in with Google"
                    >
                        Sign in with Google
                    </Button>
                </Box>

                <Box display="flex" justifyContent="center" width="100%" mb={6}>
                    <Button
                        variant="outlined"
                        sx={{
                            borderColor: 'white',
                            color: '#FFFFFF',
                            maxWidth: '380px',
                            width: '100%',
                            height: '50px',
                            textTransform: 'none',
                        }}
                        startIcon={<img src={apple} alt="Apple Logo" style={{ width: 24, height: 24 }} />}
                        aria-label="Sign in with Apple Id"
                    >
                        Sign in with Apple
                    </Button>
                </Box>

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
        </Fade>
    );
};

export default LoginDialog;
