import React from "react";
import {
    Box,
    Typography,
    createTheme,
    ThemeProvider,
    Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const navItemStyle = {
    fontFamily: 'Lato',
    fontSize: { xs: '14.22px', lg: '16px' },
    color: '#eee',
    fontStyle: 'normal',
    lineHeight: '100%',
    textTransform: 'none',
    fontWeight: 400
}
import blueArrowIcon from "../../assets/blueArrowIcon.svg";

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
            >
                <Box
                    sx={{
                        width: '62%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        flexWrap: 'wrap',
                        gap: '20px',

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
                                    }}>
                                    {box.title}
                                </Typography>
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
                                    mr:'100px',
                                    mt:'35px',
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
        </ThemeProvider>
    );
};

export default Allinonecard;
