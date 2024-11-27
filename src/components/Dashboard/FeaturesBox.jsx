import React from 'react';
import { useState } from 'react';
import { Box, Typography, createTheme, ThemeProvider, IconButton } from '@mui/material';
import desktop1 from '../../assets/desktop1.png';
import desktop2 from '../../assets/desktop2.png';
import desktop3 from '../../assets/desktop3.png';
import desktop4 from '../../assets/desktop4.png';
import desktop5 from '../../assets/desktop5.png';
import desktop6 from '../../assets/desktop6.png';
import icon1 from '../../assets/icon1.svg';
import icon2 from '../../assets/icon2.svg';
import icon3 from '../../assets/icon3.svg';
import icon4 from '../../assets/icon4.svg';
import icon5 from '../../assets/icon5.svg';
import icon6 from '../../assets/icon6.svg';
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
    { title: 'Remote patient monitoring', description: "Track patient health data in real-time for timely interventions.", icon: icon1 },
    { title: 'Adverse event reporting', description: "Document and analyze unexpected medical events for safety.", icon: icon2 },
    { title: 'Geo tracking', description: "Monitors patient locations and data sites for effective planning.", icon: icon3 },
    { title: 'Medication Tracking', description: "Monitors medication adherence and ensures timely refills.", icon: icon4 },
    { title: 'Role Management', description: "Assigns permissions and responsibilities to team members for better management and security.", icon: icon5 },
    { title: 'EDMS', description: "Manages documents electronically for improved accessibility and compliance.", icon: icon6 },
];

const images = [desktop1, desktop2, desktop3, desktop4, desktop5, desktop6]


const FeaturesGrid = () => {
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
                            mb: '5em',
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
                        maxWidth: { md: '250px', lg: '22vw' }
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
                                            width: '24px',
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

                    <Box sx={{alignItems: 'center', display: 'flex'}}>
                    <IconButton sx={{height: '48px', width: '48px', position: 'relative', left: '1em'}} children={
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <rect x="0.875" width="24" height="24" rx="12" fill="black" fill-opacity="0.2"/>
                            <path d="M15 7L10 12L15 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    } onClick={()=>setIndex(index==0?5:index-1)} />
                    <Box sx={{display: 'flex', flexDirection: 'column',justifyContent:'center',alignItems:'center'}}>
                        <Box
                            component="img"
                            src={images[index]}
                            sx={{
                                width: {xs:'220px',sm:'260px',md:'240px',lg:'260px'},
                                height: 'auto',
                            }}
                        />
                    </Box>
                    <IconButton sx={{height: '48px', width: '48px',  position: 'relative', right: '1em'}} children={
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
                                maxWidth: { md: '250px', lg: '22vw' }
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
                                            width: '24px',
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
                                        sx={{...themes.typography.caption}}
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
                                                mt:'8px',
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

export default FeaturesGrid;