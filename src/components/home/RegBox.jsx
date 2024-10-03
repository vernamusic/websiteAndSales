import React from 'react';
import { Typography, Button, Box, OutlinedInput, FormControl, InputLabel } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import backgroundImage from '/src/assets/regboxpic.jpg';

const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'sen',
            fontSize: { xs: '15px', sm: '18px', md: '20px', lg: '22px', xl: '26px' },
            color: "#F1F1F1",
            letterSpacing: '0.4px',
            lineHeight: 'normal',
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize: { xs: '20px', sm: '24px', md: '28px', lg: '35px', xl: '41px' },
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
        button: {
            fontFamily: 'Lato',
            fontSize: { xs: '10px', sm: '18px', md: '20px', lg: '22px', xl: '26px' },
            color: "#FFFFFF",
        },
        form: {
            fontFamily: 'Inter',
            fontSize: { xs: '12px', sm: '15px', md: '18px', lg: '20px', xl: '22px' },
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
                    height: '95vh',
                    position: 'relative',
                    backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.738) 14.54%, rgba(0, 0, 0, 0.686) 23.41%, rgba(0, 0, 0, 0.584) 40.86%, rgba(0, 0, 0, 0.164) 100%), url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                  
            >
                <Box
                    sx={{
                        position: 'relative',
                        ml: { xs: 5, sm: 10, md: 20, lg: 25, xl: 38 },
                        mt: { xs: 10, sm: 10, md: 20, lg: 25, xl: 38 },
                    }}
                >
                    <Typography
                        sx={{
                            ...theme.typography.h3,
                        }}
                    >
                        Vitruvian Shield
                    </Typography>
                    <Typography
                        sx={{
                            ...theme.typography.h6,
                            mt: 2,
                            mb: 1.5,
                            width: { xs: '350px', sm: '430px', md: '480px', lg: '500px',xl:'625px' },
                        }}
                    >
                        Vitruvian Shield aims to significantly improve the quality of life of patients in their daily life outside of the hospital by offering a solution which monitors your health signals with medically certified precision                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection:'row' ,
                            justifyContent:'space-between',
                            width: { xs: '300px', sm: '450px', md: '530px', lg: '600px', xl: '690px' },
                            height: { xs: '30px', sm: '45px', md: '50px', lg: '55px', xl: '65px' },
                            mt: 2,
                            gap:'4%',
                        }}
                    >
                        <FormControl
                            variant="outlined"
                            fullWidth
                            sx={{
                                height: '100%',
                            }}
                        >
                            <InputLabel
                                htmlFor="email-input"
                                sx={{
                                    pl: '15px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    textAlign: 'left',
                                    textJustify: 'center',
                                    ...theme.typography.form,
                                    color: '#000000',
                                    '&.MuiInputLabel-shrink': {
                                        transform: 'translate(3px, 0.3px) scale(0.5)',
                                        transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out',
                                        color: '#ec0000',
                                    },
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
                                    fontSize: '20px',
                                    '& input': {
                                        height: '100%',
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#a80d0d',
                                    },
                                    '&.Mui-focused': {
                                        '& input': {
                                            fontSize: '20px',
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
