import React from 'react';
import { Typography, Button, Box} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import backgroundImage from '/src/assets/companypic1.jpg';

const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'sen',
            fontSize: { xs: '13px', sm: '13px', md: '16px', lg: '21px', xl: '26px' },
            color: "#F1F1F1",
            letterSpacing: '0.4px',
            lineHeight: 'normal',
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize: { xs: '22px', sm: '24px', md: '28px', lg: '35px', xl: '41px' },
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
        button: {
            fontFamily: 'Lato',
            fontSize: { xs: '10px', sm: '15px', md: '18px', lg: '20px', xl: '22px' },
            color: "#FFFFFF",
        },
        form: {
            fontFamily: 'Inter',
            fontSize: { xs: '10px', sm: '15px', md: '18px', lg: '20px', xl: '22px' },
            fontWeight: 400,
        },
    },
});

const CompanyBox = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    width: '100vw',
                    position: 'relative',
                    backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.738) 14.54%, rgba(0, 0, 0, 0.686) 23.41%, rgba(0, 0, 0, 0.584) 40.86%, rgba(0, 0, 0, 0.164) 100%), url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top right',
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
                    <Typography
                        sx={{
                            ...theme.typography.h3,
                        }}
                    >
                        Vitruvian Shield
                    </Typography>
                    <Typography
                        sx={{
                            ...theme.typography.h6,
                            mt: 2,
                            mb: 1,
                            width: { xs: '350px', sm: '430px', md: '480px', lg: '500px',xl:'625px' },
                        }}
                    >
                        Vitruvian Shield is an e-Health Software as a Service (Saas), integrating (CTMS)
                        and Remote Patient Monitoring (RPM) with state-of-the-art wearable technology
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                ...theme.typography.button,
                                display:{xs:'none', sm:'flex'},
                                borderRadius: '6px',
                                backgroundColor: '#B50304',
                                textTransform: 'none',
                                width: { lg:'10%'},
                                alignItems: 'center',
                                '&:hover': {
                                    backgroundColor: '#B50304',
                                },
                            }}
                        >
                            Contact Us
                        </Button>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default CompanyBox;
