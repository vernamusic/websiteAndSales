import React from 'react';
import { Box, Typography, createTheme, ThemeProvider } from '@mui/material';
import phoneImage from '../../assets/iphonescreen2.png';
import Responsive from '../../assets/Location.png';
import Support from '../../assets/mobileapp/OnlineSupport.png';
import AvailableUpdates from '../../assets/mobileapp/Treatment.png';
import Relax from '../../assets/mobileapp/AI Chatting.png';
import Clock from '../../assets/mobileapp/Pulse.png';
import SecurityShield from '../../assets/mobileapp/Heart with Pulse.png';

const themes = createTheme({
    typography: {
        h1: {
            fontFamily:'Lato',
            fontSize: '1.39vw',
            fontWeight: 600,
            color: "#F1F1F1",
        },
        h3: {
            fontFamily: 'sen',
            fontWeight: 400,
            fontSize: '1.25vw',
            color: "rgba(241, 241, 241, 1)",
        },
        h6: {
            fontFamily: 'Lato',
            fontWeight: 600,
            lineHeight:'1.4vw',
            fontSize: '1.15vw',
            color: "#FFFFFF",
        },
        caption: {
            fontFamily: 'sen',
            fontWeight: 400,
            lineHeight:'1.20vw',
            fontSize: '0.95vw',
            color: "rgba(241, 241, 241, 1)",
        },

    },
});

const featureData = [
    { title: 'Geo tracking', description: "Uses GPS to determine user location. Monitors real-time location data for users. ", icon: Responsive },
    { title: 'Emergency call', description: "Connects users to caregiver. Ensures quick response in critical situations..", icon: Support },
    { title: 'Adverse event reporting', description: "Reports unexpected incidents in clinical trials for safety and compliance.", icon: AvailableUpdates },
    { title: 'AI chat bot', description: "Engages users with automated responses. Provides 24/7 support for inquiries.", icon: Relax },
    { title: 'Vital signs', description: "Measures essential health indicators like heart rate and temperature. ", icon: Clock },
    { title: 'ECG', description: "Monitors the heart's electrical activity. Provides real-time data for health assessments.", icon: SecurityShield },
];

const FeaturesGrid = () => {
    return (
        <ThemeProvider theme={themes}>
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
                            ...themes.typography.h1,
                            mb: '1vw',
                            lineHeight: '1.5',
                            width: '600',
                        }}
                    >
                        ADVANCE FEATURES
                    </Typography>
                    <Typography
                        sx={{
                            ...themes.typography.h3,
                            mb: '6vw',
                        }}
                    >
                        Integrate advanced features to improve user experience
                    </Typography>
                </Box>
            
            <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="center"
                alignItems="center"
                gap='4vw'

            >
                <Box
                    display="flex"
                    flexDirection="column"
                    maxWidth='22vw'
                    gap='3.8vw'
                >
                    {featureData.slice(0, 3).map((feature, index) => (
                        <Box
                            key={index}
                            position="relative"
                            display="flex"
                            flexDirection="row"
                        >
                            <Box
                                sx={{
                                    width: '4vw',
                                    height: '4vw',
                                    backgroundColor: '#B50304',
                                    position:'absolute',
                                    top:'0vw',
                                    clipPath: 'circle(45%)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={feature.icon}
                                    alt={feature.title}
                                    sx={{
                                        width: '2vw',
                                    }}
                                />
                            </Box>
                            <Box
                                sx={{pl:'5.5vw',}}
                            >
                                <Typography
                                    sx={{...themes.typography.h6,}}
                                >
                                    {feature.title}
                                </Typography>

                                <Typography
                                    pt='0.5vw'
                                    sx={{...themes.typography.caption,}}
                                >
                                    {feature.description}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>

                <Box
                    component="img"
                    src={phoneImage}
                    sx={{
                        width: '16vw',
                        height: 'auto',
                        objectFit: 'cover',
                    }}
                />
                <Box
                    display="flex"
                    flexDirection="column"
                    maxWidth='21vw'
                    gap='3.8vw'
                >
                    {featureData.slice(3, 6).map((feature, index) => (
                        <Box
                            key={index}
                            position="relative"
                            display="flex"
                            flexDirection="row"
                        >
                            <Box
                                sx={{
                                    width: '4vw',
                                    height: '4vw',
                                    backgroundColor: '#B50304',
                                    position:'absolute',
                                    top:'0vw',
                                    clipPath: 'circle(45%)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',

                                }}
                            >
                                <Box
                                    component="img"
                                    src={feature.icon}
                                    alt={feature.title}
                                    sx={{
                                        width: '2vw',
                                    }}
                                />
                            </Box>
                            <Box
                                sx={{pl:'5.5vw',}}
                            >
                                <Typography
                                    sx={{...themes.typography.h6,}}
                                >
                                    {feature.title}
                                </Typography>

                                <Typography
                                    pt='0.5vw'
                                    sx={{...themes.typography.caption,}}
                                >
                                    {feature.description}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
        </ThemeProvider>
    );
};

export default FeaturesGrid;
