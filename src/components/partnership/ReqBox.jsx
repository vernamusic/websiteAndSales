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
            fontSize:{xs:'3.34vw',sm:'1.11vw'},
            lineHeight: 'normal',
            color: "#FFFFFF",
        },
        caption: {
            fontWeight: 400,
            fontFamily: 'Lato',
            fontSize:{xs:'2.5vw',sm:'0.83vw'},
            lineHeight: {xs:'3.61vw',sm:'1.08vw'},
            textTransform: 'none',
            color: '#EEEEEE',

        },
        h1: {
            fontFamily: 'Lato',
            fontWeight: 600,
            fontSize:'1.67vw',
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
            <Box
            sx={{
                background:'radial-gradient(97.15% 97.15% at 50% 2.85%, #323232 0%, #1F1F1F 100%)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',

            }}
            >
                <Box
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    paddingTop="2vw"
                    sx={{
                        display:{xs:'none',sm:'flex'}
                    }}
                >
                    <Typography
                        sx={{
                            ...theme.typography.h1,
                        }}
                    >
                        We are especially looking for partners that are:
                    </Typography>
                </Box>

               <Box display="flex" justifyContent="center">
               <Box
                    sx={{
                        my:{xs:'6vw',sm:'2vw'},
                        display:'flex',
                        flexWrap: 'wrap',
                        justifyContent:{xs:'start',sm:'center'},
                        width:{xs:'90vw',sm:'70vw'},
                        gap:{xs:'2vw',sm:'4vw'},

                    }}
                >
                    {howData.map((box, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: {xs:'43.33vw',sm:'17.22vw'},
                                height: {xs:'49.44vw',sm:'18.89vw'},
                                borderRadius: '16px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#141414',
                                border: '1px solid #262626',
                                boxShadow:'0px 2px 8px 0px #00000080',
                                position: 'relative',
                                mt:{xs:'16px',sm:'3.8vw'},
                            }}
                        >

                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: {xs:'-3vw',sm:'-1.5vw'},
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: {xs:'7.89vw',sm:'3.1vw'},
                                    height: {xs:'7.89vw',sm:'3.1vw'},
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
                                            width: {xs:'4.89vw',sm:'1.5vw'},
                                            height: {xs:'4.89vw',sm:'1.5vw'},
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
                                    mt:{xs:'5.5vw',sm:'2vw'},
                                    textAlign: 'center',

                                    gap:'0vw'
                                }}
                            >
                                <Typography
                                    sx={{...theme.typography.h6,maxWidth:'80%',}}
                                    gutterBottom
                                >
                                    {box.title}
                                </Typography>
                                <Typography
                                    sx={{...theme.typography.caption,maxWidth:'90%',}}
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
                                    height: {xs:'24vw',sm:'10vw'},
                                    objectFit: 'cover',
                                    borderRadius: '0 0 1.39vw 1.39vw',
                                    mt: 'auto',
                                }}
                            />
                        </Box>
                    ))}
                </Box>
               </Box>
            </Box>
        </ThemeProvider>
    );
};

export default CertificationBox;
