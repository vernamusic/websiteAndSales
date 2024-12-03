import React, { useState } from 'react';
import {
    Box, Typography, Fade, Snackbar, Alert, Button
} from '@mui/material';
import logo from '../../assets/redvslogo.svg';
import google from '../../assets/Google.png';
import apple from '../../assets/Apple.png';
import LoginForm from './LoginForm';

const navItemStyle = {
    fontFamily: 'Lato',
    fontSize: { xs: '14.22px', lg: '16px' },
    color: '#fff',
    fontStyle: 'normal',
    lineHeight: '100%',
    textTransform: 'none'
}
const LoginDialog = ({ email, onForgotPassword, onClose, onLoginSuccess, onSendResetLink, }) => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('error');

    const handleCloseSnackbar = () => setOpenSnackbar(false);

    return (
        <Fade
            in={true}
            timeout={1000}
        >
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                width="100%"
                sx={{
                    pt: '45px'
                }}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    mb={2}
                >
                    <Box
                        sx={{
                            width: { xs: '53px' },
                            height: { xs: '59.19px' }
                        }}
                    >
                        <img
                            src={logo}
                            alt="Site Logo"
                            style={{ marginBottom: 13, width: '100%', height: '100%' }}
                        />
                    </Box>
                    <Typography
                        sx={{
                            ...navItemStyle,
                            fontSize: { xs: '16px', sm: '18px', md: '20px', lg: '23px' },
                            fontWeight: 600,
                            mt: '8px'
                        }}
                    >
                        Welcome back!
                    </Typography>
                    <Typography
                        sx={{
                            ...navItemStyle,
                            color: 'rgba(255, 255, 255, 0.65)',
                            lineHeight: 'normal',
                            mt: '12px',
                        }}>
                        Please enter your details
                    </Typography>
                </Box>
                
                <LoginForm email={email} onForgotPassword={onForgotPassword} onLoginSuccess={onLoginSuccess} onSendResetLink={onSendResetLink} />
                
                <Box mb='16px'></Box>

                

                {/*<Box display="flex" justifyContent="center" width="100%" mb={2}>*/}
                {/*    <Button*/}
                {/*        variant="outlined"*/}
                {/*        sx={{*/}
                {/*            borderColor: 'white',*/}
                {/*            color: '#FFFFFF',*/}
                {/*            maxWidth: '380px',*/}
                {/*            width: '100%',*/}
                {/*            height: '44px',*/}
                {/*            textTransform: 'none',*/}
                {/*            fontFamily:'Lato',*/}
                {/*            fontWeight:500,*/}
                {/*            fontSize:'14px'*/}
                {/*        }}*/}
                {/*        startIcon={<img src={google} alt="Google Logo" style={{ width: 24, height: 24 }} />}*/}
                {/*        aria-label="Sign in with Google"*/}
                {/*    >*/}
                {/*        Sign in with Google*/}
                {/*    </Button>*/}
                {/*</Box>*/}

                {/*<Box display="flex" justifyContent="center" width="100%" mb={6}>*/}
                {/*    <Button*/}
                {/*        variant="outlined"*/}
                {/*        sx={{*/}
                {/*            borderColor: 'white',*/}
                {/*            color: '#FFFFFF',*/}
                {/*            maxWidth: '380px',*/}
                {/*            width: '100%',*/}
                {/*            height: '44px',*/}
                {/*            textTransform: 'none',*/}
                {/*            fontFamily:'Lato',*/}
                {/*            fontWeight:500,*/}
                {/*            fontSize:'14px'*/}
                {/*        }}*/}
                {/*        startIcon={<img src={apple} alt="Apple Logo" style={{ width: 24, height: 24 }} />}*/}
                {/*        aria-label="Sign in with Apple Id"*/}
                {/*    >*/}
                {/*        Sign in with Apple*/}
                {/*    </Button>*/}
                {/*</Box>*/}

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
