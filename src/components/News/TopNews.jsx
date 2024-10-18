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
import {useNavigate} from "react-router-dom";

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
        const fetchTopNews = async () => {
            try {
                const response = await fetch('https://site.vitruvianshield.com/api/v1/top-news');
                const newsData = await response.json();
                setData(newsData.results);
            } catch (error) {
                console.error("Error fetching top news data: ", error);
            }
        };

        fetchTopNews();
    }, []);
    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate(`/news/${slug}`);
    };
    const currentData = data[currentIndex];

    const handleNext = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
            setFade(true);
            setProgress(0);
        }, 300);
    };

    const handlePrev = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
            setFade(true);
            setProgress(0);
        }, 300);
    };

    const handleCircleClick = (index) => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex(index);
            setFade(true);
            setProgress(0);
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
                if (oldProgress >= 100) {
                    handleNext();
                    return 0;
                }
                return oldProgress + 1;
            });
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, [handleNext]);

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
                        width: '100%',
                        height: '100%',
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
                                display:'flex',
                                top: "35%",
                                left: "18%",
                                width: "50%",
                                borderRadius: "10px",
                                flexDirection: 'column',
                                gap:{xs:1,sm:1,md:2,lg:2,xl:2},
                            }}
                        >
                            <Typography sx={{ ...theme.typography.h3 }}>
                                {currentData.title}
                            </Typography>
                            <Typography sx={{maxWidth: 500, ...theme.typography.h6 }}>
                                {currentData.details.length > 200
                                    ? `${currentData.details.substring(0, 200)}...`
                                    : currentData.details}
                            </Typography>

                            <Box display="flex" alignItems="center">
                                <AccessTimeIcon sx={{ fontSize: 18, mr: 1,...theme.typography.caption, display:{xs:'none', sm:'block'}, }} />
                                <Typography variant="caption" sx={{ mr: 2 ,...theme.typography.caption, display:{xs:'none', sm:'block'},}}>
                                    {currentData.read_time}m
                                </Typography>
                                <VisibilityIcon sx={{ fontSize: 18, mr: 1 ,...theme.typography.caption, display:{xs:'none', sm:'block'},}} />
                                <Typography variant="caption" sx={{...theme.typography.caption, display:{xs:'none', sm:'block'},}}>
                                    {currentData.views}
                                </Typography>
                            </Box>

                            <Button
                                variant="contained"
                                onClick={() => handleClick(currentData.slug)}
                                size="large"
                                sx={{
                                    ...theme.typography.button,
                                    display:{xs:'none', sm:'block'},
                                    borderRadius: '4px',
                                    backgroundColor: '#B50304',
                                    textTransform: 'none',
                                    width:{ xs: '88px', sm: '98px', md: '120px', lg: '140px', xl: '150px' },
                                    height: { xs: '24px', sm: '30px', md: '40px', lg: '45px', xl: '50px' },
                                    '&:hover': {
                                        backgroundColor: '#B50304',
                                    },
                                }}
                                disableRipple
                            >
                                Read more
                            </Button>
                        </Box>
                    </Fade>
                </Box>

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

                <Box display="flex" justifyContent="center">
                    {/* <Box
                        sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: {sm:'2px',md:'4px'},
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
                    </Box> */}

                </Box>
                <Box display="flex"
                     flexDirection="row"
                     alignItems="center"
                >
                    {data.map((_, index) => (
                        <ButtonBase
                            key={index}
                            onClick={() => handleCircleClick(index)}
                            sx={{
                                position: 'relative',
                                width: {xs:6,sm:7,md:8,lg:9,xl:10},
                                height: {xs:6,sm:7,md:8,lg:9,xl:10},
                                borderRadius: "50%",
                                backgroundColor: currentIndex === index ? "#ca0000" : "rgba(255, 255, 255, 0.5)",
                                mx: {xs:0.5,sm:0.8,md:1,lg:1,xl:1},
                                mb:{xs:-1,sm:-2,md:-2,lg:-3,xl:-3},
                                mt:{xs:1,sm:2,md:2,lg:3,xl:3},
                            }}
                        />
                    ))}
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Mediacard;
