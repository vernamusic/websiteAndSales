import React from 'react';
import { Box, Typography, createTheme, ThemeProvider } from '@mui/material';
import Responsive from '../../assets/watch/Responsive.png';
import Analyze from '../../assets/watch/Analyze.png';
import Temperature from '../../assets/watch/Temperature.png';
import CryptocurrencyWallet from '../../assets/watch/CryptocurrencyWallet.png';
import Sleep from '../../assets/watch/Sleep.png';
import FinancialGrowthAnalysis from '../../assets/watch/FinancialGrowthAnalysis.png';
import WatchImage from '../../assets/watch.png';

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
    { title: 'Data Visualization', description: "Heart Rate and Heart Rate Variability , Pulse Oximetry and Beats Per Minute (BPM)", icon: Responsive },
    { title: 'EDA', description: "Electrodermal Activity for stress, cognitive/mental health and epilepsy seizure monitoring", icon: Analyze },
    { title: 'Temperature', description: "Skin and ambient temperature monitoring", icon: Temperature },
    { title: 'MEMs', description: "MEMs for passive patient monitoring such as fall detection, activity monitoring and seizure monitoring", icon: CryptocurrencyWallet },
    { title: 'Sleep', description: "Sleep phase identification and analysis", icon: Sleep },
    { title: 'Analysis', description: "Bioelectrical impedance analysis for fat mass/fat free mass and hydration level estimations", icon: FinancialGrowthAnalysis },
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
                    mt='2.8vw'
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="center"
                    alignItems="center"
                    gap='3vw'

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
                        src={WatchImage}
                        sx={{
                            width: '18vw',
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