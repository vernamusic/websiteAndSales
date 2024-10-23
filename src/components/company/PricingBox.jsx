import React from 'react';
import { Box, Typography, Button, createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    h6: {
      fontFamily: 'Lato',
      fontWeight: 700,
      fontSize: { sm: '14px', md: '17px', lg: '20px', xl: '23px' },
      color: '#FFFFFF',
      letterSpacing: '0.4px',
      lineHeight: 'normal',
    },
    h3: {
      fontFamily: 'Lato',
      fontWeight: 600,
      fontSize: { sm: '17px', md: '19px', lg: '23px', xl: '26px' },
      color: '#FFFFFF',
      letterSpacing: '0.4px',
    },
    h9: {
      fontFamily: 'Lato',
      fontWeight: 700,
      lineHeight: '20.4px',
      fontSize: { sm: '10px', md: '12px', lg: '14px', xl: '17px' },
      color: '#FFFFFF',
    },
    body1: {
      fontFamily: 'Lato',
      fontWeight: 400,
      lineHeight: '19.2px',
      fontSize: { sm: '8px', md: '11px', lg: '14px', xl: '16px' },
      color: '#FFFFFF',
    },
    body2: {
      fontFamily: 'Lato',
      fontWeight: 500,
      lineHeight: '15px',
      fontSize: { sm: '7px', md: '10px', lg: '13px', xl: '15px' },
      color: '#FFFFFF',
    },
    body3: {
      fontFamily: 'Sen',
      fontWeight: 400,
      lineHeight: '21.66px',
      fontSize: { sm: '11px', md: '13px', lg: '15px', xl: '18px' },
      color: '#F1F1F1',
    },
  },
});

const PricingBox = () => {
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
              width: { xs: '90%', sm: '600px' },
            }}
          >
            OUR PLAN
          </Typography>
          <Typography
            sx={{
              ...theme.typography.body3,
              mb: 5,
            }}
          >
            Two monthly plans to purchase CTMS and RPM:
          </Typography>
        </Box>

        {/* Pricing Cards */}
        <Box
          display="flex"
          flexDirection={{ sm: 'row' }}
          justifyContent="center"
          gap={12}
        >
          {/* CTMS */}
          <Box
            sx={{
              backgroundColor: '#141414',
              borderRadius: '15px',
              padding: 6,
              boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid #FFFFFF33',
              width: '405px',
              height:'590px',
              gap:1,
            }}
          >
            <Typography sx={{ ...theme.typography.h6 }}>CTMS</Typography>
            <Typography sx={{ ...theme.typography.body1,mt:'16px' }}>
            Cutting-edge clinical trials management 
            </Typography>
            <Typography sx={{ ...theme.typography.h9, mt: 2 }}>FEATURES</Typography>
            <Box component="ul" sx={{ paddingLeft: '1rem', display:'flex',flexDirection:'column', margin: 0 , gap:1}}>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                Remote patient monitoring
                </Typography>
              </li>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                Geo tracking
                </Typography>
              </li>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                Site management
                </Typography>
              </li>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                Staff management
                </Typography>
              </li>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                Feedback
                </Typography>
              </li>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                Adverse event reporting
                </Typography>
              </li>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                Video consultation
                </Typography>
              </li>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                Emergency call
                </Typography>
              </li>
            </Box>
            <Box display="flex" flexDirection="column" gap={2} mt={4}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    color: '#FFFFFF',
                    borderColor: '#FFFFFF',
                    textTransform: 'none',
                    borderRadius: '5px',
                  }}
                >
                  More
                </Button>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#B50304',
                  textTransform: 'none',
                  borderRadius: '5px',
                }}
              >
                Buy
              </Button>
            </Box>
          </Box>

          {/* RPM */}
          <Box
            sx={{
              backgroundColor: '#141414',
              borderRadius: '15px',
              padding: 6,
              boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid #FFFFFF33',
              width: '405px',
              height:'590px',
              gap:1,
            }}
          >
            <Typography sx={{ ...theme.typography.h6 }}>RPM</Typography>
            <Typography sx={{ ...theme.typography.body1,mt:'16px' }}>
            Remote patient monitoring
            </Typography>
            <Typography sx={{ ...theme.typography.h9, mt: 2 }}>FEATURES</Typography>
            <Box component="ul" sx={{ paddingLeft: '1rem', display:'flex',flexDirection:'column', margin: 0 , gap:1}}>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                Electronic data management
                </Typography>
              </li>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                ECG
                </Typography>
              </li>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                Emergency call
                </Typography>
              </li>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                Geo tracking
                </Typography>
              </li>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                AI chat bot
                </Typography>
              </li>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                Adverse event reporting
                </Typography>
              </li>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                e-Consent
                </Typography>
              </li>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                Vital signs
                </Typography>
              </li>
            </Box>
            <Box display="flex" flexDirection="column" gap={2} mt={4}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    color: '#FFFFFF',
                    borderColor: '#FFFFFF',
                    textTransform: 'none',
                    borderRadius: '5px',
                  }}
                >
                  More
                </Button>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#B50304',
                  textTransform: 'none',
                  borderRadius: '5px',
                }}
              >
                Buy
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default PricingBox;
