import React, { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import backgroundImage from '../../assets/aboutUs1.svg';
import ContactFormDialog3 from './ContactFormDialog3';

const theme = createTheme({
    typography: {
        h6: {
            fontFamily: "Lato",
            fontSize: {xs:'2.58vw',sm:'1.25vw'},
            lineHeight: {xs:'3.89vw',sm:'1.67vw'},
            fontWeight: {xs:400,sm:500},
            color: "#D9D9D9",
            textTransform: 'none',
        },
        h3: {
            fontFamily: "Lato",
            fontWeight: {xs:500,sm:600},
            fontSize: {xs:'3.99vw',sm:'2.22vw'},
            color: "#F1F1F1",
            textTransform: 'none',
        },
        button: {
            fontFamily: "Lato",
            fontSize: {xs:'2.22vw',sm:'0.97vw'},
            textTransform: 'none',
            color: "#F1F1F1",
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
                    height:{xs:'50vw',sm:'30.69vw'},
                    position: 'relative',
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        height: '100%',
                        width: {xs:'70%',sm:'40.63vw'},
                        alignContent:'center',
                        ml:{xs:'6.67vw',sm:'11.11vw'},
                    }}
                >
                    <Typography sx={{
                        ...theme.typography.h3,
                    }}>
                        About us
                    </Typography>
                    <Typography
                        sx={{
                            ...theme.typography.h6,
                            mt:{xs:'2vw',sm:'1vw'},
                            mb:{xs:'3vw',sm:'2vw'},
                        }}
                    >
                        Vitruvian Shield is a comprehensive digital health platform that combines cutting-edge sensor technology, cloud computing, and AI-powered analytics to provide a holistic approach to medical research and remote patient monitoring.
                    </Typography>

                    <Button
                        variant="contained"
                        onClick={handleOpenDialog}
                        sx={{
                            ...theme.typography.button,
                            borderRadius: { xs: '1vw', sm: '0.28vw' },
                            backgroundColor: '#B50304',
                            width: { xs: '16vw', sm: '9.58vw' },
                            height: { xs: '5.56vw', sm: '2.92vw' },
                            paddingX: '0',
                            '&:hover': {
                                backgroundColor: '#B50304',
                                opacity: 0.8,
                            },
                        }}
                        disableRipple
                    >
                        Contact us
                    </Button>

                    <ContactFormDialog3 open={openDialog} onClose={handleCloseDialog} />
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default ContactBox;
