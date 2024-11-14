import React, {useState} from 'react';
import {Box, Typography, createTheme, ThemeProvider, IconButton} from '@mui/material';
import icon1 from '../../assets/watch/feature1.svg';
import icon2 from '../../assets/watch/feature2.svg';
import icon3 from '../../assets/watch/feature3.svg';
import icon4 from '../../assets/watch/feature4.svg';
import icon5 from '../../assets/watch/feature5.svg';
import icon6 from '../../assets/watch/feature6.svg';
import watch1 from '../../assets/watch1.png';
import watch2 from '../../assets/watch2.png';
import watch3 from '../../assets/watch3.png';
import watch4 from '../../assets/watch4.png';
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

const watchImage = [watch1,watch2,watch3,watch4]

const FeaturesGrid = () => {
    const [index, setIndex] = useState(0)
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
                    <Box sx={{alignItems: 'center', display: 'flex', margin: '0 3em'}}>
                        <IconButton sx={{height: '48px', width: '48px'}} children={
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <rect x="0.875" width="24" height="24" rx="12" fill="black" fill-opacity="0.2"/>
                                <path d="M15 7L10 12L15 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        } onClick={()=>setIndex(index==0?3:index-1)} />
                        <Box sx={{display: 'flex', flexDirection: 'column'}}>
                            <Box
                                component="img"
                                src={watchImage[index]}
                                sx={{
                                    width: 'auto',
                                    height: '400px',
                                    objectFit: 'cover',
                                }}
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" width="192" height="28" viewBox="0 0 192 28" fill="none">
                                <g filter="url(#filter0_f_4415_417)">
                                    <ellipse cx="96" cy="14" rx="88" ry="6" fill="#2C2C2C" fill-opacity="0.6"/>
                                </g>
                                <defs>
                                    <filter id="filter0_f_4415_417" x="0" y="0" width="192" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                        <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_4415_417"/>
                                    </filter>
                                </defs>
                            </svg>
                        </Box>
                        <IconButton sx={{height: '48px', width: '48px'}} children={
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <rect x="24.125" y="24" width="24" height="24" rx="12" transform="rotate(-180 24.125 24)" fill="black" fill-opacity="0.2"/>
                                <path d="M10 17L15 12L10 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        } onClick={()=>setIndex((index+1)%4)} />
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