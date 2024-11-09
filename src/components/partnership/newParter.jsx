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
            fontSize: { xs: '12.64px', sm: '14px', md: '14.22px', lg: '18px' },
            lineHeight: '24px',
            letterSpacing: '0.4px',
            color: "#D9D9D9",
            textTransform: 'none',
        },
        h3: {
            fontFamily: "Lato",
            fontWeight: 600,
            fontSize: { xs: '20px', sm: '22px', md: '26px', lg: '32px' },
            lineHeight: '32px',
            color: "#FFFFFF",
            textTransform: 'none',
        },
        button: {
            fontFamily: 'Lato',
            fontSize: { xs: '6px', sm: '10px', md: '12px', lg: '14px' },
            lineHeight: '14px',
            letterSpacing: '0.4px',
            color: "#FCFCFC",
            textTransform: 'none',
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
                    width: '100vw',
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
                        height: '100%',
                        ml: { xs: 5, sm: 10, md: 15, lg: 25, },
                        gap: '0.5vw',
                        width: '30vw',
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
                            padding: 0,
                            minWidth: 0,
                            borderRadius: '4px',
                            backgroundColor: '#B50304',
                            textTransform: 'none',
                            width: '8.0656vw',
                            height: '2.34375vw',
                            '&:hover': { backgroundColor: '#B50304' },
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
