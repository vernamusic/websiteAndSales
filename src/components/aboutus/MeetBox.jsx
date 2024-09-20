import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import backgroundImage from '../../assets/about2.png';

const theme = createTheme({
    typography: {
        fontFamily: 'Sen, Arial, sans-serif',
        h6: {
            fontSize: '25px',
            color: "#F1F1F1",
            lineHeight: '30px',
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize: '2rem',
            lineHeight: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            color: "#FFFFFF",
        },
    },
});

const MeetBox = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    width: '100vw',
                    position: 'relative',
                    backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.5) 14.54%, rgba(0, 0, 0, 0.4) 23.41%, rgba(0, 0, 0, 0.3) 40.86%, rgba(0, 0, 0, 0.1) 100%), url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.2)', // reduced shadow opacity
                    }
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        zIndex: 1,
                        ml: { xs: 2, sm: 4, md: 35 },
                        mt: { xs: 10, sm: 16, md: 30 },
                        width: { xs: '90%', sm: '530px' },
                        height: 'auto',
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            width: { xs: '100%', sm: '100%', md: '100%' },
                        }}
                    >
                        Let’s discuses together
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            mt: 2,
                            mb: 1.5,
                            ml: 1,
                            width: { xs: '100%', sm: '480px' },
                        }}
                    >
                        We’d love to hear from you! Whether you have questions, feedback, or just want to chat, our team is here to help.
                    </Typography>

                    <Button
                            variant="contained"
                            size="large"
                            sx={{
                                ml: { sm: 1.2 },
                                px: { xs: 2, sm: 4 },
                                py: 1,
                                borderRadius: '4px',
                                backgroundColor: '#B50304',
                                textTransform: 'none',
                                width: { xs: 'auto', sm: '200px' },
                                height: '57px',
                                lineHeight: '30px',
                                fontSize: '23px',
                                font: 'Lato',
                                '&:hover': {
                                    backgroundColor: '#B50304',
                                },

                            }}

                        >
                            Chat with us
                        </Button>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default MeetBox;
