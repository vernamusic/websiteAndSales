import React, {useEffect, useState} from 'react';
import { Box, Typography, Button, createTheme } from '@mui/material';
import background from '../../assets/Watch-BG1.jfif';
import { ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import ContactDialog from './ContactDialog';

const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'Lato',
            fontSize: { xs: '10px', sm: '12.64px', md: '14.22px', lg: '18px' },
            fontWeight: 400,
            color: "#EEEEEE",
            letterSpacing: '0.4px',
            lineHeight: {xs:'14px',md:'18px',lg:'24px'},
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 600,
            fontSize: { xs: '14px', sm: '18px', md: '26px', lg: '32px' },
            color: "#FFFFFF",
            letterSpacing: '0.4px',
            lineHeight: '24px'
        },
        button: {
            fontFamily: 'Lato',
            fontSize: {xs:'8px',md:'10px',lg:'14px'},
            fontWeight: 600,
            lineHeight: {xs:'8px',md:'10px',lg:'14px'}, 
            color: "#FCFCFC",
        },
    },
});

const Home = () => {
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleOpenDialog = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    return (
        <ThemeProvider theme={theme}>
            {/* Parent Box that contains everything */}
            <Box
                sx={{
                    position: 'relative',
                    maxHeight: '746px',
                    minHeight: { xs: '188px', sm: '300px', md: '600px', lg: '750px' },
                    width: '100%',
                    background: `linear-gradient(253.12deg, rgba(31, 31, 31, 0.2) 26.9%, rgba(31, 31, 31, 0.42) 33.48%, rgba(31, 31, 31, 0.56) 40.79%, rgba(31, 31, 31, 0.707727) 51.75%, rgba(31, 31, 31, 0.9) 91.23%), url(${background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        zIndex: 1,
                        ml: { xs: 5, sm: 10, md: 19, lg: 24, xl: 28 },
                        mt: { xs: '44px', sm: '100px', md: '230px', lg: '318px' },
                        maxWidth:'40%',
                    }}
                >
                    <Typography
                        sx={{
                            width:'100%',
                            mb: '0.4vw',
                            ml: '-0.2vw',
                            lineHeight: '1.5',
                            ...theme.typography.h3,
                        }}
                    >
                    Vitruvian Shield Smart Watch
                </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            ...theme.typography.h6,
                            display:{xs:'none',sm:'none',md:'block'},
                        }}
                    >
                    The Vitruvian Shield smart watch provides a versatile and comprehensive solution for vital signs monitoring, enabling researchers and healthcare professionals to gather and analyze vital sign data efficiently.
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            ...theme.typography.h6,
                            display:{xs:'block',sm:'block',md:'none'},
                            width:{xs:'250px',sm:'325px'},
                        }}
                    >
                    The Vitruvian Shield smart watch provides a versatile and comprehensive solution for vital signs monitoring
                    </Typography>
                    <Box sx={{ display: 'flex', gap: {xs:'1.5vw',sm:'1.5vw',md:'0.78vw'}, marginTop: {xs:'16px',sm:'16px',md:'1.56vw'},}}>
                        <Button
                            variant="outlined"
                            sx={{
                                padding:0,
                                display: 'flex',
                                borderRadius: '4px',
                                width: {xs:'55px',md:'90px',lg:'138px'},
                                height: {xs:'20px',md:'28px',lg:'42px'},
                                ...theme.typography.button,
                                borderColor: 'white',
                                color: 'white',
                                textTransform: 'none',
                                '&:hover': {},
                            }}
                            onClick={handleOpenDialog}
                            disableRipple
                        >
                            Contact us
                        </Button>

                        <Button
                            variant="contained"
                            onClick={handleOpenDialog}
                            sx={{
                                ...theme.typography.button,
                                padding: 0,
                                display: 'flex',
                                borderRadius: '4px',
                                width: {xs:'55px',md:'90px',lg:'138px'},
                                height: {xs:'20px',md:'28px',lg:'42px'},
                                backgroundColor: '#B50304',
                                textTransform: 'none',
                                '&:hover': {
                                    backgroundColor: '#B50304',
                                },
                            }}
                            disableRipple
                        >
                            Buy
                        </Button>
                        <ContactDialog open={dialogOpen} onClose={handleCloseDialog} />
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Home;
