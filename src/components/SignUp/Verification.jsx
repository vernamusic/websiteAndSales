import React, { useState, useEffect, useRef } from 'react';
import { Box, TextField, Typography, Button, Link, ThemeProvider, createTheme, Snackbar, Alert } from '@mui/material';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#ffffff',
        },
        error: {
            main: '#ff0000',
        },
        warning: {
            main: '#ff9800', // رنگ هشدار
        },
        info: {
            main: '#2196f3', // رنگ اطلاعات
        },
    },
    typography: {
        h6: {
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '19.25px',
            textAlign: 'center',
        },
        h5: {
            fontSize: '23px',
            fontWeight: 600,
            lineHeight: '23px',
            textAlign: 'center',
        },
    },
});

const EmailVerification = ({ email, onSubmit, onResend, onBack }) => {
    const [code, setCode] = useState(Array(6).fill(''));
    const [timeLeft, setTimeLeft] = useState(150); // 2:30 in seconds
    const inputRefs = useRef([]);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timerId);
        }
    }, [timeLeft]);

    const showSnackbar = (message, severity = 'success') => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setSnackbarOpen(true);
    };

    const handleChange = (e, index) => {
        const { value } = e.target;
        if (/^\d$/.test(value)) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);
            if (index < 5) inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            const newCode = [...code];
            newCode[index - 1] = '';
            setCode(newCode);
            inputRefs.current[index - 1].focus();
        }
    };

    const handleSubmit = async () => {
        const verificationCode = code.join('');
        if (verificationCode.length === 6) {
            try {
                const response = await fetch('https://site.vitruvianshield.com/api/v1/verify-email/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ verification_code: verificationCode, email: email }),
                });

                if (response.ok) {
                    const result = await response.json();
                    onSubmit(result); // ارسال نتیجه به تابع onSubmit
                    showSnackbar('Verification successful!', 'success'); // نمایش پیام موفقیت
                } else {
                    showSnackbar('Verification failed. Please try again.', 'error'); // نمایش پیام خطا
                }
            } catch (error) {
                console.error('Error verifying code:', error);
                showSnackbar('An error occurred. Please try again later.', 'error'); // نمایش پیام خطا
            }
        } else {
            showSnackbar('Please enter all 6 digits', 'warning'); // نمایش پیام هشدار
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleResend = () => {
        setTimeLeft(150);
        setCode(Array(6).fill(''));
        inputRefs.current[0].focus();
        if (onResend) {
            onResend();
            showSnackbar('Verification code resent!', 'info'); // نمایش پیام اطلاعات
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    color: 'text.primary',
                    minHeight: '20vw',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    maxWidth: '400px',
                    pb: 2,
                }}
            >
                <Typography variant="h5" gutterBottom>
                    Verify your email address
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ textAlign: 'center' }}>
                    Enter verification code we sent to:<br /> {email}
                </Typography>

                <Box display="flex" justifyContent="center" gap={1} mt={2} mb={2}>
                    {code.map((value, index) => (
                        <TextField
                            key={index}
                            value={value}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            inputRef={(el) => (inputRefs.current[index] = el)}
                            inputProps={{
                                maxLength: 1,
                                style: { textAlign: 'center', fontSize: '18px', width: '27px' },
                            }}
                            variant="outlined"
                        />
                    ))}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, maxWidth: '350px' }}>
                    <Typography variant="body2" sx={{ textAlign: 'center' }}>
                        Your verification code may take a few moments to arrive. Didn't receive a verification code? {timeLeft > 0 ? formatTime(timeLeft) : (
                        <Link
                            component="button"
                            variant="body2"
                            onClick={handleResend}
                            sx={{
                                mb: 0.5,
                                color: 'inherit',
                                '&:hover': {
                                    color: 'primary.main',
                                    textDecoration: 'underline',
                                },
                            }}
                        >
                            Resend
                        </Link>
                    )}
                    </Typography>
                </Box>
                <Button
                    onClick={handleSubmit}
                    variant="contained"
                    color="error"
                    fullWidth
                    sx={{
                        mt: 2,
                        py: 1.5,
                        fontSize: '1.1rem',
                        textTransform: 'none'
                    }}
                >
                    Confirm
                </Button>
                <Button
                    onClick={onBack}
                    variant="text"
                    color="primary"
                    fullWidth
                    sx={{ mt: 1, textTransform: 'none' }}
                >
                    Back
                </Button>

                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={6000}
                    onClose={() => setSnackbarOpen(false)}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} // تغییر موقعیت
                >
                    <Alert onClose={() => setSnackbarOpen(false)} severity={snackbarSeverity} sx={{ backgroundColor: theme.palette[snackbarSeverity].main, color: '#fff' }}>
                        {snackbarMessage}
                    </Alert>
                </Snackbar>
            </Box>
        </ThemeProvider>
    );
};

export default EmailVerification;
