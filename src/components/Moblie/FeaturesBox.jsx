import React from 'react';
import { useState } from 'react';
import { Box, Typography, createTheme, ThemeProvider, IconButton } from '@mui/material';
import phoneImage1 from '../../assets/1.svg';
import phoneImage2 from '../../assets/2.svg';
import phoneImage3 from '../../assets/3.svg';
import phoneImage4 from '../../assets/4.svg';
import phoneImage5 from '../../assets/5.svg';
import phoneImage6 from '../../assets/6.svg';
import Geo from '../../assets/mobileapp/Geo.svg';
import Call from '../../assets/mobileapp/Call.svg';
import Report from '../../assets/mobileapp/Report.svg';
import Chat from '../../assets/mobileapp/Chat.svg';
import Monitor from '../../assets/mobileapp/Monitor.svg';
import ECG from '../../assets/mobileapp/ECG.svg';
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
    { title: 'Geo tracking', description: "Uses GPS to determine user location. Monitors real-time location data for users. ", icon: Geo },
    { title: 'Emergency call', description: "Connects users to caregiver. Ensures quick response in critical situations..", icon: Call },
    { title: 'Adverse event reporting', description: "Reports unexpected incidents in clinical trials for safety and compliance.", icon: Report },
    { title: 'AI chat bot', description: "Engages users with automated responses. Provides 24/7 support for inquiries.", icon: Chat },
    { title: 'Remote patient monitoring', description: "Track and monitor vital signs effectively using the Vitruvian Shield service. ", icon: Monitor },
    { title: 'ECG recording', description: "Monitors the heart's electrical activity. Provides real-time data for health assessments.", icon: ECG },
];

const phoneImages = [phoneImage1, phoneImage2, phoneImage3, phoneImage4, phoneImage5, phoneImage6]

const FeaturesBox = () => {
    const [index, setIndex] = useState(0)

    return (
        <ThemeProvider theme={themes}>
            <Box sx={{
                backgroundImage: `url(${background})`,
                height: '100vh',
                width: '100%',
                position: 'relative',
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                padding: '32px',
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
                            mb: '8px'
                        }}
                    >
                        ADVANCED FEATURES
                    </Typography>
                    <Typography
                        sx={{
                            ...themes.typography.h3,
                            mb: '40px'
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
                    maxWidth='25vw'
                    gap='3.8vw'
                >
                    {featureData.slice(0, 3).map((feature, i) => (
                        <Box
                            key={i}
                            position="relative"
                            display="flex"
                            flexDirection="row"
                            onClick={()=>setIndex(i)}
                        >
                            <Box
                                sx={{
                                    width: '40px',
                                    height: '40px',
                                    backgroundColor: `${i==index?'#910203':'#B50304'}`,
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
                                        width: '28px',
                                    }}
                                />
                            </Box>
                            <Box
                                sx={{pl:'4vw',}}
                            >
                                <Typography
                                    sx={{...themes.typography.h6, width: 'fit-content', pb: '2px', borderBottom: `${index == i?'1px solid white':'none'}`}}
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
                
                <Box sx={{alignItems: 'center', display: 'flex'}}>
                    <IconButton sx={{height: '48px', width: '48px'}} children={
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <rect x="0.875" width="24" height="24" rx="12" fill="black" fill-opacity="0.2"/>
                            <path d="M15 7L10 12L15 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    } onClick={()=>setIndex(index==0?5:index-1)} />
                    <Box
                        component="img"
                        src={phoneImages[index]}
                        sx={{
                            width: 'auto',
                            height: '400px',
                            objectFit: 'cover',
                        }}
                    />
                    <IconButton sx={{height: '48px', width: '48px'}} children={
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <rect x="24.125" y="24" width="24" height="24" rx="12" transform="rotate(-180 24.125 24)" fill="black" fill-opacity="0.2"/>
                            <path d="M10 17L15 12L10 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    } onClick={()=>setIndex((index+1)%6)} />
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    maxWidth='25vw'
                    gap='3.8vw'
                >
                    {featureData.slice(3, 6).map((feature, i) => (
                        <Box
                            key={i}
                            position="relative"
                            display="flex"
                            flexDirection="row"
                            onClick={()=>setIndex(i+3)}
                        >
                            <Box
                                sx={{
                                    width: '40px',
                                    height: '40px',
                                    backgroundColor: `${i+3==index?'#910203':'#B50304'}`,
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
                                        width: '28px',
                                    }}
                                />
                            </Box>
                            <Box
                                sx={{pl:'4vw',}}
                            >
                                <Typography
                                    sx={{...themes.typography.h6, width: 'fit-content', pb: '2px', borderBottom: `${index == i+3?'1px solid white':'none'}`}}
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

export default FeaturesBox;
