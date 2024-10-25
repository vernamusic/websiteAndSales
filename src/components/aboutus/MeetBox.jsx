import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import backgroundImage from '../../assets/about2.png';

const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'sen',
            fontSize: '1.04vw',
            lineHeight: 'normal',
            letterSpacing: '0.4px',
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
            fontSize: '0.94vw',
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

const MeetBox = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    width: '100vw',
                    position: 'relative',
                    backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.738) 14.54%, rgba(0, 0, 0, 0.686) 23.41%, rgba(0, 0, 0, 0.584) 40.86%, rgba(0, 0, 0, 0.164) 100%), url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom right',
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
                        pb:{xs:6,sm:6},
                        height:'100%',
                        ml: { xs: 5, sm: 10, md: 15, lg: 25, xl: 38 },
                        gap: '0.5vw',
                        width: '25vw',
                    }}
                >
                    <Typography
                        sx={{
                            ...theme.typography.h3,
                        }}
                    >
                        Let’s discuses together
                    </Typography>
                    <Typography
                        sx={{
                            ...theme.typography.h6,
                            mb: {xs: 1, sm: 1, md: 1.5, lg: 2, xl: 2,},
                        }}
                    >
                        We’d love to hear from you! Whether you have questions, feedback, or just want to chat, our team is here to help.
                    </Typography>

                    <Button
                        sx={{
                            ...theme.typography.button,
                            padding:0,
                            minWidth: 0,
                            borderRadius: '4px',
                            backgroundColor: '#B50304',
                            textTransform: 'none',
                            width:'10.5656vw',
                            height: '2.34375vw',
                            '&:hover': {
                                backgroundColor: '#B50304',
                            },
                        }}
                        disableRipple
                    >
                        Apply for meeting
                    </Button>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default MeetBox;
