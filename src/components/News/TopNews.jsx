import React, { useState } from "react";
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
import photo1 from "../../assets/about1.png";
import photo2 from "../../assets/about2.png";

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
    const data = [
        {
            title: "Top News",
            details: "Lorem ipsum dolor sit Mauris tincidunt Lorem ipsum dolor sit amet consectetur. Mauris tincidunt euismod tincidunt nibh. Aenean lectus cras libero.",
            time: "7 min read",
            views: "5k",
            photo: photo1,
        },
        {
            title: "Another News",
            details: "Another piece of news with some description about events happening today.",
            time: "5 min read",
            views: "3.4k",
            photo: photo2,
        },
        {
            title: "Top News",
            details: "Lorem ipsum dolor sit Mauris tincidunt Lorem ipsum dolor sit amet consectetur. Mauris tincidunt euismod tincidunt nibh. Aenean lectus cras libero.",
            time: "7 min read",
            views: "5k",
            photo: photo1,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const currentData = data[currentIndex];

    const handleNext = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
            setFade(true);
        }, 300);
    };

    const handlePrev = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
            setFade(true);
        }, 300);
    };

    const handleCircleClick = (index) => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex(index);
            setFade(true);
        }, 300);
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    return (
        <ThemeProvider theme={theme}>
            <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                position="relative"
                {...swipeHandlers}
                sx={{ width: '100%', height: '100vh', backgroundColor: "#333" }}
            >
                <Box
                    sx={{
                        width: '100vw',
                        height: '95vh',
                        position: "relative",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundImage: ` linear-gradient(90deg, rgba(0, 0, 0, 0.738) 14.54%, rgba(0, 0, 0, 0.686126) 23.41%, rgba(0, 0, 0, 0.584051) 40.86%, rgba(0, 0, 0, 0.164) 100%),url(${currentData.photo})`,
                        color: "#fff",
                    }}
                >
                    <Fade in={fade} timeout={300}>
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
                            <Typography sx={{ ...theme.typography.h3,}}>
                                {currentData.title}
                            </Typography>
                            <Typography sx={{ mt: 2, maxWidth:500, ...theme.typography.h6, }}>
                                {currentData.details}
                            </Typography>

                            <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
                                <AccessTimeIcon sx={{ fontSize: 18, mr: 1 }} />
                                <Typography variant="caption" sx={{ mr: 2 }}>
                                    {currentData.time}
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

                    <Box
                        display="flex"
                        justifyContent="center"
                        sx={{ position: "absolute", bottom: "8%", width: "100%" }}
                    >
                        {data.map((_, index) => (
                            <ButtonBase
                                key={index}
                                onClick={() => handleCircleClick(index)}
                                sx={{
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
            </Box>
        </ThemeProvider>
    );
};

export default Mediacard;
