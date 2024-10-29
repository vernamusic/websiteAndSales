import React from 'react';
import { Box, Typography, createTheme, ThemeProvider } from '@mui/material';
import Howdash1 from '../../assets/Howdash1.png';
import Howdash2 from '../../assets/Howdash2.png';
import Howdash3 from '../../assets/Howdash3.png';
import Analysis from '../../assets/Analysis.png';
import Monitor from '../../assets/Monitor.png';
import Treatment from '../../assets/Treatment.png';


const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'Lato',
            fontSize:'1.23vw',
            fontWeight: 600,
            color: "#F1F1F1",
            letterSpacing: '0.4px',
            lineHeight: 'normal',
        },
        h3: {
            fontFamily: 'sen',
            fontWeight: 400,
            fontSize:'1.294vw',
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
        caption: {
            fontFamily: 'Lato',
            fontSize:'0.98vw',
            lineHeight:'1.35',
            textTransform: 'none',
            color: 'rgba(255, 255, 255, 1)',

        },
        h1: {
            fontFamily: 'Lato',
            fontWeight: 600,
            fontSize:'1.354vw',
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
    },
});

const howData = [
    { title: 'Monitor Patients\' Health', description: "Track a vast range of your patients' vital signals in near real time", image: Howdash1, icon: Monitor },
    { title: 'Identify Patterns', description: "Visualize patterns in your patients' biometric signals ", image: Howdash2, icon: Analysis },
    { title: 'Personalize Treatments', description: "Customize patient treatments", image: Howdash3, icon: Treatment },
];

const HowBox = () => {
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
                            ...theme.typography.h1,
                            mb: '1vw',
                            lineHeight: '1.5',
                            width: '600',
                        }}
                    >
                        HOW IT WORKS
                    </Typography>
                    <Typography
                        sx={{
                            ...theme.typography.h3,
                            mb: '6vw',
                        }}
                    >
                        Powerful tools designed to enhance your experience and simplify your tasks.
                    </Typography>
                </Box>

                <Box
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="center"
                    gap="2.5vw"
                    pt="1.5vw"
                >
                    {howData.map((box, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: '17.5vw',
                                height: '22.57vw',
                                borderRadius: '1.39vw',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#0A0A0A',
                                border: '1px solid #FFFFFF33',
                                position: 'relative',
                            }}
                        >

                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '-2vw',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '4vw',
                                    height: '4vw',


                                    backgroundColor: '#B50304',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                {typeof box.icon === 'string' ? (
                                    <Box
                                        component="img"
                                        src={box.icon}
                                        alt="Design"
                                        sx={{
                                            width: '2vw'
                                        }}
                                    />
                                ) : (
                                    React.createElement(box.icon, { sx: { color: '#fff', fontSize: 30 } })
                                )}
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    justifyItems: 'center',
                                    alignItems: 'center',
                                    mt:'3.8vw',
                                    gap: '0.5vw',
                                    textAlign: 'center',
                                    width:'100%'
                                }}
                            >
                                <Typography
                                    sx={{...theme.typography.h6,width:'15vw'}}
                                    gutterBottom
                                >
                                    {box.title}
                                </Typography>
                                <Typography
                                    sx={{...theme.typography.caption,width:'12vw'}}
                                >
                                    {box.description}
                                </Typography>
                            </Box>

                            <Box
                                component="img"
                                src={box.image}
                                alt={box.title}
                                sx={{
                                    width: '100%',
                                    height: '45%',
                                    objectFit: 'cover',
                                    borderRadius: '0 0 1.39vw 1.39vw',
                                    mt: 'auto',
                                }}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default HowBox;
