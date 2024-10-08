import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import backgroundImage from '/src/assets/learningpic.png';

const theme = createTheme({
    typography: {
        fontFamily: 'Sen, Arial, sans-serif',
        h6: {
            fontFamily: 'sen',
            fontSize: { xs: '10px', sm: '13px', md: '16px', lg: '21px', xl: '26px' },
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
            fontSize: { xs: '9.5px', sm: '13px', md: '18px', lg: '20px', xl: '22px' },
            color: "#FFFFFF",
        },
    },
});

const LearningBox = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    width: '100vw',
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
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        height:'100%',
                        ml: { xs: 5, sm: 10, md: 15, lg: 25, xl: 38 },
                        gap: {xs: 1, sm: 1, md: 1.5, lg: 2, xl: 2,},
                    }}
                >
                    <Typography
                        sx={{
                            width: { xs: '200px', sm: '230px', md: '250px', lg: '300px',xl:'350px' },
                            ...theme.typography.h3,
                        }}
                    >
                        The Professional Full-Stack Courses
                    </Typography>
                    <Typography
                        sx={{
                            ...theme.typography.h6,
                            width: { xs: '348px', sm: '445px', md: '540px', lg: '580px',xl:'720px' },
                            mt:1,
                        }}
                    >
                        Join our transformative full-stack development bootcamp where you'll  master Django, PostgreSQL, and React.js! Dive deep into web development  and equip yourself with the skills to build cutting-edge web  applications. Don't miss this chance to level up your career in tech.                    </Typography>
                    <Box >
                        <Button
                            variant="contained"

                            size="large"
                            sx={{
                                ...theme.typography.button,
                                borderRadius: '4px',
                                backgroundColor: '#B50304',
                                textTransform: 'none',
                                width:{ xs: '110px', sm: '135px', md: '170px', lg: '190px', xl: '220px' },
                                height: { xs: '30px', sm: '37px', md: '48px', lg: '52px', xl: '58px' },
                                '&:hover': {
                                    backgroundColor: '#B50304',
                                },
                            }}
                            disableRipple
                        >
                            See more
                        </Button>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default LearningBox;
