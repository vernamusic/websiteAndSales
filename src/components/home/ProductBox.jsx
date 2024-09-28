import React, { useState } from 'react';
import { Typography, Button, Box, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import pro1 from "../../assets/mobileart.png";
import pro2 from "../../assets/watchart.png";
import pro3 from "../../assets/laptopart.png";
import nextarrow from "../../assets/rightArrow-1.png";
import previousarrow from "../../assets/leftArrow.png";

const theme = createTheme({
    typography: {
        fontFamily: 'Sen, Arial, sans-serif',
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
        form: {
            fontFamily: 'Inter',
            fontSize: { xs: '12px', sm: '15px', md: '18px', lg: '20px', xl: '22px' },
            fontWeight: 400,
        },
        button: {
            fontFamily: 'Lato',
            fontSize: { xs: '10px', sm: '16px', md: '18px', lg: '20px', xl: '24px' },
            color: "#FFFFFF",
        },
    },
});

// Define URLs for each product
const proItems = [
    { id: '1', image: pro1, url: '/products/mobile-app' },
    { id: '2', image: pro2, url: '/products/smart-watch' },
    { id: '3', image: pro3, url: '/products/dashboard' },
];

const ProductBox = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animateKey, setAnimateKey] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % proItems.length);
        setAnimateKey((prevKey) => prevKey + 1);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + proItems.length) % proItems.length);
        setAnimateKey((prevKey) => prevKey + 1);
    };

    const handleProductClick = (index) => {
        setCurrentIndex(index);
        setAnimateKey((prevKey) => prevKey + 1);
    };

    const handleSeeProductsClick = () => {
        const currentProduct = proItems[currentIndex];
        window.location.href = currentProduct.url;
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: {xs: 'column', md: 'row'},
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Box sx={{
                    width: {xs: '250px', sm: '300px', md: '430px', lg: '480px', xl: '530px'},
                    ml: {xs: 5, sm: 10, md: 15, lg: 25, xl: 38},
                    mt: {xs: 5, sm: 10, md: 17, lg: 20, xl: 33},
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <Box sx={{mb: 5}}>
                        <Typography sx={{...theme.typography.h3}}>
                            The Mobile App
                        </Typography>
                        <Typography sx={{
                            ...theme.typography.h6,
                            mt: 3,
                            width: '100%',
                        }}>
                            An easy and intuitive way to share your data with all professionals in charge of providing
                            you with after-care and medical follow-up.
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={3}>
                        {proItems.map((item, index) => (
                            <Box
                                key={item.id}
                                sx={{
                                    width: {xs: '80px', sm: '100px', md: '110px', lg: '120px', xl: '135px'},
                                    height: {xs: '70px', sm: '90px', md: '100px', lg: '110px', xl: '120px'},
                                    backgroundImage: `linear-gradient(360deg, rgba(20, 20, 20, 0.05) 0%, rgba(255, 255, 255, 0.1) 100%), url(${item.image})`,
                                    backgroundSize: '100%',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    border: currentIndex === index ? '1px solid #B50304' : '1px solid #000000',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                onClick={() => handleProductClick(index)}
                            />
                        ))}
                    </Box>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            ...theme.typography.button,
                            mt: 2,
                            borderRadius: '4px',
                            backgroundColor: '#B50304',
                            textTransform: 'none',
                            width: '48%',
                            height: {xs: '30px', sm: '45px', md: '50px', lg: '55px', xl: '65px'},
                            '&:hover': {
                                backgroundColor: '#B50304',
                            },
                        }}
                        disableRipple
                        onClick={handleSeeProductsClick}
                    >
                        See products
                    </Button>
                </Box>
                <Box
                    sx={{
                        position: 'relative',
                        flexDirection: 'column',
                        width: {md: '300px', lg: '400px', xl: '470px'},
                        height: {md: '500px', lg: '650px', xl: '820px'},
                        display: {xs: 'none', sm: 'none', md: 'flex'},
                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            Bottom: '100%',
                            right: '25%',
                            width: '100%',
                            height: '100%',
                            borderRadius: '0 0 30px 30px',
                            background: "linear-gradient(180deg, rgba(20, 20, 20, 0.06) 0%, rgba(256, 0, 0, 0.09) 25%, rgba(256, 0, 0, 0.36) 99%)",
                            zIndex: 1,
                        }}
                    >
                        <Box
                            key={animateKey}
                            component="img"
                            src={proItems[currentIndex].image}
                            alt="Phone app screenshot"
                            sx={{
                                position: 'absolute',
                                right: '-9.5%',
                                bottom: '5%',
                                width: '120%',
                                zIndex: 2,
                                animation: `fadeLeft 0.7s ease`,
                            }}
                        />
                        <Box
                            display="flex"
                            justifyContent="center"
                            position="absolute"
                            bottom={'4%'}
                            right={'38%'}
                            gap={-1}
                            zIndex={3}
                        >
                            <IconButton
                                onClick={handlePrev}
                                sx={{
                                    '&:hover': {backgroundColor: 'transparent'},
                                    width: '50px',
                                    height: '50px',
                                }}
                            >
                                <img src={previousarrow} alt="Previous" style={{width: '100%'}}/>
                            </IconButton>
                            <IconButton
                                onClick={handleNext}
                                sx={{
                                    '&:hover': {backgroundColor: 'transparent'},
                                    width: '50px',
                                    height: '50px',
                                }}
                            >
                                <img src={nextarrow} alt="Next" style={{width: '100%'}}/>
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <style>
                {`
    @keyframes fadeLeft {
      0% {
        opacity: 0;
        transform: translateX(15%);
        animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1); 
      }

      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `}
            </style>
        </ThemeProvider>
    );
};

export default ProductBox;
