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
        form: {
            fontFamily: 'Inter',
            fontSize: { xs: '12px', sm: '15px', md: '18px', lg: '20px', xl: '22px' },
            fontWeight: 400,
        },
        button: {
            fontFamily: 'Lato',
            fontSize: { xs: '9.5px', sm: '13px', md: '18px', lg: '20px', xl: '22px' },
            color: "#FFFFFF",
        },
    },
});

const proItems = [
    { id: '1', title: "The Mobile App",  image: pro1, url: '/products/mobile-app', description: "An easy and intuitive way to share your data with all professionals in charge of providing you with after-care and medical follow-up.", },
    { id: '2', title: "Web Application", image: pro2, url: '/products/smart-watch',description: "An easy and intuitive way to share your data with all professionals in charge of providing you with after-care and medical follow-up." },
    { id: '3', title: "Desktop Platform",image: pro3, url: '/products/dashboard',  description: "An easy and intuitive way to share your data with all professionals in charge of providing you with after-care and medical follow-up." },
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
                height: '100%',
                display: 'flex',
                flexDirection: {xs: 'row', md: 'row'},
                justifyContent: 'space-between',
                alignItems: 'center',

            }}>
                <Box
                    key={animateKey}
                    sx={{
                    width: {xs: '210px', sm: '270px', md: '335px', lg: '430px', xl: '530px'},
                    ml: {xs: 5, sm: 10, md: 15, lg: 25, xl: 38},
                    display: 'flex',
                    flexDirection: 'column',
                    gap: {xs: 1, sm: 1, md: 1.5, lg: 2, xl: 2,},
                }}>
                    {/* متن عنوان بر اساس currentIndex */}
                    <Typography sx={{
                        ...theme.typography.h3,
                        animation: 'fadeLeft 0.8s ease-in-out',
                    }}>
                        {proItems[currentIndex].title}
                    </Typography>

                    <Typography sx={{
                        ...theme.typography.h6,
                        width: '100%',
                        animation: 'fadeLeft 0.7s ease-in-out',
                        pb: {xs: 1, sm: 1, md: 1.5, lg: 2, xl: 2,},
                    }}>
                        {proItems[currentIndex].description}
                    </Typography>

                    <Box display="flex" alignItems="center" sx={{gap:{xs: 1, sm: 1, md: 1.5, lg: 2, xl: 3,}}}>
                        {proItems.map((item, index) => (
                            <Box
                                key={item.id}
                                sx={{
                                    position:'relative',
                                    overflow: 'hidden',
                                    width: {xs: '80px', sm: '100px', md: '110px', lg: '120px', xl: '135px'},
                                    height: {xs: '70px', sm: '90px', md: '100px', lg: '110px', xl: '120px'},
                                    backgroundImage: `linear-gradient(360deg, rgba(20, 20, 20, 0.05) 0%, rgba(255, 255, 255, 0.1) 100%), url(${item.image})`,
                                    backgroundSize: '100%',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    border: currentIndex === index ? '1px solid #B50304' : '1px solid #000000',
                                    animation: currentIndex === index ? 'borderExpand 0.5s ease' : 'none',
                                    display: 'flex',
                                    transition: 'border 0.2s ease',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap:{xs: 1, sm: 1, md: 1.5, lg: 2, xl: 2,},
                                    '@keyframes borderExpand': {
                                        '0%': {
                                            borderWidth: '1px',
                                            borderOpacity: 0, // شفافیت در حالت ابتدایی
                                        },
                                        '50%': {
                                            borderWidth: '4px', // عرض مرز در حالت میانی
                                            borderOpacity: 1, // شفافیت در حالت میانی
                                        },
                                        '100%': {
                                            borderWidth: '1px',
                                            borderOpacity: 0, // شفافیت در حالت پایانی
                                        },
                                    },
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
                            width:{ xs: '100px', sm: '135px', md: '170px', lg: '190px', xl: '220px' },
                            height: { xs: '30px', sm: '37px', md: '48px', lg: '52px', xl: '58px' },
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
                        width: {xs:'150px',sm:'230px',md: '300px', lg: '400px', xl: '470px'},
                        height: {xs:'300px',sm:'400px',md: '500px', lg: '650px', xl: '820px'},
                        display: 'flex',
                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            Bottom: '100%',
                            right: '35%',
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
                            bottom={'5%'}
                            right={'40%'}
                            zIndex={3}
                            sx={{gap:{xs: 0.5, sm: 1.5, md: 3, lg: 5, xl: 6,}}}
                        >
                            <IconButton
                                onClick={handlePrev}
                                sx={{
                                    '&:hover': {backgroundColor: 'transparent'},

                                }}
                            >
                                <img src={previousarrow} alt="Previous" style={{width:'2.5vw', position:"absolute"}}/>
                            </IconButton>
                            <IconButton
                                onClick={handleNext}
                                sx={{
                                    '&:hover': {backgroundColor: 'transparent'},
                                }}
                            >
                                <img src={nextarrow} alt="Next" style={{width:'2.5vw',position:"absolute"}}/>
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
