import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import backgroundImage from '../../assets/about1.png';

const theme = createTheme({
    typography: {
        fontFamily: 'Sen, Arial, sans-serif',
        h6: {
            fontSize: { xs: '15px', sm: '18px', md: '20px', lg: '22px', xl: '26px' },
            color: "#F1F1F1",
            lineHeight: '30px',
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize: { xs: '20px', sm: '24px', md: '28px', lg: '35px', xl: '41px' },
            lineHeight: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            color: "#FFFFFF",
        },
        button: {
            fontFamily: 'Lato',
            fontSize: { xs: '10px', sm: '18px', md: '20px', lg: '22px', xl: '26px' },
            color: "#FFFFFF",
        },
    },
});

const ContactBox = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    width: '100vw',
                    height: '95vh',
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
                        ml: { xs: 5, sm: 10, md: 20, lg: 25, xl: 38 },
                        mt: { xs: 10, sm: 10, md: 20, lg: 25, xl: 38 },
                        width: { xs: '90%', sm: '530px' },
                        height: 'auto',
                    }}
                >
                    <Typography
                        sx={{
                            ...theme.typography.h3,
                            width: { xs: '100%', sm: '100%', md: '100%' },
                        }}
                    >
                        About Us
                    </Typography>
                    <Typography
                        sx={{
                            ...theme.typography.h6,
                            mt: 2,
                            mb: 1.5,
                            ml: 1,
                            width: { xs: '100%', sm: '480px' },
                        }}
                    >
                        Lorem ipsum dolor sit Mauris tincidunt Lorem ipsum dolor sit amet consectetur. Mauris tincidunt euismod tincidunt nibh. Aenean lectus cras libero.
                    </Typography>

                    <Button
                            variant="contained"
                            size="large"
                            sx={{
                                ...theme.typography.button,
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

export default ContactBox;
