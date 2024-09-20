import React from 'react';
import { Box, Typography, createTheme, ThemeProvider } from '@mui/material';
import Howdash1 from '../../assets/Howdash1.png';
import Howdash2 from '../../assets/Howdash2.png';
import Howdash3 from '../../assets/Howdash3.png';
import Analysis from '../../assets/Analysis.png';
import Monitor from '../../assets/Monitor.png';
import Treatment from '../../assets/Treatment.png';
import logo from "../../assets/redvslogo.svg";


const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'sen',
            fontSize: { xs: '12px', sm: '15px', md: '17px', lg: '21px', xl: '24px' },
            color: "#b8b7b7",
            letterSpacing: '0.4px',
            lineHeight: 'normal',
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 500,
            fontSize: { xs: '16px', sm: '20px', md: '24px', lg: '28px', xl: '35px' },
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
    },
});

const howData = [
    { title: 'Monitor Patients\' Health', description: "Track a vast range of your patients' vital signals in near real time", image: Howdash1, icon: Monitor },
    { title: 'Identify Patterns', description: "Visualize patterns in your patients' biometric signals ", image: Howdash2, icon: Analysis },
    { title: 'Personalize Treatments', description: "Customize patient treatments", image: Howdash3, icon: Treatment },
];

const HowBox = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    mt={6}
                    mb={6}
                >
                    <Typography
                        sx={{
                            ...theme.typography.h3,
                            mb: 2.5,
                            lineHeight: '1.5',
                            width:'600',
                        }}
                    >
                            HOW IT WORKS

                            </Typography>
                    <Typography
                        sx={{
                            ...theme.typography.h6,
                            mb:5,
                        }}
                    >
                        Lorem ipsum dolor sit amet consecteturLorem ipsum
                    </Typography>
                </Box>

                <Box
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="center"
                    gap={6}
                    mb={10}
                >
                    {howData.map((box, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: {
                                    xl: '380px',
                                    lg: '323px',
                                    md: '266px',
                                    sm: '180px',
                                    xs: '132px'
                                },
                                height: {
                                    xl: '430px',
                                    lg: '365.5px',
                                    md: '301px',
                                    sm: '210px',
                                    xs: '152px'
                                },
                                borderRadius: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                backgroundColor: '#0A0A0A',
                                border: '1px solid #FFFFFF33',
                                position: 'relative',
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: {xl:-35,lg: -25, md: -19,sm: -14,xs:-11},
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: {
                                        xl: '70px',
                                        lg: '50px',
                                        md: '36px',
                                        sm: '26px',
                                        xs: '19px'
                                    },
                                    height: {
                                        xl: '70px',
                                        lg: '50px',
                                        md: '36px',
                                        sm: '26px',
                                        xs: '19px'
                                    },

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
                                            width: {
                                                xl: '45px',
                                                lg: '32px',
                                                md: '26px',
                                                sm: '17px',
                                                xs: '13px'
                                            }
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
                                    alignItems: 'center',
                                    flexGrow: 1,
                                    gap: 1,
                                    textAlign: 'center',
                                }}
                            >
                                <Typography
                                    sx={{...theme.typography.h3,
                                        fontSize: { xs: '12px', sm: '15px', md: '22px', lg: '26px', xl: '30px' },}}
                                    gutterBottom
                                >
                                    {box.title}
                                </Typography>
                                <Typography
                                    sx={{ px: {md:4,sm:2,xs:2},...theme.typography.h6,
                                    fontSize: { xs: '6px', sm: '9px', md: '14px', lg: '18px', xl: '22px' },
                                    }}
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
                                    height: '200px',
                                    objectFit: 'cover',
                                    borderRadius: '0 0 20px 20px',
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
