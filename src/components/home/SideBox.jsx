import React from 'react';
import { Typography, Button } from '@mui/material';
import Box from "@mui/material/Box";
import bg from '../../assets/newBG2.svg'
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
            minHeight: { xs:'146px',sm: '250px',md:'584px' },
            display: 'flex',
            flexDirection: { md: 'row' },
            alignItems: 'center',
            position: 'relative',
            justifyContent:'space-around',
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            // boxShadow: ' 0px 4px 12px 0px rgba(0, 0, 0, 0.14)',
            px: { xs: '40px', sm: '60px', md: '90px', lg: '136px' },
            boxSizing: 'border-box',
            
        }}>
            
            <Box
                sx={{
                    mt:{xs:'39px',sm:'100px',md:'0'},
                    mb:{xs:'39px',sm:'100px',md:'0'},
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: { xs: 'center', sm: 'flex-start' },
                    textAlign: 'left',
                    //gap: { xs: 1, sm: 1, md: 1.5, lg: 2, xl: 3 },
                    width: { xs: '60%', md: '55%', lg: '55%', xl: '50%' },
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 1,
                    }}
                >
                    <Box
                        component="img"
                        src={Vname}
                        alt="Vname"
                        sx={{
                            width: { xs: '40%', sm: '50%', md: '100%' },
                            height: 'auto',
                            objectFit: 'contain',
                        }}
                    />
                    <Box
                        component="img"
                        src={Vname2}
                        alt="Vname"
                        sx={{
                            width: { xs: '40%', sm: '50%', md: '100%' },
                            height: 'auto',
                            objectFit: 'contain',
                        }}
                    />
                </Box>


                <Typography
                    color="white"
                    sx={{
                        ...navItemStyle,
                        fontSize: { xs: '12px', lg: '16px' },
                        letterSpacing:'0.8px',
                        color: '#eee',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        lineHeight: {xs:'15px',sm:'14px',md:'24px'},
                        width: { sm: '100%', md: '100%', xl: '80%' },
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        WebkitLineClamp: {xs:3,sm:4,md:'7'}, // Limits text to 3 lines
                    }}
                >
                    Vitruvian Shield is a progressive digital health company offering a comprehensive platform that integrates advanced sensors, cloud computing, and AI analytics. It collects vital signs data from wearables and a mobile app, empowering physicians, caregivers, and researchers to enhance health and quality of life.
                </Typography>

                <Button
                    variant="contained"
                    component="a"
                    href="/company"
                    sx={{
                        mt: '32px',
                        display: {xs:'none',sm:'none',md:'flex'},
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
            {/* Right side */}
            <Box
                sx={{
                    display: 'flex',
                    position: 'relative',
                    alignItems: 'center',
                    justifyContent:'end',
                    width: { xs: '120px', sm: '220px', md: '300px', lg: '400px', xl: '470px' },
                    height: { xs: '120px', sm: '220px', md: '500px', lg: '650px', xl: '820px' },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: { xs: '85px',sm:'150px', md: '400px' },
                        height: { xs: '78px',sm:'200px', md: '304px' },
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
            </Box>
        </Box>
    );
};

export default SideBox;
