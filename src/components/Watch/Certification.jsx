import React from 'react';
import { Box, Typography, createTheme, ThemeProvider } from '@mui/material';
import cerImage from '../../assets/mobileapp/Group 349.png';

const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'Lato',
            fontSize: '0.98vw',
            color: "#F1F1F1",
            letterSpacing: '0.4px',
            lineHeight: 'normal',
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize: '1.294vw',
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
        h9: {
            fontFamily: 'Lato',
            fontSize: '0.98vw',
            textTransform: 'none',
            color: 'rgba(255, 255, 255, 1)',
        },
        h1: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize: '1.85vw',
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
    },
});

const howData = [
    { title: 'ISO 10993', description: "Bio compatibility evidence" },
    { title: 'ISO 13485', description: "QMS certification" },
    { title: 'ISO 80601-2-56', description: "Watch safety and EMC validation" },
    { title: 'ISO 80601-2-61', description: "PPG parameter accuracy" },
    { title: 'IEC 60601-2-27', description: "QMS certification" },
    { title: 'IEC 60601 /\n IEC 60601-1-2', description: "Skin temp parameter accuracy" },
];

const Certification = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                >
                    <Typography
                        sx={{
                            ...theme.typography.h3,
                            mb: '1vw',
                            lineHeight: '1.5',
                        }}
                    >
                        OUR CERTIFICATIONS
                    </Typography>
                    <Typography
                        sx={{
                            ...theme.typography.h6,
                            mb: '6vw',
                        }}
                    >
                        At the moment, we are undergoing the following certifications:
                    </Typography>
                </Box>

                <Box
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="center"
                    alignItems="center"
                    mx="auto"
                    width="70vw"
                    height="45vw"
                    gap="2.5vw"
                    mb="2.5vw"
                >
                    {howData.map((box, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: '17.5vw',
                                height: '21vw',
                                borderRadius: '1.39vw',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                backgroundColor: '#0A0A0A',
                                border: '1px solid #FFFFFF33',
                                position: 'relative',
                            }}
                        >
                            <Box
                                component="img"
                                src={cerImage}
                                alt={box.title}
                                sx={{
                                    width: '100%',
                                    height: '50%',
                                    backgroundColor: '#FFFFFF',
                                    objectFit: 'contain',
                                    borderRadius: '1.39vw 1.39vw 0 0',
                                    padding:'1vw',
                                }}
                            />
                            <Box
                                sx={{
                                    mt: '2vw',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '0.7vw',
                                    textAlign: 'center',
                                }}
                            >
                                <Typography
                                    sx={{ ...theme.typography.h3,width: '9.5vw'
                                    }}
                                    gutterBottom
                                >
                                    {box.title}
                                </Typography>
                                <Typography
                                    sx={{ ...theme.typography.h6,width: '12vw' }}
                                >
                                    {box.description}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Certification;
