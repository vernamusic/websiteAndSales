import React from "react";
import {
    Box,
    Typography,
    createTheme,
    ThemeProvider,
} from "@mui/material";
import linkedin from "../../assets/inIcon.svg";
import backgroundImage from "../../assets/aboutUs1.svg";

const theme = createTheme({
    typography: {
        h3: {
            fontFamily: 'Lato',
            fontWeight: 600,
            fontSize: {xs:'2.58vw',sm:'1.25vw'},
            color: "#FFFFFF",
        },
        h6: {
            fontFamily: 'Lato',
            fontSize: {xs:'2.4vw',sm:'1.11vw'},
            color: "rgba(191, 191, 191, 1)",
            fontWeight: 500,
            lineHeight: '1.3vw',
        },
        caption: {
            fontFamily: 'Lato',
            fontSize: {xs:'2.22vw',sm:'0.97vw'},
            textTransform: 'none',
            lineHeight: '1.5vw',
            fontWeight: 400,
            color: "#FFFFFF",
        },
    },
});


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
                fullWidth
                display="flex"
                flexDirection="column"
                sx={{
                    justifyItems: 'center',
                    alignItems: 'center',
                }}
            >
                <Box
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="center"
                    sx={{
                        gap: '1.86vw',
                        width: '85vw',
                    }}
                >
                    {data.map((box, index) => (
                        <Box
                            display="flex"
                            key={index}
                            sx={{
                                flexDirection: "column",
                                borderRadius: '1.11vw',
                                width: '18vw',
                                height: '26vw',
                                py: '0vw',
                                boxSizing: 'border-box',
                                boxShadow: '0vw 0.21vw 0.21vw 0vw rgba(0, 0, 0, 0.45)',
                                position: "relative",
                                overflow: "hidden",
                                alignItems: "center",
                                background: "linear-gradient(180deg, rgba(74, 74, 74, 0.9) 0%, rgba(31, 31, 31, 0.9) 100%)",
                                transition: 'ease-in 200ms',
                                ":hover": {
                                    transform: 'scale(1.05)'
                                }
                            }}
                        >
                            <Box
                                onClick={box.linked_in ? () => window.open(box.linked_in, "_blank") : null}
                                alt="LinkedIn"
                                sx={{
                                    width: '2.5vw',
                                    height: '2.5vw',
                                    position: "absolute",
                                    top: "0.625vw",
                                    left: '0.625vw',
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    zIndex: 3,
                                    backgroundImage: `url(${linkedin})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    filter: box.linked_in ? "none" : "grayscale(100%) brightness(0) invert(1)",
                                    cursor: box.linked_in ? "pointer" : "default",
                                    opacity: box.linked_in ? '100%' : '20%',
                                    transition: "background-color 0.3s, transform 0.3s",
                                    '&:hover': {
                                        transform: box.linked_in ? "scale(1.1)" : "none",
                                    },
                                }}
                            >
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
                                                width: '7.44vw',
                                                height: '7.44vw',
                                                objectFit: 'cover',
                                                borderRadius: '50%'
                                            }}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ width: "85%" }}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        mt: '2.15vw'
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            ...theme.typography.h3,
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
                                            ...theme.typography.h6,
                                            color: '#8AE6DE',

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
                                        borderTop: box.details ? '0.052vw dashed rgba(255, 255, 255, 0.20)' : 'none',
                                        pt: '1.34vw',
                                        mt: '1.34vw',

                                    }}
                                >
                                    <Typography
                                        sx={{

                                            ...theme.typography.caption,
                                            fontWeight: 400,
                                            color: '#d9d9d9',
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
