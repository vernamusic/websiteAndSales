import { Box, Typography, Button, createTheme } from '@mui/material';
import background from '../../assets/Mobile-BG1.png';
import { ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'Lato',
            fontSize: '16px', 
            fontWeight: 400,
            color: "#EEEEEE",
            letterSpacing: '0.4px',
            lineHeight: '24px',
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 600,
            fontSize: '24px', 
            color: "#FFFFFF",
            letterSpacing: '0.4px',
            lineHeight: '24px'
        },
        button: {
            fontFamily: 'Lato',
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: '14px', 
            color: "#FCFCFC",
        },
    },
});


const Home = () => {
    

    return (
        <ThemeProvider theme={theme}>
            {/* Parent Box that contains everything */}
                <Box
                    sx={{
                        position: 'relative',
                        height: '100vh',
                        width: '100%',
                        backgroundImage: `url(${background})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '100%',
                    }}
                >
                <Box
                    sx={{
                        position: 'absolute',
                        zIndex: 1,
                        ml: '11vw',
                        mt: '16vw',
                        maxWidth:'40vw',
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
                        }}
                    >
                        Introducing an innovative mobile app that empowers health management! With the Vitruvian Watch, users can track their health data, manage medication schedules, log seizures, and schedule online appointments with healthcare professionals anytime, anywhere.
                    </Typography>

                    <Box sx={{ display: 'flex', gap: '0.78vw', marginTop: '1.56vw',}}>
                        <Button
                            variant="outlined"
                            component={Link}
                            to="/signup"
                            sx={{
                                padding:0,
                                minWidth:0,
                                display: 'flex',
                                borderRadius: '4px',
                                width: '138px',
                                height: '42px',
                                ...theme.typography.button,
                                borderColor: 'white',
                                color: 'white',
                                textTransform: 'none',
                                '&:hover': {},
                            }}
                            disableRipple
                        >
                            Contact Us
                        </Button>

                        <Button
                            variant="contained"
                            component={Link}
                            to="/signup"
                            sx={{
                                padding:0,
                                minWidth:0,
                                display: 'flex',
                                borderRadius: '4px',
                                width: '138px',
                                height: '42px',
                                ...theme.typography.button,

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
                    </Box>
                </Box>

                </Box>
        </ThemeProvider>
    );
};

export default Home;
