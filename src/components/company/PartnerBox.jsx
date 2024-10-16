import React from 'react';
import { Box, Grid, Typography, createTheme, ThemeProvider } from '@mui/material';
import partner1 from '../../assets/partner1.png';
import partner2 from '../../assets/partner2.png';
import partner3 from '../../assets/partner3.png';
import partner4 from '../../assets/partner4.png';
import partner5 from '../../assets/partner5.png';
import partner6 from '../../assets/partner6.png';
import partner7 from '../../assets/partner7.png';
import partner8 from '../../assets/partner8.png';
import partner9 from '../../assets/partner9.png';
import partner10 from '../../assets/partner10.png';

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
  { src: partner1, alt: 'partner 1', size: { width: '120px', height: 'auto' } }, 
  { src: partner2, alt: 'partner 2', size: { width: '100px', height: 'auto' } }, 
  { src: partner3, alt: 'partner 3', size: { width: '230px', height: 'auto' } }, 
  { src: partner4, alt: 'partner 4', size: { width: '330px', height: 'auto' } }, 
  { src: partner5, alt: 'partner 5', size: { width: '190px', height: 'auto' } }, 
  { src: partner6, alt: 'partner 6', size: { width: '170px', height: 'auto' } }, 
  { src: partner7, alt: 'partner 7', size: { width: '210px', height: 'auto' } }, 
  { src: partner8, alt: 'partner 8', size: { width: '180px', height: 'auto' } }, 
  { src: partner9, alt: 'partner 9', size: { width: '200px', height: 'auto' } }, 
  { src: partner10, alt: 'partner 10', size: { width: '220px', height: 'auto' } }, 
];

const PartnerBox = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          mt: {xs:'none',sm:'64px'},
          mb: {xs:'none',sm:'64px'},
        }}
      >
          <Typography
            sx={{
              ...theme.typography.h3,
              display: {xs:'none', sm:'flex'},
              mb: 2.5,
              lineHeight: '1.5',
              width: '600px',
            }}
          >
            OUR PARTNER
          </Typography>
          <Typography
            sx={{
              ...theme.typography.h6,
              display:{xs:'none',sm:'flex'},
              mb: 5,
            }}
          >
            Explore our trusted partners who help us deliver exceptional experiences
          </Typography>
          <Typography
            sx={{
              ...theme.typography.h6,
              display:{xs:'flex',sm:'none'},
              mb: 5,
            }}
          >
            Our trusted partners who help us deliver exceptional experiences.
          </Typography>
        </Box>

        <Box 
          sx={{ 
            backgroundColor: '#f5f5f5', 
            padding: '20px', 
            borderRadius: '15px', 
            maxWidth: '90%', // Reduced width for mobile
            margin: '0 auto', // Center the box horizontally
            display: 'flex',
            flexWrap: 'wrap', 
            justifyContent: 'center',
            alignItems: 'center',
            [theme.breakpoints.up('sm')]: {
              maxWidth: '80%', // Lower width on larger screens
            }
          }}
        >
          {partners.map((partner, index) => (
            <Box
              key={index}
              sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                margin: '5px', // Reduced margin for mobile
                [theme.breakpoints.up('sm')]: {
                  margin: '20px', // Larger margin on bigger screens
                }
              }}
            >
              <Box
                component="img"
                src={partner.src}
                alt={partner.alt}
                sx={{
                  maxWidth: '65px', // Smaller size for mobile
                  height: 'auto', // Maintain aspect ratio
                  [theme.breakpoints.up('sm')]: {
                    maxWidth: partner.size.width, // Original size for larger screens
                    margin: '0 20px', // Original spacing on larger screens
                  }
                }}
              />
            </Box>
          ))}
        </Box>


      </Box>
    </ThemeProvider>
  );
}

export default PartnerBox;
