import React, { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import backgroundImage from '../../assets/aboutUs1.svg';
import ContactFormDialog from '../custom/ContactFormDialog.jsx';

const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'Lato',
            fontWeight:'400',
            fontSize: { xs: '12px', sm: '13.8px', md: '14.22px', lg: '18px' },
            lineHeight: {xs:'15px',md:'normal'},
            letterSpacing: '0.4px',
            color: "#D9D9D9",
            textTransform: 'none',
        },
        h3: {
            fontFamily: "Lato",
            fontWeight: 600,
            fontSize: { xs: '14px', sm: '18px', md: '26px', lg: '32px' },
            lineHeight: {xs:'14px',md:'32px'},
            color: "#FFFFFF",
            textTransform: 'none',
        },
        button: {
            fontFamily: 'Lato',
            fontSize: { xs: '11px', sm: '13.5px', md: '0.94vw' },
            color: "#FCFCFC",
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
                            display:{xs:'none',sm:'block'},
                            mt:{xs:'2vw',sm:'1vw'},
                            mb:{xs:'3vw',sm:'2vw'},
                        }}
                    >
                        Vitruvian Shield is a comprehensive digital health platform that combines cutting-edge sensor technology, cloud computing, and AI-powered analytics to provide a holistic approach to medical research and remote patient monitoring.
                    </Typography>
                    <Typography
                        sx={{
                            ...theme.typography.h6,
                            display:{xs:'block',sm:'none'},
                            mt:{xs:'2vw',sm:'1vw'},
                            mb:{xs:'3vw',sm:'2vw'},
                        }}
                    >
                        Vitruvian Shield is a comprehensive digital health platform that combines cutting-edge sensor technology, cloud computing, and AI-powered.
                    </Typography>

                    <Button
                        variant="contained"
                        onClick={handleOpenDialog}
                        sx={{
                            ...theme.typography.button,
                            borderRadius: { xs: '1vw', sm: '0.28vw' },
                            textTransform: 'none',
                            backgroundColor: '#B50304',
                            width: {xs:'80px',md:'90px',lg:'138px'},
                            height: {xs:'30px',md:'28px',lg:'42px'},
                            paddingX: '0',
                            '&:hover': {
                                backgroundColor: '#B50304',
                                //opacity: 0.8,
                            },
                        }}
                        disableRipple
                    >
                        Contact Us
                    </Button>

                    <ContactFormDialog open={openDialog} onClose={handleCloseDialog} type={11}/>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default ContactBox;
