import React from 'react';
import { Typography, Button, Box} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import backgroundImage from '/src/assets/partner.png';

const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'sen',
            fontSize: '1.04vw',
            lineHeight: 'normal',
            letterSpacing: '0.4px',
            fontWeight: 400,
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
            fontSize: '0.74vw',
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

const newParter = () => {
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
                        gap: '0.5vw',
                        width: '20vw',
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
                            mb: {xs: 1, sm: 1, md: 1.5, lg: 2, xl: 2,},
                        }}
                    >
                        Vitruvian Shield is looking for partners who can contribute to achieve our project's vision
                    </Typography>

                    <Button
                        variant="contained"


                        sx={{
                            ...theme.typography.button,
                            padding:0,
                            minWidth: 0,
                            borderRadius: '4px',
                            backgroundColor: '#B50304',
                            textTransform: 'none',
                            width:'8.0656vw',
                            height: '2.34375vw',
                            '&:hover': {
                                backgroundColor: '#B50304',
                            },
                        }}
                        disableRipple
                    >
                        Leave a message
                    </Button>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default newParter;
