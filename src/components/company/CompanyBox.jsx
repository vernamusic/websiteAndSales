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
            fontSize: { xs: '10px', sm: '13.8px', md: '14.22px', lg: '18px' },
            lineHeight: 'normal',
            letterSpacing: '0.4px',
            color: "#D9D9D9",
            textTransform: 'none',
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 600,
            fontSize: { xs: '14px', sm: '18px', md: '26px', lg: '32px' },
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
        button: {
            fontFamily: 'Lato',
            fontSize: { xs: '9px', sm: '10px', md: '0.94vw' },
            color: "#FCFCFC",
        },
        form: {
            fontFamily: 'Inter',
            fontSize: '1.145vw',
            fontWeight: 400,
        },
    },
});

const images = [backgroundImage1, backgroundImage2, backgroundImage3];
const companyNames = [
    "Vitruvian Shield SA",
    "Vitruvian Shield DMCC",
    "Vitruvian Shield PT",
];

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
                    width: '100%',
                    position: 'relative',
                    backgroundImage: `linear-gradient(257.48deg, rgba(28, 28, 28, 0.2) 0%, rgba(28, 28, 28, 0.42) 8.92%, rgba(28, 28, 28, 0.56) 18.83%, rgba(28, 28, 28, 0.71) 33.69%, rgba(28, 28, 28, 0.774989) 51.99%, rgba(28, 28, 28, 0.9) 87.2%), url(${images[activeImage]})`,
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
                        ml: { xs: '32px', sm: '80px', md: 19, lg: 24, xl: 28 },
                        mt: { xs: '39px', sm: '100px', md: '170px', lg: '250px' },
                        width: { xs: '332px' },
                    }}
                >
                    {/* Company name */}
                    <Typography sx={{ ...theme.typography.h3 }}>
                        {companyNames[activeImage]}
                    </Typography>

                    <Typography sx={{ ...theme.typography.h6 }}>
                        Vitruvian Shield is an e-Health Software as a Service (SaaS), integrating
                        cutting-edge Clinical Trials Management Systems (CTMS) and Remote Patient
                        Monitoring (RPM) with state-of-the-art wearable technology.
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            ...theme.typography.button,
                            display: 'flex',
                            borderRadius: '6px',
                            backgroundColor: '#B50304',
                            textTransform: 'none',
                            width: { xs: '65px', sm: '75px', md: '7.8125vw' },
                            height: { xs: '25px', sm: '30px', md: '2.6042vw' },
                            mt: { xs: '16px', sm: '8px', md: '0px' },
                            padding: 0,
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
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: { xs: 20, sm: 30, md: 40 },
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: 1,
                    }}
                >
                    {images.map((_, index) => (
                        <Box
                            key={index}
                            onClick={() => handleCircleClick(index)}
                            sx={{
                                width: { xs: 6, md: 10 },
                                height: { xs: 6, md: 10 },
                                borderRadius: '50%',
                                backgroundColor: activeImage === index ? 'red' : 'gray',
                                cursor: 'pointer',
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
