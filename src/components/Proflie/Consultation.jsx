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
  createTheme,
  ThemeProvider,
} from '@mui/material';
import {
  ChevronLeft,
  AttachFile,
  EmojiEmotions,
  Language,
  ShoppingCart,
  CreditCard,
  Build,
  Add,
} from '@mui/icons-material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00897b',
    },
    background: {
      default: '#1e1e1e',
      paper: '#2d2d2d',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
  },
});

const SupportCategory = ({ icon, title }) => (
  <Button
    variant="outlined"
    startIcon={
      <Box sx={{ bgcolor: 'background.paper', p: 1, borderRadius: '50%' }}>
        {icon}
      </Box>
    }
    endIcon={<Add />}
    sx={{
      justifyContent: 'space-between',
      bgcolor: 'background.paper',
      color: 'text.primary',
      p: 2,
      width: '100%',
      '&:hover': { bgcolor: 'action.hover' },
    }}
  >
    {title}
  </Button>
);

const SupportChat = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ border:'1px solid #FFF',width:'100%',minHeight: '100vh', bgcolor: 'background.default', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ bgcolor: 'primary.main', p: 2, display: 'flex', alignItems: 'center' }}>
          <Avatar sx={{ mr: 2 }} src="/placeholder.svg" alt="Support Team" />
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Support Team Name</Typography>
            <Typography variant="caption" sx={{ color: '#4caf50' }}>
              • Active
            </Typography>
          </Box>
          <Button
            startIcon={<ChevronLeft />}
            sx={{ color: 'background.paper' }}
          >
            Profile
          </Button>
        </Box>

        <Container maxWidth="md" sx={{ flexGrow: 1, py: 4 }}>
          <Box textAlign="center" mb={4}>
            <Typography variant="h4" gutterBottom sx={{ color: 'text.primary' }}>
              Welcome to Chat
            </Typography>
            <Typography variant="body1" color="text.secondary">
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

        <Box sx={{ p: 2, bgcolor: 'background.default' }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type here ..."
            sx={{
              '& .MuiOutlinedInput-root': {
                bgcolor: 'background.paper',
                borderRadius: 50,
                '& fieldset': {
                  borderColor: 'transparent',
                },
                '&:hover fieldset': {
                  borderColor: 'transparent',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'transparent',
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton edge="start">
                    <EmojiEmotions />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <AttachFile />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default SupportChat;