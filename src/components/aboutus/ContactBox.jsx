import React, { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import backgroundImage from '../../assets/aboutUs1.svg';
import ContactFormDialog3 from './ContactFormDialog3';

const typoStyle = {
    fontFamily: 'Lato',
    fontSize: { xs: '16px', sm: '18px', md: '20px', lg: '24px' },
    color: '#fff',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '100%',
    textTransform: 'none'
}
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
                    height:{xs:'516px',lg:'750px'},
                    position: 'relative',
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Box
                    sx={{
                        mt:{xs:'150px',sm:'200px',lg:'316px'},
                        position: 'relative',
                        height: '100%',
                        ml: { xs: 5, sm: 10, md: 15, lg: 25, xl: 38 },
                        width: {xs:'80%',sm:'70%',md:'60%',lg:'50%',xl:'40%'},
                    }}
                >
                    <Typography sx={{
                        ...typoStyle,
                        fontSize: { xs: '20px', sm: '22px', md: '24px', lg: '32px' }
                    }}>
                        About Us
                    </Typography>
                    <Typography
                        sx={{
                            ...typoStyle,
                            mt:'16px',
                            fontSize: { xs: '12.64px', sm: '14px', md: '14.22px', lg: '18px' },
                            mb: { xs: '22px', sm: '26px', md: '30px', lg: '32px' },
                            fontWeight:500,
                            lineHeight:'150%'
                        }}
                    >
                        Vitruvian Shield is a comprehensive digital health platform that combines cutting-edge sensor technology, cloud computing, and AI-powered analytics to provide a holistic approach to medical research and remote patient monitoring.
                    </Typography>

                    <Button
                        variant="contained"
                        onClick={handleOpenDialog}
                        sx={{
                            ...typoStyle,
                            borderRadius: '4px',
                            backgroundColor: '#B50304',
                            width: '138px',
                            height: '42px',
                            fontSize: { xs: '12.64px', md: '14px', lg: '14px' },
                            '&:hover': {
                                backgroundColor: '#B50304',
                                opacity: 0.8,
                            },
                        }}
                        disableRipple
                    >
                        Read More
                    </Button>
                    <ContactFormDialog3 open={openDialog} onClose={handleCloseDialog} />
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default ContactBox;
