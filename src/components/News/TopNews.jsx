import React, { useState, useEffect } from "react";
import {
    Box,
    Typography,
    Button,
    IconButton,
    ButtonBase,
    Fade,
    createTheme,
    ThemeProvider
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useSwipeable } from "react-swipeable";

const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'sen',
            fontSize: { xs: '8px', sm: '11px', md: '17px', lg: '20px', xl: '24px' },
            lineHeight: 'normal',
            letterSpacing: '0.4px',
            color: "#F1F1F1",
            textTransform: 'none',
        },
        h3: {
            fontFamily: "Lato",
            fontWeight: 700,
            fontSize: { xs: '12px', sm: '18px', md: '24px', lg: '28px', xl: '32px' },
            color: "#F1F1F1",
            textTransform: 'none',
        },
        button: {
            fontFamily: 'Inter',
            fontSize: { xs: '8px', sm: '10px', md: '14px', lg: '16px', xl: '18px' },
            textTransform: 'none',
            color: "#F1F1F1",
        },
        caption: {
            fontFamily: 'sen',
            fontSize: { xs: '7px', sm: '8px', md: '15px', lg: '18px', xl: '21px' },
            lineHeight: 'normal',
            letterSpacing: '0.4px',
            color: "#F1F1F1",
            textTransform: 'none',
        },
    },
});

const Mediacard = () => {
    const [data, setData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Fetch top news data from the API
        const fetchTopNews = async () => {
            try {
                const topNewsResponse = await fetch('https://site.vitruvianshield.com/api/v1/top-news');
                const topNewsData = await topNewsResponse.json();
                setData(topNewsData.results);
            } catch (error) {
                console.error("Error fetching the top news data: ", error);
            }
        };

        fetchTopNews();
    }, []);

    const currentData = data[currentIndex];

    const handleNext = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
            setFade(true);
            setProgress(0);  // Reset progress when switching slide
        }, 300);
    };

    const handlePrev = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
            setFade(true);
            setProgress(0);  // Reset progress when switching slide
        }, 300);
    };

    const handleCircleClick = (index) => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex(index);
            setFade(true);
            setProgress(0);  // Reset progress when manually switching
        }, 300);
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    // Auto-slide logic
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    handleNext();
                    return 0;
                }
                return Math.min(oldProgress + 1, 100);
            });
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);

    if (data.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <ThemeProvider theme={theme}>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                position="relative"
                {...swipeHandlers}
                sx={{ width: '100%', backgroundColor: "transparent" }}
            >
                <Box
                    sx={{
                        width:'100%',
                        height:'100%',
                        position: 'relative',
                        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.738) 14.54%, rgba(0, 0, 0, 0.686) 23.41%, rgba(0, 0, 0, 0.584) 40.86%, rgba(0, 0, 0, 0.164) 100%), url(${currentData.picture})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <Fade in={fade} timeout={200}>
                        <Box
                            sx={{
                                position: "absolute",
                                top: "35%",
                                left: "18%",
                                width: "50%",
                                padding: "20px",
                                borderRadius: "10px",
                            }}
                        >
                            <Typography sx={{ ...theme.typography.h3, }}>
                                {currentData.title}
                            </Typography>
                            <Typography sx={{ mt: 2, maxWidth:500, ...theme.typography.h6, }}>
                                {currentData.details}
                            </Typography>

                            <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
                                <AccessTimeIcon sx={{ fontSize: 18, mr: 1 }} />
                                <Typography variant="caption" sx={{ mr: 2 }}>
                                    {currentData.read_time}m
                                </Typography>

                                <VisibilityIcon sx={{ fontSize: 18, mr: 1, }} />
                                <Typography variant="caption">
                                    {currentData.views}
                                </Typography>
                            </Box>

                            <Button
                                variant="contained"
                                sx={{
                                    ...theme.typography.button,
                                    borderRadius: '6px',
                                    backgroundColor: '#B50304',
                                    textTransform: 'none',
                                    width: '15%',
                                    height: '10%',
                                    alignItems: 'center',
                                    mt:2.5,
                                    '&:hover': {
                                        backgroundColor: '#B50304',
                                    },
                                }}
                            >
                                Read more
                            </Button>
                        </Box>
                    </Fade>

                    <IconButton
                        onClick={handlePrev}
                        sx={{
                            position: "absolute",
                            left: "10px",
                            top: "50%",
                            color: "#fff",
                        }}
                    >
                        <ArrowBackIosIcon />
                    </IconButton>

                    <IconButton
                        onClick={handleNext}
                        sx={{
                            position: "absolute",
                            right: "10px",
                            top: "50%",
                            color: "#fff",
                        }}
                    >
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Box>
                <Box
                    display="flex"
                    justifyContent="center"
                >
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: "5%",
                            left: 0,
                            right: 0,
                            height: "4px",
                            backgroundColor: "rgba(255, 255, 255, 0.3)",
                        }}
                    >
                        <Box
                            sx={{
                                width: `${progress}%`,
                                height: "100%",
                                backgroundColor: "#ca0000",
                                transition: "width 0.1s linear",
                            }}
                        />
                    </Box>

                    {data.map((_, index) => (
                        <ButtonBase
                            key={index}
                            onClick={() => handleCircleClick(index)}
                            sx={{
                                position:'relative',
                                width: 10,
                                height: 10,
                                borderRadius: "50%",
                                backgroundColor: currentIndex === index ? "#ca0000" : "rgba(255, 255, 255, 0.5)",
                                mx: 1,
                            }}
                        />
                    ))}
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Mediacard;
