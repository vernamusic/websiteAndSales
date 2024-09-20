import React from 'react';
import { Box, Typography, Button, createTheme } from '@mui/material';
import background from '../../assets/DBdashboard.png';
import { ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

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
            fontSize: { xs: '10px', sm: '18px', md: '20px', lg: '22px', xl: '26px' },
            color: "#FFFFFF",
        },
    },
});

const Home = () => {
    return (
        <ThemeProvider theme={theme}>



            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: {xs:'35vh',sm:'55vh',md:'75vh',lg:'90vh',xl:'115vh'},
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPositionY:'-100px'
                }}
            >




                <Box
                    sx={{
                        position: 'absolute',
                        zIndex: 1,
                        ml: { xs: 5, sm: 10, md: 20, lg: 25, xl: 38 },
                        mt: { xs: 10, sm: 10, md: 10, lg: 19, xl: 30 },
                        maxWidth:{xs:'330px',sm:'380px',md: '460px', lg: '500px', xl: '550px' }
                    }}
                >
                    <Typography
                        sx={{
                            mb: 1,
                            ml: -0.5,
                            lineHeight: '1.5',
                            ...theme.typography.h3,
                        }}
                    >
                        The Web App
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            mb: 0,
                            maxWidth: '580px',
                            ...theme.typography.h6,
                        }}
                    >
                        The Web App allows health providers and researchers to analyze their patients' health data in real time
                    </Typography>

                    <Box sx={{ display: 'flex', gap: '15px', marginTop: '30px', }}>
                        <Button
                            variant="outlined"
                            component={Link}
                            to="/signup"
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                borderRadius: '5px',
                                borderColor: 'white',
                                color: 'white',
                                width: 'calc(8.5vw + 7px)',
                                height: 'calc(2.4vw + 5px)',
                                fontSize: 'calc(1vw + 1px)',
                                textTransform: 'none',
                                '&:hover': {},
                            }}
                            disableRipple
                        >
                            Chat with us
                        </Button>

                        <Button
                            variant="contained"
                            component={Link}
                            to="/signup"
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                borderRadius: '4px',
                                backgroundColor: '#B50304',
                                width: 'calc(8.5vw + 7px)',
                                height: 'calc(2.4vw + 5px)',
                                fontSize: 'calc(1vw + 1px)',
                                textTransform: 'none',
                                '&:hover': {
                                    backgroundColor: '#B50304',
                                },
                            }}
                            disableRipple
                        >
                            Open
                        </Button>
                    </Box>

                    {/* <Typography sx={{ marginTop: {md:6,lg:8,xl:10},
                        fontFamily: 'Lato',
                        fontSize: {md:'25px',lg:'35px',xl:'42px'},
                        fontWeight: 1000,
                        lineHeight: '35px',
                        textAlign: 'left',
                        color:'#fff'
                    }}>
                        1.5M
                    </Typography>
                    <Typography variant="h6" sx={{ fontSize: '20px', mt: 1 }}>
                        Users already got the app
                    </Typography> */}
                </Box>

                {/* Phone Screenshot */}

            </Box>
        </ThemeProvider>
    );
};

export default Home;
