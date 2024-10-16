import React from 'react';
import { Box, Typography, createTheme, ThemeProvider } from '@mui/material';

import yas from '../../assets/yas.png';
import adscc from '../../assets/adscc.png';
import chuv from '../../assets/partner5.png';
import hug from '../../assets/hug.png';


const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'sen',
            fontSize: { xs: '12px', sm: '15px', md: '17px', lg: '21px', xl: '24px' },
            color: "#b8b7b7",
            letterSpacing: '0.4px',
            lineHeight: 'normal',
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 500,
            fontSize: { xs: '16px', sm: '20px', md: '24px', lg: '28px', xl: '35px' },
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
    },
});

const partners = [

    { src: yas, alt: 'yas', size: { width: '230px', height: 'auto' } }, 
    { src: adscc, alt: 'adscc', size: { width: '230px', height: 'auto' } }, 
    { src: chuv, alt: 'chuv', size: { width: '230px', height: 'auto' } }, 
  { src: hug, alt: 'hug', size: { width: '230px', height: 'auto' } }, 

];

const DevBox = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          mt={6}
          mb={6}
        >
          <Typography
            sx={{
              ...theme.typography.h3,
              mb: 2.5,
              lineHeight: '1.5',
              width: '600px',
            }}
          >
            DEVELOPMENT AND CLIEENT PARTNER
          </Typography>
          <Typography
            sx={{
              ...theme.typography.h6,
              mb: 5,
            }}
          >
            Explore our trusted partners who help us deliver exceptional experiences
          </Typography>
        </Box>

        <Box 
            sx={{ 
                backgroundColor: '#f5f5f5', 
                padding: '20px', 
                borderRadius: '15px', 
                minHeight: '404px', 
                width: '90vw',
                display: 'flex', // Use flexbox
                alignItems: 'center', // Center content vertically
                flexWrap: 'wrap', // Allow wrapping of items
            }}
            >
            {partners.map((partner, index) => (
                <Box
                key={index}
                sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    margin: '20px',
                }}
                >
                <Box
                    component="img"
                    src={partner.src}
                    alt={partner.alt}
                    sx={{
                    maxWidth: partner.size.width,
                    height: partner.size.height,
                    margin: '0 20px', // Adjust spacing between images
                    }}
                />
                </Box>
            ))}
            </Box>


      </Box>
    </ThemeProvider>
  );
}

export default DevBox;
