import React, { useState } from "react";
import {
    Box,
    Typography,
    IconButton,
    createTheme,
    ThemeProvider, Button,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useSwipeable } from "react-swipeable"; // <-- Import swipeable

const theme = createTheme({
    typography: {
        h6: {
            fontFamily:'sen',
            fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '18px', xl: '21px' },
            lineHeight: { xs: '18px', sm: '20px', md: '20px', lg: '24px', xl: '26px' },
            fontWeight:300,
            color: "#F1F1F1",
            textTransform: 'none',
        },

        h3: {
            fontFamily: "Lato",
            fontWeight:700,
            fontSize: {xs: '16px', sm: '19px', md: '20px', lg: '25px', xl: '29px'},
            color: "#F1F1F1",
            textTransform: 'none',
        },
        button: {
            fontFamily: 'Inter',
            fontSize: { xs: '12px', sm: '15px', md: '6.5px', lg: '11.5px', xl: '15px' },
            textTransform: 'none',
        },
    },
});

const Mediacard = ({data}) => {
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
        onSwipedLeft: handleNext,  // Swipe left to move to the next item
        onSwipedRight: handlePrev, // Swipe right to move to the previous item
        preventDefaultTouchmoveEvent: true,
        trackMouse: true, // Optional: allows swiping with a mouse (useful for testing)
    });


    return (
        <ThemeProvider theme={theme}>
            <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                position="relative"
                {...swipeHandlers}  // <-- Attach swipe handlers to Box
            >
                <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    position="relative"
                    sx={{
                        overflow: "hidden",
                        maxWidth: "1220px",
                    }}
                >
                    <Box
                        display="flex"
                        justifyContent="start"
                        gap={6}
                        width="100%"
                        sx={{
                            transform: `translateX(-${currentIndex * 34.25}%)`,
                            transition: "transform 0.6s ease-in-out",
                        }}
                    >
                        {data.map((box, index) => (
                            <Box
                                key={index}
                                sx={{
                                    width: { xs: '143', sm: '185px', md: '280px', lg: '350px', xl: '430px' },
                                    height: { xs: '200', sm: '265px', md: '390px', lg: '488px', xl: '600px' },
                                    position: "relative",
                                    justifyContent: "flex-end",
                                    borderRadius: "20px",
                                    display: "flex",
                                    flexDirection: "column",
                                    color: "white",
                                    overflow: "hidden",
                                    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 46.58%, rgba(0, 0, 0, 0.472485) 56.73%, rgba(0, 0, 0, 0.86) 66%), url(${box.photo})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    padding:4,
                                    my: 10,
                                }}
                            >
                                <Typography sx={{
                                    ...theme.typography.h3
                                }}>
                                    {box.title}
                                    {data.index}
                                </Typography>
                                <Typography
                                    sx={{mt:0.8,
                                        ...theme.typography.h6 }}
                                >
                                    {box.details.length > 50
                                        ? `${box.details.substring(0, 80)}...`
                                        : box.details}
                                </Typography>
                                <Box sx={{ mt: 1.8 }}>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            borderRadius: "6px",
                                            backgroundColor: "transparent",
                                            textTransform: "none",
                                            width: '31%',
                                            height: { xs: '10px', sm: '15px', md: '25px', lg: '35px', xl: '42px' },
                                            ...theme.typography.button,
                                            border: "1.5px solid rgba(255, 255, 255, 1)", // Added border property
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
                        ))}
                    </Box>
                </Box>

                {/* Left Arrow */}
                <IconButton
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    sx={{
                        position: "absolute",
                        left: "-60px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "#FFFFFF",
                        "&:disabled": {
                            color: "#555",
                        },
                        "&:hover": {
                            backgroundColor: "transparent",
                        },
                    }}
                >
                    <ArrowBackIosIcon sx={{ fontSize: "50px" }} />
                </IconButton>

                {/* Right Arrow */}
                <IconButton
                    onClick={handleNext}
                    disabled={currentIndex + itemsPerPage >= data.length}
                    sx={{
                        position: "absolute",
                        right: "-60px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "#FFFFFF",
                        "&:disabled": {
                            color: "#555",
                        },
                        "&:hover": {
                            backgroundColor: "transparent",
                        },
                    }}
                >
                    <ArrowForwardIosIcon sx={{ fontSize: "50px" }} />
                </IconButton>
            </Box>
        </ThemeProvider>
    );
};

export default Mediacard;
