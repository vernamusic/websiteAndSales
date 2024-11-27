import React, { useState } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import backgroundImage from '/src/assets/partnerpic.png';
import ContactFormDialog2 from './ContactFormDialog2';

const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'Lato',
            fontWeight:'500',
            fontSize: { xs: '10px', sm: '13.8px', md: '14.22px', lg: '18px' },
            lineHeight: 'normal',
            letterSpacing: '0.4px',
            color: "#D9D9D9",
            textTransform: 'none',
        },
        h3: {
            fontFamily: "Lato",
            fontWeight: 600,
            fontSize: { xs: '14px', sm: '18px', md: '26px', lg: '32px' },
            lineHeight: '32px',
            color: "#FFFFFF",
            textTransform: 'none',
        },
        button: {
            fontFamily: 'Lato',
            fontSize: { xs: '9px', sm: '10px', md: '0.94vw' },
            color: "#FCFCFC",
        },
        
    },
});

const NewPartner = () => {
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
                    minHeight: '46.88vw',
                    width: '100%',
                    position: 'relative',
                    backgroundImage: `linear-gradient(259.76deg, rgba(28, 28, 28, 0.5) 1.9%, rgba(28, 28, 28, 0.6) 51.69%, #1C1C1C 100%), url(${backgroundImage})`,
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
                        width: { xs: '332px',md:'400px' },
                    }}
                >
                    <Typography sx={{ ...theme.typography.h3 }}>
                    Vitruvian Shield Partners
                    </Typography>
                    <Typography sx={{ ...theme.typography.h6, mb: { xs: 1, sm: 1, md: 1.5, lg: 2, xl: 2 } }}>
                    Our team consists of highly skilled professionals and resourceful partners. With our partners we are able to create the state of the art product we wish to deliver.
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
                        disableRipple
                        onClick={handleOpenDialog} // Open dialog on click
                    >
                        Contact us
                    </Button>
                </Box>

                {/* Dialog component */}
                <ContactFormDialog2 open={openDialog} onClose={handleCloseDialog} />
            </Box>
        </ThemeProvider>
    );
};

export default NewPartner;
