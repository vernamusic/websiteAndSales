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
            fontSize: { xs: '10px', sm: '13px', md: '17px', lg: '21px', xl: '26px' },
            color: "#F1F1F1",
            letterSpacing: '0.4px',
            lineHeight: 'normal',
        },
        button: {
            fontFamily: 'Lato',
            fontSize: { xs: '10px', sm: '13px', md: '18px', lg: '20px', xl: '22px' },
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
                    position:'absolute',
                    top:'20%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: {xs:'center',sm:'flex-start'},
                    textAlign: 'left',
                    mt:{xs:1.2,sm:0},
                    ml: {xs: 5, sm: 10, md: 15, lg: 25, xl: 38},
                    gap: { xs: 1, sm: 1, md: 1.5, lg: 2, xl: 3 },
                    width: { xs: '230px', sm: '300px', md: '430px', lg: '480px', xl: '580px' },
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
                        width: { xs: '240px', sm: '300px', md: '400px', lg: '480px', xl: '580px' },
                    }}
                >
                    Vitruvian Shield is one of the progressive digital health companies whose headquarters office resides in the Biopole of Lausanne, Switzerland. Vitruvian Shield promotes a comprehensive digital health platform.
                </Typography>
                <Button
                    variant="contained"
                    component={Link}
                    size="large"
                    to={'/company'}
                    sx={{
                        ...theme.typography.button,
                        borderRadius: '4px',
                        backgroundColor: '#B50304',
                        textTransform: 'none',
                        width: { xs: '106px', sm: '135px', md: '170px', lg: '190px', xl: '220px' },
                        height: { xs: '25px', sm: '37px', md: '48px', lg: '52px', xl: '58px' },
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
                    position:'absolute',
                    justifyContent: 'flex-end',
                    right:{md:'8%',sm:'2%',xs:'4%'},
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
