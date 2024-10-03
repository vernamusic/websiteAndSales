import React from 'react';
import { Box, Grid, Typography, Button, createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    h6: {
      fontFamily: 'Sen',
      fontWeight: 700,
      fontSize: { xs: '12px', sm: '15px', md: '17px', lg: '21px', xl: '24px' },
      color: '#FFFFFF',
      letterSpacing: '0.4px',
      lineHeight: 'normal',
    },
    h3: {
      fontFamily: 'Lato',
      fontWeight: 600,
      fontSize: { xs: '16px', sm: '20px', md: '24px', lg: '28px', xl: '35px' },
      color: '#FFFFFF',
      letterSpacing: '0.4px',
    },
    body1: {
      fontFamily: 'Sen',
      fontWeight: 600,
      fontSize: { xs: '12px', sm: '14px', md: '16px' },
      color: '#FFFFFF',
    },
    body2: {
      fontFamily: 'Sen',
      fontWeight: 500,
      fontSize: { xs: '10px', sm: '12px', md: '14px' },
      color: '#FFFFFF',
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
              ...theme.typography.h6,
              mb: 5,
            }}
          >
            Two monthly plans to purchase CTMS and RPM:
          </Typography>
        </Box>

        {/* Pricing Cards */}
        <Grid container spacing={3} justifyContent="center">
          {/* Full Platform License */}
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                backgroundColor: '#141414',
                borderRadius: '10px',
                padding: 4,
                boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Typography sx={{ ...theme.typography.h3 }}>260,00 CHF</Typography>
              <Typography sx={{ ...theme.typography.h6 }}>
                Full Platform License (CTMS & RPM)
              </Typography>
              <Typography sx={{ ...theme.typography.body2, mt: 2 }}>
                Monthly Fee
              </Typography>
              <Box component="ul" sx={{ paddingLeft: '1rem', margin: 0 }}>
                <li style={{ color: 'red' }}>
                  <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                    850 CHF per smartwatch
                  </Typography>
                </li>
                <li style={{ color: 'red' }}>
                  <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                    40 CHF per month per watch
                  </Typography>
                </li>
                <li style={{ color: 'red' }}>
                  <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                    Cloud data storage and traffic management
                  </Typography>
                </li>
              </Box>
              <Typography sx={{ ...theme.typography.body1, mt: 2 }}>FEATURES</Typography>
              <Box component="ul" sx={{ paddingLeft: '1rem', margin: 0 }}>
                <li style={{ color: 'red' }}>
                  <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                    Research Protocol Designing
                  </Typography>
                </li>
                <li style={{ color: 'red' }}>
                  <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                    Research KPIs and Monitoring
                  </Typography>
                </li>
                <li style={{ color: 'red' }}>
                  <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                    Resource Management
                  </Typography>
                </li>
                <li style={{ color: 'red' }}>
                  <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                    eConsent
                  </Typography>
                </li>
                <li style={{ color: 'red' }}>
                  <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                    Trial Planning and Designing
                  </Typography>
                </li>
                <li style={{ color: 'red' }}>
                  <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                    Site and Staff Management
                  </Typography>
                </li>
              </Box>
              <Box display="flex" flexDirection="column" gap={2} mt={4}>
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
              </Box>
            </Box>
          </Grid>

          {/* Individual Service License */}
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                backgroundColor: '#111111',
                borderRadius: '10px',
                padding: 4,
                boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Typography sx={{ ...theme.typography.h3 }}>160,00 CHF</Typography>
              <Typography sx={{ ...theme.typography.h6 }}>
                Individual Service License (CTMS or RPM)
              </Typography>
              <Typography sx={{ ...theme.typography.body2, mt: 2 }}>
                Monthly Fee
              </Typography>
              <Box component="ul" sx={{ paddingLeft: '1rem', margin: 0 }}>
                <li style={{ color: 'red' }}>
                  <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                    850 CHF per smartwatch
                  </Typography>
                </li>
                <li style={{ color: 'red' }}>
                  <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                    40 CHF per month per watch
                  </Typography>
                </li>
                <li style={{ color: 'red' }}>
                  <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                    Cloud data storage and traffic management
                  </Typography>
                </li>
              </Box>
              <Typography sx={{ ...theme.typography.body1, mt: 2 }}>FEATURES</Typography>
              <Box component="ul" sx={{ paddingLeft: '1rem', margin: 0 }}>
                <li style={{ color: 'red' }}>
                  <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                    Research Protocol Designing
                  </Typography>
                </li>
                <li style={{ color: 'red' }}>
                  <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                    Research KPIs and Monitoring
                  </Typography>
                </li>
                <li style={{ color: 'red' }}>
                  <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                    Resource Management
                  </Typography>
                </li>
                <li style={{ color: 'red' }}>
                  <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                    eConsent
                  </Typography>
                </li>
                <li style={{ color: 'red' }}>
                  <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                    Trial Planning and Designing
                  </Typography>
                </li>
                <li style={{ color: 'red' }}>
                  <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
                    Site and Staff Management
                  </Typography>
                </li>
              </Box>
              <Box display="flex" flexDirection="column" gap={2} mt={4}>
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
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default PricingBox;
