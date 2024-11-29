import React from "react";
import {
    Box,
    Typography,
    createTheme,
    ThemeProvider,
    Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import blueArrowIcon from "../../assets/blueArrowIcon.svg";

const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'Lato',
            fontSize:'0.8333vw',
            fontWeight: 400,
            color: "#F1F1F1",
            letterSpacing: '0.4px',
            lineHeight: 'normal',
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize:'1.1111vw',
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
        button: {
            fontFamily: 'Lato',
            fontSize:'0.8333vw',
            textTransform: 'none',
            fontWeight:700,
            color: "rgba(176, 238, 233, 1)",
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

const Allinonecard = ({ data }) => {
    const navigate = useNavigate();
    const isMobile = window.innerWidth <= 600;

    const handleClick = (slug) => {
        navigate(`/news/${slug}`);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                margin="0 auto"
            >
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: '40px',

                    }}
                >
                    {data.map((box, index) => (
                        <Box
                            key={index}
                            sx={{
                                position: "relative",
                                display: 'flex',
                                flexDirection: 'column',
                                height: '25vw',
                                width: '19.7222vw',
                                boxSizing: 'border-box',
                                borderRadius: "1.1111vw",
                                color: "white",
                                alignItems: 'center',
                                overflow: "hidden",
                                backgroundImage: `linear-gradient(360deg, rgba(31, 31, 31, 0.9) 0%, rgba(31, 31, 31, 0.81) 39.67%, rgba(31, 31, 31, 0) 55.83%), url(${box.picture})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                boxShadow: '0px 2px 16px 0px rgba(0, 0, 0, 0.32)',
                                cursor: isMobile ? 'pointer' : 'default',
                            }}
                            onClick={() => handleClick(box.slug)}
                        >
                            <Box
                                sx={{
                                    position: "relative",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    overflow: 'hidden',
                                    height: '15vw',
                                    width: '80%',
                                }}
                            />

                                <Box sx={{ position: "relative",height:'6.5vw',width: '85%',}}>
                                <Typography sx={{
                                        mb:'0.7vw',
                                        ...theme.typography.h3,
                                    }}>
                                    {box.title}
                                </Typography>
                                <Typography sx={{
                                    width: '100%',
                                    ...theme.typography.h6,
                                                    }}>
                                    {box.details.length > 50 ? `${box.details.substring(0, 80)}...` : box.details}
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    height:'2vw',
                                    width:'85%',
                                    justifyContent:'center',
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
                                        ...theme.typography.button,
                                    }}
                                    disableRipple
                                >
                                    View More
                                    <img src={blueArrowIcon} alt="" style={{ width: '1.1111vw', height: '1.1111vw', color:'#B0EEE9' }} />
                                </Button>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Allinonecard;
