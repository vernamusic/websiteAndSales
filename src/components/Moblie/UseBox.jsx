import React, { useState, useCallback, useMemo } from 'react';
import { Box, Button, Typography, createTheme, ThemeProvider } from '@mui/material';
import { styled } from '@mui/material/styles';
import phone1 from "../../assets/usage1.jpg";
import phone2 from "../../assets/usage2.jpg";
import phone3 from "../../assets/usage3.jpg";

const theme = createTheme({
    typography: {
        h1: {
            fontFamily:'Lato',
            fontSize: '24px',
            fontWeight: 600,
            color: "#FFFFFF",
        },
        h3: {
            fontFamily: 'sen',
            fontWeight: 400,
            fontSize: '1.25vw',
            color: "rgba(241, 241, 241, 1)",
        },
        h6: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize: '18px',
            color: "#FFFFFF",
        },
        h9: {
            fontFamily: 'Lato',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight:'110%',
            color: "#D9D9D9",
        },
        button: {
            fontFamily: 'Lato',
            fontSize: '12.64px', 
            fontWeight: '600',
            textTransform: "none",
            color: "#FFFFFF",
        },
    },
});

const features = [
    { title: "Download and Install the App", description: "Visit our website to download the latest version of our app. Once downloaded, follow the easy installation prompts to set it up on your device." },
    { title: "Set Up an Account", description: "Open the app and register by entering your information. A confirmation email will be sent to you with your username and password—smooth and straightforward! " },
    { title: "Log In and Explore", description: "Log in with your credentials to access a range of tools designed to help you monitor and enhance your health. Your path to a healthier life starts here!" }
];

const StepCircle = styled(Box)(({ active }) => ({
    position: 'absolute',
    top: '1.2em',
    width: '40px',
    height: '40px',
    backgroundColor: active ? '#B50304' : 'transparent',
    border: `1px solid ${active ? 'transparent' : '#B50304'}`,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    boxShadow: '0px 1px 8px 0px rgba(0, 0, 0, 0.24)'
}));

const RedLine = ({ top }) => (
    <Box
        sx={{
            position: 'absolute',
            top: '3.75em',
            left: '2.25em',
            width: 0,
            height: '3.5em',
            borderRight: '1px dashed #B50304',
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
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'left',
                background: '#1F1F1F',
                width: '100%',
                height: '725px',
                padding: '4em',
                overflow: 'hidden'
            }}
        >
                <Typography variant="h1" mb="1em" mt="1em">
                    HOW CAN WE USE IT?
                </Typography>

                <Box sx={{display: 'flex', flexDirection: 'row', gap: '4em', mt: '2em'}}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'left',
                        }}
                    >
                            {memoizedFeatures.map((feature, index) => (
                                <Box
                                    key={index}
                                    display="flex"
                                    flexDirection="row"
                                    alignItems="center"
                                    gap='1em'
                                    p='1em'
                                    sx={{ position: 'relative' }}
                                >
                                    <StepCircle
                                        onClick={() => handleStepClick(index)}
                                        active={step === index + 1}
                                    >
                                        {getCircleContent(index)}
                                    </StepCircle>

                                    {index < memoizedFeatures.length - 1 && (
                                        <RedLine top={'4em'} />
                                    )}

                                    <Box ml='3.5em' width='32em'>
                                        <Typography sx={{...theme.typography.h6,}}>
                                            {feature.title}
                                        </Typography>

                                        <Typography sx={{...theme.typography.h9,}} pt='0.5em'>
                                            {feature.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                            <Box display="flex" flexDirection="row" gap='1em' mt='1em' ml="4.5em">
                                <Button
                                    variant="contained"
                                    onClick={handlePrevious}
                                    disabled={step === 1}
                                    sx={{
                                        padding:'12px 24px',
                                        minWidth:0,
                                        display: 'flex',
                                        borderRadius: '4px',
                                        width: '104px',
                                        height: '37px',
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
                                        padding:'12px 24px',
                                        minWidth:0,
                                        display: 'flex',
                                        borderRadius: '4px',
                                        width: '104px',
                                        height: '37px',
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
                        <Box component="img" src={images[step-1]}
                        sx={{
                            width: '508px',
                            height: 'auto',
                            objectFit: 'cover',
                            position: 'relative',
                            left: '6em',
                            bottom: '0.5em'
                        }} />
                    </Box>
                </Box>
        </ThemeProvider>
    );
};

export default Stepper;
