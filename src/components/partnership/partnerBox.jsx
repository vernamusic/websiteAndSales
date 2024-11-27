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
            fontSize: { xs: '8px', sm: '10px', md: '0.94vw' },
            color: "#FCFCFC",
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
                    minHeight: '46.88vw',
                    width: '100%',
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
                        gap: { xs: 0.5, sm: 1, md: 1.5, lg: 1.5, xl: 1.5 },
                        ml: { xs: '32px', sm: '80px', md: 19, lg: 24, xl: 28 },
                        mt: { xs: '39px', sm: '100px', md: '170px', lg: '250px' },
                        width: { xs: '332px',md:'400px' },
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
                            display: 'flex',
                            borderRadius: '6px',
                            backgroundColor: '#B50304',
                            textTransform: 'none',
                            width: { xs: '71px', sm: '75px', md: '7.8125vw' },
                            height: { xs: '25px', sm: '30px', md: '2.6042vw' },
                            mt: { xs: '16px', sm: '8px', md: '0px' },
                            padding: 0,
                            alignItems: 'center',
                            '&:hover': {
                                backgroundColor: '#B50304',
                            },
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
