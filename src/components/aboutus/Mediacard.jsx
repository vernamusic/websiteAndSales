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

const Mediacard = ({ data, buttons }) => {
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
                                        sx={{
                                            position: "absolute",
                                            bottom: "-11%",
                                            width: 70,
                                            height: 70,
                                            backgroundColor: "#B50304",
                                            borderRadius: "50%",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            zIndex: 1,
                                        }}
                                    >
                                        <img src={linkedin} style={{ width: "40px" }} />
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
