import React from 'react';
import { Typography, Button, Box, OutlinedInput, FormControl, InputLabel } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import backgroundImage from '/src/assets/regboxpic.jpg';

const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'sen',
            fontSize: { xs: '13px', sm: '13px', md: '16px', lg: '21px', xl: '26px' },
            color: "#F1F1F1",
            letterSpacing: '0.4px',
            lineHeight: 'normal',
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize: { xs: '22px', sm: '24px', md: '28px', lg: '35px', xl: '41px' },
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
        button: {
            fontFamily: 'Lato',
            fontSize: { xs: '10px', sm: '15px', md: '18px', lg: '20px', xl: '22px' },
            color: "#FFFFFF",
        },
        form: {
            fontFamily: 'Inter',
            fontSize: { xs: '10px', sm: '15px', md: '18px', lg: '20px', xl: '22px' },
            fontWeight: 400,
        },
    },
});

const RegBox = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    width: '100vw',
                    position: 'relative',
                    backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.738) 14.54%, rgba(0, 0, 0, 0.686) 23.41%, rgba(0, 0, 0, 0.584) 40.86%, rgba(0, 0, 0, 0.164) 100%), url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top right',
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
                        gap: { xs: 0.5, sm: 1, md: 1.5, lg: 2, xl: 2 },
                        height: '100%',
                        pl: { xs: 5, sm: 10, md: 20, lg: 25, xl: 38 },
                    }}
                >
                    <Typography
                        sx={{
                            ...theme.typography.h3,
                            pl:{xs:0}
                        }}
                    >
                        Vitruvian Shield
                    </Typography>
                    <Typography
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            ...theme.typography.h6,
                            width: { xs: '250px', sm: '310px', md: '380px', lg: '500px', xl: '625px' },
                        }}
                    >
                        Vitruvian Shield aims to significantly improve the quality of life of patients in their daily life outside of the hospital by offering a solution which monitors your health signals with medically certified precision
                    </Typography>
                    <Typography
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            ...theme.typography.h6,
                            width:'200px'
                        }}
                    >
                        Vitruvian Shield aims to significantly improve the quality of life of patients
                    </Typography>

                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'flex' },
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: { xs: '300px', sm: '450px', md: '530px', lg: '600px', xl: '690px' },
                            height: { xs: '30px', sm: '45px', md: '50px', lg: '55px', xl: '65px' },
                            gap: '4%',
                        }}
                    >
                        <FormControl
                            variant="outlined"
                            fullWidth
                            sx={{
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <InputLabel
                                htmlFor="email-input"
                                sx={{
                                    position: 'absolute',
                                    top: '25%',
                                    left: '2%',
                                    transform: 'translateY(0%)',
                                    textAlign: 'center',
                                    ...theme.typography.form,
                                    color: '#000000',
                                    opacity: 1,
                                    transition: 'opacity 0.4s ease-in-out, transform 0.4s ease-in-out',
                                    '&.MuiInputLabel-shrink': {
                                        opacity: 0,
                                        transform: 'translateX(100%)',
                                        color: '#ec0000',
                                    }
                                }}
                            >
                                Email address
                            </InputLabel>
                            <OutlinedInput
                                id="email-input"
                                autoComplete="off"
                                sx={{
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: '6px',
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    ...theme.typography.form,
                                    '& input': {
                                        height: '100%',
                                        textAlign: 'start',
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#a80d0d',
                                    },
                                    '&.Mui-focused': {
                                        '& input': {
                                            ...theme.typography.form,
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#a80d0d',
                                            borderWidth: '2px',
                                        },
                                    },
                                }}
                            />
                        </FormControl>

                        <Button
                            variant="contained"
                            sx={{
                                ...theme.typography.button,
                                borderRadius: '6px',
                                backgroundColor: '#B50304',
                                textTransform: 'none',
                                width: '43%',
                                height: '100%',
                                alignItems: 'center',
                                '&:hover': {
                                    backgroundColor: '#B50304',
                                },
                            }}
                        >
                            Get Started
                        </Button>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default RegBox;
