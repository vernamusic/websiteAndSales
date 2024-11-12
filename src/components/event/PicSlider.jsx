import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, LinearProgress, createTheme } from '@mui/material';
import { ThemeProvider } from "@mui/material/styles";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const theme = createTheme({
    typography: {
        h6: {
            fontFamily: "Lato",
            fontSize: '1.25vw',
            lineHeight: 'normal',
            letterSpacing: '0.4px',
            color: "#F1F1F1",
            textTransform: 'none',
        },
        h3: {
            fontFamily: "Lato",
            fontWeight: 600,
            fontSize: '2.22vw',
            color: "#F1F1F1",
            textTransform: 'none',
        },
    },
});

const Slider = () => {
    const [slides, setSlides] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const fetchSlides = async () => {
            try {
                const response = await fetch('https://vitruvianshield.com/api/v1/events/websummit/today');
                const data = await response.json();

                if (!data || data.length === 0) {
                    const fallbackResponse = await fetch('https://vitruvianshield.com/api/v1/events/websummit');
                    const fallbackData = await fallbackResponse.json();
                    setSlides(fallbackData);
                } else {
                    setSlides(data);
                }
            } catch (error) {
                console.error('Error fetching slides:', error);
            }
        };

        // فراخوانی اولین بار تابع
        fetchSlides();

        // اجرای مجدد هر ۳۰ ثانیه
        const intervalId = setInterval(fetchSlides, 30000);

        // پاک کردن تایمر وقتی که کامپوننت حذف می‌شود
        return () => clearInterval(intervalId);
    }, []);



    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const handlePreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    if (slides.length === 0) {
        return <Typography variant="h6" align="center">Loading...</Typography>;
    }

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    width: '100vw',
                    position: 'relative',
                    backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.738) 14.54%, rgba(0, 0, 0, 0.686) 23.41%, rgba(0, 0, 0, 0.584) 40.86%, rgba(0, 0, 0, 0.164) 100%), url(${slides[currentSlide].image})`,

                    backgroundSize: 'cover',
                    backgroundPosition: 'top right',
                    backgroundRepeat: 'no-repeat',
                    maxHeight: '746px',
                    minHeight: { xs: '500px', sm: '600px', md: '700px', lg: '900px' }
                }}
            >
                <Box
                    sx={{
                        mt: { xs: '180px', sm: '220px', md: '270px', lg: '318px' },
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        ml: { xs: 5, sm: 10, md: 19, lg: 24, xl: 28 },
                    }}
                >
                    <Typography sx={{ ...theme.typography.h3,maxWidth: '30vw',mb:'1vw' }}>
                        {slides[currentSlide].title}
                    </Typography>
                    <Typography sx={{ maxWidth: '30vw', ...theme.typography.h6 }}>
                        {slides[currentSlide].description.length > 240
                            ? `${slides[currentSlide].description.substring(0, 240)}`
                            : slides[currentSlide].description}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mt: 4 }}>
                        <Button
                            onClick={handlePreviousSlide}
                            sx={{
                                minWidth: '70px',
                                minHeight: '70px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(217, 217, 217, 1)',
                                color: '#000000',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                pl: 1.5,
                            }}
                        >
                            <ArrowBackIosIcon sx={{ fontSize: '16px' }} />
                        </Button>
                        <Button
                            onClick={handleNextSlide}
                            sx={{
                                minWidth: '70px',
                                minHeight: '70px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(217, 217, 217, 1)',
                                color: '#000000',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <ArrowForwardIosIcon sx={{ fontSize: '16px' }} />
                        </Button>

                        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                            <LinearProgress
                                variant="determinate"
                                value={((currentSlide + 1) / slides.length) * 100}
                                sx={{
                                    width: '14vw',
                                    height: 2,
                                    borderRadius: 5,
                                    backgroundColor: 'rgba(255, 255, 255, 1)',
                                    '& .MuiLinearProgress-bar': {
                                        backgroundColor: '#B50304',
                                    },
                                }}
                            />
                            <Typography  sx={{ ml: 2, color: '#FFF',...theme.typography.h3,fontSize:'1.67vw', }}>
                                {String(currentSlide + 1).padStart(2, '0')}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Slider;
