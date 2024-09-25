import React, { useState } from "react";
import {
    Box,
    Typography,
    IconButton,
    createTheme,
    ThemeProvider,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import linkedin from "../../assets/linkedin.png";
import { useSwipeable } from "react-swipeable"; // <-- Import swipeable

const theme = createTheme({
    typography: {
        fontFamily: "Sen, Arial, sans-serif",
        h6: {
            fontSize: "19px",
            fontWeight: 400,
            lineHeight: "26.47px",
            color: "#F1F1F1",
        },
        h3: {
            fontFamily: "Lato",
            fontWeight: 700,
            fontSize: "29px",
            lineHeight: "2rem",
            color: "#FFFFFF",
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
                                    width: { sm: "370px" },
                                    height: { sm: "600px" },
                                    borderRadius: "20px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    backgroundColor: "#0A0A0A",
                                    border: "1px solid #FFFFFF33",
                                    position: "relative",
                                    my: 10,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        position: "relative",
                                        padding: 0,
                                        margin: 0,
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={box.photo}
                                        alt={box.full_name}
                                        sx={{
                                            width: { sm: "369px" },
                                            height: "315px",
                                            borderRadius: "20px 20px 0px 0px",
                                            objectFit: "cover",
                                            objectPosition: "top",
                                        }}
                                    />
                                    <Box
                                        onClick={box.linked_in ? () => window.open(box.linked_in, "_blank") : null}
                                        sx={{
                                            position: "absolute",
                                            bottom: "-11%",
                                            width: 70,
                                            height: 70,
                                            backgroundColor: box.linked_in ? "#B50304" : "#4c4c4c",
                                            borderRadius: "50%",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            zIndex: 1,
                                            cursor: box.linked_in ? "pointer" : "default",
                                            transition: "background-color 0.3s, transform 0.3s",
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
                                                width: "40px",
                                                filter: box.linked_in ? "none" : "grayscale(100%) brightness(0) invert(1)",
                                            }}
                                        />
                                        {!box.linked_in && (
                                            <Box
                                                sx={{
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    width: "100%",
                                                    height: "100%",
                                                    backgroundColor: "#736f6f", // رنگ خاکستری خاص
                                                    borderRadius: "50%",
                                                    opacity: 0.5, // تنظیم شفافیت
                                                }}
                                            />
                                        )}
                                    </Box>



                                    <Box
                                        position="absolute"
                                        flexDirection="column"
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        textAlign="center"
                                        maxWidth="300px"
                                        sx={{ bottom: "-80%" }}
                                    >
                                        <Typography variant="h3" sx={{ marginTop: 1 }} gutterBottom>
                                            {box.full_name}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            sx={{ marginTop: 0.5 }}
                                            gutterBottom
                                        >
                                            {box._job}
                                        </Typography>
                                        <Typography variant="h6" sx={{ marginTop: 3 }} gutterBottom>
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
