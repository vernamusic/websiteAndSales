import React from 'react';
import { Box, Typography, Button, createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    h6: {
      fontFamily: 'Lato',
      fontWeight: 700,
      fontSize: { sm: '15px', md: '17px', lg: '21px', xl: '24px' },
      color: '#FFFFFF',
      letterSpacing: '0.4px',
      lineHeight: 'normal',
    },
    h3: {
      fontFamily: 'Lato',
      fontWeight: 600,
      fontSize: { sm: '20px', md: '24px', lg: '28px', xl: '35px' },
      color: '#FFFFFF',
      letterSpacing: '0.4px',
    },
    h9: {
      fontFamily: 'Lato',
      fontWeight: 700,
      lineHeight: '20.4px',
      fontSize: {sm: '12px', md: '17px' },
      color: '#FFFFFF',
    },
    body1: {
      fontFamily: 'Lato',
      fontWeight: 400,
      lineHeight: '19.2px',
      fontSize: {sm: '12px', md: '16px' },
      color: '#FFFFFF',
    },
    body2: {
      fontFamily: 'Lato',
      fontWeight: 500,
      lineHeight: '15px',
      fontSize: {sm: '12px', md: '16px' },
      color: '#FFFFFF',
    },
    body3: {
      fontFamily: 'Sen',
      fontWeight: 400,
      lineHeight: '21.66px',
      fontSize: {sm: '12px', md: '16px' },
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
            PRICING
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
              padding: 4,
              boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)',
              flex: '1 1 400px', // Increased from 300px to 350px
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid #FFFFFF33',
              maxWidth: '450px', // Optional: Set a maxWidth for further control
            }}
          >
            <Typography sx={{ ...theme.typography.h6 }}>CTMS</Typography>
            <Typography sx={{ ...theme.typography.body1 }}>
              Cutting-edge Clinical Trials Management
            </Typography>
            <Typography sx={{ ...theme.typography.h9, mt: 2 }}>FEATURES</Typography>
            <Box component="ul" sx={{ paddingLeft: '1rem', margin: 0 }}>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                  Data collection
                </Typography>
              </li>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                  Wearable devices
                </Typography>
              </li>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                  Remote patient monitoring
                </Typography>
              </li>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                  Resource Management
                </Typography>
              </li>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                  Research KPIs and monitoring
                </Typography>
              </li>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                  eConsent
                </Typography>
              </li>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                  Site and staff management
                </Typography>
              </li>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                  Trial planning and designing
                </Typography>
              </li>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                  Randomization and blindness
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
                  backgroundColor: 'red',
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
              padding: 4,
              boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)',
              flex: '1 1 400px', // Increased from 300px to 350px
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid #FFFFFF33',
              maxWidth: '450px', // Optional: Set a maxWidth for further control
            }}
          >
            <Typography sx={{ ...theme.typography.h6 }}>RPM</Typography>
            <Typography sx={{ ...theme.typography.body1 }}>
              Remote Patient Monitoring
            </Typography>
            <Typography sx={{ ...theme.typography.h9, mt: 2 }}>FEATURES</Typography>
            <Box component="ul" sx={{ paddingLeft: '1rem', margin: 0 }}>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                  Data collection
                </Typography>
              </li>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                  Wearable devices
                </Typography>
              </li>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                  Remote patient monitoring
                </Typography>
              </li>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                  Resource Management
                </Typography>
              </li>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                  Research KPIs and monitoring
                </Typography>
              </li>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                  eConsent
                </Typography>
              </li>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                  Site and staff management
                </Typography>
              </li>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                  Trial planning and designing
                </Typography>
              </li>
              <li style={{ color: 'red', marginBottom: '4px' }}>
                <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                  Randomization and blindness
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
                  backgroundColor: 'red',
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
