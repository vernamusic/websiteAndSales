import React, { useState } from 'react';
import {
    FormControl, InputLabel, OutlinedInput, Box, Typography, IconButton,
    InputAdornment, Button, Link, Fade, Snackbar, Alert
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import logo from '../../assets/redvslogo.svg';
import google from '../../assets/Google.png';
import apple from '../../assets/Apple.png';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        h6: {
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '19.25px',
            textAlign: 'center',
        },
        h9: {
            fontFamily: 'Lato',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '16px',
            textAlign: 'center',
        },
        h23: {
            fontFamily: 'Lato',
            fontSize: '23px',
            fontWeight: 600,
            lineHeight: '23px',
            textAlign: 'center',
        },
        text06: {
            fontFamily: 'Inter',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px',
            textAlign: 'left',
        },
    },
});

const LoginDialog = ({ onForgotPassword, onClose, onLoginSuccess }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('error');

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = (event) => event.preventDefault();
    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('20.82.7.98/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                // موفقیت آمیز، توکن را ذخیره کنید و وضعیت ورود را به روز کنید
                localStorage.setItem('authToken', data.token);
                onLoginSuccess(); // انتقال به حالت بعدی
            } else {
                // خطا، نمایش پیغام
                console.error(data.message);
                setSnackbarMessage(data.message);
                setSnackbarSeverity('error');
                setOpenSnackbar(true);
            }
        } catch (error) {
            console.error('Login failed:', error);
            setSnackbarMessage('Login failed. Please try again.');
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
        }
    };

    const handleCloseSnackbar = () => setOpenSnackbar(false);

    return (
        <ThemeProvider theme={theme}>
            <Fade in={true} timeout={1000}>
                <Box display="flex" flexDirection="column" alignItems="center" width="100%">
                    <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
                        <img src={logo} alt="Site Logo" style={{ marginBottom: 13, width: '12%' }} />
                        <Typography variant="h23" style={{ marginBottom: 10 }}>Get Started</Typography>
                        <Typography variant="h6" style={{ marginBottom: 10, color: '#9f9b9b' }}>Welcome to Vitruvian Shield</Typography>
                    </Box>
                    <form style={{ width: '100%', maxWidth: '380px' }} onSubmit={handleSubmit}>
                        <FormControl variant="outlined" fullWidth sx={{ mb: 4 }}>
                            <InputLabel
                                htmlFor="email-input"
                                sx={{
                                    ...theme.typography.text06,
                                    color: '#000000',
                                    '&.MuiInputLabel-shrink': {
                                        transform: 'translate(10px, 1px) scale(0.75)',
                                        transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out',
                                        color: '#ec0000',
                                    },
                                }}
                            >
                                Enter your email
                            </InputLabel>
                            <OutlinedInput
                                id="email-input"
                                value={email}
                                onChange={handleEmailChange}
                                sx={{
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: '4px',
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#a80d0d',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#a80d0d',
                                        borderWidth: '2px',
                                    },
                                }}
                            />
                        </FormControl>
                        <FormControl variant="outlined" fullWidth sx={{ mb: 4 }}>
                            <InputLabel
                                htmlFor="password-input"
                                sx={{
                                    ...theme.typography.text06,
                                    color: '#000000',
                                    '&.MuiInputLabel-shrink': {
                                        transform: 'translate(10px, 1px) scale(0.75)',
                                        transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out',
                                        color: '#ec0000',
                                    },
                                }}
                            >
                                Enter your password
                            </InputLabel>
                            <OutlinedInput
                                id="password-input"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={handlePasswordChange}
                                sx={{
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: '4px',
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#a80d0d',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#a80d0d',
                                        borderWidth: '2px',
                                    },
                                }}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <Box display="flex" justifyContent="left" width="380px">
                            <Link
                                href="#"
                                variant="h6"
                                color="#5EA5D4"
                                sx={{ textDecoration: 'none', fontSize: '14px', color: 'white' }}
                                onClick={onForgotPassword}
                            >
                                Forgot Password?
                            </Link>
                        </Box>
                        <Box display="flex" justifyContent="center" width="100%" mb={2} mt={2.5}>
                            <Button
                                type="submit"
                                sx={{
                                    ...theme.typography.h9,
                                    backgroundColor: '#B50304',
                                    color: '#FFFFFF',
                                    maxWidth: '380px',
                                    width: '100%',
                                    height: '50px',
                                    textTransform: 'none',
                                }}
                            >
                                Get started
                            </Button>
                        </Box>
                        <Box display="flex" alignItems="center" width="100%" maxWidth="380px" mb={2}>
                            <Box flexGrow={1} height="1px" bgcolor="#9f9b9b" />
                            <Typography variant="h6" sx={{ mx: 1.3, color: '#9f9b9b' }}>Or</Typography>
                            <Box flexGrow={1} height="1px" bgcolor="#9f9b9b" />
                        </Box>
                        <Box display="flex" justifyContent="center" width="100%" mb={2} mt={2.5}>
                            <Button
                                variant="outlined"
                                sx={{
                                    ...theme.typography.h9,
                                    borderColor: 'white',
                                    color: '#FFFFFF',
                                    maxWidth: '380px',
                                    width: '100%',
                                    height: '50px',
                                    textTransform: 'none',
                                }}
                                startIcon={<img src={google} alt="Google Logo" style={{ width: 24, height: 24 }} />}
                            >
                                Sign in with Google
                            </Button>
                        </Box>
                        <Box display="flex" justifyContent="center" width="100%" mb={6}>
                            <Button
                                variant="outlined"
                                sx={{
                                    ...theme.typography.h9,
                                    borderColor: 'white',
                                    color: '#FFFFFF',
                                    maxWidth: '380px',
                                    width: '100%',
                                    height: '50px',
                                    textTransform: 'none',
                                }}
                                startIcon={<img src={apple} alt="Apple Logo" style={{ width: 24, height: 24 }} />}
                            >
                                Sign in with Apple Id
                            </Button>
                        </Box>
                    </form>
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
        </ThemeProvider>
    );
};

export default LoginDialog;
