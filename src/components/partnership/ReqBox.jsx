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
            fontSize:'1.23vw',
            color: "#F1F1F1",
            letterSpacing: '0.4px',
            lineHeight: 'normal',
        },
        h3: {
            fontFamily: 'sen',
            fontWeight: 400,
            fontSize:'1.294vw',
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
        h9: {
            fontFamily: 'Lato',
            fontSize:'0.98vw',
            textTransform: 'none',
            color: 'rgba(255, 255, 255, 1)',

        },
        h1: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize:'1.4583vw',
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
    },
});

const howData = [
    { title: 'International stakeholders', description: "Swiss and International stakeholders in the epilepsy field", image: Req1, icon: BusinessDocumentation },
    { title: 'Clinical trial ', description: "Clinical trial collaborators interested in implementing our solutions", image: Req2, icon: DoctorFemale },
    { title: 'Collaborators', description: "Remote care monitoring collaborators interested in implementing our solutions", image: Req3, icon: SystemTask },
];

const CertificationBox = () => {
    return (
        <ThemeProvider theme={theme}>
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
                            ...theme.typography.h1,
                            mb: '1vw',
                            lineHeight: '1.5',
                            width: '600',
                        }}
                    >
                        BECOME A PARTNER
                    </Typography>
                    <Typography
                        sx={{
                            ...theme.typography.h6,
                            mb: '6vw',
                        }}
                    >
                        We are especially looking for partners that are:
                    </Typography>
                </Box>

                <Box
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="center"
                    gap="2.5vw"
                    pt="1.5vw"
                >
                    {howData.map((box, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: '17.5vw',
                                height: '22.57vw',
                                borderRadius: '1.39vw',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#0A0A0A',
                                border: '1px solid #FFFFFF33',
                                position: 'relative',
                            }}
                        >

                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '-2vw',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '4vw',
                                    height: '4vw',


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
                                            width: '2vw'
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
                                    mt:'3.8vw',
                                    gap: '0.7vw',
                                    textAlign: 'center',
                                    width:'15vw'
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
                                    height: '45%',
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
