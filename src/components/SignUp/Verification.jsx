import React from 'react';
import {Box, Typography, Button, Fade, ThemeProvider, createTheme} from '@mui/material';
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

const VerificationEmailDialog = ({ onResend, onBack }) => {
    return (
        <ThemeProvider theme={theme}>
            <Fade in={true} timeout={1000}>
                <Box display="flex" flexDirection="column" alignItems="center" width="100%">
                    <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
                        <Typography variant="h23" style={{ marginBottom: 10 }}>
                            Verification Email Sent
                        </Typography>
                        <Typography variant="h6" style={{ marginBottom: 10, color: '#9f9b9b' }}>
                            We’ve sent a verification email to your address. Please check your inbox and follow the instructions to verify your email.
                        </Typography>
                    </Box>
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
                            onClick={onResend}
                        >
                            Resend Verification Email
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
                            onClick={onBack}
                        >
                            Back to Login
                        </Button>
                    </Box>
                </Box>
            </Fade>
        </ThemeProvider>
    );
};

export default VerificationEmailDialog;
