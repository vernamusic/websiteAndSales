import React from 'react';
import { Box, Typography, createTheme, ThemeProvider } from '@mui/material';
import icon1 from '../../assets/watch/feature1.svg';
import icon2 from '../../assets/watch/feature2.svg';
import icon3 from '../../assets/watch/feature3.svg';
import icon4 from '../../assets/watch/feature4.svg';
import icon5 from '../../assets/watch/feature5.svg';
import icon6 from '../../assets/watch/feature6.svg';
import WatchImage from '../../assets/watch.png';
import background from '../../assets/Mobile-BG2.png'

const themes = createTheme({
    typography: {
        h1: {
            fontFamily:'Lato',
            fontSize: '24px',
            fontWeight: 600,
            color: "#FFFFFF",
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 400,
            fontSize: '16px',
            color: "#F1F1F1",
        },
        h6: {
            fontFamily: 'Lato',
            fontWeight: 700,
            lineHeight:'16px',
            fontSize: '16px',
            color: "#FFFFFF",
        },
        caption: {
            fontFamily: 'Lato',
            fontWeight: 400,
            lineHeight:'14px',
            fontSize: '12.64px',
            color: "#D9D9D9",
        },

    },
});

const featureData = [
    { title: 'Photoplethysmography (PPG)', description: "Measure blood volume changes for heart rate monitoring and cardiovascular health.", icon: icon1 },
    { title: 'Electrocardiography (ECG)', description: "Accurate heart rhythm tracking with biopotential based technology.", icon: icon2 },
    { title: 'Electrodermal Activity (EDA)', description: "Assesses skin conductance to understand stress and emotional responses.", icon: icon3 },
    { title: 'Skin Temperature Monitoring', description: "Monitor changes in skin temperature for overall wellness insights.", icon: icon4 },
    { title: 'Motion/Activity Tracking (ACC)', description: "3-axis accelerometer for detecting movements and activity levels.", icon: icon5 },
    { title: 'Data Retrieval and Analysis', description: "Store data locally for offline analysis or live sync with devices.", icon: icon6 },
];

const FeaturesGrid = () => {
    return (
        <ThemeProvider theme={themes}>
            <Box sx={{
                backgroundImage: `url(${background})`,
                maxHeight: '617px',
                minHeight: { xs: '500px', sm: '600px', md: '617px', lg: '617px' },
                width: '100%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                padding: '64px',
                }}>
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
                            lineHeight: '1.5',
                            width: '600',
                            mb: '8px',
                            mt: '1em'
                        }}
                    >
                        ADVANCED FEATURES
                    </Typography>
                    <Typography
                        sx={{
                            ...themes.typography.h3,
                            mb: '3em'
                        }}
                    >
                        Revolutionizing Health Insights Through Advanced Sensor Technology
                    </Typography>
                </Box>

                <Box
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="center"
                    alignItems="center"
                    gap='4'

                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        maxWidth='22em'
                        gap='3em'
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
                                        width: '40px',
                                        height: '40px',
                                        backgroundColor: '#B50304',
                                        position:'absolute',
                                        top:'0em',
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
                                            width: '28px',
                                        }}
                                    />
                                </Box>
                                <Box
                                    sx={{pl:'3.5em',}}
                                >
                                    <Typography
                                        sx={{...themes.typography.h6,}}
                                    >
                                        {feature.title}
                                    </Typography>

                                    <Typography
                                        pt='0.5em'
                                        sx={{...themes.typography.caption,}}
                                    >
                                        {feature.description}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Box
                            component="img"
                            src={WatchImage}
                            sx={{
                                width: 'auto',
                                height: '320px',
                                objectFit: 'cover',
                                margin: '0 4em'
                            }}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="212" height="55" viewBox="0 0 212 55" fill="none">
                          <g filter="url(#filter0_f_4538_833)">
                            <ellipse cx="106" cy="27.5" rx="86" ry="7.5" fill="#141414" fill-opacity="0.6"/>
                          </g>
                          <defs>
                            <filter id="filter0_f_4538_833" x="0" y="0" width="212" height="55" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                              <feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_4538_833"/>
                            </filter>
                          </defs>
                        </svg>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="column"
                        maxWidth='22em'
                        gap='3em'
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
                                        width: '40px',
                                        height: '40px',
                                        backgroundColor: '#B50304',
                                        position:'absolute',
                                        top:'0em',
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
                                            width: '28px',
                                        }}
                                    />
                                </Box>
                                <Box
                                    sx={{pl:'3.5em',}}
                                >
                                    <Typography
                                        sx={{...themes.typography.h6,}}
                                    >
                                        {feature.title}
                                    </Typography>

                                    <Typography
                                        pt='0.5em'
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