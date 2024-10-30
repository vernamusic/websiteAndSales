import React from 'react';
import { Box, Typography, Button, createTheme, ThemeProvider } from '@mui/material';
import DialogBox from './DialogBox';

const theme = createTheme({
  typography: {
    h6: {
      fontFamily: 'Lato',
      fontWeight: 700,
      fontSize: { sm: '16px', md: '18px', lg: '20px', xl: '23px' },
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
      fontSize: { sm: '11px', md: '12px', lg: '14px', xl: '17px' },
      color: '#FFFFFF',
    },
    body1: {
      fontFamily: 'Lato',
      fontWeight: 400,
      lineHeight: '19.2px',
      fontSize: { sm: '11px', md: '13px', lg: '14px', xl: '16px' },
      color: '#FFFFFF',
    },
    body2: {
      fontFamily: 'Lato',
      fontWeight: 500,
      lineHeight: '15px',
      fontSize: { sm: '11px', md: '12px', lg: '13px', xl: '15px' },
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

// FeatureItem component to render individual list items
const FeatureItem = ({ text }) => (
  <li
    style={{
      listStyleType: 'none',
      marginBottom: '4px',
      position: 'relative',
      paddingLeft: '0px',
    }}
  >
    <span
      style={{
        position: 'absolute',
        left: '-16px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '8px',
        height: '8px',
        backgroundColor: 'red',
        borderRadius: '50%',
      }}
    ></span>
    <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
      {text}
    </Typography>
  </li>
);

const PricingBox = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box mb={6}>
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
          gap={10}
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
              flex: '1 1',
              mb: '100px',
              width: '21.093vw',
              height: { sm: '520px', md: '530px', lg: '560px', xl: '590px' },
              gap: { sm: 0, md: 0.1, lg: 0.5, xl: 1 },
            }}
          >
            <Box>
              <Typography sx={{ ...theme.typography.h6 }}>CTMS</Typography>
              <Typography sx={{ ...theme.typography.body1, mt: 1 }}>
                Cutting-edge clinical trials management
              </Typography>
            </Box>
            <Typography sx={{ ...theme.typography.h9, mt: 2 }}>FEATURES</Typography>
            <Box component="ul" sx={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', margin: 0, gap: 1 }}>
              <FeatureItem text="Remote patient monitoring" />
              <FeatureItem text="Geo tracking" />
              <FeatureItem text="Site management" />
              <FeatureItem text="Staff management" />
              <FeatureItem text="Feedback" />
              <FeatureItem text="Adverse event reporting" />
              <FeatureItem text="Video consultation" />
              <FeatureItem text="Emergency call" />
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
              <DialogBox>
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
              </DialogBox>
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
              flex: '1 1',
              mb: '100px',
              width: '21.093vw',
              height: { sm: '520px', md: '530px', lg: '560px', xl: '590px' },
              gap: { sm: 0.1, md: 0.1, lg: 0.5, xl: 1 },
            }}
          >
            <Box>
              <Typography sx={{ ...theme.typography.h6 }}>RPM</Typography>
              <Typography sx={{ ...theme.typography.body1, mt: 1 }}>
                Remote patient monitoring
              </Typography>
            </Box>
            <Typography sx={{ ...theme.typography.h9, mt: 2 }}>FEATURES</Typography>
            <Box component="ul" sx={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', margin: 0, gap: 1 }}>
              <FeatureItem text="Electronic data management" />
              <FeatureItem text="ECG" />
              <FeatureItem text="Emergency call" />
              <FeatureItem text="Geo tracking" />
              <FeatureItem text="AI chat bot" />
              <FeatureItem text="Adverse event reporting" />
              <FeatureItem text="e-Consent" />
              <FeatureItem text="Vital signs" />
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
              <DialogBox>
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
              </DialogBox>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default PricingBox;
