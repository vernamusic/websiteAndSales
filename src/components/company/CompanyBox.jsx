import React, { useState, useEffect } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ContactFormDialog from './ContactFormDialog';
import backgroundImage2 from '/src/assets/companypic1.jpg';
import backgroundImage1 from '/src/assets/companypic2.png';
import backgroundImage3 from '/src/assets/companypic3.png';

const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'Lato',
            fontSize: { xs: '12.64px', sm: '14px', md: '14.22px', lg: '18px' },
            lineHeight: 'normal',
            letterSpacing: '0.4px',
            color: "#F1F1F1",
            textTransform: 'none',
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize: { xs: '20px', sm: '22px', md: '26px', lg: '32px' },
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
        button: {
            fontFamily: 'Lato',
            fontSize: '0.94vw',
            color: "#FFFFFF",
        },
        form: {
            fontFamily: 'Inter',
            fontSize: '1.145vw',
            fontWeight: 400,
        },
    },
});

const images = [backgroundImage1, backgroundImage2, backgroundImage3];

const CompanyBox = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveImage((prev) => (prev + 1) % images.length);
        }, 10000); // Change every 10 seconds
        return () => clearInterval(interval);
    }, []);

    const handleOpenDialog = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    const handleCircleClick = (index) => {
        setActiveImage(index);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    width: '100vw',
                    position: 'relative',
                    backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.738) 14.54%, rgba(0, 0, 0, 0.686) 23.41%, rgba(0, 0, 0, 0.584) 40.86%, rgba(0, 0, 0, 0.164) 100%), url(${images[activeImage]})`,
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
                        gap: { xs: 0.5, sm: 1, md: 1.5, lg: 1.5, xl: 1.5 },
                        height: '100%',
                        pl: { xs: 5, sm: 10, md: 20, lg: 25, xl: 38 },
                    }}
                >
                    <Typography sx={{ ...theme.typography.h3 }}>Vitruvian Shield</Typography>
                    <Typography
                        sx={{
                            ...theme.typography.h6,
                            mb: 1,
                            width: '30vw',
                        }}
                    >
                        Vitruvian Shield is an e-Health Software as a Service (Saas), integrating cutting-edge Clinical Trials Management Systems  (CTMS)
                        and Remote Patient Monitoring (RPM) with state-of-the-art wearable technology
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            ...theme.typography.button,
                            display: { xs: 'none', sm: 'flex' },
                            borderRadius: '6px',
                            backgroundColor: '#B50304',
                            textTransform: 'none',
                            width:'7.8125vw',
                            height: '2.6042vw',
                            padding:0,
                            alignItems: 'center',
                            '&:hover': {
                                backgroundColor: '#B50304',
                            },
                        }}
                        onClick={handleOpenDialog}
                    >
                        Contact us
                    </Button>
                </Box>

                {/* Indicator Circles */}
                <Box sx={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 1 }}>
                    {images.map((_, index) => (
                        <Box
                            key={index}
                            onClick={() => handleCircleClick(index)}
                            sx={{
                                width: 10,
                                height: 10,
                                borderRadius: '50%',
                                backgroundColor: activeImage === index ? 'red' : 'gray',
                                cursor: 'pointer', // Cursor change for better UX
                            }}
                        />
                    ))}
                </Box>

                {/* ContactFormDialog */}
                <ContactFormDialog open={dialogOpen} onClose={handleCloseDialog} />
            </Box>
        </ThemeProvider>
    );
};

export default CompanyBox;
