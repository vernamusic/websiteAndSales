import React from "react";
import {
    Box,
    Typography,
    createTheme,
    ThemeProvider,
    Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

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
                flexDirection="column"
                alignItems="center"
                sx={{
                    maxWidth: '100vw',
                    mt:'2.5vw'
                }}
            >
                <Box
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="center"
                    sx={{
                        gap: '3.8vw',
                        maxWidth: '70vw',
                    }}
                >
                    {data.map((box, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '17vw',
                                height: '24vw',
                                position: "relative",
                                borderRadius: "16px",
                                color: "white",
                                overflow: "hidden",
                                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.01) 40.5%, rgba(0, 0, 0, 0.8) 71%, rgba(0, 0, 0, 0.9) 100%), url(${box.picture})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                cursor: isMobile ? 'pointer' : 'default',
                                justifyContent: 'flex-end',
                                textAlign: 'start',
                                alignItems: 'center',
                            }}
                        >
                            <Box sx={{ width: '85%', height: '68%', display: "flex", flexDirection: "column", justifyContent: 'flex-end' }} />

                            <Box sx={{ width: '85%', mb: 3 }}>
                                <Typography variant="h3" sx={{ width: '100%' }}>
                                    {box.title}
                                </Typography>
                                <Typography variant="h6" sx={{ width: '100%', mt: 0.5 }}>
                                    {box.details.length > 50 ? `${box.details.substring(0, 80)}...` : box.details}
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    width: '85%',
                                    display: { xs: 'none', sm: 'flex' },
                                    justifyContent: "flex-start",
                                    alignItems: 'center',
                                }}
                            >
                                <Button
                                    onClick={() => handleClick(box.slug)}
                                    sx={{
                                        ...theme.typography.button,
                                        borderRadius: '4px',
                                        border: '1px solid white',
                                        width: '5vw',
                                        height: '2vw',
                                        backgroundColor: 'transparent',
                                        '&:hover': { backgroundColor: 'transparent' },
                                    }}
                                    disableRipple
                                    aria-label="See more"
                                >
                                    See more
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
