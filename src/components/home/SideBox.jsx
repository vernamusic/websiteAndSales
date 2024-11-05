import React from 'react';
import { Typography, Button } from '@mui/material';
import Box from "@mui/material/Box";
import bg from '../../assets/sideBoxBG.svg'
import Vname from '../../assets/Vname.svg';
import Vname2 from '../../assets/Vname2.svg';
import logo from '../../assets/redvslogo.svg';
import { Link } from "react-router-dom";

const navItemStyle = {
    fontFamily: 'Lato',
    fontSize: { xs: '14.22px', lg: '16px' },
    color: '#eee',
    fontStyle: 'normal',
    lineHeight: '100%',
    textTransform: 'none'
}

const SideBox = () => {
    return (
        <Box sx={{
            minHeight: { xs: '484px' },
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            justifyContent: {xs:'start',md:'space-between'},
            alignItems: 'center',
            position: 'relative',
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            boxShadow: ' 0px 4px 12px 0px rgba(0, 0, 0, 0.14)',
            px: { xs: '40px', sm: '100px', md: '90px', lg: '136px' },
            boxSizing: 'border-box',
        }}>
            
            <Box
                sx={{
                    mt:{xs:'70px',sm:'100px',md:'0'},
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: { xs: 'center', sm: 'flex-start' },
                    textAlign: 'left',
                    // gap: { xs: 1, sm: 1, md: 1.5, lg: 2, xl: 3 },
                    width: { xs: '100%', md: '55%', lg: '55%', xl: '50%' },
                }}
            >
                <Box
                    sx={{

                    }}
                >
                    <img
                        src={Vname}
                        alt="Vname"

                    />
                    <img
                        src={Vname2}
                        alt="Vname"

                    />
                </Box>
                <Typography
                    color="white"
                    sx={{
                        ...navItemStyle,
                        color: '#eee',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        lineHeight: '24px',
                        // display: { xs: 'none', sm: 'block' },
                        width: { sm: '100%', md: '100%', xl: '80%' },
                    }}
                >
                    Vitruvian Shield is a progressive digital health company offering a comprehensive platform that integrates advanced sensors, cloud computing, and AI analytics. It collects vital signs data from wearables and a mobile app, empowering physicians, caregivers, and researchers to enhance health and quality of life.
                </Typography>
                <Button
                    variant="contained"
                    component={Link}
                    to={'/company'}
                    sx={{
                        mt: '22px',
                        display: 'flex',
                        borderRadius: '4px',
                        textAlign: 'center',
                        textJustify: 'center',
                        backgroundColor: '#B50304',
                        color: '#fcfcfc',
                        fontWeight: 600,
                        fontSize: '14px',
                        fontFamily: 'Lato',
                        textTransform: 'none',
                        width: { xs: '134px' },
                        height: { xs: '42px' },
                        '&:hover': {
                            backgroundColor: '#B50304',
                            opacity: '0.8'
                        },
                    }}
                    disableRipple
                >
                    Visit Our Plan
                </Button>
            </Box>
            <Box
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    position: 'relative',
                    alignItems: 'center',
                    // width: { xs: '120px', sm: '220px', md: '300px', lg: '400px', xl: '470px' },
                    // height: { xs: '120px', sm: '220px', md: '500px', lg: '650px', xl: '820px' },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: '200px', md: '232px' },
                            height: { xs: '272px', md: '304px' },
                        }}
                    >

                        <img
                            src={logo}
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            width: '180px',
                            height: '19px',
                            background: 'rgba(25, 25, 25, 0.40)',
                            filter: 'blur(4.949999809265137px)',
                            borderRadius: '100%'
                        }}
                    >

                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default SideBox;
