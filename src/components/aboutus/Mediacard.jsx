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
            fontFamily: 'sen',
            fontSize:'1.2vw',
            color: "rgba(191, 191, 191, 1)",
            letterSpacing: '0.4px',
            lineHeight: 'normal',
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize:'1.3889vw',
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
        button: {
            fontFamily: 'Lato',
            fontSize:'0.677vw',
            textTransform: 'none',
            color: "#FFFFFF",
        },
        h1: {
            fontFamily: 'Lato',
            fontWeight: 400,
            fontSize:'1.0417vw',
            color: "rgba(191, 191, 191, 1)",
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


    return (
        <ThemeProvider theme={theme}>
            <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                position="relative"
                {...swipeHandlers}
            >
                <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    position="relative"
                    sx={{
                        overflow:{xs:"scroll",sm:"scroll",md:'hidden'},
                        maxWidth: '63.8vw',
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
                            transform: `translateX(-${currentIndex * 19.58}vw)`,
                            transition: "transform 0.6s ease-in-out",
                            gap: '1.8vw',
                        }}
                    >
                        {data.map((box, index) => (
                            <Box
                                key={index}
                                sx={{
                                    width: '17.78vw',
                                    height: '31.5972vw',
                                    position: "relative", // Position relative to allow absolute positioning of inner boxes
                                    borderRadius: "1.0417vw",
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
                                        height: '45%',
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
                                        height: '47.5%',
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
                                            mt: '0.7vw',
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                ...theme.typography.h1,
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
                                            mt: '1.5vw',
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
