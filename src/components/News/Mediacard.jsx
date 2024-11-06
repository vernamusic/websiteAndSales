import React, { useState, useMemo } from "react";
import {
    Box,
    Typography,
    IconButton,
    createTheme,
    ThemeProvider, Button, useMediaQuery,
} from "@mui/material";
import blueArrowIcon from "../../assets/blueArrowIcon.svg";
import { useSwipeable } from "react-swipeable";
import ArrowIcon from "../../assets/Arrow.png";
import {useNavigate} from "react-router-dom";

const navItemStyle = {
    fontFamily: 'Lato',
    fontSize: { xs: '14.22px', lg: '16px' },
    color: '#eee',
    fontStyle: 'normal',
    lineHeight: '100%',
    textTransform: 'none',
    fontWeight: 400
}

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
                                    position: "relative",
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '360px',
                                    width: '284px',
                                    boxSizing: 'border-box',
                                    p: '24px',
                                    borderRadius: "16px",
                                    flexBasis: '28%',
                                    color: "white",
                                    overflow: "hidden",
                                    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.01) 40.5%, rgba(0, 0, 0, 0.8) 71%, rgba(0, 0, 0, 0.9) 100%), url(${box.picture})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    justifyContent: 'end',
                                    boxShadow: '0px 2px 16px 0px rgba(0, 0, 0, 0.32)',
                                    textAlign: 'start',
                                    alignItems: 'center',
                                    cursor: isMobile ? 'pointer' : 'default',
                                }}
                                onClick={isMobile ? onClick : undefined}
                            >
                                <Box
                                    sx={{
                                        position: "relative",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: 'flex-end',
                                        overflow: 'hidden',
                                    }} />
                                    
                                <Box sx={{ position: "relative"}}>
                                    <Typography sx={{
                                        width: '100%',
                                        ...navItemStyle,
                                        fontSize: { xs: '12.64', md: '14.22px', lg: '16px' },
                                        fontWeight: 600,
                                        lineHeight: 'normal'
                                    }}>{box.title}</Typography>
                                    <Typography sx={{
                                                        width: '100%',
                                                        ...navItemStyle,
                                                        fontSize: { xs: '10px', md: '12px' },
                                                        mt:'8px',
                                                        lineHeight:'130%'
                                                    }}>
                                        {box.details.length > 50 ? `${box.details.substring(0, 80)}...` : box.details}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        mt:'35px'
                                    }}
                                    >
                                    <Button
                                        onClick={() => handleClick(box.slug)}
                                        sx={{
                                            textTransform: "none",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: '4px',
                                            "&:hover": { backgroundColor: "transparent" },
                                            ...navItemStyle,
                                            lineHeight: '0',
                                            fontWeight: 600,
                                            color:'#B0EEE9',
                                            fontSize: { xs: '12.64px', md: '14.22px', lg: '16px' }
                                        }}
                                        disableRipple
                                    >
                                        View More
                                        <img src={blueArrowIcon} alt="" style={{ width: '16px', height: '16px', color:'#B0EEE9' }} />
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
