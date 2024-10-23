import React from 'react';
import { Box, Typography, Button, createTheme } from '@mui/material';
import background from '../../assets/DBwatch.png';
import { ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'sen',
            fontSize: { xs: '12px', sm: '15px', md: '18px', lg: '20px', xl: '22px' },
            color: "#F1F1F1",
            letterSpacing: '0.4px',
            lineHeight: 'normal',
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize: { xs: '18px', sm: '22px', md: '24px', lg: '28px', xl: '35px' },
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
        button: {
            fontFamily: 'Lato',
            fontSize: { xs: '10px', sm: '10px', md: '14px', lg: '18px', xl: '20px' },
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
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',  // Ensures the image maintains aspect ratio
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top right',
                    width: '100vw',
                    minHeight: {
                        xs: '300px',
                        sm: '450px',
                        md: '700px',
                        lg: '800px',
                        xl: '1000px',
                    },

                    // Optional: Set aspect ratio if needed
                    // aspectRatio: '16/9',  // Use this if the image has a specific aspect ratio like 16:9
                }}
            >




                <Box
                    sx={{
                        position: 'absolute',
                        zIndex: 1,
                        ml: { xs: 5, sm: 10, md: 20, lg: 25, xl: 38 },
                        mt: { xs: 10, sm: 10, md: 10, lg: 19, xl: 30 },
                        width:'30%',
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
                        Watch
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            mb: 0,
                            ...theme.typography.h6,
                        }}
                    >
                        Equipped with the latest generation of non-invasive sensors with medically certified precision. And it looks great!
                    </Typography>

                    <Box sx={{ display: 'flex', gap: '15px', marginTop: '30px', }}>
                        <Button
                            variant="contained"
                            component={Link}
                            to="/signup"
                            sx={{
                                display: { xs: 'none', sm: 'flex' },
                                borderRadius: '4px',
                                backgroundColor: '#B50304',
                                width:{ xs: '110px', sm: '110px', md: '135px', lg: '170px', xl: '190px' },
                                height: { xs: '30px', sm: '30px', md: '37px', lg: '48px', xl: '52px' },
                                ...theme.typography.button,
                                textTransform: 'none',
                                '&:hover': {
                                    backgroundColor: '#B50304',
                                },
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
                            Buy
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

            </Box>
        </ThemeProvider>
    );
};

export default Home;
