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
        h6: {
            fontFamily: 'sen',
            fontSize: { xs: '11px', sm: '11px', md: '13px', lg: '16px', xl: '21px' },
            color: "#F1F1F1",
            letterSpacing: '0.4px',
            lineHeight: 'normal',
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize: { xs: '18px', sm: '22px', md: '24px', lg: '28px', xl: '35px' },
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
        button: {
            fontFamily: 'Lato',
            fontSize: { xs: '10px', sm: '10px', md: '15px', lg: '18px', xl: '20px' },
            color: "#FFFFFF",
        },
        form: {
            fontFamily: 'Inter',
            fontSize: { xs: '10px', sm: '10px', md: '15px', lg: '18px', xl: '20px' },
            fontWeight: 400,
        },
    },
});

const proItems = [
    { id: '1', title: "Mobile App",  image: pro1, url: '/products/mobile-app', description: "An easy and intuitive way to share your data with all professionals in charge of providing you with after-care and medical follow-up.", },
    { id: '2', title: "Watch", image: pro2, url: '/products/smart-watch',description: "Equipped with a vast range of state of the art sensors, the Vitruvian Shield Smartwatch collects biometric data from the wearer" },
    { id: '3', title: "Web App",image: pro3, url: '/products/dashboard',  description: "This Web App allows healthcare providers and researchers to analyze, manage and monitor their patients' health data in real time.\n" +
            "\n" },
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
                width: '92%',
                height: '100%',
                display:{xs:'none',sm:'flex'},
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',

            }}>
                <Box
                    key={animateKey}
                    sx={{
                    width: {xs: '210px', sm: '270px', md: '335px', lg: '430px', xl: '530px'},
                    display: 'flex',
                    flexDirection: 'column',
                    gap: {xs: 1, sm: 0.8, md: 0.8, lg: 1, xl: 1,},
                }}>
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
                                    backgroundImage: `linear-gradient(360deg, rgba(20, 20, 20, 0.05) 0%, rgba(255, 255, 255, 0.1) 100%)`,
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
                                            borderOpacity: 0,
                                        },
                                        '50%': {
                                            borderWidth: '4px',
                                            borderOpacity: 1,
                                        },
                                        '100%': {
                                            borderWidth: '1px',
                                            borderOpacity: 0,
                                        },
                                    },
                                }}
                                onClick={() => handleProductClick(index)}
                            >
                                <Box sx={{
                                    backgroundImage: `url(${item.image})`,
                                    width: '85%',
                                    height: '85%',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }} />
                            </Box>
                        ))}
                </Box>

                <Button
                        variant="contained"
                        sx={{
                            ...theme.typography.button,
                            mt:{xs: 1, sm: 1, md: 1, lg: 1.2, xl: 2,} ,
                            borderRadius: '4px',
                            backgroundColor: '#B50304',
                            textTransform: 'none',
                            width:{ xs: '100px', sm: '100px', md: '130px', lg: '150px', xl: '170px' },
                            height: { xs: '25px', sm: '30px', md: '37px', lg: '43px', xl: '47px' },
                            '&:hover': {
                                backgroundColor: '#B50304',
                            },
                        }}
                        disableRipple
                        onClick={handleSeeProductsClick}
                    >
                        view product
                    </Button>
                </Box>
                <Box
                    sx={{
                        position: 'relative',
                        flexDirection: 'column',
                        width: {xs:'150px',sm:'200px',md: '300px', lg: '400px', xl: '430px'},
                        height: {xs:'300px',sm:'380px',md: '500px', lg: '650px', xl: '750px'},
                        display: 'flex',
                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                            borderRadius: '0 0 30px 30px',
                            background: "linear-gradient(180deg, rgba(20, 20, 20, 0.06) 0%, rgba(256, 0, 0, 0.09) 25%, rgba(256, 0, 0, 0.36) 99%)",
                            zIndex: 3,
                        }}
                    >
                        <Box
                            key={animateKey}
                            component="img"
                            src={proItems[currentIndex].image}
                            sx={{
                                position: 'absolute',
                                right: '-9.5%',
                                bottom: '10%',
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
                            right={'42%'}
                            zIndex={3}
                            sx={{gap:{sm: 1, md: 3, lg: 4, xl: 5,}}}
                        >
                            <IconButton
                                onClick={handlePrev}
                                sx={{
                                    '&:hover': {backgroundColor: 'transparent'},

                                }}
                            >
                                <img src={previousarrow} alt="Previous" style={{width:'2.2vw', position:"absolute"}}/>
                            </IconButton>
                            <IconButton
                                onClick={handleNext}
                                sx={{
                                    '&:hover': {backgroundColor: 'transparent'},
                                }}
                            >
                                <img src={nextarrow} alt="Next" style={{width:'2.2vw',position:"absolute"}}/>
                            </IconButton>
                        </Box>
                    </Box>
                </Box>

            </Box>
            <Box sx={{
                width: '100%',
                display: { xs: 'flex', sm: 'none' },
                justifyContent: 'center',
                flexDirection: 'column',
                gap: 2,
            }}>
                <Typography sx={{
                    ...theme.typography.h3,
                    textJustify: 'start',
                    pl:2,
                }}>
                    Products
                </Typography>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width: '100%',
                }}>
                    {proItems.map((item) => (
                        <Box key={item.id} sx={{
                            width: '28%',
                            textAlign: 'center',
                            background: 'linear-gradient(360deg, rgba(20, 20, 20, 0.05) 0%, rgba(255, 255, 255, 0.25) 100%)', // پس‌زمینه
                            borderRadius: '10px 10px 0 0',
                            overflow: 'hidden',
                        }}>
                            <a href={item.url} style={{ textDecoration: 'none' }}>
                                <Box
                                    component="img"
                                    src={item.image}
                                    alt={item.title}
                                    sx={{
                                        width: '90%',
                                        height: 'auto',
                                    }}
                                />
                                <Typography sx={{
                                    ...theme.typography.h3,
                                }}>
                                    {item.title}
                                </Typography>
                            </a>
                        </Box>
                    ))}
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
