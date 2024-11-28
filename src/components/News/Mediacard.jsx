import React from "react";
import { Box, Typography, createTheme, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

const theme = createTheme({
    typography: {
        h6: {
            fontFamily: "sen",
            fontSize: "0.8333vw",
            color: "#F1F1F1",
            letterSpacing: "0.4px",
            lineHeight: "normal",
        },
        h3: {
            fontFamily: "Lato",
            fontWeight: 500,
            fontSize: "2.52vw",
            lineHeight: "3vw",
            color: "#FFFFFF",
        },
        button: {
            fontFamily: "Lato",
            fontSize: "0.7vw",
            textTransform: "none",
            color: "#FFFFFF",
        },
        h1: {
            fontFamily: "Lato",
            fontWeight: 700,
            fontSize: "1.458vw",
            color: "#FFFFFF",
            letterSpacing: "0.4px",
        },
    },
});

const Mediacard = ({ data }) => {
    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate(`/news/${slug}`);
    };

    const containerRef = React.useRef();


    return (
        <ThemeProvider theme={theme}>
            <Box
                ref={containerRef}
                display="flex"
                flexDirection="row"
                alignItems="center"
                position="relative"
                sx={{
                    overflowX: "auto",
                    scrollBehavior: "smooth",
                    width: "100vw",
                    gap: "3vw",
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    }
                }}
            >
                {data.map((box, index) => (
                    <Box
                        key={index}
                        sx={{
                            position: "relative",
                            display: "flex",
                            flexDirection: "column",
                            height: {xs:"36.11vw",sm:"31.67vw"},
                            width: {xs:"28.88vw",sm:"25vw"},
                            borderRadius: "2.22vw",
                            flexShrink: 0,
                            color: "white",
                            border:'0.05vw solid black',
                            overflow: "hidden",
                            backgroundImage: `linear-gradient(360deg, rgba(31, 31, 31, 0.9) 0%, rgba(31, 31, 31, 0.81) 39.67%, rgba(31, 31, 31, 0) 55.83%), url(${box.picture})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            justifyContent: "end",
                            textAlign: "start",
                            alignItems: "center",
                        }}
                        onClick={() => handleClick(box.slug)}
                    >
                        <Typography
                            sx={{
                                width: "95%",
                                ...theme.typography.h3,
                                mb:'3vw',
                                ml:'1vw',
                            }}
                        >
                            {box.title}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </ThemeProvider>
    );
};

export default Mediacard;
