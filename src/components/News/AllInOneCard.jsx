import React from "react";
import {
    Box,
    Typography,
    createTheme,
    ThemeProvider,
    Button,
} from "@mui/material";
import {useNavigate} from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VisibilityIcon from "@mui/icons-material/Visibility";

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
            fontSize: {xs: '8px', sm: '13px', md: '20px', lg: '25px', xl: '29px'},
            color: "#F1F1F1",
            textTransform: 'none',
        },
        button: {
            fontFamily: 'Inter',
            fontSize: { xs: '6px', sm: '6px', md: '9px', lg: '13px', xl: '16px' },
            textTransform: 'none',
        },
        caption: {
            fontFamily: 'sen',
            fontSize: { xs: '7px', sm: '8px', md: '15px', lg: '18px', xl: '21px' },
            lineHeight: 'normal',
            letterSpacing: '0.4px',
            color: "#F1F1F1",
            textTransform: 'none',
        },
    },
});

const Allinonecard = ({ data }) => {
    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate(`/news/${slug}`);
    };
    const formatViews = (views) => {
        if (views >= 1000000) {
            return `${(views / 1000000).toFixed(1)}m`;
        } else if (views >= 1000) {
            return `${(views / 1000).toFixed(1)}k`;}
        return views;
    };
    return (
        <ThemeProvider theme={theme}>
            <Box
                display="flex"
                flexDirection="column"
                sx={{
                    maxWidth: {
                        xs: "400px",
                        sm: "600px",
                        md: "800px",
                        lg: "1000px",
                        xl: "1400px",
                    },
                    alignItems: 'center',
                }}
            >
                <Box
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="center"
                    sx={{gap:{xs: 1, sm: 1.5, md: 2, lg: 3, xl: 6,},
                    
                        maxWidth: {
                            xs: "400px",
                            sm: "600px",
                            md: "800px",
                            lg: "1000px",
                            xl: "1400px",
                        },
                    }}
                >
                    {data.map((box, index) => (
                        <Box
                            display="flex"
                            key={index}
                            sx={{
                                width: {
                                    xs: "390px",
                                    sm: "600px",
                                    md: "800px",
                                    lg: "1000px",
                                    xl: "1400px",
                                },
                                height: { xs: '200px', sm: '265px', md: '390px', lg: '488px', xl: '600px' },
                                position: "relative",
                                borderRadius: "20px",
                                color: "white",
                                overflow: "hidden",
                                backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.738) 14.54%, rgba(0, 0, 0, 0.686) 23.41%, rgba(0, 0, 0, 0.584) 40.86%, rgba(0, 0, 0, 0.164) 100%), url(${box.picture})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                
                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    display:'flex',
                                    top: "40%",
                                    left: "8%",
                                    width: "50%",
                                    borderRadius: "10px",
                                    flexDirection: 'column',
                                    gap:{xs:1,sm:1,md:2,lg:2,xl:2},
                                }}
                            >
                                {/* Box for Text (Top Aligned) */}
                                <Typography sx={{ ...theme.typography.h3 }}>
                                    {box.title}
                                </Typography>
                                <Typography sx={{maxWidth: 500, ...theme.typography.h6,ml:{xs:1,sm:1,md:2,lg:2,xl:2} }}>
                                    {box.details.length > 200
                                        ? `${box.details.substring(0, 200)}...`
                                        : box.details}
                                </Typography>

                                <Box display="flex" alignItems="center" sx={{ml:{xs:1,sm:1,md:2,lg:2,xl:2}}}>
                                    <AccessTimeIcon sx={{ fontSize: 18, mr: 1,...theme.typography.caption }} />
                                    <Typography variant="caption" sx={{ mr: 2 ,...theme.typography.caption}}>
                                        {box.read_time}m
                                    </Typography>
                                    <VisibilityIcon sx={{ fontSize: 18, mr: 1,...theme.typography.caption }} />
                                    <Typography variant="caption" sx={{ ...theme.typography.caption }}>
                                        {formatViews(box.views)}
                                    </Typography>
                                </Box>

                                {/* Box for Button (Bottom Aligned) */}
                                    <Button
                                        variant="contained"
                                        onClick={() => handleClick(box.slug)}
                                        sx={{
                                            borderRadius: "6px",
                                            backgroundColor: "transparent",
                                            textTransform: "none",
                                            ml:{xs:1,sm:1,md:2,lg:2,xl:2},
                                            width: { xs: '20px',sm: '55px', md: '80px', lg: '100px', xl: '125px' },
                                            height: { xs: '20px', sm: '20px', md: '30px', lg: '35px', xl: '45px' },
                                            ...theme.typography.button,
                                            border: "1px solid rgba(255, 255, 255, 0.8)", // Border around the button
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
        </ThemeProvider>
    );
};

export default Allinonecard;

