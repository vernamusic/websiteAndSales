import React from 'react';
import { Box, Typography, ThemeProvider, createTheme, Link } from '@mui/material';
import pci from '../assets/pci.png';
import biopole from '../assets/biopole.png';
import astrolab from '../assets/astrolab.png';
import footerloc from '../assets/footerloc.png';

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

const Footer = () => (
  <ThemeProvider theme={theme}>
    <Box
      sx={{
        backgroundColor: 'black',
        py: 8,
        width: '100%',
        minHeight: '800px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: 2,
      }}
    >
      <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px' }}>
        <Box>
          <Box
            sx={{
              width: { xs: '100%', sm: '320px' },
              backgroundColor: '#14141426',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              p: 2,
            }}
          >
            <Typography variant="h3" marginTop="16px">
              OUR SOLUTIONS
            </Typography>

            <Typography variant="body9" marginTop="32px">
              The problem
            </Typography>
            <Typography variant="body9" marginTop="0.5px">
              Concept
            </Typography>
            <Typography variant="body9" marginTop="0.5px">
              The Smartwatch
            </Typography>
            <Typography variant="body9" marginTop="0.5px">
              Mobile App
            </Typography>
            <Typography variant="body9" marginTop="0.5px">
              Research API
            </Typography>
            <Typography variant="body9" marginTop="0.5px">
              Data & Research
            </Typography>
            <Typography variant="body9" marginTop="0.5px">
              Certifications
            </Typography>
          </Box>

          <Box
            sx={{
              width: { xs: '100%', sm: '320px' },
              backgroundColor: '#14141426',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              mt: { xs: 4, sm: 0 },
              p: 2,
            }}
          >
            <Typography variant="h3" marginTop="64px">
              ABOUT US
            </Typography>

            <Typography variant="body9" marginTop="32px">
              Our Vision
            </Typography>
            <Typography variant="body9" marginTop="0.5px">
              Our Team
            </Typography>
            <Typography variant="body9" marginTop="0.5px">
              Our Partners
            </Typography>
            <Typography variant="body9" marginTop="0.5px">
              Become a Partner
            </Typography>
            <Typography variant="body9" marginTop="0.5px">
              Donations
            </Typography>
            <Typography variant="body9" marginTop="0.5px">
              Contact Us
            </Typography>
            <Typography variant="body9" marginTop="0.5px">
              Gallery
            </Typography>
          </Box>
        </Box>

        {/* Visit us Section */}
        <Box
          sx={{
            width: { xs: '100%', sm: '320px' },
            backgroundColor: '#14141426',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            p: 2,
          }}
        >
          <Typography variant="h3" marginTop="16px">
            Visit us
          </Typography>

          {/* Biopole Section */}
          <Box marginTop={4}>
            <img src={biopole} alt="Biopole" style={{ width: '103px', height: 'auto', marginRight: '8px' }} />
            <Box marginTop="16px">
            <Box display="flex" alignItems="center">
            <img src={footerloc} alt="locationLogo" style={{ width: '22px', height: 'auto', marginRight: '8px' }} />
              <Typography variant="h6" gutterBottom>
                VITRUVIAN SHIELD SA
              </Typography>
              </Box>
              <Box  sx={{mt:'12px'}}>
              <Typography variant="body3" paragraph>
                Rue de la Corniche n°3a, Bâtiment Phenyl, 1066 Epalinges; Switzerland
              </Typography>
              </Box>
            </Box>
            <Link href="https://biopole.ch" target="_blank" rel="noopener" variant="body2">
              Biopole
            </Link>
          </Box>

          {/* Astrolabs Section */}
          <Box marginTop={4}>
            <img src={astrolab} alt="Astrolab" style={{ width: '103px', height: 'auto', marginRight: '8px' }} />
            <Box marginTop="16px">
            <Box display="flex" alignItems="center">
            <img src={footerloc} alt="locationLogo" style={{ width: '22px', height: 'auto', marginRight: '8px' }} />
              <Typography variant="h6" gutterBottom>
                VITRUVIAN SHIELD DMCC
              </Typography>
              </Box>
              <Box  sx={{mt:'12px'}}>
              <Typography variant="body3" paragraph>
                Parkside Retail Level; Cluster R - Jumeirah Lake Towers; Dubai - United Arab Emirates
              </Typography>
              </Box>
            </Box>
            <Link href="https://astrolabs.com" target="_blank" rel="noopener" variant="body2">
              Astrolabs
            </Link>
          </Box>

          {/* Creative Science Park Section */}
          <Box marginTop={4}>
            <img src={pci} alt="science park" style={{ width: '103px', height: 'auto', marginRight: '8px' }} />
            <Box marginTop="16px">
            <Box display="flex" alignItems="center">
            <img src={footerloc} alt="locationLogo" style={{ width: '22px', height: 'auto', marginRight: '8px' }} />
            <Typography variant="h6" gutterBottom>
              VITRUVIAN SHIELD - PT
            </Typography>
          </Box>
          <Box sx={{mt:'12px'}}>
              <Typography variant="body3">
                PCI - Creative Science Park; Via do Conhecimento, Edf. Central, 3830-352 Ílhavo, Portugal
              </Typography>
          </Box>
            </Box>
            <Link href="https://sciencepark.pt" target="_blank" rel="noopener" variant="body2">
              Creative Science Park
            </Link>
          </Box>
        </Box>

        {/* Video Section */}
        <Box
          sx={{
            width: { xs: '100%', sm: '320px' },
            backgroundColor: '#14141426',
            borderRadius: '8px',
            overflow:'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 2,
            gap: '64px',
            justifyContent: 'center',
          }}
        >
          {['aWnbr8Aagbo', 'z2KFOvcP3IQ', 'YOpXuRqvpVU'].map((id, index) => (
            <iframe
              key={index}
              title={`YouTube Video ${index + 1}`}
              width="260px"
              height="160px"
              src={`https://www.youtube.com/embed/${id}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ))}
        </Box>
      </Box>
    </Box>
  </ThemeProvider>
);

export default Footer;
