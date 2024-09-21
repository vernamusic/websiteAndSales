import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Box, Button, Typography, createTheme, ThemeProvider } from '@mui/material';
import { styled } from '@mui/material/styles';
import dash1 from "../../assets/usedash1.png";
import dash2 from "../../assets/usedash2.png";
import dash3 from "../../assets/usedash3.png";
import black from "../../assets/laptopblackpage.png";

const theme = createTheme({
    typography: {
        fontFamily: 'Sen, Arial, sans-serif',
        h6: {
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '24px',
            color: "#F1F1F1",
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize: '24px',
            lineHeight: '28px',
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
    top: 22,
    left: 0,
    width: 70,
    height: 70,
    backgroundColor: active ? '#B50304' : 'transparent',
    border: `2px solid ${active ? 'transparent' : '#B50304'}`,
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
            top: top || 90,
            left: 34.5,
            width: '2px',
            height: 92,
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
        <Typography variant="h6" sx={{ color: '#fff', fontSize: 27 }}>
            {index + 1}
        </Typography>
    ), []);

    const memoizedFeatures = useMemo(() => features, []);

    const images = [dash1, dash2, dash3];

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center', // وسط چین کردن باکس اصلی
                    height: '100vh', // می‌توانید این خط را برای تنظیم ارتفاع صفحه به کار ببرید
                    ml:15,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center', // وسط چین کردن باکس داخلی
                        position: 'relative', // Ensure the images stack correctly
                        width: '100%', // این باعث می‌شود باکس به اندازه‌ی تمام صفحه باشد
                        maxWidth: '1200px', // می‌توانید یک عرض حداکثر نیز تعیین کنید
                        mr:10,
                    }}
                >
                    <img
                        src={black} // Black background image
                        alt="Background"
                        style={{
                            width: '100%',
                            position: 'relative',
                            zIndex: 1, // Ensure it is behind other images

                        }}
                    />
                    <img
                        src={images[step - 1]} // Current step image
                        alt={`Step ${step}`} // Fix alt attribute
                        style={{
                            width: '81.5%',
                            opacity: fade ? 1 : 0,
                            transition: 'opacity 0.2s ease-in-out',
                            position: 'absolute',
                            zIndex: 2, // Ensure it is in front of background
                            top:'21%'
                        }}
                    />
                </Box>
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'left',
                        pr: 25,
                    }}
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        m={0}
                        p={0}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                mb: 2,
                                ml: 1,
                                lineHeight: '1.5',
                                width: 600,
                                fontSize: 30,
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
                                gap={2}
                                p={3}
                                sx={{ position: 'relative' }}
                            >
                                <StepCircle
                                    onClick={() => handleStepClick(index)}
                                    active={step === index + 1}
                                >
                                    {getCircleContent(index)}
                                </StepCircle>

                                {index < memoizedFeatures.length - 1 && (
                                    <RedLine top={90} />
                                )}

                                <Box ml={9} maxWidth={490}>
                                    <Typography variant="h3">
                                        {feature.title}
                                    </Typography>

                                    <Typography variant="h6" pt={1.5}>
                                        {feature.description}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                        <Box display="flex" flexDirection="row" gap={2} ml={2.5} mt={2}>
                        <Button
                                variant="contained"
                                onClick={handlePrevious}
                                disabled={step === 1}
                                sx={{
                                    display: { xs: 'none', md: 'flex' },
                                    borderRadius: '4px',
                                    border:'1px solid #fff',
                                    backgroundColor: 'transparent',
                                    color: '#fff',
                                    borderColor:  '#fff',
                                    width: 150,
                                    height: 45,
                                    fontSize: 17,
                                    textTransform: 'none',
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
                                    textTransform: 'none',
                                    display: { xs: 'none', md: 'flex' },
                                    borderRadius: '4px',
                                    backgroundColor: '#B50304',
                                    color: '#fff',
                                    borderColor:'transparent',
                                    width: 150,
                                    height: 45,
                                    fontSize: 17,
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
