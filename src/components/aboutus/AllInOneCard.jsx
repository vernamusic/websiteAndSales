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


const Allinonecard = ({ data }) => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                display="flex"
                flexDirection="column"
                sx={{
                    maxWidth: '100vw',
                    justifyItems:'center',
                    alignItems: 'center',
                    mb: { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 }
                }}
            >
                <Box
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="center"
                    sx={{ gap: '1.8vw',
                        maxWidth: '80vw',
                }}
                >
                    {data.map((box, index) => (
                        <Box
                            display="flex"
                            key={index}
                            sx={{
                                flexDirection: "column",
                                justifyContent: "space-between",
                                width: '17.78vw',
                                height: '31.5972vw',
                                position: "relative",
                                borderRadius: "1.5vw",
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
        </ThemeProvider>
    );
};

export default Allinonecard;
