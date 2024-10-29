import React, { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import backgroundImage from '../../assets/about1.png';
import ContactFormDialog3 from './ContactFormDialog3';

const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'sen',
            fontSize: '1.04vw',
            lineHeight: 'normal',
            letterSpacing: '0.4px',
            color: "#F1F1F1",
            textTransform: 'none',
        },
        h3: {
            fontFamily: "Lato",
            fontWeight: 700,
            fontSize: '1.59vw',
            color: "#F1F1F1",
            textTransform: 'none',
        },
        button: {
            fontFamily: 'Inter',
            fontSize: '0.94vw',
            textTransform: 'none',
            color: "#F1F1F1",
        },
        caption: {
            fontFamily: 'sen',
            fontSize: '1.04vw',
            lineHeight: 'normal',
            letterSpacing: '0.4px',
            color: "#F1F1F1",
            textTransform: 'none',
        },
    },
});

const ContactBox = () => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    width: '100vw',
                    position: 'relative',
                    backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.738) 14.54%, rgba(0, 0, 0, 0.686) 23.41%, rgba(0, 0, 0, 0.584) 40.86%, rgba(0, 0, 0, 0.164) 100%), url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        height: '100%',
                        ml: { xs: 5, sm: 10, md: 15, lg: 25, xl: 38 },
                        gap: '0.5vw',
                        width: '25vw',
                    }}
                >
                    <Typography sx={{ ...theme.typography.h3 }}>
                        About Us
                    </Typography>
                    <Typography
                        sx={{
                            ...theme.typography.h6,
                            mb: { xs: 1, sm: 1, md: 1.5, lg: 2, xl: 2 },
                        }}
                    >
                        Vitruvian Shield is a comprehensive digital health platform that combines cutting-edge sensor technology, cloud computing, and AI-powered analytics to provide a holistic approach to medical research and remote patient monitoring.
                    </Typography>

                    <Button
                        variant="contained"
                        onClick={handleOpenDialog}
                        sx={{
                            ...theme.typography.button,
                            padding: 0,
                            minWidth: 0,
                            borderRadius: '4px',
                            backgroundColor: '#B50304',
                            width: '8.0656vw',
                            height: '2.34375vw',
                            '&:hover': {
                                backgroundColor: '#B50304',
                            },
                        }}
                        disableRipple
                    >
                        Chat with us
                    </Button>
                    <ContactFormDialog3 open={openDialog} onClose={handleCloseDialog} />
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default ContactBox;
