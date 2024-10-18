import React from 'react';
import {
  Box,
  Typography,
  ThemeProvider,
  createTheme,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
    body9: {
      fontFamily: 'Lato',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '28.8px',
      color: '#FFFFFFE5',
      
    },
  },
});

const locations = [
  {
    image: biopole,
    name: 'VITRUVIAN SHIELD SA',
    address: 'Rue de la Corniche n°3a, Bâtiment Phenyl, 1066 Epalinges; Switzerland',
  },
  {
    image: astrolab,
    name: 'VITRUVIAN SHIELD DMCC',
    address: 'Parkside Retail Level; Cluster R - Jumeirah Lake Towers; Dubai - United Arab Emirates',
  },
  {
    image: pci,
    name: 'VITRUVIAN SHIELD - PT',
    address: 'PCI - Creative Science Park; Via do Conhecimento, Edf. Central, 3830-352 Ílhavo, Portugal',
  },
];

const videoIds = ['aWnbr8Aagbo', 'z2KFOvcP3IQ', 'YOpXuRqvpVU'];

const Footer = () => (
  <ThemeProvider theme={theme}>
    {/* Desktop version */}
    <Box
      sx={{
        backgroundColor: 'black',
        py: 8,
        width: '100%',
        minHeight: '800px',
        display: { xs: 'none', sm: 'flex' },
        flexDirection: 'column',
        alignItems: 'center',
        px: 2,
      }}
    >
      <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '128px' }}>
        <Box>
          {/* OUR SOLUTIONS Box */}
          <Box sx={commonBoxStyles}>
            <Typography gutterBottom variant="h3" marginTop="16px" marginBottom="16px">OUR SOLUTIONS</Typography>
            {['The problem', 'Concept', 'The Smartwatch', 'Mobile App', 'Research API', 'Data & Research', 'Certifications'].map((text, index) => (
              <Typography variant="body9" marginTop="0.5px" key={index}>{text}</Typography>
            ))}
          </Box>

          {/* ABOUT US Box */}
          <Box sx={commonBoxStyles}>
            <Typography gutterBottom variant="h3" marginTop="64px" marginBottom="16px">ABOUT US</Typography>
            {['Our Vision', 'Our Team', 'Our Partners', 'Become a Partner', 'Donations', 'Contact Us', 'Gallery'].map((text, index) => (
              <Typography variant="body9" marginTop="0.5px" key={index}>{text}</Typography>
            ))}
          </Box>
        </Box>

        {/* Visit us Section */}
        <Box sx={commonBoxStyles}>
          <Typography variant="h3" marginTop="16px">VISIT US</Typography>
          {locations.map((location, index) => (
            <Box marginTop={4} key={index}>
              <img src={location.image} alt={location.name} style={{ width: '103px', height: 'auto', marginRight: '8px' }} />
              <Box marginTop="16px">
                <Box display="flex" alignItems="center">
                  <img src={footerloc} alt="locationLogo" style={{ width: '22px', height: 'auto', marginRight: '8px' }} />
                  <Typography variant="h6" gutterBottom>{location.name}</Typography>
                </Box>
                <Typography variant="body3" paragraph sx={{ mt: '12px' }}>{location.address}</Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Video Section */}
        <Box
          sx={{
            ...commonBoxStyles,
            justifyContent: 'center',
            gap: '64px',
          }}
        >
          {videoIds.map((id, index) => (
            <Box sx={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}> {/* نسبت 16:9 */}
            <iframe
              key={index}
              title={`YouTube Video ${index + 1}`}
              src={`https://www.youtube.com/embed/${id}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            />
          </Box>
          
          
          ))}
        </Box>
      </Box>
    </Box>

    {/* Mobile version */}
    <Box
      sx={{
        width: '100%',
        display: { xs: 'flex', sm: 'none' },
        flexDirection: 'column',
        alignItems: 'center',
        py: 8,
        px: 2,
        mt: 4,
      }}
    >
      <Box sx={{ width: '100vw',backgroundColor: '#080808', display: 'flex', flexDirection: 'column',}}>
        {/* OUR SOLUTIONS Accordion */}
        <Accordion sx={{ backgroundColor: '#080808' }}>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            {/* Add the arrow icon to the left side */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ExpandMoreIcon sx={{ color: 'white' }} /> {/* Left arrow in white */}
              <Typography variant="h3" sx={{ color: 'white' }}>Our solution</Typography> {/* Text in white */}
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {['The problem', 'Concept', 'The Smartwatch', 'Mobile App', 'Research API', 'Data & Research', 'Certifications'].map((text, index) => (
              <Typography variant="body9" key={index}>{text}</Typography>
            ))}
          </AccordionDetails>
        </Accordion>

        <Box sx={{ borderBottom: '1px solid #D9D9D912'}} />



        {/* ABOUT US Accordion */}
        <Accordion sx={{ backgroundColor: '#080808' }}>
        <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            {/* Add the arrow icon to the left side */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ExpandMoreIcon sx={{ color: 'white' }} /> {/* Left arrow in white */}
              <Typography variant="h3" sx={{ color: 'white' }}>About Us</Typography> {/* Text in white */}
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {['Our Vision', 'Our Team', 'Our Partners', 'Become a Partner', 'Donations', 'Contact Us', 'Gallery'].map((text, index) => (
              <Typography variant="body9" key={index}>{text}</Typography>
            ))}
          </AccordionDetails>
        </Accordion>

        <Box sx={{ borderBottom: '1px solid #D9D9D912'}} />

        {/* Visit us Accordion */}
        <Accordion sx={{ backgroundColor: '#080808' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ExpandMoreIcon sx={{ color: 'white' }} /> {/* Left arrow in white */}
              <Typography variant="h3" sx={{ color: 'white' }}>Visit Us</Typography> {/* Text in white */}
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              {locations.map((location, index) => (
                <Box marginTop={4} key={index}>
                  <img src={location.image} alt={location.name} style={{ width: '103px', height: 'auto', marginRight: '8px' }} />
                  <Box marginTop="16px">
                    <Box display="flex" alignItems="center">
                      <img src={footerloc} alt="locationLogo" style={{ width: '22px', height: 'auto', marginRight: '8px' }} />
                      <Typography variant="h6" gutterBottom>{location.name}</Typography>
                    </Box>
                    <Typography variant="body3" paragraph sx={{ mt: '12px' }}>{location.address}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>

        <Box sx={{ borderBottom: '1px solid #D9D9D912'}} />

        {/* Video Section Accordion */}
        <Accordion sx={{ backgroundColor: '#080808' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content" id="panel4a-header">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ExpandMoreIcon sx={{ color: 'white' }} /> {/* Left arrow in white */}
              <Typography variant="h3" sx={{ color: 'white' }}>Our YouTube</Typography> {/* Text in white */}
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {videoIds.map((id, index) => (
                <Box sx={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}> {/* نسبت 16:9 */}
                <iframe
                  key={index}
                  title={`YouTube Video ${index + 1}`}
                  src={`https://www.youtube.com/embed/${id}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '8px',
                    overflow: 'hidden',
                  }}
                />
              </Box>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  </ThemeProvider>
);

// Common styles for the boxes
const commonBoxStyles = {
  backgroundColor: '#14141415',
  borderRadius: '8px',
  width: { xs: '100%', sm: '260px' },
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
};

export default Footer;
