import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Box, Button, Typography, createTheme, ThemeProvider } from '@mui/material';
import { styled } from '@mui/material/styles';
import pc1 from "../../assets/usedash1.jpg";
import pc2 from "../../assets/usedash2.jpg";
import pc3 from "../../assets/usedash3.jpg";

const theme = createTheme({
    typography: {
        h1: { fontFamily: 'Lato', fontSize: '24px', fontWeight: 600, color: "#FFFFFF" },
        h3: { fontFamily: 'sen', fontWeight: 400, fontSize: '1.25vw', color: "rgba(241, 241, 241, 1)" },
        h6: { fontFamily: 'Lato', fontWeight: 700, fontSize: '18px', color: "#FFFFFF" },
        h9: { fontFamily: 'Lato', fontWeight: 400, fontSize: '14px', lineHeight: '110%', color: "#D9D9D9" },
        button: { fontFamily: 'Lato', fontSize: '12.64px', fontWeight: '600', textTransform: "none", color: "#FFFFFF" }
    }
});

const features = [
    { title: "Register on the Vitruvian Shield Website", description: "Visit the Vitruvian Shield website to create your account. Fill in your details and set up your user profile." },
    { title: "Activate Your Account and Subscribe", description: "After your account is approved, log in to your email for your credentials. Next, purchase a subscription for access to the platform." },
    { title: "Log In and Explore", description: "Log in to your dashboard using your credentials. Explore the various features designed to optimize your experience and achieve your goals." }
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
    <Box sx={{
        position: 'absolute',
        top: '3.75em',
        left: '2.25em',
        width: 0,
        height: '3.5em',
        borderRight: '1px dashed #B50304',
        transform: 'translateX(-50%)'
    }} />
);

const Stepper = () => {
    const [step, setStep] = useState(1);
    const [fade, setFade] = useState(true);

    const handleNext = useCallback(() => {
        setFade(false);
        setTimeout(() => {
            setStep(prevStep => (prevStep < 3 ? prevStep + 1 : 1));
            setFade(true);
        }, 200);
    }, []);

    const handlePrevious = useCallback(() => {
        setFade(false);
        setTimeout(() => {
            setStep(prevStep => (prevStep > 1 ? prevStep - 1 : 3));
            setFade(true);
        }, 200);
    }, []);

    const handleStepClick = useCallback((index) => {
        setFade(false);
        setTimeout(() => {
            setStep(index + 1);
            setFade(true);
        }, 300);
    }, []);

    const getCircleContent = useCallback((index) => (
        <Typography variant="h6" sx={{ color: '#fff' }}>
            {index + 1}
        </Typography>
    ), []);

    const memoizedFeatures = useMemo(() => features, []);
    const images = [pc1, pc2, pc3];

    // Auto-step timer
    useEffect(() => {
        const intervalId = setInterval(handleNext, 3000); // Switch steps every 10 seconds
        return () => clearInterval(intervalId); // Clear interval on component unmount
    }, [handleNext]);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'left',
                background: '#1F1F1F',
                width: '100%',
                height: '668px',
                padding: '4em'
            }}>
                <Typography variant="h1" mb="1em" mt="1em">HOW CAN WE USE IT?</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '4em', mt: '2em', mr: '2em' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'left' }}>
                        {memoizedFeatures.map((feature, index) => (
                            <Box key={index} display="flex" flexDirection="row" alignItems="center" gap='1em' p='1em' sx={{ position: 'relative' }}>
                                <StepCircle onClick={() => handleStepClick(index)} active={step === index + 1}>
                                    {getCircleContent(index)}
                                </StepCircle>
                                {index < memoizedFeatures.length - 1 && <RedLine top={'5.1vw'} />}
                                <Box ml='3.5em' width='32em'>
                                    <Typography sx={{ ...theme.typography.h6 }}>{feature.title}</Typography>
                                    <Typography sx={{ ...theme.typography.h9 }} pt='0.5em'>{feature.description}</Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                    <Box component="img" src={images[step - 1]} sx={{ width: '494.202px', height: '420px', objectFit: 'cover' }} />
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Stepper;
