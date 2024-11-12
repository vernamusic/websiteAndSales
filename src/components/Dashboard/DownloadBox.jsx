import React, {useEffect, useState} from 'react';
import { Box, Typography, Button, createTheme } from '@mui/material';
import background from '../../assets/background.jfif';
import laptop from '../../assets/laptopdash .png';
import { ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import ContactDialog from './ContactDialog';


const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'Lato',
            fontSize: '16px', 
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
        },
        button: {
            fontFamily: 'Lato',
            fontSize: '14px', 
            fontWeight: 600,
            color: "#FFFFFF",
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
            <Box sx={{ position: 'relative', width: '100%' }}>
                <Box
                    sx={{
                        position: 'relative',
                        maxHeight: '746px',
                        minHeight: { xs: '500px', sm: '600px', md: '700px', lg: '746px' },
                        width: '100%',
                        background: `linear-gradient(253deg, rgba(31, 31, 31, 0.30) 26.9%, rgba(31, 31, 31, 0.62) 44.3%, rgba(31, 31, 31, 0.81) 74.59%, rgba(31, 31, 31, 0.90) 100%), url(${background}) lightgray 0px 58.869px / 114.028%  no-repeat`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            zIndex: 1,
                            ml: '8em',
                            mt: '15em',
                            maxWidth:'41em',
                        }}
                    >
                        <Typography
                            sx={{
                                lineHeight: '1.5',
                                mb: '0.5em',
                                ...theme.typography.h3,
                            }}
                        >
                        The Web Application
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                ...theme.typography.h6,
                            }}
                        >
                        Access your patients' data anywhere, at any time.<br/>
                        Our dashboard empowers organizations and individuals to effectively monitor patient health in real time. It includes a variety of features such as Remote patient monitoring, adverse event reporting in clinical trials, project management tools, Electronic Document Management System (EDMS), and much more. With our comprehensive solution, you can ensure proactive care and streamline your healthcare operations efficiently! 
                    </Typography>

                        <Box sx={{ display: 'flex', gap: '0.78vw', marginTop: '1.56vw',}}>
                            <Button
                                variant="outlined"
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
                                onClick={handleOpenDialog}
                                disableRipple
                            >
                                Contact us
                            </Button>

                            <Button
                                variant="contained"
                                component={Link}
                                to="https://researchers.vitruvianshield.com/"
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
                            Open
                        </Button>
                        <ContactDialog open={dialogOpen} onClose={handleCloseDialog} />

                        </Box>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
};


export default Home;
