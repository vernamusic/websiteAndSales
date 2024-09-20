import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import backgroundImage from '/src/assets/learningpic.png';

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
            fontSize: { xs: '15px', sm: '15px', md: '16px', lg: '20px', xl: '22px' },
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
                        zIndex: 1,
                        ml: { xs: 5, sm: 10, md: 20, lg: 25, xl: 38 },
                        mt: { xs: 10, sm: 10, md: 20, lg: 25, xl: 38 },
                    }}
                >
                    <Typography
                        sx={{
                            ...theme.typography.h3,
                        }}
                    >
                        The Professional <br/>
                        Full-Stack Courses
                    </Typography>
                    <Typography
                        sx={{
                            ...theme.typography.h6,
                            width: { xs: '430px', sm: '500px', md: '560px', lg: '620px',xl:'720px' },
                            mt:1,
                        }}
                    >
                        Join our transformative full-stack development bootcamp where you'll  master Django, PostgreSQL, and React.js! Dive deep into web development  and equip yourself with the skills to build cutting-edge web  applications. Don't miss this chance to level up your career in tech.                    </Typography>
                    <Box >
                        <Button
                            variant="contained"

                            size="large"
                            sx={{
                                mt:2,
                                ...theme.typography.button,
                                borderRadius: '4px',
                                backgroundColor: '#B50304',
                                textTransform: 'none',
                                width: '14.8%',
                                height: { xs: '30px', sm: '45px', md: '50px', lg: '55px', xl: '65px' },
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
