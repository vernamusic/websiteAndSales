import React from 'react';
import { Box, Typography, createTheme, ThemeProvider } from '@mui/material';
import Responsive from '../../assets/watch/Responsive.png';
import Analyze from '../../assets/watch/Analyze.png';
import Temperature from '../../assets/watch/Temperature.png';
import CryptocurrencyWallet from '../../assets/watch/CryptocurrencyWallet.png';
import Sleep from '../../assets/watch/Sleep.png';
import FinancialGrowthAnalysis from '../../assets/watch/FinancialGrowthAnalysis.png';
import WatchImage from '../../assets/watch.png';

const theme = createTheme({
    typography: {
        h6: {
            fontFamily:'sen',
            fontSize: { xs: '6px', sm: '10px', md: '14px', lg: '16px', xl: '20px' },
            fontWeight: 400,
            letterSpacing: '0.4px',
            color: "#F1F1F1",
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize: { xs: '12px', sm: '15px', md: '22px', lg: '26px', xl: '30px' },
            color: "#FFFFFF",
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
        <ThemeProvider theme={theme}>
            <Box>
                <Box sx={{mt:'44px',mb:'44px', textAlign: 'center'}}>
                    <Typography sx={{...theme.typography.h3,}}>

                        ADVANCE FEATURES
                    </Typography>
                    <Typography sx={{mt:{ xs: '12px', sm: '15px', md: '22px', lg: '26px', xl: '30px' },
                        ...theme.typography.h6,
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
                    mb={10}
                    gap={6}
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        gap={1}
                        flex={1}
                    >
                        {featureData.slice(0, 3).map((feature, index) => (
                            <Box
                                key={index}
                                position="relative"
                                display="flex"
                                flexDirection="row"
                                py={3}
                            >
                                <Box
                                    sx={{
                                        width: {
                                            xl: '80px',
                                            lg: '60px',
                                            md: '50px',
                                            sm: '40px',
                                            xs: '30px'
                                        },
                                        height: {
                                            xl: '80px',
                                            lg: '60px',
                                            md: '50px',
                                            sm: '40px',
                                            xs: '30px'
                                        },
                                        backgroundColor: '#B50304',
                                        position:'absolute',
                                        top:{xl:'10%',md:'13%'},
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
                                            width: {
                                                xl: '45px',
                                                lg: '32px',
                                                md: '26px',
                                                sm: '17px',
                                                xs: '13px'
                                            }
                                        }}
                                    />
                                </Box>
                                <Box
                                    sx={{width: { xs: '140px', sm: '180px', md: '320px', lg: '380px',xl:'400px' },ml:{xl:13,lg:10,md:8},}}
                                >
                                    <Typography
                                        sx={{...theme.typography.h3,}}
                                    >
                                        {feature.title}
                                    </Typography>

                                    <Typography
                                        pt={1.5}
                                        sx={{...theme.typography.h6,}}
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
                            width: { xs: '140px', sm: '180px', md: '250px', lg: '350px',xl:'400px' },
                            height: 'auto',
                            borderRadius: '8px',
                        }}
                    />
                    <Box
                        display="flex"
                        flexDirection="column"
                        gap={1}
                        flex={1}
                    >
                        {featureData.slice(3, 6).map((feature, index) => (
                            <Box
                                key={index}
                                position="relative"
                                display="flex"
                                flexDirection="row"
                                py={4}
                            >
                                <Box
                                    sx={{
                                        width: {
                                            xl: '80px',
                                            lg: '60px',
                                            md: '50px',
                                            sm: '40px',
                                            xs: '30px'
                                        },
                                        height: {
                                            xl: '80px',
                                            lg: '60px',
                                            md: '50px',
                                            sm: '40px',
                                            xs: '30px'
                                        },
                                        backgroundColor: '#B50304',
                                        position:'absolute',
                                        top:{xl:'10%',md:'13%'},
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
                                            width: {
                                                xl: '45px',
                                                lg: '32px',
                                                md: '26px',
                                                sm: '17px',
                                                xs: '13px'
                                            }
                                        }}
                                    />
                                </Box>
                                <Box
                                    sx={{width: { xs: '140px', sm: '180px', md: '320px', lg: '380px',xl:'400px' },ml:{xl:13,lg:10,md:8},}}
                                >
                                    <Typography
                                        sx={{...theme.typography.h3,}}
                                    >
                                        {feature.title}
                                    </Typography>

                                    <Typography
                                        pt={1.5}
                                        sx={{...theme.typography.h6,}}
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