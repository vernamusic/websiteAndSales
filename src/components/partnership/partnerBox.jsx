import React, { useState } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import backgroundImage from '/src/assets/partner.png'; // Ensure this path is correct
import ContactFormDialog2 from './ContactFormDialog2'; // Ensure this component is correctly implemented

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
    console.log('Opening dialog'); // Debugging
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    console.log('Closing dialog'); // Debugging
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
                        ml: { xs: 5, sm: 10, md: 15, lg: 25 },
                        gap: '0.5vw',
                        width: '35vw', // Ensure this width fits your design
                    }}
                >
                    <Typography sx={theme.typography.h3}>
                        Become a Partner
                    </Typography>
                    <Typography sx={{ ...theme.typography.h6, mb: { xs: 1, sm: 1, md: 1.5, lg: 2, xl: 2 } }}>
                        Vitruvian Shield is looking for partners who can contribute to achieve our project's vision
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
                        onClick={handleOpenDialog} // Open the dialog on click
                    >
                        Leave a message
                    </Button>
                </Box>

                {/* Dialog component */}
                <ContactFormDialog2 open={openDialog} onClose={handleCloseDialog} />
            </Box>
        </ThemeProvider>
    );
};

export default NewPartner;
