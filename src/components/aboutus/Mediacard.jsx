import React, { useState, useMemo } from "react";
import {
    Box,
    Typography,
    IconButton,
    createTheme,
    ThemeProvider, Button,
} from "@mui/material";
import ArrowIcon from "../../assets/Arrow.png";
import { useSwipeable } from "react-swipeable";
import linkedin from "../../assets/linkedin.png";

const theme = createTheme({
    typography: {
        h6: {
            fontFamily:'sen',
            fontSize: { xs: '6px', sm: '10px', md: '12px', lg: '16px', xl: '20px' },
            lineHeight: 'normal',
            letterSpacing: '0.4px',
            color: "#F1F1F1",
            textTransform: 'none',
        },

        h3: {
            fontFamily: "Lato",
            fontWeight:700,
            fontSize: {xs: '11.5px', sm: '13px', md: '20px', lg: '25px', xl: '29px'},
            color: "#F1F1F1",
            textTransform: 'none',
        },
        button: {
            fontFamily: 'Inter',
            fontSize: { xs: '6px', sm: '6px', md: '9px', lg: '13px', xl: '16px' },
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
        if (window.innerWidth < 600) return 149; // xs
        if (window.innerWidth < 900) return 216.5; // sm
        if (window.innerWidth < 1200) return 299; // md
        if (window.innerWidth < 1536) return 368; // lg
        return 404; // xl
    }, [window.innerWidth]);

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
                            xs: "380px",
                            sm: "650px",
                            md: "900px",
                            lg: "1100px",
                            xl: "1200px",
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
                            gap:{xs: 1, sm: 1.5, md: 2, lg: 3, xl: 5,},

                        }}
                    >
                        {data.map((box, index) => (
                            <Box
                                key={index}
                                sx={{
                                    width: { xs: '121px', sm: '206px', md: '285px', lg: '347px', xl: '370px' },
                                    height: { xs: '196px', sm: '334px', md: '462px', lg: '564px', xl: '600px' },
                                    position: "relative", // Position relative to allow absolute positioning of inner boxes
                                    borderRadius: "20px",
                                    color: "white",
                                    overflow: "hidden",
                                    alignItems: "center",
                                    border:'0.01px solid rgba(255, 255, 255, 0.2)',
                                    backgroundColor: "#0A0A0A",
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "absolute",
                                        width: "100%",
                                        height: '50%',
                                        top:'0',
                                        zIndex:2,
                                        backgroundImage:`url(${box.photo})`,
                                        backgroundSize: "cover",
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition:'center top',
                                        justifyItem: "center",
                                    }}
                                >
                                    <Box
                                        width='20%'
                                        height='25%'
                                        onClick={box.linked_in ? () => window.open(box.linked_in, "_blank") : null}
                                        sx={{
                                            position: "absolute",
                                            bottom: "-11%",
                                            backgroundColor: box.linked_in ? "#B50304" : "#4c4c4c",
                                            borderRadius: "50%",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            zIndex: 1,
                                            cursor: box.linked_in ? "pointer" : "default",
                                            transition: "background-color 0.3s, transform 0.3s",
                                            right: "40%",
                                            '&:hover': {
                                                backgroundColor: box.linked_in ? "#A50203" : "#4c4c4c",
                                                transform: box.linked_in ? "scale(1.1)" : "none",
                                            },
                                        }}
                                    >
                                        <img
                                            src={linkedin}
                                            alt="LinkedIn"
                                            style={{
                                                width: "60%",
                                                filter: box.linked_in ? "none" : "grayscale(100%) brightness(0) invert(1)",
                                            }}
                                        />
                                        {!box.linked_in && (
                                            <Box
                                                sx={{
                                                    position: "absolute",
                                                    width: "100%",
                                                    height: "100%",
                                                    backgroundColor: "#736f6f",
                                                    borderRadius: "50%",
                                                    opacity: 0.5,
                                                }}
                                            />
                                        )}
                                    </Box>

                                </Box>
                                <Box
                                    sx={{
                                        position: "absolute",
                                        width: "100%",
                                        height: '40%',
                                        bottom: '0',
                                    }}
                                >

                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            width: "100%",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                ...theme.typography.h3,
                                                textAlign: "center",
                                                maxWidth: '90%',
                                            }}
                                        >
                                            {box.full_name}
                                        </Typography>
                                    </Box>

                                    {/* Job */}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            width: "100%",
                                            mt: 2,
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                ...theme.typography.h6,
                                                textAlign: "center",
                                                maxWidth: '80%',
                                            }}
                                        >
                                            {box._job}
                                        </Typography>
                                    </Box>

                                    {/* Details */}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            width: "100%",
                                            mt: 2,
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                ...theme.typography.h6,
                                                textAlign: "center",
                                                maxWidth: '80%',
                                            }}
                                        >
                                            {box.details}
                                        </Typography>
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
