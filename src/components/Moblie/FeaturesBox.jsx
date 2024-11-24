import React from 'react';
import { useState } from 'react';
import { Box, Typography, createTheme, ThemeProvider, IconButton } from '@mui/material';
import phoneImage1 from '../../assets/1.jpg';
import phoneImage2 from '../../assets/2.jpg';
import phoneImage3 from '../../assets/3.jpg';
import phoneImage4 from '../../assets/4.jpg';
import phoneImage5 from '../../assets/5.jpg';
import phoneImage6 from '../../assets/6.jpg';
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
    { title: 'Emergency call', description: "Connects users to caregiver. Ensures quick response in critical situations.", icon: Call },
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
                minHeight: 'auto',
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
                            display:{xs:'none',sm:'none',md:'block'},
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
                            mb: '3em',
                            display:{xs:'none',sm:'none',md:'block'},
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
                gap='4'

            >
                <Box
                    display="flex"
                    flexDirection="column"
                    gap='3em'
                    sx={{
                        maxWidth:{md:'15em',lg:'23em'}
                    }}
                >
                    {featureData.slice(0, 3).map((feature, i) => (
                        <Box
                            key={i}
                            position="relative"
                            flexDirection="row"
                            sx={{
                                display:{xs:'none',sm:'none',md:'block'},
                            }}
                            onClick={()=>setIndex(i)}
                        >
                            <Box
                                sx={{
                                    width: '40px',
                                    height: '40px',
                                    backgroundColor: `${i==index?'#910203':'#B50304'}`,
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
                                    sx={{...themes.typography.h6, width: 'fit-content', pb: '2px', borderBottom: `1px solid ${index == i?'white':'transparent'}`, cursor: 'pointer'}}
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
                    } onClick={()=>setIndex(index==0?5:index-1)} />
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <Box
                            component="img"
                            src={phoneImages[index]}
                            sx={{
                                width: {xs:'190px',sm:'220px',md:'200px',lg:'250px'},
                                height: 'auto',
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
                    } onClick={()=>setIndex((index+1)%6)} />
                </Box>
                <Box
                    flexDirection="column"
                    maxWidth='22em'
                    gap='3em'
                    sx={{display:{xs:'none',sm:'none',md:'flex'},}}
                >
                    {featureData.slice(3, 6).map((feature, i) => (
                        <Box
                            key={i}
                            position="relative"
                            display="flex"
                            flexDirection="row"
                            onClick={()=>setIndex(i+3)}
                            sx={{
                                maxWidth:{md:'15em',lg:'23em'}
                            }}
                        >
                            <Box
                                sx={{
                                    width: '40px',
                                    height: '40px',
                                    backgroundColor: `${i+3==index?'#910203':'#B50304'}`,
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
                                    sx={{...themes.typography.h6, width: 'fit-content', pb: '2px', borderBottom: `1px solid ${index == i+3?'white':'transparent'}`, cursor: 'pointer'}}
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
            {/* Details for mobile */}
            <Box
                    flexDirection="column"
                    maxWidth='22em'
                    gap='3em'
                    sx={{display:{xs:'flex',sm:'flex',md:'none'},}}
                >
                    {featureData.slice(0, 6).map((feature, i) => (
                        index === i && (
                            <Box
                                key={i}
                                position="relative"
                                flexDirection="row"
                                onClick={() => setIndex(i)}
                                sx={{ display: 'flex' }}                            
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            ...themes.typography.h6,
                                            width: 'fit-content',
                                            pb: '2px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {feature.title}
                                    </Typography>

                                    <Typography
                                        pt='0.5em'
                                        sx={{ ...themes.typography.caption,
                                            textAlign:'center',
                                         }}
                                    >
                                        {feature.description}
                                    </Typography>
                                </Box>
                            </Box>
                        )
                    ))}

            </Box>
            </Box>

            
        </Box>
        </ThemeProvider>
    );
};

export default FeaturesBox;
