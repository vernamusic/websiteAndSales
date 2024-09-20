import React, { useState } from 'react';
import { Dialog, DialogTitle, Box, Slide, Fade, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import LoginDialog from '../components/SignUp/Login';
import ForgotPasswordDialog from '../components/SignUp/ForgetPassword';
import VerificationEmailDialog from '../components/SignUp/Verification';

const MainDialog = ({ open, onClose }) => {
    const [dialogMode, setDialogMode] = useState('login'); // تغییر به 'login' به‌عنوان حالت پیش‌فرض
    const [email, setEmail] = useState(''); // ذخیره ایمیل برای استفاده در تایید

    // تابعی برای نمایش دیالوگ فراموشی رمز عبور
    const handleForgotPassword = () => setDialogMode('forgotPassword');

    // تابعی برای بازگشت به صفحه ورود
    const handleBackToLogin = () => setDialogMode('login');

    // تابعی برای نمایش دیالوگ تایید ایمیل
    const handleVerificationEmail = (email) => {
        setEmail(email); // ذخیره ایمیل برای استفاده در تایید
        setDialogMode('verificationEmail');
    };

    // تابعی برای ارسال دوباره لینک تایید ایمیل
    const handleResendVerificationEmail = () => {
        console.log('Resend verification email');
    };

    // تابعی برای موفقیت در ورود
    const handleLoginSuccess = () => {
        // توکن را از Local Storage یا هر روش ذخیره‌سازی دیگری استفاده کنید
        console.log('User logged in successfully');
        // به عنوان مثال، می‌توانید کاربر را به صفحه اصلی هدایت کنید
        window.location.href = '/home'; // یا مدیریت وضعیت ورود در اینجا
    };

    // تابعی برای ارسال لینک بازنشانی رمز عبور و نمایش تایید ایمیل
    const handleSendResetLink = (email) => {
        setEmail(email); // ذخیره ایمیل برای استفاده در تایید
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
                        email={email} // ارسال ایمیل به دیالوگ تایید
                        onResend={handleResendVerificationEmail}
                        onBack={handleBackToLogin}
                    />
                );
            case 'login':
            default:
                return (
                    <LoginDialog
                        onForgotPassword={handleForgotPassword}
                        onLoginSuccess={handleLoginSuccess}
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
