import React from "react";
import {
    Box,
    Typography,
    createTheme,
    ThemeProvider,
    Button,
} from "@mui/material";

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
    },
});

const Allinonecard = ({ data }) => {
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
                    justifyContent="start"
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
                                width: { xs: '126px', sm: '189px', md: '252px', lg: '315px', xl: '430px' },
                                height: { xs: '200px', sm: '265px', md: '390px', lg: '488px', xl: '600px' },
                                position: "relative",
                                borderRadius: "20px",
                                color: "white",
                                overflow: "hidden",
                                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 46.58%, rgba(0, 0, 0, 0.472485) 56.73%, rgba(0, 0, 0, 0.9) 66.51%), url(${box.picture})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute", // Keep the main box as relative
                                    width: "100%",
                                    height: '37%', // Ensure the main box has a fixed height
                                    bottom: '0',
                                }}
                            >
                                {/* Box for Text (Top Aligned) */}
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: '0', // Fixed position from the top of the parent box
                                        width: '100%',
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start", // Align content to the left
                                        ml:{xs:1, sm: 2, md: 3, lg: 3, xl: 4,},

                                    }}
                                >
                                    <Typography
                                        sx={{
                                            ...theme.typography.h3,
                                        }}
                                    >
                                        {box.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            mt: {xs:0.1, sm: 0.2, md: 0.4, lg: 0.6, xl: 0.8,},
                                            ...theme.typography.h6,
                                            width: { xs: '120px', sm: '189px', md: '200px', lg: '270px', xl: '350px' },
                                        }}
                                    >
                                        {box.details.length > 50
                                            ? `${box.details.substring(0, 80)}...`
                                            : box.details}
                                    </Typography>
                                </Box>

                                {/* Box for Button (Bottom Aligned) */}
                                <Box
                                    sx={{
                                        position: "absolute",
                                        bottom: '0', // Fixed position from the bottom of the parent box
                                        width: '100%',
                                        display: "flex",
                                        alignContent: "flex-start",

                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        sx={{
                                            borderRadius: "6px",
                                            backgroundColor: "transparent",
                                            textTransform: "none",
                                            ml:{xs:1, sm: 2, md: 3, lg: 3, xl: 4,},
                                            mb:{xs:0.5, sm: 2, md: 2.5, lg: 2.5, xl: 3,},
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
                        </Box>
                    ))}
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Allinonecard;

