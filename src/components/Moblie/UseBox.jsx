import React, { useState, useCallback, useMemo } from 'react';
import { Box, Button, Typography, createTheme, ThemeProvider } from '@mui/material';
import { styled } from '@mui/material/styles';
import phone1 from "../../assets/usephone1.png";
import phone2 from "../../assets/usephone2.png";
import phone3 from "../../assets/usephone3.png";
import black from "../../assets/blackphone.png";

const theme = createTheme({
    typography: {
        h1: {
            fontFamily:'Lato',
            fontSize: '1.39vw',
            fontWeight: 600,
            color: "#F1F1F1",
        },
        h3: {
            fontFamily: 'sen',
            fontWeight: 400,
            fontSize: '1.25vw',
            color: "rgba(241, 241, 241, 1)",
        },
        h6: {
            fontFamily: 'Lato',
            fontWeight: 600,
            fontSize: '1.25vw',
            color: "#FFFFFF",
        },
        h9: {
            fontFamily: 'sen',
            fontWeight: 400,
            fontSize: '1.0vw',
            lineHeight:'1.3vw',
            color: "rgba(241, 241, 241, 1)",
        },
        button: {
            fontFamily: 'Lato',
            fontSize: '0.83vw', // تغییر به vw با نسبت 1920
            textTransform: "none",
            color: "#FFFFFF",
        },
    },
});

const features = [
    { title: "Download and Install", description: "Go to your device's app store (Google Play Store for Android or Apple App Store for iOS), search for the app, and tap \"Download\" or \"Install.\"" },
    { title: "Set Up an Account", description: "Open the app after installation. You may need to create an account or log in using existing credentials. Follow any on-screen instructions to complete the setup." },
    { title: "Explore and Use", description: "Once set up, navigate through the app’s features. Familiarize yourself with its functions, settings, and any tutorials provided to make the most of it." }
];

const StepCircle = styled(Box)(({ active }) => ({
    position: 'absolute',
    top: '1.5vw',
    left: '0vw',
    width: '3.7vw',
    height: '3.7vw',
    backgroundColor: active ? '#B50304' : 'transparent',
    border: `0.15vw solid ${active ? 'transparent' : '#B50304'}`,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
}));

const RedLine = ({ top }) => (
    <Box
        sx={{
            position: 'absolute',
            top: top || '1vw',
            left: '1.85vw',
            width: '0.09vw',
            height: '5.5vw',
            backgroundColor: '#B50304',
            transform: 'translateX(-50%)',
        }}
    />
);

const Stepper = () => {
    const [step, setStep] = useState(1);
    const [fade, setFade] = useState(true);

    const handleNext = useCallback(() => {
        if (step < 3) {
            setFade(false);
            setTimeout(() => {
                setStep(step + 1);
                setFade(true);
            }, 200);
        }
    }, [step]);

    const handlePrevious = useCallback(() => {
        if (step > 1) {
            setFade(false);
            setTimeout(() => {
                setStep(step - 1);
                setFade(true);
            }, 200);
        }
    }, [step]);

    const handleStepClick = useCallback((index) => {
        setFade(false);
        setTimeout(() => {
            setStep(index + 1);
            setFade(true);
        }, 300);
    }, []);

    const getCircleContent = useCallback((index) => (
        <Typography variant="h6" sx={{ color: '#fff',}}>
            {index + 1}
        </Typography>
    ), []);

    const memoizedFeatures = useMemo(() => features, []);

    const images = [phone1, phone2, phone3]; // Images array for steps

    return (
        <ThemeProvider theme={theme}>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignContent: 'flex-start',
                    justifyContent: 'flex-start',
                    position: 'relative',
                    width: '22vw',
                }}
            >
                <img
                    src={black} // Black background image
                    alt="Background"
                    style={{
                        width: '14vw',
                        position: 'relative',
                        zIndex: 1, // Ensure it is behind other images
                    }}
                />
                <img
                    src={images[step - 1]}
                    alt={`Step ${step}`}
                    style={{
                        width: '14vw',
                        opacity: fade ? 1 : 0,
                        transition: 'opacity 0.2s ease-in-out',
                        position: 'absolute',
                        zIndex: 2,
                    }}
                />
            </Box>
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'left',
                    }}
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                    >
                        <Typography
                            sx={{
                                mb: '0.7vw',
                                ...theme.typography.h1,
                            }}
                        >
                            HOW CAN WE USE IT?
                        </Typography>
                    </Box>
                        {memoizedFeatures.map((feature, index) => (
                            <Box
                                key={index}
                                display="flex"
                                flexDirection="row"
                                alignItems="center"
                                gap='1vw'
                                p='1.3vw'
                                sx={{ position: 'relative' }}
                            >
                                <StepCircle
                                    onClick={() => handleStepClick(index)}
                                    active={step === index + 1}
                                >
                                    {getCircleContent(index)}
                                </StepCircle>

                                {index < memoizedFeatures.length - 1 && (
                                    <RedLine top={'5.1vw'} />
                                )}

                                <Box ml='3.8vw' maxWidth='28vw'>
                                    <Typography sx={{...theme.typography.h6,}}>
                                        {feature.title}
                                    </Typography>

                                    <Typography sx={{...theme.typography.h9,}} pt='0.6vw'>
                                        {feature.description}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                        <Box display="flex" flexDirection="row" gap='1vw' mt='1vw'>
                            <Button
                                variant="contained"
                                onClick={handlePrevious}
                                disabled={step === 1}
                                sx={{
                                    padding:0,
                                    minWidth:0,
                                    display: 'flex',
                                    borderRadius: '0.21vw',
                                    width: '6.82vw',
                                    height: '2.08vw',
                                    ...theme.typography.button,
                                    border:'1px solid #fff',
                                    backgroundColor: 'transparent',
                                    color: '#fff',
                                    borderColor:  '#fff',
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                    },
                                    '&.Mui-disabled': {
                                        color: '#787777',
                                        border:'1px solid #787777',
                                    }
                                }}
                                disableRipple
                            >
                                Previous
                            </Button>

                            <Button
                                variant="contained"
                                onClick={handleNext}
                                disabled={step === 3}
                                sx={{
                                    padding:0,
                                    minWidth:0,
                                    display: 'flex',
                                    borderRadius: '0.21vw',
                                    width: '6.82vw',
                                    height: '2.08vw',
                                    ...theme.typography.button,
                                    backgroundColor: '#B50304',
                                    color: '#fff',
                                    borderColor:'transparent',
                                    '&:hover': {
                                        backgroundColor: '#B50304',
                                    },
                                    '&.Mui-disabled': {
                                        color: 'rgba(255,255,255,0.50)',
                                        borderColor: '#fff',
                                        backgroundColor: '#C8030480',
                                    }
                                }}
                                disableRipple
                            >
                                Next
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Stepper;
