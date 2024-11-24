import {useEffect, useState} from 'react';
import { Box, Typography, Button, createTheme } from '@mui/material';
import background from '../../assets/Mobile-BG1.png';
import { ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import ContactDialog from './ContactDialog';
import axios from "axios";


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

    const [latestLink, setLatestLink] = useState('');

    useEffect(() => {
        const fetchLink = async () => {
            try {
                const response = await axios.get('https://vitruvianshield.com/api/v1/applications');
                const data = response.data;

                // پیدا کردن لینک با جدیدترین release_date
                const latestRelease = data
                    .sort((a, b) => new Date(b.release_date) - new Date(a.release_date))[0];

                // قرار دادن لینک جدیدترین نسخه
                setLatestLink(latestRelease.apk_file);
            } catch (error) {
                console.error('Error getting new link:', error);
            }
        };

        fetchLink();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            {/* Parent Box that contains everything */}
                <Box
                    sx={{
                        position: 'relative',
                        maxHeight: '746px',
                        minHeight: { xs: '188px', sm: '300px', md: '600px', lg: '750px' },
                        width: '100%',
                        backgroundImage: `url(${background})`,
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
                            mb: '0.4vw',
                            ml: '-0.2vw',
                            lineHeight: '1.5',
                            ...theme.typography.h3,
                        }}
                    >
                        The Mobile Application
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            ...theme.typography.h6,
                            display:{xs:'none',sm:'none',md:'block'},
                        }}
                    >
                        Introducing an innovative mobile app that empowers health management! With the Vitruvian Watch, users can track their health data, manage medication schedules, log seizures, and schedule online appointments with healthcare professionals anytime, anywhere.
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            ...theme.typography.h6,
                            display:{xs:'block',sm:'block',md:'none'},
                            width:{xs:'250px',sm:'325px'},
                        }}
                    >
                        Introducing an innovative mobile app that empowers health management! With the Vitruvian Watch, users can track their health data
                    </Typography>

                    <Box sx={{ display: 'flex', gap: '0.78vw', marginTop: '1.56vw',}}>
                        <Button
                            variant="outlined"
                            sx={{
                                padding:0,
                                minWidth:0,
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
                            onClick={() => {
                                if (latestLink) {
                                    const newTab = window.open(latestLink, "_blank");
                                    setTimeout(() => {
                                        if (newTab) newTab.close();
                                    }, 2000);
                                } else {
                                    alert("No download link available.");
                                }
                            }}
                            sx={{
                                ...theme.typography.button,
                                padding: 0,
                                minWidth: 0,
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
                            Download
                        </Button>


                        <ContactDialog open={dialogOpen} onClose={handleCloseDialog} />
                    </Box>
                </Box>

                </Box>
        </ThemeProvider>
    );
};

export default Home;
