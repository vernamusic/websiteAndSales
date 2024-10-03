import React from 'react';
import { Box, Typography, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    h3: {
      fontFamily: 'Lato',
      fontWeight: 600,
      fontSize: '18px',
      lineHeight: '18px',
      letterSpacing: '0.5px',
      color: '#FFFFFF',
    },
    h6: {
      fontFamily: 'Lato',
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '16px',
      letterSpacing: '0.5px',
      color: '#FFFFFF',
    },
    body3: {
      fontFamily: 'Lato',
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '19.2px',
      letterSpacing: '0.5px',
      color: '#D9D9D970',
    },
    body6: {
        fontFamily: 'Lato',
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '14px',
        color: '#FFFFFF',
      },
    body9: {
        fontFamily: 'Lato',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '28.8px',
        color: '#FFFFFF90',
      },
  },
});

const ContactBox = () => (
  <ThemeProvider theme={theme}>
    <Box
      sx={{
        backgroundColor: 'black',
        py: 8,
        width: '100%',
        minHeight:'800px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: 0,
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Lato, sans-serif',
          fontWeight: 600,
          fontSize: '1.625rem',
          lineHeight: '26px',
          color: '#FFFFFF',
          mb: 15,
          mt: 5,
        }}
      >
        CONTACT OUR TEAM
      </Typography>

      <Box sx={{width:'100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap:'32px'}}>

        <Box>
          <Box
            sx={{
              width: '270px',
              backgroundColor: '#14141426',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Typography variant="h3" marginTop={'16px'}>OUR SOLUTIONDS</Typography>

            <Typography variant="body9" marginTop={'4px'}>The problem</Typography>
            <Typography variant="body9" marginTop={'4px'}>Concept</Typography>
            <Typography variant="body9" marginTop={'4px'}>The Smartwatch</Typography>
            <Typography variant="body9" marginTop={'4px'}>Mobile App</Typography>
            <Typography variant="body9" marginTop={'4px'}>Research API</Typography>
            <Typography variant="body9" marginTop={'4px'}>Data & Research</Typography>
            <Typography variant="body9" marginTop={'4px'}>Certifications</Typography>
            
          </Box>
          
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              position: 'relative',
              paddingTop: '56.25%', // 16:9 aspect ratio
              overflow: 'hidden',
              mt:'100px'

            }}
          >
            <iframe
              title="YouTube Video"
              src={`https://www.youtube.com/embed/aWnbr8Aagbo`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            />
          </Box>

        </Box>
        
        <Box>
        <Box
          sx={{
            width: '270px',
            backgroundColor: '#14141426',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Typography variant="h3" marginTop={'16px'}>ABOUT US</Typography>

          <Typography variant="body9" marginTop={'4px'}>Our Vision</Typography>
          <Typography variant="body9" marginTop={'4px'}>Our Team</Typography>
          <Typography variant="body9" marginTop={'4px'}>Our Partners</Typography>
          <Typography variant="body9" marginTop={'4px'}>Become a Partner</Typography>
          <Typography variant="body9" marginTop={'4px'}>Donations</Typography>
          <Typography variant="body9" marginTop={'4px'}>Contact Us</Typography>
          <Typography variant="body9" marginTop={'4px'}>Gallery</Typography>
        
        </Box>
          <Box
            sx={{
              position: 'relative',
              paddingTop: '56.25%', // 16:9 aspect ratio
              overflow: 'hidden',
              mt: '100px',
            }}
          >
            <iframe
              title="YouTube Video"
              src={`https://www.youtube.com/embed/YOpXuRqvpVU`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            width: '270px',
            height: '340px',
            backgroundColor: '#14141426',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            
          }}
        >
          
          <Typography variant="h3" marginTop={'16px'}>Visit us</Typography>

          <Box marginTop={'16px'}>
            <Typography variant="h6">Switzerland</Typography>
            <Typography variant="body3">Rue de la Corniche n°3a Bâtiment Phenyl 1066 Epalinges</Typography>
          </Box>
            <Typography variant="body6" marginTop={1}>3830-352</Typography>

          <Box marginTop={'32px'}>
            <Typography variant="h6">Portugal</Typography>
            <Typography variant="body3">Via do Conhecimento, Edf. Central</Typography>
          </Box>

          <Box marginTop={'32px'}>
            <Typography variant="h6">RIYADH, SAUDI ARABIA</Typography>
            <Typography variant="body3">3141 Anas ibn Malik Road, Building B 2nd Floor, Al Malqa, Riyadh, Saudi Arabia</Typography>
          </Box>
            <Typography variant="body6" marginTop={1}>+966 11 245 3566</Typography>

          <Box marginTop={'32px'}>
            <Typography variant="h6">DUBAI, UNITED ARAB EMIRATES Coworking (Parkside)</Typography>
            <Typography variant="body3">R5 Retail Level, Cluster R Jumeirah Lakes Towers, Dubai, UAE</Typography>
          </Box>
            <Typography variant="body6" marginTop={1}>+971 4 454 1159</Typography>

          <Box marginTop={'32px'}>
            <Typography variant="h6">AstroLabs Offices</Typography>
            <Typography variant="body3">Courtyard, 6 A, Al Quoz 1, Dubai, UAE</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: '270px',
            height: '340px',
            backgroundColor: '#14141426',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          
          <Typography variant="h3" marginTop={'16px'}>Map</Typography>

          <Box marginTop={'16px'}>
            <Typography variant="h6" marginTop={'12px'}>Switzerland</Typography>
            <Box
              component="iframe"
              sx={{
                width: '100%',
                height: '84px',
                borderRadius: '8px',
                border: 'none',
                mt: '6px',
              }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d686.0635836449344!2d6.661352866723058!3d46.542655424376626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c2e64e5254b4d%3A0xc2335c921cf7e1c2!2sRte%20de%20la%20Corniche%203a%2C%201066%20Epalinges%2C%20Switzerland!5e0!3m2!1sen!2sba!4v1726592686294!5m2!1sen!2sba&disableDefaultUI=true"
              allowFullScreen=""
              loading="lazy"
            />
          </Box>

          <Box marginTop={'42px'}>
            <Typography variant="h6" marginTop={'16px'}>Portugal</Typography>
            <Box
              component="iframe"
              sx={{
                width: '100%',
                height: '84px',
                borderRadius: '8px',
                border: 'none',
                mt: '6px',
              }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1514.282416874022!2d-8.666266888005284!3d40.61742390040893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd23bd4eb377f857%3A0xb1a5a23fa6594e40!2sVia%20do%20Conhecimento%2C%20%C3%8Dlhavo%2C%20Portugal!5e0!3m2!1sen!2sba!4v1726592901728!5m2!1sen!2sba&disableDefaultUI=true"
              allowFullScreen=""
              loading="lazy"
              onClick={(event) => {
                const iframe = event.target;
                const map = iframe.contentWindow.document.getElementById('map');
                map.click();
              }}
            />
          </Box>
          <Box marginTop={'42px'}>
            <Typography variant="h6" marginTop={'16px'}>RIYADH</Typography>
            <Box
                component="iframe"
                sx={{
                width: '100%',
                height: '84px',
                borderRadius: '8px',
                border: 'none',
                mt:'6px',
                }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155929.5054904308!2d46.52155149970231!3d24.952738001924068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee47244b62bed%3A0x50bae23260034b83!2s3141%20Anas%20Ibn%20Malik%20Rd%2C%20Al%20Malqa%2C%20Riyadh%2013521%2C%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1727593078376!5m2!1sen!2s&disableDefaultUI=true"
                allowFullScreen=""
                loading="lazy"
            />
          </Box>
        </Box>
        
      </Box>
    </Box>
  </ThemeProvider>
);

export default ContactBox;