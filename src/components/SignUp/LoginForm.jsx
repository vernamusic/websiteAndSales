import React, { useEffect, useState } from 'react';
import {
    FormControl, InputLabel, OutlinedInput, Box, Button, Link,
    InputAdornment, IconButton, Snackbar, Alert
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { createTheme } from '@mui/material/styles';
import FormInput from '../custom/FormInput';

const theme = createTheme({
    typography: {},
});

const AuthForm = ({ email: initialEmail = null, onForgotPassword, onLoginSuccess, onSendResetLink, }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState(initialEmail);
    const [password, setPassword] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('error');

    useEffect(() => {
        if (initialEmail) {
            setEmail(initialEmail);
        }
    }, [initialEmail]);

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = (event) => event.preventDefault();

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

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
            const loginResponse = await fetch('https://site.vitruvianshield.com/api/v1/token/', {
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
                onLoginSuccess();
                showSnackbar('Login successful!', 'success');
            } else if (loginResponse.status === 202) {
                showSnackbar('User not verified.', 'error');
                onSendResetLink(email);
            } else if (loginResponse.status === 401) {
                showSnackbar('User not found. Registering...', 'info');

                const registerResponse = await fetch('https://site.vitruvianshield.com/api/v1/register/', {
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

    return (
        <Box sx={{ width: 380 }}>
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
                <FormControl variant="outlined" fullWidth sx={{}}>
                    <OutlinedInput
                        placeholder='Enter your password'
                        id="password-input"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={handlePasswordChange}
                        sx={{
                            height: '48px',
                            backgroundColor: '#FFFFFF',
                            borderRadius: '4px',
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#5ea5d4',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#c5ea5d4',
                                borderWidth: '2px',
                            },
                            '& input::placeHolder':{
                                fontSize:'14.22px',
                                fontWeight:400,
                                fontFamily:'Lato'
                            },
                            '& input':{
                                pl:'25px'
                            }
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
                        aria-label="Password"
                    />
                </FormControl>

                <Box
                    display="flex"
                    justifyContent="left"
                    width="380px"
                    sx={{
                        mt: '16px'
                    }}
                >
                    <Link
                        href="#"
                        variant="h6"
                        color="#5EA5D4"
                        sx={{ textDecoration: 'none', fontSize: '14px', color: 'white' }}
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
                        my: '24px',
                        backgroundColor: '#B50304',
                        height:'44px',
                        textTransform:'none',
                        fontFamily:'Lato',
                        fontWeight:600,
                        fontSize:'16px',
                        fontStyle:'normal',
                        '&:hover': {
                            backgroundColor: '#B50304',
                        },
                        
                    }}
                >
                    Get started
                </Button>
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
    );
};

AuthForm.propTypes = {
    onForgotPassword: PropTypes.func.isRequired,
    onLoginSuccess: PropTypes.func.isRequired,
    onSendResetLink: PropTypes.func.isRequired, // اضافه کردن PropTypes برای onSendResetLink
};

export default AuthForm;
