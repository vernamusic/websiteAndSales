import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button,
    Snackbar,
    Alert,
    InputAdornment,
    IconButton,
    Typography,
} from '@mui/material';
import { Visibility, VisibilityOff, Close } from '@mui/icons-material';

const ResetPasswordDialog = ({ open, onClose, token }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('error');

    // حالت فوکوس برای هر فیلد ورودی
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

    const handleConfirm = () => {
        if (password !== confirmPassword) {
            showSnackbar('Passwords do not match.', 'error');
            return;
        }

        const apiUrl = `https://site.vitruvianshield.com/api/v1/reset-password/${token}`;
        const payload = { password };

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then((response) => {
                if (response.ok) {
                    onClose();
                    showSnackbar('Password reset successful!', 'success');
                } else {
                    console.error('Failed to reset password');
                    showSnackbar('Failed to reset password', 'error');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                showSnackbar('An unexpected error occurred. Please try again.', 'error');
            });
    };

    const showSnackbar = (message, severity) => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = () => setOpenSnackbar(false);

    return (
        <Dialog
            open={open}
            onClose={(event, reason) => {
                // اجازه بستن فقط با دکمه ضربدر
                if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
                    onClose();
                }
            }}
            disableEscapeKeyDown
            PaperProps={{
                sx: {
                    backgroundColor: '#1e1e1e',
                    color: 'white',
                    width: '100%',
                    maxWidth: '528px',
                    borderRadius: '8px',
                    padding: 4,
                },
            }}
        >
            <DialogTitle
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    pb: 0,
                }}
            >
                Reset Password
                <IconButton onClick={onClose} aria-label="close" sx={{ color: 'white' }}>
                    <Close />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Typography
                    variant="subtitle1"
                    sx={{
                        textAlign: 'left',
                        color: 'rgba(255, 255, 255, 0.7)',
                        mb: 2,
                    }}
                >
                    Enter a new password to update your password
                </Typography>

                <FormControl variant="outlined" fullWidth sx={{ mb: 2 }}>
                    <InputLabel
                        htmlFor="password-input"
                        sx={{
                            color: passwordFocused ? '#ec0000' : '#ec0000',
                            transition: 'all 0.3s ease',
                            opacity: passwordFocused || password ? 0 : 1,
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
                            backgroundColor: '#FFFFFF',
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
                                    onClick={() => setShowPassword(!showPassword)}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        aria-label="Password"
                    />
                </FormControl>

                <FormControl variant="outlined" fullWidth sx={{ mb: 2 }}>
                    <InputLabel
                        htmlFor="confirm-password-input"
                        sx={{
                            color: confirmPasswordFocused ? '#ec0000' : '#ec0000',
                            transition: 'all 0.3s ease',
                            opacity: confirmPasswordFocused || confirmPassword ? 0 : 1,
                        }}
                    >
                        Confirm your password
                    </InputLabel>
                    <OutlinedInput
                        id="confirm-password-input"
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onFocus={() => setConfirmPasswordFocused(true)}
                        onBlur={() => setConfirmPasswordFocused(false)}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        autoComplete="off"
                        sx={{
                            backgroundColor: '#FFFFFF',
                            '&:hover': {
                                borderColor: '#a80d0d',
                            },
                            '&.Mui-focused': {
                                borderColor: '#a80d0d',
                                borderWidth: '2px',
                            },
                        }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    edge="end"
                                >
                                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        aria-label="Confirm Password"
                    />
                </FormControl>

                <Button
                    variant="contained"
                    onClick={handleConfirm}
                    fullWidth
                    sx={{
                        py: 1.5,
                        mt: 1,
                        backgroundColor: '#a80d0d',
                        '&:hover': {
                            backgroundColor: '#ec0000',
                        },
                    }}
                >
                    Reset Password
                </Button>
            </DialogContent>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
            >
                <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Dialog>
    );
};

export default ResetPasswordDialog;
