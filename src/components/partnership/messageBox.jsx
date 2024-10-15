import React from 'react';
import { Typography, Button, Box} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import backgroundImage from '/src/assets/partnerpic.png';

const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'sen',
            fontSize: { xs: '15px', sm: '18px', md: '20px', lg: '22px', xl: '26px' },
            color: "#F1F1F1",
            letterSpacing: '0.4px',
            lineHeight: 'normal',
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize: { xs: '20px', sm: '24px', md: '28px', lg: '35px', xl: '41px' },
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
        button: {
            fontFamily: 'Lato',
            fontSize: { xs: '7px', sm: '9px', md: '12px', lg: '14px', xl: '16px' },
            color: "#FFFFFF",
        },
        form: {
            fontFamily: 'Inter',
            fontSize: { xs: '12px', sm: '15px', md: '18px', lg: '20px', xl: '22px' },
            fontWeight: 400,
        },

    },
});

const messageBox = () => {
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
                        ml: { xs: 5, sm: 10, md: 20, lg: 25, xl: 38 },
                        mt: { xs: 10, sm: 10, md: 20, lg: 25, xl: 38 },
                    }}
                >
                    <Typography
                        sx={{
                            ...theme.typography.h3,
                        }}
                    >
                        Become a Partner
                    </Typography>
                    <Typography
                        sx={{
                            ...theme.typography.h6,
                            mt: 2,
                            mb: 1.5,
                            width: { xs: '350px', sm: '430px', md: '480px', lg: '500px',xl:'625px' },
                        }}
                    >
                        Vitruvian Shield is looking for partners who can contribute to achieve our project's vision
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                ...theme.typography.button,
                                borderRadius: '6px',
                                backgroundColor: '#B50304',
                                textTransform: 'none',
                                width: '131px',
                                height: '40px',
                                alignItems: 'center',
                                '&:hover': {
                                    backgroundColor: '#B50304',
                                },
                            }}
                        >
                            Leave a message
                        </Button>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default messageBox;
