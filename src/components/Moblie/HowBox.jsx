import React from 'react';
import { Box, Typography, createTheme, ThemeProvider } from '@mui/material';
import phonehow1 from '../../assets/phonehow1.jpg';
import phonehow2 from '../../assets/phonehow2.png';
import phonehow3 from '../../assets/phonehow3.png';
import phonehow4 from '../../assets/phonehow4.png';
import Platform from '../../assets/mobileapp/platform.svg';
import Easy from '../../assets/mobileapp/Easy.png';
import Time from '../../assets/mobileapp/Time.png';
import Place from '../../assets/mobileapp/Place.png';

const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'Lato',
            fontSize:{xs:'10px',md:'12px',lg:'16px'},
            fontWeight: 600,
            color: "#FFFFFF",
            letterSpacing: '0.4px',
            lineHeight: 'normal',
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 400,
            fontSize:'16px',
            color: "#F1F1F1",
            letterSpacing: '0.4px',
        },
        caption: {
            fontFamily: 'Lato',
            fontSize:'12px',
            fontWeight: 400,
            lineHeight:'1.35',
            textTransform: 'none',
            color: 'rgba(255, 255, 255, 1)',

        },
        h1: {
            fontFamily: 'Lato',
            fontWeight: 600,
            fontSize:'24px',
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
    },
});

const howData = [
    { title: 'Cross-Platform', description: "Available on both Android and iOS", image: phonehow1, icon: Platform },
    { title: 'Easy to Use', description: "Effortless Navigation for Everyone", image: phonehow2, icon: Easy },
    { title: 'Any Time', description: "24/7 assistance in emergency situations", image: phonehow3, icon: Time },
    { title: 'Any Place', description: "Outpatient medical follow-up", image: phonehow4, icon: Place },
];

const HowBox = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                background: 'radial-gradient(97.15% 97.15% at 50% 2.85%, #323232 0%, #1F1F1F 100%)',
                width: '100%',
                position: 'relative',
                padding: {xs:'32px',sm:'32px',md:'88px'},

                }}>
                <Box
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    sx={{
                        display:{xs:'none',sm:'none',md:'flex'},
                    }}
                >
                    <Typography
                        sx={{
                            ...theme.typography.h1,
                            mb: '0.5em',
                            lineHeight: '1.5',
                            width: '600',
                        }}
                    >
                        HOW IT WORKS
                    </Typography>
                    <Typography
                        sx={{
                            ...theme.typography.h3,
                            mb: '4em',
                        }}
                    >
                        Powerful tools designed to enhance your experience and simplify your tasks.
                    </Typography>
                </Box>

                <Box
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="center"
                    gap="2.5em"
                    marginTop="32px"
                    marginBottom="32px"
                >
                    {howData.map((box, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: {xs:'140px',md:'170px',lg:'18.5%'},
                                height: {xs:'153px',md:'180px',lg:'250px'},
                                borderRadius: '16px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#0A0A0A',
                                border: '1px solid #262626',
                                boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.50)',
                                position: 'relative',
                            }}
                        >

                        <Box
                                sx={{
                                    position: 'absolute',
                                    top: '-1.3em',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: {xs:'25px',sm:'25px',md:'40px'},
                                    height: {xs:'25px',sm:'25px',md:'40px'},
                                    padding: '8px',

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
                                            width: {xs:'16px',sm:'16px',md:'2em'},
                                            height: {xs:'16px',sm:'16px',md:'2em'},
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
                                    mt:'2em',
                                    gap: '0.5em',
                                    textAlign: 'center',
                                    width:'100%'
                                }}
                            >
                                <Typography
                                    sx={{...theme.typography.h6,}}
                                    gutterBottom
                                >
                                    {box.title}
                                </Typography>
                                <Typography
                                    sx={{...theme.typography.caption,}}
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
                                    height: '60%',
                                    objectFit: 'cover',
                                    borderRadius: '0 0 16px 16px',
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
