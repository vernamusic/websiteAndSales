import React, { useState } from 'react';
import { Dialog, DialogTitle, Box, Slide, Fade, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import LoginDialog from './Login.jsx';
import ForgotPasswordDialog from './ForgetPassword.jsx';
import VerificationEmailDialog from './Verification.jsx';

const MainDialog = ({ open, onClose }) => {
    const [dialogMode, setDialogMode] = useState('login');
    const [email, setEmail] = useState('');


    const handleForgotPassword = () => setDialogMode('forgotPassword');


    const handleBackToLogin = () => setDialogMode('login');


    const handleVerificationEmail = (email) => {
        setEmail(email);
        handleResendVerificationEmail(email);
        setDialogMode('verificationEmail');
    };


    const handleResendVerificationEmail = () => {
        fetch('https://site.vitruvianshield.com/api/v1/request-verification-code/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email })
        })
            .then(response => {
                if (!response.ok) throw new Error('Failed to resend verification email');
                return response.json();
            })
            .then(data => {
                console.log('Verification email resent:', data.message);
            })
            .catch(error => {
                console.error('Error resending verification email:', error);
            });
    };


    const handleLoginSuccess = () => {
        console.log('User logged in successfully');
        //window.location.href = '/';
    };


    const handleSendResetLink = (email) => {
        setEmail(email);
        setDialogMode('verificationEmail');
    };



    const renderDialogContent = () => {
        switch (dialogMode) {
            case 'forgotPassword':
                return (
                    <ForgotPasswordDialog
                        onBack={handleBackToLogin}
                        onSubmit={handleSendResetLink}
                    />
                );
            case 'verificationEmail':

                return (
                    <VerificationEmailDialog
                        email={email}
                        onResend={handleResendVerificationEmail}
                        onBack={handleBackToLogin}
                        onSubmit={handleBackToLogin}
                    />
                );
            case 'login':
            default:
                return (
                    <LoginDialog
                        email={email}
                        onForgotPassword={handleForgotPassword}
                        onLoginSuccess={handleLoginSuccess}
                        onSendResetLink={handleVerificationEmail}
                    />
                );
        }
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
            PaperProps={{
                style: {
                    borderRadius: '15px',
                    backgroundColor: '#262626',
                    color: '#FFFFFF',
                    maxWidth: '528px',
                    overflow: 'hidden',
                },
            }}
        >
            <DialogTitle>
                <Box display="flex" justifyContent="flex-end">
                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={onClose}
                        aria-label="close"
                    >
                        <Close />
                    </IconButton>
                </Box>
            </DialogTitle>
            <Slide direction="up" in={open} mountOnEnter unmountOnExit>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    width="100%"
                >
                    <Fade
                        in={open}
                        timeout={{ enter: 800, exit: 800 }}
                        style={{ transitionDelay: '200ms' }}
                    >
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            width="100%"
                        >
                            {renderDialogContent()}
                        </Box>
                    </Fade>
                </Box>
            </Slide>
        </Dialog>
    );
};

export default MainDialog;
