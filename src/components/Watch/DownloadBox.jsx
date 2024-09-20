import React from 'react';
import { Box, Typography, Button, createTheme } from '@mui/material';
import background from '../../assets/Artboard 2.png';
import watch from '../../assets/watch.png';
import mini from '../../assets/miniwatch.png';
import { ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

const theme = createTheme({
    typography: {
        fontFamily: 'Sen, Arial, sans-serif',
        h6: {
            fontSize: '27px',
            lineHeight: '33px',
            fontWeight: '200',
            color: "#F1F1F1",
        },
        h3: {
            fontFamily: 'Lato',
            fontSize: '40px',
            fontWeight: '600',
            lineHeight: '28px',
            color: "#FFFFFF",
        },
    },
});

const Home = () => {
    return (
        <ThemeProvider theme={theme}>
            {/* Parent Box that contains everything */}
            <Box
            sx={{position: 'relative',width: '100%', minHeight: '750px'}}
            >
                <Box
                    component="img"
                    src={mini}
                    alt="Circular Image"
                    sx={{
                        position: 'absolute',
                        bottom:'2%',
                        right: '28%',
                        transform: 'translate(-50%, -50%)',
                        width: '210px',
                        height: '210px',
                        borderRadius: '50%',
                        zIndex: 3, // لایه بالاتر برای این عنصر
                    }}
                />
            <Box
                sx={{
                    position: 'relative', // برای تنظیم موقعیت فرزندان
                    height: '100vh',
                    width: '100%',
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    backgroundPosition: '0px -50px',
                    clipPath: 'path("M 0 0 L 0 830 C 1000 500 1400 900 2000 700 L 2000 0 L 0 0")',
                }}
            >
                {/* Circular Image */}


                {/* Main Content */}
                <Box
                    sx={{
                        position: 'absolute',
                        zIndex: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        ml: 35,
                        mt:25,
                        color: '#fff',
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            mb: 1,
                            ml: -0.5,
                            lineHeight: '1.5',
                        }}
                    >
                        Watch
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            mb: 0,
                            maxWidth: '510px',
                        }}
                    >
                        Equipped with the latest generation of non-invasive sensors with medically certified precision.<br/>And it looks great!
                    </Typography>

                    <Box sx={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
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
                            Buy
                        </Button>
                    </Box>

                    <Typography variant="h3" sx={{ marginTop: 15 }}>
                        1.5M
                    </Typography>
                    <Typography variant="h6" sx={{ fontSize: '20px', mt: 1 }}>
                        Users already got the app
                    </Typography>
                </Box>

                {/* Phone Screenshot */}
                <Box
                    component="img"
                    src={watch}
                    alt="Phone app screenshot"
                    sx={{
                        position: 'absolute',
                        right: '-1%',
                        bottom: '17%',
                        maxWidth: '45%',
                        height: 'auto',
                        zIndex: 1,
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
