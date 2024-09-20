import React from 'react';
import { Box, Typography, createTheme, ThemeProvider } from '@mui/material';
import DashboardImage from '../../assets/newdashboard.png';
import Responsive from '../../assets/dashboard/Responsive.png';
import AirportSecurity from '../../assets/dashboard/AirportSecurity.png';
import Call from '../../assets/dashboard/Call.png';
import Treatment from '../../assets/dashboard/Treatment.png';
import AppointmentScheduling from '../../assets/dashboard/AppointmentScheduling.png';
import Tracking from '../../assets/dashboard/Tracking.png';
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
    { title: 'Data Visualization', description: "Visualize biometric data from each one of your patients", icon: Responsive },
    { title: 'Checkup Reminders', description: "Set up recurrent alarms for your patients to remind them", icon: AirportSecurity },
    { title: 'Automatic Emergency Calls', description: "Be instantly notified when one of your patients has an emergency that is detected by our algorithms", icon: Call },
    { title: 'Health Crisis Reports', description: "Keep track of your patients' health crisis and relate them with their biometric data with our visualization tools", icon: Treatment },
    { title: 'Appointment Requests', description: "Receive and manage appointment requests through the web app", icon: AppointmentScheduling },
    { title: 'Medication Tracking', description: "Keep track of your patients' medication and relate it with their biometric responses", icon: Tracking },
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
                    gap={3}
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
                        src={DashboardImage}
                        sx={{
                            width: { xs: '140px', sm: '180px', md: '250px', lg: '350px',xl:'460px' },
                            height: 'auto',
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