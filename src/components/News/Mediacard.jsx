import React, { useState, useMemo } from "react";
import {
    Box,
    Typography,
    IconButton,
    createTheme,
    ThemeProvider, Button,
} from "@mui/material";

import { useSwipeable } from "react-swipeable";
import ArrowIcon from "../../assets/Arrow.png";
import {useNavigate} from "react-router-dom";

const theme = createTheme({
    typography: {
        h6: {
            fontFamily:'sen',
            fontSize: { xs: '6px', sm: '6px', md: '6px', lg: '10px', xl: '12px' },
            lineHeight: 'normal',
            letterSpacing: '0.4px',
            color: "#F1F1F1",
            textTransform: 'none',
        },

        h3: {
            fontFamily: "Lato",
            fontWeight:700,
            fontSize: {xs: '8px', sm: '8px', md: '8px', lg: '13px', xl: '20px'},
            color: "#F1F1F1",
            textTransform: 'none',
        },
        button: {
            fontFamily: 'Inter',
            fontSize: { xs: '4px', sm: '4px', md: '5px', lg: '6px', xl: '9px' },
            textTransform: 'none',
        },
    },
});

const Mediacard = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;
    const gap = useMemo(() => {
        if (window.innerWidth < 600) return 1; // xs
        if (window.innerWidth < 900) return 1.5; // sm
        if (window.innerWidth < 1200) return 2; // md
        if (window.innerWidth < 1536) return 3; // lg
        return 6; // xl
    }, [window.innerWidth]);

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

    const widthOfCard = useMemo(() => {
        if (window.innerWidth < 600) return 133; // xs
        if (window.innerWidth < 900) return 199.45; // sm
        if (window.innerWidth < 1200) return 266; // md
        if (window.innerWidth < 1536) return 336; // lg
        return 472; // xl
    }, [window.innerWidth]);

    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate(`/news/${slug}`);
    };

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
                    position="relative"
                    sx={{
                        overflow: "scroll",
                        maxWidth: {
                            xs: "400px",
                            sm: "600px",
                            md: "800px",
                            lg: "1000px",
                            xl: "1400px",
                        },
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
                            transform: {sm:'none',md:`translateX(-${currentIndex * (widthOfCard + gap)}px)`},
                            transition: {sm:'none',md:"transform 0.6s ease-in-out"},
                            gap:{xs: 1, sm: 1.5, md: 2, lg: 3, xl: 6,}
                        }}
                    >
                        {data.map((box, index) => (
                            <Box
                                key={index}
                                sx={{
                                    width: { xs: '126px', sm: '189px', md: '252px', lg: '315px', xl: '430px' },
                                    height: { xs: '200px', sm: '265px', md: '390px', lg: '488px', xl: '600px' },
                                    position: "relative", // Position relative to allow absolute positioning of inner boxes
                                    borderRadius: "20px",
                                    color: "white",
                                    overflow: "hidden",
                                    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.01) 40.5%, rgba(0, 0, 0, 0.8) 71%, rgba(0, 0, 0, 0.9) 100%), url(${box.picture})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "absolute", // Keep the main box as relative
                                        width: "100%",
                                        height: '37%', // Ensure the main box has a fixed height
                                        bottom: '0',
                                    }}
                                >
                                    {/* Box for Text (Top Aligned) */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: '0', // Fixed position from the top of the parent box
                                            width: '80%',
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "flex-start", // Align content to the left
                                            ml:{xs:1, sm: 2, md: 3, lg: 3, xl: 4,},

                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                ...theme.typography.h3,
                                            }}
                                        >
                                            {box.title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                mt: {xs:0.1, sm: 0.2, md: 0.4, lg: 0.6, xl: 0.8,},
                                                ...theme.typography.h6,
                                                width: { xs: '120px', sm: '189px', md: '200px', lg: '270px', xl: '350px' },
                                            }}
                                        >
                                            {box.details.length > 50
                                                ? `${box.details.substring(0, 80)}...`
                                                : box.details}
                                        </Typography>
                                    </Box>

                                    {/* Box for Button (Bottom Aligned) */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            bottom: '0', // Fixed position from the bottom of the parent box
                                            width: '100%',
                                            display: "flex",
                                            alignContent: "flex-start",

                                        }}
                                    >
                                        <Button
                                            variant="contained"
                                            onClick={() => handleClick(box.slug)}
                                            sx={{
                                                borderRadius: "6px",
                                                backgroundColor: "transparent",
                                                textTransform: "none",
                                                ml:{xs:1, sm: 2, md: 3, lg: 3, xl: 4,},
                                                mb:{xs:0.5, sm: 2, md: 2.5, lg: 2.5, xl: 3,},
                                                width: { xs: '20px',sm: '55px', md: '80px', lg: '100px', xl: '125px' },
                                                height: { xs: '20px', sm: '20px', md: '30px', lg: '35px', xl: '45px' },
                                                ...theme.typography.button,
                                                border: "1px solid rgba(255, 255, 255, 0.8)", // Border around the button
                                                "&:hover": {
                                                    backgroundColor: "#000000", // Background color on hover
                                                    opacity: 0.8, // Optional: slightly reduce opacity on hover
                                                },
                                            }}
                                        >
                                            See more
                                        </Button>
                                    </Box>
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
                            xs: "-28px",
                            sm: "-40px",
                            md: "-60px",
                            lg: "-70px",
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
