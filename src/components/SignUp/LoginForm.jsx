import React, { useEffect, useState } from 'react';
import {
    FormControl, InputLabel, OutlinedInput, Box, Button, Link,InputAdornment, IconButton, Snackbar, Alert, Typography, Checkbox, FormControlLabel
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import PropTypes from 'prop-types';
import FormInput from '../custom/FormInput';
import GoogleSignInButton from './GoogleSignInButton';

const AuthForm = ({ email: initialEmail = null, onForgotPassword, onLoginSuccess, onSendResetLink }) => {
    const [email, setEmail] = useState(initialEmail);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('error');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);
    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

    useEffect(() => {
        if (initialEmail) {
            setEmail(initialEmail);
        }
    }, [initialEmail]);

    useEffect(() => {
        const rememberedEmail = localStorage.getItem('rememberedEmail');
        if (rememberedEmail) {
            setEmail(rememberedEmail);
            setRememberMe(true);
        }
    }, []);

    const showSnackbar = (message, severity) => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setOpenSnackbar(true);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateEmail(email)) {
            showSnackbar('Please enter a valid email address.', 'error');
            return;
        }

        try {
            const loginResponse = await fetch('https://vitruvianshield.com/api/v1/token/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const loginData = await loginResponse.json();

            if (loginResponse.status === 200) {
                localStorage.setItem('authToken', loginData.access);
                localStorage.setItem('refreshToken', loginData.refresh);
                if (rememberMe) {
                    localStorage.setItem('rememberedEmail', email);
                } else {
                    localStorage.removeItem('rememberedEmail');
                }
                onLoginSuccess();
                showSnackbar('Login successful!', 'success');
            } else if (loginResponse.status === 202) {
                showSnackbar('User  not verified.', 'error');
                onSendResetLink(email);
            } else if (loginResponse.status === 401) {
                showSnackbar('User  not found. Registering...', 'info');

                const registerResponse = await fetch('https://vitruvianshield.com/api/v1/register/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });

                const registerData = await registerResponse.json();

                if (registerResponse.status === 201) {
                    onSendResetLink(email, password);
                    showSnackbar('Registration successful!', 'success');
                } else {
                    showSnackbar(registerData.message || 'Registration failed. Please try again.', 'error');
                }
            } else {
                showSnackbar(loginData.message || 'Login failed. Please check your credentials.', 'error');
            }
        } catch (error) {
            showSnackbar('An unexpected error occurred. Please try again.', 'error');
        }
    };

    const handleCloseSnackbar = () => setOpenSnackbar(false);

    const handleSuccessGoogle = async (response) => {
        try {
            const res = await fetch('https://vitruvianshield.com/api/v1/auth/google/callback/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code: response.code }),
            });
            const data = await res.json();
            if (res.ok) {
                localStorage.setItem('access_token', data.access);
                localStorage.setItem('refresh_token', data.refresh);
                showSnackbar('Login successful!', 'success');
 } else {
                showSnackbar(data.message || 'Google login failed.', 'error');
            }
        } catch (error) {
            showSnackbar('An unexpected error occurred. Please try again.', 'error');
        }
    };

    const handleFailureGoogle = (error) => {
        showSnackbar('Google login failed.', 'error');
    };

    const handleRememberMeChange = (event) => {
        setRememberMe(event.target.checked);
    };

    return (
        <Box sx={{ width: '80%' }}>
            <form onSubmit={handleSubmit}>
                <FormControl variant="outlined" fullWidth sx={{ mb: '18px' }}>
                    <FormInput
                        placeholder='Enter your email'
                        value={email}
                        setValue={setEmail}
                        borderRadius='4px'
                        height='48px'
                        aria-label="Email address"
                        inputname='email'
                        hiddenError={true}
                    />
                </FormControl>
                <FormControl variant="outlined" fullWidth sx={{ mb: 2 }}>
                    <InputLabel
                        htmlFor="password-input"
                        sx={{
                            color: passwordFocused ? 'rgba(38, 38, 38, 1)' : 'rgba(38, 38, 38, 1)',
                            opacity: passwordFocused || password ? 0 : 0.4,
                            fontSize: '13px',
                            textJustify: 'center',
                            ml: 1.3,
                        }}
                    >
                        Enter your password
                    </InputLabel>
                    <OutlinedInput
                        id="password-input"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onFocus={() => setPasswordFocused(true)}
                        onBlur={() => setPasswordFocused(false)}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="off"
                        sx={{
                            pl: 1.3,
                            height: '48px',
                            boxSizing: 'border-box',
                            backgroundColor: '#FFFFFF',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: passwordFocused ? '#a80d0d' : 'rgba(0, 0, 0, 0.23)',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {},
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderWidth: '1px',
                            },
                            '& .MuiOutlinedInput-input': {
                                padding: '12px 14px',
                            },
                        }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => setShowPassword(!showPassword)}
                                    edge="end"
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        aria-label="Password"
                    />
                </FormControl>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    width="355px"
                    sx={{
                        mb: '16px',
                        ml: 0.25,
                    }}
                >
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={rememberMe}
                                onChange={handleRememberMeChange}
                                disableRipple
                                sx={{
                                    color: '#FFFFFF',
                                    '&.Mui-checked': {
                                        color: '#FFFFFF',
                                    },
                                }}
                            />
                        }
                        label={
                            <Typography
                                sx={{
                                    fontSize: '14px',
                                    color: 'white',
                                    fontFamily: 'Lato',
                                }}
                            >
                                Remember me
                            </Typography>
                        }
                    />
                    <Link
                        href="#"
                        variant="h6"
                        color="#5EA5D4"
                        sx={{
                            textDecoration: 'none',
                            fontSize: '14px',
                            color: 'white',
                        }}
                        onClick={onForgotPassword}
                    >
                        Forgot your password?
                    </Link>
                </Box>

                <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    sx={{
                        mb: '24px',
                        backgroundColor: '#B50304',
                        height: '44px',
                        textTransform: 'none',
                        fontFamily: 'Lato',
                        fontWeight: 500,
                        fontSize: '16px',
                        fontStyle: 'normal',
                        '&:hover': {
                            backgroundColor: '#B50304',
                        },
                    }}
                >
                    Log in
                </Button>

                <Box display="flex" alignItems="center" width="100%" maxWidth="380px" mb='24px'>
                    <Box flexGrow={1} height="1px" bgcolor="#9f9b9b" />
                    <Typography sx={{
                        mx: 1.3,
                        color: '#9f9b9b',
                        fontSize: '14px',
                        fontFamily: 'Lato'
                    }}>Or</Typography>
                    <Box flexGrow={1} height="1px" bgcolor="#9f9b9b" />
                </Box>

                <GoogleSignInButton onSuccess={handleSuccessGoogle} onFailure={handleFailureGoogle} />
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackbar}
                >
                    <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
                        {snackbarMessage}
                    </Alert>
                </Snackbar>
            </form>
        </Box>
    );
};

AuthForm.propTypes = {
    onForgotPassword: PropTypes.func.isRequired,
    onLoginSuccess: PropTypes.func.isRequired,
    onSendResetLink: PropTypes.func.isRequired,
};

export default AuthForm;