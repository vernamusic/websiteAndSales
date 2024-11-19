import React from 'react';
import {
  Avatar,
  Box,
  Button,
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
  Add
} from '@mui/icons-material';
import CustomerSupport from '../../assets/CustomerSupport.png';
import DoctorsBag from '../../assets/DoctorsBag.png';
import CardPayment from '../../assets/CardPayment.png';
import ShoppingCard from '../../assets/ShoppingCart.png';
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
        fontFamily: 'Lato',
        fontSize: { xs: '20px', sm: '20.2px', md: '22.1px', lg: '24px' },
        lineHeight: '24px',
        fontWeight: 700,
        color: "#FFFFFF",
        letterSpacing: '0.4px',
    },
    body1: {
        fontFamily: 'Lato',
        fontSize: { xs: '10px', sm: '11.1px', md: '12.2px', lg: '14px' },
        lineHeight: '14px',
        fontWeight: 500,
        color: "#FFFFFFE5",
        letterSpacing: '0.4px',
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
        <Box
          sx={{
            width: '37px', 
            height: '37px',
            padding: '6px',
            ml: 1,
            borderRadius: '40px',
            background: 'linear-gradient(180deg, #1F1F1F 0%, #303130 100%)'
          }}
        >
          {icon}
        </Box>
      }
      endIcon={<Add />}
      sx={{
        width: '240px',
        height: '49px',
        padding: '6px 16px 6px 8px',
        justifyContent: 'space-between',
        borderRadius: '8px',
        background: 'linear-gradient(180deg, #1F1F1F 0%, #141414 100%)',
        color: '#ffffff',
        borderColor: '#8AE3BE4D',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
        {title}
      </Box>
    </Button>
  );
  
  

const SupportChat = () => {
    return (
        <ThemeProvider theme={theme}>
          <Box sx={{ width: '100%', minHeight: '100vh', backgroundColor: '#262626', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ background: 'linear-gradient(0deg, #00544D 0%, #008F82 100%)', p: '16px 32px', display: 'flex', alignItems: 'center' }}>
              <Avatar sx={{ mr: 2, width: 50, height: 50, border: '2px solid #B0EEE9', boxShadow: '0px 0px 5px 0px #8AE6DE99' }} />
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1" sx={{ fontSize: { xs: '12.64px', sm: '16px' }, mb: 1 }}>
                  Support Team Name
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: '#59BA63', mr: 1 }} />
                  <Typography variant="caption">Active</Typography>
                </Box>
              </Box>
              <Button startIcon={<ChevronLeft />} sx={{ color: '#EEEEEE', background: '#00544D8C', borderRadius: '30px' }}>Profile</Button>
            </Box>
    
            <Box sx={{ flexGrow: 1, p: { xs: '16px', md: '136px 310.5px' } }}>
              <Box textAlign="center" mb={6}>
                <Typography variant="h4" gutterBottom>Welcome to Chat</Typography>
                <Typography variant="body1">Get started chat. Not sure where to start?</Typography>
              </Box>
    
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
                <Box sx={{   }}>
                    <SupportCategory 
                    icon={<img src={CustomerSupport} alt="Website support" style={{ width: '25px', height: '25px' }} />} 
                    title={<Typography sx={{ display: 'flex', }}>Website support</Typography>} 
                    />
                </Box>
                <Box sx={{ }}>
                    <SupportCategory 
                    icon={<img src={DoctorsBag} alt="Service purchase" style={{ width: '25px', height: '25px' }} />} 
                    title={<Typography sx={{ display: 'flex' }}>Service purchase</Typography>} 
                    />
                </Box>
                <Box sx={{   }}>
                    <SupportCategory 
                    icon={<img src={CardPayment} alt="Medical and technical" style={{ width: '25px', height: '25px' }} />} 
                    title={<Typography sx={{ display: 'flex' }}>Medical and technical</Typography>} 
                    />
                </Box>
                    <Box sx={{   }}>
                        <SupportCategory 
                        icon={<img src={ShoppingCard} alt="Finance and payment" style={{ width: '25px', height: '25px' }} />} 
                        title={<Typography sx={{ display: 'flex' }}>Finance and payment</Typography>} 
                        />
                    </Box>
                </Box>


            </Box>
    
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
                    '& fieldset': { borderColor: 'transparent' },
                    '&:hover fieldset': { borderColor: 'transparent' },
                    '&.Mui-focused fieldset': { borderColor: 'transparent' }
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton edge="start" aria-label="Insert emoji">
                        <EmojiEmotions sx={{ color: '#ffffff' }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end" aria-label="Attach file">
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
