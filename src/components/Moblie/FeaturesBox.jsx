import React from 'react';
import { Box, Typography, createTheme, ThemeProvider } from '@mui/material';
import phoneImage from '../../assets/iphonescreen2.png';
import Responsive from '../../assets/mobileapp/Responsive.png';
import Support from '../../assets/mobileapp/OnlineSupport.png';
import AvailableUpdates from '../../assets/mobileapp/AvailableUpdates.png';
import Relax from '../../assets/mobileapp/Relax.png';
import Clock from '../../assets/mobileapp/Clock.png';
import SecurityShield from '../../assets/mobileapp/SecurityShield.png';

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
    { title: 'Responsive mobile design', description: "Experience seamless browsing on any device with our fully responsive mobile design.", icon: Responsive },
    { title: 'Friendly support team', description: "Our friendly support team is here to assist you every step of the way.", icon: Support },
    { title: 'Free update forever', description: "Enjoy peace of mind with free updates for life, keeping your experience fresh and secure", icon: AvailableUpdates },
    { title: 'Easy to use', description: "Designed with you in mind, our interface is easy to use for everyone, regardless of skill level.", icon: Relax },
    { title: 'Quick access', description: "Get quick access to all features, so you can focus on what matters most", icon: Clock },
    { title: 'Security', description: "Your security is our top priority, with robust measures in place to protect your data.", icon: SecurityShield },
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
                gap={10} 
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    gap={0}
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
                                sx={{width: { xs: '140px', sm: '180px', md: '320px', lg: '380px',xl:'450px' },pl:{xl:13,lg:10,md:8},}}
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
                    src={phoneImage}
                    sx={{
                        width: { xs: '140px', sm: '180px', md: '200px', lg: '250px',xl:'300px' },
                        height: 'auto',
                        objectFit: 'cover',
                        borderRadius: '8px',
                    }}
                />
                <Box
                    display="flex"
                    flexDirection="column"
                    gap={0}
                    flex={1}
                >
                    {featureData.slice(3, 6).map((feature, index) => (
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
                                sx={{width: { xs: '140px', sm: '180px', md: '320px', lg: '380px',xl:'450px' },pl:{xl:13,lg:10,md:8},}}
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
