import React from 'react';
import { Box, Typography, Paper, Button, ThemeProvider, createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    },
    background: {
      default: '#1e1e1e',
      paper: '#D9D9D900',
    },
  },
  typography: {
    h4: {
      fontFamily: 'Lato',
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: '20px',
    },
    body2: {
      fontFamily: 'Lato',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '14px',
    },
    button: {
      fontFamily: 'Lato',
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '12px',
      textTransform: 'none', // Keeps button text from being uppercase
    },
  },
});

const AppCard = ({ name, description, renewalDate }) => (
    <Paper
      sx={{
        p: 3,
        borderRadius: 2,
        mb: 2,
        backgroundColor: 'background.paper',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box sx={{ ml: 2 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          {description}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Next renewal {renewalDate}
        </Typography>
      </Box>
      <Button
        variant="contained"
        sx={{
          color: 'white',
          backgroundColor: '#b71c1c',
          '&:hover': { backgroundColor: '#d32f2f' },
          padding: '8px 20px', // Increase padding for larger size
          minWidth: '100px', // Set a larger minimum width
        }}
      >
        Open
      </Button>
    </Paper>
  );
  

const AppsPage = () => {
  const apps = [
    {
      name: 'CTMS',
      description: 'Cutting-edge Clinical Trials Management Systems',
      renewalDate: '29 Sept 2024',
    },
    {
      name: 'RPM',
      description: 'Remote Patient Monitoring',
      renewalDate: '29 Sept 2024',
    },
  ];

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ minHeight: '100%', width: '100%', mb: 13, backgroundColor: 'background.default', p: 4 }}>
        <Typography variant="h4" sx={{ mb: 4, color: 'primary.main' }}>
          App Library
        </Typography>
        {apps.map((app, index) => (
          <AppCard key={index} {...app} />
        ))}
      </Box>
    </ThemeProvider>
  );
};

export default AppsPage;
