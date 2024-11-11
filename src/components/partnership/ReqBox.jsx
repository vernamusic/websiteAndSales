import React from 'react';
import { Box, Typography, createTheme, ThemeProvider } from '@mui/material';
import BusinessDocumentation from '../../assets/BusinessDocumentation.png';
import DoctorFemale from '../../assets/DoctorFemale.png';
import SystemTask from '../../assets/SystemTask.png';
import Req1 from '../../assets/Req1.png';
import Req2 from '../../assets/Req2.png';
import Req3 from '../../assets/Req3.png';

const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'Lato',
            fontWeight: 600,
            fontSize:'16px',
            color: "#FFFFFF",
            letterSpacing: '0.4px',
            lineHeight: 'normal',
        },
        h9: {
            fontWeight: 400,
            fontFamily: 'Lato',
            fontSize:'12px',
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
    { title: 'International stakeholders', description: "Swiss and International stakeholders in the epilepsy field", image: Req1, icon: BusinessDocumentation },
    { title: 'Clinical Research Contractors (CRO)', description: "Clinical trial collaborators interested in implementing our solutions", image: Req2, icon: DoctorFemale },
    { title: 'Collaborators', description: "Remote care monitoring collaborators interested in implementing our solutions", image: Req3, icon: SystemTask },
];

const CertificationBox = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box
            sx={{
                
                background:'radial-gradient(97.15% 97.15% at 50% 2.85%, #323232 0%, #1F1F1F 100%)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',

            }}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    paddingTop="56px"
                    
                >
                    <Typography
                        sx={{
                            ...theme.typography.h1,
                        }}
                    >
                        We are especially looking for partners that are:
                    </Typography>
                </Box>

                <Box
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="center"
                    gap="48px"
                    pt="1.5vw"
                >
                    {howData.map((box, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: '248px',
                                height: '272px',
                                borderRadius: '16px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#141414',
                                border: '1px solid #262626',
                                boxShadow:'0px 2px 8px 0px #00000080',
                                position: 'relative',
                                mt:'48px',
                            }}
                        >

                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: -22.5,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '48px',
                                    height: '48px',
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
                                            width: '1.4vw'
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
                                    mt:'40px',
                                    textAlign: 'center',
                                    maxWidth:'80%',
                                }}
                            >
                                <Typography
                                    sx={{...theme.typography.h6,}}
                                    gutterBottom
                                >
                                    {box.title}
                                </Typography>
                                <Typography
                                    sx={{...theme.typography.h9,}}
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
                                    height: '144px',
                                    objectFit: 'cover',
                                    borderRadius: '0 0 1.39vw 1.39vw',
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

export default CertificationBox;
