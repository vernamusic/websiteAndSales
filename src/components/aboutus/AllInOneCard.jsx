import React from "react";
import {
    Box,
    Typography,
    createTheme,
    ThemeProvider,
} from "@mui/material";
import linkedin from "../../assets/inIcon.svg";

const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'Lato',
            fontSize: '0.74vw',
            color: "rgba(191, 191, 191, 1)",
            lineHeight: '1vw',
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize: '1.2889vw',
            color: "#FFFFFF",
        },
        button: {
            fontFamily: 'Lato',
            fontSize: '0.83vw',
            textTransform: 'none',
            color: "#FFFFFF",
        },
        h1: {
            fontFamily: 'Lato',
            fontWeight: 400,
            fontSize: '0.94vw',
            color: "#FFFFFF",
        },
    },
});

const typoStyle = {
    fontFamily: 'Lato',
    fontSize: { xs: '16px', sm: '18px', md: '20px', lg: '24px' },
    color: '#fff',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '100%',
    textTransform: 'none'
}


const imageContainerStyle = {
    position: 'relative',
    mt: '32px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}
const Allinonecard = ({ data }) => { 
    return (
        <ThemeProvider theme={theme}>
            <Box
                display="flex"
                flexDirection="column"
                sx={{
                    maxWidth: '100vw',
                    justifyItems: 'center',
                    alignItems: 'center',
                    mb: '-2.5vw',
                }}
            >
                <Box
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="center"
                    sx={{
                        gap: '1.8vw',
                        maxWidth: '70vw',
                    }}
                >
                    {data.map((box, index) => (
                        <Box
                            display="flex"
                            key={index}
                            sx={{
                                flexDirection: "column",
                                borderRadius: '0.83vw',
                                width: '14.58vw',
                                height: '20vw',
                                py: '0vw',
                                px: '1.25vw',
                                boxSizing: 'border-box',
                                boxShadow: '0vw 0.21vw 0.21vw 0vw rgba(0, 0, 0, 0.45)',
                                position: "relative",
                                overflow: "hidden",
                                alignItems: "center",
                                backgroundColor: "linear-gradient(180deg, rgba(74, 74, 74, 0.90) 0%, rgba(31, 31, 31, 0.90) 100%)"
                            }}
                        >
                            <Box
                                onClick={box.linked_in ? () => window.open(box.linked_in, "_blank") : null}
                                sx={{
                                    position: "absolute",
                                    top: "0.625vw",
                                    left: '0.625vw',
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    zIndex: 3,
                                    cursor: box.linked_in ? "pointer" : "default",
                                    transition: "background-color 0.3s, transform 0.3s",
                                    '&:hover': {
                                        transform: box.linked_in ? "scale(1.1)" : "none",
                                    },
                                }}
                            >
                                <img
                                    src={linkedin}
                                    alt="LinkedIn"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        filter: box.linked_in ? "none" : "grayscale(100%) brightness(0) invert(1)",
                                        opacity: box.linked_in ? '100%' : '20%',
                                    }}
                                />
                                {!box.linked_in && (
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            width: "1.88vw",
                                            height: "1.88vw",
                                            backgroundColor: "transparent",
                                            borderRadius: "50%",
                                        }}
                                    />
                                )}
                            </Box>
                            <Box
                                sx={{
                                    width: "100%",
                                    zIndex: 2,
                                    justifyItem: "center",
                                }}
                            >
                                <Box sx={imageContainerStyle}>
                                    <Box
                                        sx={{
                                            borderTop: '0.052vw solid red',
                                            borderRadius: '5.21vw',
                                            border: '0.052vw dashed #8AE6DE',
                                            p: '0.52vw',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            transition: 'ease-in 300ms',
                                            ":hover": {
                                                transform: 'scale(1.1)'
                                            }
                                        }}
                                    >
                                        <img
                                            src={box.photo}
                                            alt="circle"
                                            style={{
                                                border: '0.052vw solid #8AE6DE',
                                                width: '6.46vw',
                                                height: '6.46vw',
                                                objectFit: 'cover',
                                                borderRadius: '50%'
                                            }}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ width: "100%" }}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        mt: '1.15vw'
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            ...theme.typography.h1,
                                            textAlign: "center",

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
                                            ...theme.typography.button,
                                            color: '#8AE6DE',

                                            textAlign: "center",
                                            fontweight: 500,
                                            lineHeight: '140%',
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
                                        borderTop: '0.052vw dashed rgba(255, 255, 255, 0.20)',
                                        pt: '1.04vw',
                                        mt: '1.04vw'
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            ...theme.typography.h6,
                                            fontWeight: 400,
                                            color: '#d9d9d9',
                                            lineHeight: '20px',
                                            textAlign: "center",
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

        </ThemeProvider >
    );
};

export default Allinonecard;
