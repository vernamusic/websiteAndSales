import React from 'react';
import { Box, Typography, createTheme, ThemeProvider } from '@mui/material';
import over1 from '../../assets/overwatch1.png';
import over2 from '../../assets/overwatch2.png';
import over3 from '../../assets/overwatch3.png';

const theme = createTheme({
    typography: {
        fontFamily: 'Sen, Arial, sans-serif',
        h6: {
            fontSize: '1.145vw',
            fontWeight: 400,
            lineHeight: '26.47px',
            color: "#F1F1F1",
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize: '1.354vw',
            lineHeight: '2rem',
            color: "#FFFFFF",
        },
        h9: {
            fontWeight: 600,
            fontSize: '0.937vw',
            lineHeight: '21.66px',
            color: "#000000",
        },
    },
});

const howData = [
    { title: 'Plots feature shows you the state of the body', image: over1 },
    { title: 'You can see the status of your patient in the calendar', image: over2 },
    { title: 'You can see the overview of the chart', image: over3 },
];

const HowBox = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box
            backgroundColor='#0B0B0B73'
            width={'100%'}
            height={'auto'}
            >
                <Box
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    gap={'18px'}
                    mt={'72px'}
                    mb={'100px'}
                    sx={{
                        display:{xs:'none', sm:'flex'}
                    }}
                >
                    <Typography variant='h3'>Web Overview</Typography>
                    <Typography variant='h6'>Overview of key concepts and main features</Typography>
                </Box>

                <Box
                    display="flex"
                    justifyContent="center"
                    gap={8}
                >
                    {howData.map((box, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: '16.822vw',
                                height: '26.406vw',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#D9D9D9',
                                border: '1px solid #FFFFFF33',
                                borderRadius: '20px 20px 0 0',
                                overflow: 'hidden',
                                mb:'50px'
                            }}
                        >
                            {index % 2 === 1 ? (
                            // For odd indices: Image first, then the title
                            <>
                                <Box
                                    component="img"
                                    src={box.image}
                                    alt={box.title}
                                    sx={{
                                        width: '9.843vw',
                                        height: '15vw',
                                        objectFit: 'cover',
                                        mt: '3.33vw',
                                    }}
                                />
                                <Box
                                    sx={{
                                        display: 'flex',
                                        textAlign: 'center',
                                        flexGrow: 1,
                                        padding: 4,
                                        //mt: 1,
                                    }}
                                >
                                    <Typography
                                        gutterBottom
                                        sx={{
                                            mb: '64px',
                                            fontFamily: 'Lato',
                                            fontWeight: 600,
                                            fontSize: '1vw',
                                            lineHeight: '21.66px',
                                        }}
                                    >
                                        {box.title}
                                    </Typography>
                                </Box>
                            </>
                        ) : (
                            // For even indices: Title first, then the image
                            <>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        textAlign: 'center',
                                        flexGrow: 1,
                                        padding: 4,
                                        //mt: 1,
                                    }}
                                >
                                    <Typography
                                        gutterBottom
                                        sx={{
                                            mt: '64px',
                                            fontFamily: 'Lato',
                                            fontWeight: 600,
                                            fontSize: '1vw',
                                            lineHeight: '21.66px',
                                        }}
                                    >
                                        {box.title}
                                    </Typography>
                                </Box>
                                <Box
                                    component="img"
                                    src={box.image}
                                    alt={box.title}
                                    sx={{
                                        width: '18.229vw',
                                        height: '18.229vw',
                                        objectFit: 'cover',
                                        mb: '3.33vw',
                                        //mt: 'auto',
                                    }}
                                />
                            </>
                        )}

                            
                        </Box>
                    ))}
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default HowBox;
