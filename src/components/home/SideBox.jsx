import React from 'react';
import { Typography, Button, createTheme } from '@mui/material';
import Box from "@mui/material/Box";
import Vname from '../../assets/metallogo.svg';
import logo from '../../assets/redvslogo.svg';
import { Link } from "react-router-dom";

const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'sen',
            fontSize: {xs: '11px', sm: '11px', md: '13px', lg: '16px', xl: '21px'},
            color: "#F1F1F1",
            letterSpacing: '0.4px',
            lineHeight: 'normal',
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize: {xs: '18px', sm: '22px', md: '24px', lg: '28px', xl: '35px'},
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
        button: {
            fontFamily: 'Lato',
            fontSize: {xs: '10px', sm: '10px', md: '14px', lg: '16px', xl: '18px'},
            color: "#FFFFFF",
        },
    },
});

const SideBox = () => {
    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',


        }}>
            <Box
                sx={{
                    position:{xs:'relative',sm:'absolute'},
                    top:'20%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: {xs:'center',sm:'flex-start'},
                    textAlign: 'left',
                    ml: {xs: 5, sm: 10, md: 15, lg: 25, xl: 38},
                    gap: { xs: 1, sm: 1, md: 1.5, lg: 2, xl: 3 },
                    mb: {xs: 8, sm: 0,},
                    width: { xs: '240px', sm: '300px', md: '430px', lg: '480px', xl: '580px' },
                }}
            >
                <img
                    src={Vname}
                    alt="Vname"
                    style={{ width: '85%' }}
                />
                <Typography
                    color="white"
                    sx={{
                        display:{xs:'none',sm:'block'},
                        ...theme.typography.h6,
                        width: { xs: '240px', sm: '260px', md: '300px', lg: '380px', xl: '480px' },
                    }}
                >
                    Vitruvian Shield is one of the progressive digital health companies whose headquarters office resides in the Biopole of Lausanne, Switzerland. Vitruvian Shield promotes a comprehensive digital health platform.
                </Typography>
                <Button
                    variant="contained"
                    component={Link}
                    to={'/company'}
                    sx={{
                        ...theme.typography.button,
                        display:{xs:'none', sm:'block'},
                        borderRadius: '4px',
                        textAlign:'center',
                        textJustify:'center',
                        backgroundColor: '#B50304',
                        textTransform: 'none',
                        width:{ xs: '100px', sm: '100px', md: '120px', lg: '140px', xl: '170px' },
                        height: { xs: '25px', sm: '30px', md: '37px', lg: '43px', xl: '47px' },
                        '&:hover': {
                            backgroundColor: '#B50304',
                        },
                    }}
                    disableRipple
                >
                    Visit our plan
                </Button>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    position:{xs:'relative',sm:'absolute'},
                    justifyContent: 'flex-end',
                    right:{md:'9%',sm:'3%',xs:'5%'},
                    top:{md:'0%',sm:'15%'},
                    alignItems: 'center',
                    width: { xs: '120px', sm: '220px', md: '300px', lg: '400px', xl: '470px' },
                    height: { xs: '120px', sm: '220px', md: '500px', lg: '650px', xl: '820px' },
                }}
            >
                <img
                    src={logo}
                    alt="Logo"
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                />
            </Box>
        </Box>
    );
};

export default SideBox;
