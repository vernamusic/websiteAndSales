import React from "react";
import {
    Box,
    Typography,
    createTheme,
    ThemeProvider,
} from "@mui/material";
import linkedin from "../../assets/linkedin.png";

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
            fontSize: {xs: '11.5px', sm: '13px', md: '20px', lg: '25px', xl: '29px'},
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
                    width: {
                        xs: "450px",
                        sm: "650px",
                        md: "900px",
                        lg: "1100px",
                        xl: "1200px",
                    },
                    alignItems: 'center',
                    mb: { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 }
                }}
            >
                <Box
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="start"
                    sx={{ gap: { xs: 1, sm: 1.5, md: 2, lg: 3, xl: 5 },
                            width: {
                                xs: "450px",
                                sm: "650px",
                                md: "900px",
                                lg: "1100px",
                                xl: "1200px",}
                }}
                >
                    {data.map((box, index) => (
                        <Box
                            display="flex"
                            key={index}
                            sx={{
                                flexDirection: "column",
                                justifyContent: "space-between",
                                width: { xs: '142px', sm: '206px', md: '285px', lg: '347px', xl: '370px' },
                                height: { xs: '230px', sm: '334px', md: '462px', lg: '564px', xl: '600px' },
                                position: "relative",
                                borderRadius: "20px",
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
                                    height: '50%',
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
                                        zIndex: 2,
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
                                                backgroundColor: "#736f6f", // رنگ خاکستری خاص
                                                borderRadius: "50%",
                                                opacity: 0.5, // تنظیم شفافیت
                                            }}
                                        />
                                    )}
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    position: "absolute",
                                    width: "100%",
                                    height: '40%',
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
                                            mt: 2, // Add margin-top to space out
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                ...theme.typography.h6,
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
                                            mt: 2, // Add margin-top to space out
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
        </ThemeProvider>
    );
};

export default Allinonecard;
