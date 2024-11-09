import React, { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import backgroundImage from '../../assets/membersBG2.svg';
import ContactFormDialog4 from './ContactFormDialog4';


const typoStyle = {
    fontFamily: 'Lato',
    fontSize: { xs: '16px', sm: '18px', md: '20px', lg: '24px' },
    color: '#fff',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '100%',
    textTransform: 'none'
}


const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'sen',
            fontSize: '1.04vw',
            lineHeight: 'normal',
            letterSpacing: '0.4px',
            color: "#F1F1F1",
            textTransform: 'none',
        },
        h3: {
            fontFamily: "Lato",
            fontWeight: 700,
            fontSize: '1.59vw',
            color: "#F1F1F1",
            textTransform: 'none',
        },
        button: {
            fontFamily: 'Inter',
            fontSize: '0.94vw',
            textTransform: 'none',
            color: "#F1F1F1",
        },
        caption: {
            fontFamily: 'sen',
            fontSize: '1.04vw',
            lineHeight: 'normal',
            letterSpacing: '0.4px',
            color: "#F1F1F1",
            textTransform: 'none',
        },
    },
});

const MeetBox = () => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleButtonClick = () => {
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    width: '100vw',
                    minHeight: { xs: '650px',md:'750px' },
                    alignSelf: 'stretch',
                    position: 'relative',
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom right',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        pb: { xs: 6, sm: 6 },
                        height: '100%',
                        ml: { xs: 5, sm: 10, md: 15, lg: 25, xl: 38 },
                        width: {xs:'80%',sm:'60%',md:'50%',lg:'40%',xl:'30%'},
                    }}
                >
                    <Typography
                        sx={{
                            ...typoStyle,
                            fontSize: { xs: '24px', sm: '26px', md: '28px', lg: '32px' },

                        }}
                    >
                        Let’s discus together
                    </Typography>
                    <Typography
                        sx={{
                            ...typoStyle,
                            mt: '16px',
                            fontSize: { xs: '12.64px', sm: '14.22px', md: '16px', lg: '18px' },
                            fontWeight:500,
                            color:'#d9d9d9',
                            lineHeight:'24px'
                        }}
                    >
                        We’d love to hear from you! Whether you have questions, feedback, or just want to chat, our team is here to help.                    </Typography>

                    <Button
                        onClick={handleButtonClick}
                        sx={{
                            ...typoStyle,
                            mt:'32px',
                            fontSize: { xs: '12.64px', md: '14px' },
                            borderRadius: '4px',
                            backgroundColor: '#B50304',
                            color: '#fcfcfc',
                            textTransform: 'none',
                            width: '159px',
                            height: '42px',
                            '&:hover': {
                                backgroundColor: '#B50304',
                                opacity: '0.8'
                            },
                        }}
                        disableRipple
                    >
                        Apply for meeting
                    </Button>
                </Box>

                <ContactFormDialog4 open={openDialog} onClose={handleDialogClose} />
            </Box>
        </ThemeProvider>
    );
}

export default MeetBox;
