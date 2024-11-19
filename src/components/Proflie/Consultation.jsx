import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  ThemeProvider,
  createTheme
} from '@mui/material';
import {
  ChevronLeft,
  AttachFile,
  EmojiEmotions,
  Language,
  ShoppingCart,
  CreditCard,
  Build,
  Add
} from '@mui/icons-material';

// Create a custom theme for typography
const theme = createTheme({
  typography: {
    subtitle1: {
        fontFamily: 'Lato',
        fontSize: '16px',
        lineHeight: '21.6px',
        fontWeight: 400,
        color: "#FFF",
        letterSpacing: '0.4px',
    },
    caption: {
        fontFamily: 'Lato',
        fontSize: { xs: '10px', sm: '11.1px', md: '12.2px', lg: '13px' },
        lineHeight: '15.6px',
        fontWeight: 400,
        color: "#59BA63",
        letterSpacing: '0.4px',
    },
    h4: {
      fontSize: '32px',
      fontWeight: 600,
      color: '#ffffff'
    },
    body1: {
      fontSize: '16px',
      color: '#bbbbbb'
    },
    button: {
      textTransform: 'none'
    }
  }
});

const SupportCategory = ({ icon, title }) => (
  <Button
    variant="outlined"
    startIcon={
      <Box sx={{ backgroundColor: '#2d2d2d', p: 1, borderRadius: '50%' }}>
        {icon}
      </Box>
    }
    endIcon={<Add />}
    sx={{
      justifyContent: 'space-between',
      backgroundColor: '#2d2d2d',
      color: '#ffffff',
      p: 2,
      width: '100%',
      '&:hover': { backgroundColor: '#3c3c3c' }
    }}
  >
    {title}
  </Button>
);

const SupportChat = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', minHeight: '100vh', backgroundColor: '#262626', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ background: 'linear-gradient(0deg, #00544D 0%, #008F82 100%)', p: '16px 32px 16px 32px', display: 'flex', alignItems: 'center' }}>
          <Avatar
            sx={{
              mr: '16px',
              width: '50px',
              height: '50px',
              border: '2px solid #B0EEE9',
              boxShadow: '0px 0px 5px 0px #8AE6DE99'
            }}
          />
          <Box sx={{ flexGrow: 1 }}>
            <Typography 
            variant="subtitle1" 
            sx={{ fontSize: { xs: '12.64px', sm: '16px', md: '17px', lg: '18px' },mb:1, }}
            >
            Support Team Name
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                    sx={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    backgroundColor: '#59BA63',
                    mr: 1,
                    }}
                />
                <Typography variant="caption">
                    Active
                </Typography>
            </Box>

          </Box>

          {/* Should become slider for support profile */}
          <Button
            startIcon={<ChevronLeft />}
            sx={{ color: '#EEEEEE', background:'#00544D8C',borderRadius:'30px' }}
          >
            Profile
          </Button>
        </Box>

        <Container maxWidth="md" sx={{ flexGrow: 1, py: 4 }}>
          <Box textAlign="center" mb={4}>
            <Typography variant="h4" gutterBottom>
              Welcome to Chat
            </Typography>
            <Typography variant="body1">
              Get started chat. Not sure where to start?
            </Typography>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <SupportCategory icon={<Language />} title="Website support" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SupportCategory icon={<ShoppingCart />} title="Service purchase" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SupportCategory icon={<CreditCard />} title="Finance and payment" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SupportCategory icon={<Build />} title="Medical and technical" />
            </Grid>
          </Grid>
        </Container>

        <Box sx={{ p: 2, backgroundColor: '#1e1e1e' }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type here ..."
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#2d2d2d',
                borderRadius: 50,
                color: '#ffffff',
                '& fieldset': {
                  borderColor: 'transparent'
                },
                '&:hover fieldset': {
                  borderColor: 'transparent'
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'transparent'
                }
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton edge="start">
                    <EmojiEmotions sx={{ color: '#ffffff' }} />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <AttachFile sx={{ color: '#ffffff' }} />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default SupportChat;
