import React from "react";
import {
    Box,
    Typography,
    createTheme,
    ThemeProvider,
    Grid,
} from "@mui/material";
import linkedin from "../../assets/linkedin.png";

const theme = createTheme({
    typography: {
        fontFamily: "Sen, Arial, sans-serif",
        h6: {
            fontSize: "19px",
            fontWeight: 400,
            lineHeight: "26.47px",
            color: "#F1F1F1",
        },
        h3: {
            fontFamily: "Lato",
            fontWeight: 700,
            fontSize: "29px",
            lineHeight: "2rem",
            color: "#FFFFFF",
        },
    },
});

const Allinonecard = ({ data }) => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                display="flex"
                flexDirection="column"
                sx={{ maxWidth: "1220px",alignItems: 'center' }}
            >
                <Grid container spacing={6} justifyContent="flex-start">
                    {data.map((box, index) => (
                        <Grid item key={index} xs={12} sm={4}>
                            <Box
                                sx={{
                                    borderRadius: "20px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    backgroundColor: "#0A0A0A",
                                    border: "1px solid #FFFFFF33",
                                    height: "600px",
                                    position: "relative",
                                    my: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        position: "relative",
                                        padding: 0,
                                        margin: 0,
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={box.photo}
                                        alt={box.full_name}
                                        sx={{
                                            width: "100%",
                                            height: "315px",
                                            borderRadius: "20px 20px 0px 0px",
                                            objectFit: "cover",
                                            objectPosition: "top",
                                        }}
                                    />
                                    <Box
                                        onClick={box.linked_in ? () => window.open(box.linked_in, "_blank") : null}
                                        sx={{
                                            position: "absolute",
                                            bottom: "-11%",
                                            width: 70,
                                            height: 70,
                                            backgroundColor: box.linked_in ? "#B50304" : "#4c4c4c",
                                            borderRadius: "50%",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            zIndex: 1,
                                            cursor: box.linked_in ? "pointer" : "default",
                                            transition: "background-color 0.3s, transform 0.3s",
                                            '&:hover': {
                                                backgroundColor: box.linked_in ? "#A50203" : "#4c4c4c",
                                                transform: box.linked_in ? "scale(1.1)" : "none",
                                            },
                                        }}
                                    >
                                        <img
                                            src={linkedin ? linkedin : "#"}
                                            alt="LinkedIn"
                                            style={{
                                                width: "40px",
                                                filter: box.linked_in ? "none" : "grayscale(100%) brightness(0) invert(1)",
                                            }}
                                        />
                                        {!box.linked_in && (
                                            <Box
                                                sx={{
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    width: "100%",
                                                    height: "100%",
                                                    backgroundColor: "#736f6f",
                                                    borderRadius: "50%",
                                                    opacity: 0.5,
                                                }}
                                            />
                                        )}
                                    </Box>

                                    <Box
                                        position="absolute"
                                        flexDirection="column"
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        textAlign="center"
                                        maxWidth="300px"
                                        sx={{ bottom: "-80%" }}
                                    >
                                        <Typography variant="h3" sx={{ marginTop: 1 }} gutterBottom>
                                            {box.full_name}
                                        </Typography>
                                        <Typography variant="h6" sx={{ marginTop: 0.5 }} gutterBottom>
                                            {box._job}
                                        </Typography>
                                        <Typography variant="h6" sx={{ marginTop: 3 }} gutterBottom>
                                            {box.details}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </ThemeProvider>
    );
};

export default Allinonecard;
