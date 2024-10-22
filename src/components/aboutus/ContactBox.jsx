import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import backgroundImage from '../../assets/about1.png';

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
                fontSize: { xs: '20px', sm: '24px', md: '28px', lg: '35px', xl: '41px' },
                color: "#FFFFFF",
                letterSpacing: '0.4px',
            },
            button: {
                fontFamily: 'Lato',
                fontSize: { xs: '10px', sm: '15px', md: '18px', lg: '20px', xl: '22px' },
                color: "#FFFFFF",
            },
    },
});

const ContactBox = () => {
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
                        height:'100%',
                        ml: { xs: 5, sm: 10, md: 15, lg: 25, xl: 38 },
                        gap: {xs: 1, sm: 1, md: 1.5, lg: 2, xl: 2,},
                        width: { xs: '270px', sm: '310px', md: '380px', lg: '500px', xl: '650px' },
                    }}
                >
                    <Typography
                        sx={{
                            ...theme.typography.h3,
                        }}
                    >
                        About Us
                    </Typography>
                    <Typography
                        sx={{
                            ...theme.typography.h6,
                        }}
                    >
                        Lorem ipsum dolor sit Mauris tincidunt Lorem ipsum dolor sit amet consectetur. Mauris tincidunt euismod tincidunt nibh. Aenean lectus cras libero.
                    </Typography>

                    <Button
                        variant="contained"

                        size="large"
                        sx={{
                            ...theme.typography.button,
                            display:{xs:'none',sm:'block'},
                            borderRadius: '4px',
                            backgroundColor: '#B50304',
                            textTransform: 'none',
                            width:{ xs: '110px', sm: '135px', md: '170px', lg: '190px', xl: '220px' },
                            height: { xs: '30px', sm: '37px', md: '48px', lg: '52px', xl: '58px' },
                            '&:hover': {
                                backgroundColor: '#B50304',
                            },
                        }}
                        disableRipple
                    >
                            Chat with us
                        </Button>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default ContactBox;
