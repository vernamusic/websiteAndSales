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
            fontWeight: {xs:500,sm:600},
            fontSize: {xs:'2.58vw',sm:'1.25vw'},
            color: "#FFFFFF",
        },
        h6: {
            fontFamily: 'Lato',
            fontSize: {xs:'2.4vw',sm:'1.11vw'},
            color: "rgba(191, 191, 191, 1)",
            fontWeight: {xs:400,sm:500},
            lineHeight: {xs:'3.4vw',sm:'1.3vw'},
        },
        caption: {
            fontFamily: 'Lato',
            fontSize: {xs:'2.22vw',sm:'0.97vw'},
            textTransform: 'none',
            lineHeight: {xs:'3.5vw',sm:'1.5vw'},
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
                        gap: {xs:'5vw',sm:'1.86vw'},
                        width: {xs:'87vw',sm:'85vw'},
                    }}
                >
                    {data.map((box, index) => (
                        <Box
                            display="flex"
                            key={index}
                            sx={{
                                flexDirection: "column",
                                borderRadius: {xs:'2.22vw',sm:'1.11vw'},
                                width: {xs:'35vw',sm:'18vw'},
                                height: {xs:'52.6vw',sm:'26vw'},
                                py: '0vw',
                                boxSizing: 'border-box',
                                boxShadow: '0vw 0.61vw 0.61vw 0vw rgba(0, 0, 0, 0.45)',
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
                                    width: {xs:'5.5vw',sm:'2.5vw'},
                                    height: {xs:'5.5vw',sm:'2.5vw'},
                                    position: "absolute",
                                    top: {xs:'2vw',sm:"0.625vw"},
                                    left: {xs:'2vw',sm:'0.625vw'},
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
                                            borderRadius: { xs: '20vw', sm: '5.21vw'},
                                            border: '0.052vw dashed #8AE6DE',
                                            p: { xs: '1vw', sm: '0.52vw'},
                                            width: { xs: '17.33vw', sm: '7.44vw' },
                                            height: { xs: '17.33vw', sm: '7.44vw' },
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            transition: 'ease-in 300ms',
                                            ":hover": {
                                                transform: 'scale(1.1)'
                                            },

                                        }}
                                    >
                                    <img
                                            src={box.photo}
                                            alt="circle"
                                            style={{
                                                border: '0.052vw solid #8AE6DE',
                                                width:'100%',
                                                height:'100%',
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
