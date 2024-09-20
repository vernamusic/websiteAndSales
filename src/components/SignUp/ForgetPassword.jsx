import React, { useState } from 'react';
import {
    FormControl, InputLabel, OutlinedInput, Box, Typography, Button, Fade
} from '@mui/material';
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

const ForgotPasswordDialog = ({ onBack, onSubmit }) => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => setEmail(event.target.value);

    return (
        <ThemeProvider theme={theme}>
            <Fade in={true} timeout={1000}>
                <Box display="flex" flexDirection="column" alignItems="center" width="100%">
                    <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
                        <Typography variant="h23" style={{ marginBottom: 10 }}>
                            Forget password?
                        </Typography>
                        <Typography variant="h6" style={{ marginBottom: 10, color: '#9f9b9b' }}>
                            No worries, we'll send you reset instructions
                        </Typography>
                    </Box>
                    <form style={{ width: '100%', maxWidth: '380px' }}>
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
                        <Box display="flex" justifyContent="center" width="100%" mb={2} mt={2.5}>
                            <Button
                                sx={{
                                    ...theme.typography.h9,
                                    backgroundColor: '#B50304',
                                    color: '#FFFFFF',
                                    maxWidth: '380px',
                                    width: '100%',
                                    height: '50px',
                                    textTransform: 'none',
                                }}
                                onClick={onSubmit}
                            >
                                Send Reset Link
                            </Button>
                        </Box>
                        <Box display="flex" justifyContent="center" width="100%" mb={8} mt={0}>
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
                                onClick={onBack}
                            >
                                Back
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Fade>
        </ThemeProvider>
    );
};

export default ForgotPasswordDialog;
