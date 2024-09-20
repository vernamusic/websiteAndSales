import React from 'react';
import {Typography, Button, createTheme} from '@mui/material';
import Box from "@mui/material/Box";
import Vname from '../../assets/metallogo.svg';
import logo from '../../assets/redvslogo.svg';

const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'sen',
            fontSize: { xs: '15px', sm: '18px', md: '20px', lg: '22px', xl: '26px' },
            color: "#F1F1F1",
            letterSpacing: '0.4px',
            lineHeight: 'normal',
        },
        button: {
            fontFamily: 'Lato',
            fontSize: { xs: '10px', sm: '16px', md: '18px', lg: '20px', xl: '24px' },
            color: "#FFFFFF",
        },
    },
});

const SideBox = () => {
    return (
        <Box
            id="features"
            sx={{
                width:'100%',
                display: 'flex',
                flexDirection:'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap:8 ,
            }}
        >
            <Box
                sx={{
                    ml: { xs: 5, sm: 10, md: 15, lg: 25, xl: 38 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'center', md: 'flex-start' },
                    textAlign: { xs: 'center', md: 'left' },
                }}
            >
                <img
                    src={Vname}
                    alt="Sample"
                    style={{ width: '90%' }}
                />
                <Typography
                    color="white"
                    sx={{
                        ...theme.typography.h6,
                        mb: { xs: 2, sm: 4 },
                        mt: 1.5,

                        width: { xs: '250px', sm: '300px', md: '430px', lg: '480px',xl:'580px' },
                    }}
                >
                    Vitruvian Shield is one of the progressive digital health companies  whose headquarters office resides in the Biopole of Lausanne,  Switzerland. Vitruvian Shield promotes a comprehensive digital health  platform                </Typography>
                <Button
                    variant="contained"

                    size="large"
                    sx={{
                        ...theme.typography.button,
                        borderRadius: '4px',
                        backgroundColor: '#B50304',
                        textTransform: 'none',
                        width: '43%',
                        height: { xs: '30px', sm: '45px', md: '50px', lg: '55px', xl: '65px' },
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
                    position: 'flex',
                    flexDirection: 'column',
                    width:{ md: '300px', lg: '400px', xl: '470px'},
                    height:{ md: '500px', lg: '650px', xl: '820px'},
                    display: {xs:'none',sm: 'none', md: 'flex'},

                }}
            >
                <img
                    src={logo}
                    alt="Sample"
                    style={{
                        width: '100%',
                        height:'100%',
                        position: 'relative',
                        top:'0%',
                        right: '25%',
                    }}
                />
            </Box>
        </Box>
    );
}

export default SideBox;
