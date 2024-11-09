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
            fontFamily: 'sen',
            fontSize: '1.2vw',
            color: "rgba(191, 191, 191, 1)",
            letterSpacing: '0.4px',
            lineHeight: 'normal',
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize: '1.3889vw',
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
        button: {
            fontFamily: 'Lato',
            fontSize: '0.677vw',
            textTransform: 'none',
            color: "#FFFFFF",
        },
        h1: {
            fontFamily: 'Lato',
            fontWeight: 400,
            fontSize: '1.0417vw',
            color: "rgba(191, 191, 191, 1)",
            letterSpacing: '0.4px',
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
    console.log(data);

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
                                borderRadius: '16px',
                                width: '280px',
                                height: '380px',
                                py: '0px',
                                px: '24px',
                                boxSizing: 'border-box',
                                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.45)',
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
                                    top: "12px",
                                    left: '12px',
                                    borderRadius: "50%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    zIndex: 2,
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
                                        width: "36px",
                                        height: "36px",
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
                            <Box
                                sx={{
                                    width: "100%",
                                    zIndex: 2,
                                    justifyItem: "center",
                                }}
                            >
                                <Box
                                    sx={imageContainerStyle}
                                >
                                    <Box
                                        sx={{
                                            borderTop: '1px solid red',
                                            borderRadius: '100px',
                                            border: '1px dashed #8AE6DE',
                                            p:'10px',
                                            display:'flex',
                                            justifyContent:'center',
                                            alignItems:'center'

                                        }}
                                    >
                                        <img
                                            src={box.photo}
                                            alt="circle"
                                            style={{
                                                border: '2px solid #8AE6DE',
                                                width: '124px',
                                                height: '124px',
                                                objectFit: 'cover',
                                                borderRadius: '50%'
                                            }}
                                        />
                                    </Box>

                                </Box>

                            </Box>
                            <Box
                                sx={{
                                    width: "100%",
                                }}
                            >

                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        mt: '22px'
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            ...typoStyle,
                                            textAlign: "center",
                                            fontSize: { xs: '14px', sm: '14.22px', md: '16px', lg: '18px' }
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
                                            ...typoStyle,
                                            color: '#8AE6DE',
                                            fontSize: { xs: '12.64px', sm: '13px', md: '14.22px', lg: '16px' },
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
                                        borderTop: '1px dashed rgba(255, 255, 255, 0.20)',
                                        pt: '20px',
                                        mt: '20px'
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            ...typoStyle,
                                            fontSize: { xs: '12.64px', md: '14px' },
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
