import React, {useEffect, useState} from 'react';
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
            fontSize: '1.15vw', // تغییر به vw با نسبت 1920
            color: "#F1F1F1",
            letterSpacing: '0.4px',
            lineHeight: 'normal',
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize: '1.67vw', // تغییر به vw با نسبت 1920
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
        button: {
            fontFamily: 'Lato',
            fontSize: '0.83vw', // تغییر به vw با نسبت 1920
            color: "#FFFFFF",
        },
    },
});


const Home = () => {
    const [clipPath, setClipPath] = useState('');

    const updateClipPath = () => {
        const vw = window.innerWidth;

        // محاسبه مقادیر clip-path با استفاده از vw
        const calculatedClipPath = `path("M 0 0 L 0 ${vw * 0.45} C ${vw * 0.5} ${vw * 0.3} ${vw * 0.6} ${vw * 0.5} ${vw} ${vw * 0.4} L ${vw} 0 L 0 0")`;
        setClipPath(calculatedClipPath);
    };

    useEffect(() => {
        updateClipPath(); // به‌روزرسانی clip-path در زمان بارگذاری
        window.addEventListener('resize', updateClipPath); // اضافه کردن لیسنر برای تغییر اندازه پنجره

        return () => {
            window.removeEventListener('resize', updateClipPath); // پاک کردن لیسنر هنگام Unmount
        };
    }, []);

    return (
        <ThemeProvider theme={theme}>
            {/* Parent Box that contains everything */}
            <Box sx={{ position: 'relative', width: '100%' }}>
                <Box
                    component="img"
                    src={miniphone}
                    alt="Circular Image"
                    sx={{
                        position: 'absolute',
                        bottom: '-1.5vw', // تغییر به vw
                        right: '15vw', // تغییر به vw
                        transform: 'translate(-50%, -50%)',
                        width: '11vw', // تغییر به vw
                        height: '11vw', // تغییر به vw
                        borderRadius: '50%',
                        zIndex: 3,
                    }}
                />

                {/* Box with dynamic clip-path */}
                <Box
                    sx={{
                        position: 'relative',
                        height: '50vw',
                        width: '100%',
                        backgroundImage: `url(${background})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '100%',

                        clipPath: clipPath, // استفاده از clipPath دینامیک
                    }}
                >




                <Box
                    sx={{
                        position: 'absolute',
                        zIndex: 1,
                        ml: '15vw',
                        mt: '14vw',
                        maxWidth:'26.04vw',
                    }}
                >
                    <Typography
                        sx={{
                            mb: '0.4vw',
                            ml: '-0.2vw',
                            lineHeight: '1.5',
                            ...theme.typography.h3,
                        }}
                    >
                        The Mobile App
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            ...theme.typography.h6,
                        }}
                    >
                        View your health signal data collected by the Vitruvian Watch and share it with your medical professionals
                    </Typography>

                    <Box sx={{ display: 'flex', gap: '0.78vw', marginTop: '1.56vw',}}>
                        <Button
                            variant="outlined"
                            component={Link}
                            to="/signup"
                            sx={{
                                padding:0,
                                minWidth:0,
                                display: 'flex',
                                borderRadius: '0.21vw',
                                width: '6.82vw',
                                height: '2.08vw',
                                ...theme.typography.button,
                                borderColor: 'white',
                                color: 'white',
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
                                padding:0,
                                minWidth:0,
                                display: 'flex',
                                borderRadius: '0.21vw',
                                width: '6.82vw',
                                height: '2.08vw',
                                ...theme.typography.button,

                                backgroundColor: '#B50304',
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
                </Box>

                {/* Phone Screenshot */}
                    <Box
                        component="img"
                        src={iphonescreen}
                        alt="Phone app screenshot"
                        sx={{
                            position: 'absolute',
                            right: '1vw', // تغییر به vw
                            top: '5vw', // تغییر به vw
                            maxWidth: '45vw', // تغییر به vw
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
