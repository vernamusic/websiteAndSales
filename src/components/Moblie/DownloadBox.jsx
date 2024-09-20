import React from 'react';
import { Box, Typography, Button, createTheme } from '@mui/material';
import background from '../../assets/Artboard 1.png';
import iphonescreen from '../../assets/iphonescreen.png';
import miniphone from '../../assets/miniphone.png';
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
            {/* Parent Box that contains everything */}
            <Box
            sx={{position: 'relative',width: '100%',}}
            >
                <Box
                    component="img"
                    src={miniphone}
                    alt="Circular Image"
                    sx={{
                        position: 'absolute',
                        bottom:{md:'30%',lg:'15%',xl:'-10%'},
                        right: {md:'15%',lg:'14%',xl:'15%'},
                        transform: 'translate(-50%, -50%)',
                        width: {md:'120px',lg:'160px',xl:'210px'},
                        height: {md:'120px',lg:'160px',xl:'210px'},
                        borderRadius: '50%',
                        zIndex: 3,
                    }}
                />
                <Box
                    sx={{
                        position: 'relative',
                        height: '100%',
                        width: '100%',
                        backgroundImage: `url(${background})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: { xl: '100%', lg: '100%', md: '100%' },
                        backgroundPosition: '0px -50px',
                        clipPath: {
                            md: 'path("M 0 0 L 0 500 C 700 350 1100 600 1600 400 L 1600 0 L 0 0")',
                            lg: 'path("M 0 0 L 0 600 C 800 400 1200 700 1800 500 L 1800 0 L 0 0")',
                            xl: 'path("M 0 0 L 0 800 C 1000 500 1400 900 2000 700 L 2000 0 L 0 0")',
                        },
                    }}
                >




                <Box
                    sx={{
                        position: 'absolute',
                        zIndex: 1,
                        ml: { xs: 5, sm: 10, md: 20, lg: 25, xl: 38 },
                        mt: { xs: 10, sm: 10, md: 10, lg: 19, xl: 30 },
                        maxWidth:{md: '460px', lg: '500px', xl: '550px' }
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
                        The Mobile App
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            mb: 0,
                            maxWidth: '580px',
                            ...theme.typography.h6,
                        }}
                    >
                        View your health signal data collected by the Vitruvian Watch and share it with your medical professionals
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
                            Download
                        </Button>
                    </Box>

                    <Typography sx={{ marginTop: {md:6,lg:8,xl:10},
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
                    </Typography>
                </Box>

                {/* Phone Screenshot */}
                <Box
                    component="img"
                    src={iphonescreen}
                    alt="Phone app screenshot"
                    sx={{
                        position: 'absolute',
                        right: {md:'3%',lg:'4%',xl:'4%'},
                        top: {md:'9%',lg:'7%',xl:'14%'},
                        maxWidth: '40%',
                        height: 'auto',
                        zIndex: 1, // لایه پایین‌تر از همه
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                            transform: 'scale(1.05)',
                        },
                    }}
                />
            </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Home;
