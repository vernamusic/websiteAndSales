import React from 'react';
import { Box, Typography, createTheme, ThemeProvider } from '@mui/material';
import Howdash1 from '../../assets/Howdash1.jpg';
import Howdash2 from '../../assets/Howdash2.jpg';
import Howdash3 from '../../assets/Howdash3.jpg';
import Howdash4 from '../../assets/Howdash4.jpg';
import icon1 from '../../assets/HowdashIcon1.svg';
import icon2 from '../../assets/HowdashIcon2.svg';
import icon3 from '../../assets/HowdashIcon3.svg';
import icon4 from '../../assets/HowdashIcon4.svg';


const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'Lato',
            fontSize:'16px',
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
            color: '#EEEEEE',

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
    { title: 'Easy Access', description: "Securely access patient Health information from any device!", image: Howdash1, icon: icon1 },
    { title: 'Real-Time Notifications', description: "Receive instant alerts for patient emergencies!", image: Howdash2, icon: icon2 },
    { title: 'Patient Health Monitoring', description: "Always stay informed about the health status of your patients.", image: Howdash3, icon: icon3 },
    { title: 'Compliance Tracking', description: "Ensure adherence to health regulations and guidelines!", image: Howdash4, icon: icon4 },
];

const HowBox = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                background: 'radial-gradient(97.15% 97.15% at 50% 2.85%, #323232 0%, #1F1F1F 100%)',
                width: '100%',
                height: '579px',
                padding: '80px'
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
                >
                    {howData.map((box, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: '21%',
                                height: '270px',
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
                                    width: '40px',
                                    height: '40px',
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
                                            width: '2em'
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
                                    width:'90%'
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
                                    height: '55%',
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
