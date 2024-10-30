import React, { useState, useMemo } from "react";
import {
    Box,
    Typography,
    IconButton,
    createTheme,
    ThemeProvider, Button, useMediaQuery,
} from "@mui/material";

import { useSwipeable } from "react-swipeable";
import ArrowIcon from "../../assets/Arrow.png";
import {useNavigate} from "react-router-dom";

const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'sen',
            fontSize:'0.8333vw',
            color: "#F1F1F1",
            letterSpacing: '0.4px',
            lineHeight: 'normal',
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize:'1.09375vw',
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
        button: {
            fontFamily: 'Lato',
            fontSize:'0.7vw',
            textTransform: 'none',
            color: "#FFFFFF",
        },
        h1: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize:'1.458vw',
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
    },
});

const Mediacard = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;

    const handleNext = () => {
        if (currentIndex + itemsPerPage < data.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    // Swipe handlers
    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });


    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate(`/news/${slug}`);
    };
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));


    return (
        <ThemeProvider theme={theme}>
            <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                position="relative"
                {...swipeHandlers}
            >
                <Box
                
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center"
                    position="relative"
                    sx={{
                        justifyContent:'flex-start',
                        overflow:{xs:"scroll",sm:"scroll",md:'hidden'},
                        maxWidth: '72.92vw',
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },
                        '*': {
                            '-ms-overflow-style': 'none',
                            'scrollbar-width': 'none',
                        }
                    }}
                >
                    <Box
                        display="flex"
                        justifyContent="start"
                        sx={{
                            transform: `translateX(-${currentIndex * 20.7}vw)`,
                            transition: "transform 0.6s ease-in-out",
                            gap: '3.7vw',
                        }}
                    >

                    {data.map((box, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '17vw',
                                    height: '25vw',
                                    position: "relative", // Position relative to allow absolute positioning of inner boxes
                                    borderRadius: "16px",
                                    flexBasis: '28%',
                                    color: "white",
                                    overflow: "hidden",
                                    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.01) 40.5%, rgba(0, 0, 0, 0.8) 71%, rgba(0, 0, 0, 0.9) 100%), url(${box.picture})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    cursor: isMobile ? 'pointer' : 'default',
                                    justifyContent: 'flex-end',
                                    textAlign: 'start',
                                    alignItems: 'center',
                                }}
                            >
                                <Box sx={{ position: "relative", width: '85%', height: '68%', display: "flex", flexDirection: "column", justifyContent: 'flex-end',overflow:'hidden', }}/>
                                <Box sx={{ position: "relative", width: '85%', height: '22%', display: "flex", flexDirection: "column", justifyContent: 'flex-start',mb:3, }}>
                                    <Typography sx={{ width: '100%', ...theme.typography.h3 }}>{box.title}</Typography>
                                    <Typography sx={{ width: '100%', mt: 0.5, ...theme.typography.h6 }}>
                                        {box.details.length > 50 ? `${box.details.substring(0, 80)}...` : box.details}
                                    </Typography>
                                </Box>

                                <Box sx={{ position: "relative", width: '85%', height: '15%', display: { xs: 'none', sm: 'flex' }, justifyContent: "flex-start",alignItems: 'center' }}>
                                    <Button
                                        onClick={() => handleClick(box.slug)}
                                        sx={{
                                            ...theme.typography.button,
                                            borderRadius: '4px',
                                            border: '1px solid white',
                                            backgroundColor: 'transparent',
                                            width: '5vw',
                                            height: '2vw',
                                            paddingX: 0,
                                            minWidth: 0,
                                            '&:hover': { backgroundColor: 'transparent' },
                                        }}
                                        disableRipple
                                    >
                                        See more
                                    </Button>
                                </Box>

                            </Box>


                        ))}
                    </Box>
                </Box>

                {/* Left Arrow */}
                <IconButton
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    sx={{
                        display: { xs: "none", sm: "none", md: "flex" },
                        position: "absolute",
                        left: {
                            xs: "-34px",
                            sm: "-50px",
                            md: "-60px",
                            lg: "-80px",
                        },
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "#FFFFFF",
                        opacity: currentIndex === 0 ? "0.5" : "1",
                        "&:hover": {
                            backgroundColor: "transparent",
                        },
                    }}
                    disableRipple
                >
                    <img
                        src={ArrowIcon}
                        alt="Previous"
                        style={{
                            width: '2.5vw',
                            opacity: currentIndex === 0 ? '0.5' : '1',
                        }}
                    />
                </IconButton>


                {/* Right Arrow */}
                <IconButton
                    onClick={handleNext}
                    disabled={currentIndex + itemsPerPage >= data.length}
                    sx={{
                        display: { xs: "none", sm: "none", md: "flex" },
                        position: "absolute",
                        right: {
                            xs: "-20px",
                            sm: "-30px",
                            md: "-50px",
                            lg: "-60px",
                        },
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "#FFFFFF",
                        opacity: currentIndex + itemsPerPage >= data.length ? "0.5" : "1",
                        "&:hover": {
                            backgroundColor: "transparent",
                        },
                    }}
                    disableRipple
                >
                    <img
                        src={ArrowIcon}
                        alt="Previous"
                        style={{
                            width: '2.5vw',
                            transform: 'scaleX(-1)',
                            opacity: currentIndex + itemsPerPage >= data.length ? '0.5' : '1',
                        }}
                    />
                </IconButton>
            </Box>
        </ThemeProvider>
    );
};

export default Mediacard;
