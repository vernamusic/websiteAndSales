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
                    minHeight: { xs: '500px', sm: '600px', md: '700px', lg: '746px' },
                    width: '100%',
                    background: `linear-gradient(254deg, rgba(31, 31, 31, 0.30) 21.97%, rgba(31, 31, 31, 0.62) 40.54%, rgba(31, 31, 31, 0.81) 72.87%, rgba(31, 31, 31, 0.90) 100%), url(${background}) lightgray -100.091px 35.184px / 113.902% no-repeat`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        zIndex: 1,
                        ml: '11%',
                        mt: '16%',
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
                    Vitruvian Shield Smart Watch
                </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            ...theme.typography.h6, mb: '2em', mt: '1em'
                        }}
                    >
                    The Vitruvian Shield smart watch provides a versatile and comprehensive solution for vital signs monitoring, enabling researchers and healthcare professionals to gather and analyze vital sign data efficiently.
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
                            onClick={handleOpenDialog}
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
