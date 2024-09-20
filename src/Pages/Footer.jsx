import React from 'react';
import { Box, Typography, ThemeProvider, createTheme } from '@mui/material';
import Visit from '../assets/FooterLocation.png';
import Chat from '../assets/FooterChat.png';
import CircleIcon from '@mui/icons-material/Circle';
import Call from '../assets/FooterCall.png';
import Map from '../assets/FooterLocation.png';


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
    h9: {
      fontFamily: 'Lato',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '19.2px',
      letterSpacing: '0.5px',
      color: '#D9D9D9',
    },
    chatText: {
        fontFamily: 'Lato',
        fontWeight: 500,
        fontSize: '16px',
        color: '#FFFFFF',
        textDecoration: 'underline',
      },
    onlineStatus: {
        fontFamily: 'Lato',
        fontWeight: 500,
        fontSize: '12px',
        color: '#389030', // Online status color
      },
  },
});

const ContactBox = () => (
  <ThemeProvider theme={theme}>
    <Box
      sx={{
        backgroundColor: 'black',
        py: 8,
        width: '100%',
        minHeight:'500px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: 0,
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Lato, sans-serif',
          fontWeight: 600,
          fontSize: '1.625rem',
          lineHeight: '26px',
          color: '#FFFFFF',
          mb: 15,
          mt: 5,
        }}
      >
        CONTACT OUR FRIENDLY TEAM
      </Typography>

      <Box sx={{width:'100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap:'32px'}}>

        <Box
          sx={{
            width: '270px',
            height: '340px',
            backgroundColor: '#14141426',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            
          }}
        >
          <Box
            sx={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              border: '1px solid #FFFFFF1A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src={Visit}
              alt="Visit"
              sx={{
                width: '26px',
                height: '26px',
              }}
            />
          </Box>
          <Typography variant="h3" marginTop={'16px'}>Visit us</Typography>

          <Box marginTop={'16px'}>
            <Typography variant="h6">Switzerland</Typography>
            <Typography variant="h9">Rue de la Corniche n°3a Bâtiment Phenyl 1066 Epalinges</Typography>
          </Box>

          <Box marginTop={'32px'}>
            <Typography variant="h6">Portugal</Typography>
            <Typography variant="h9">Via do Conhecimento, Edf. Central</Typography>
          </Box>

          <Box marginTop={'32px'}>
            <Typography variant="h6">Dubai</Typography>
            <Typography variant="h9">xxxxxxxxxxxxxxxxxxxxxxxxx</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: '270px',
            height: '340px',
            backgroundColor: '#14141426',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Box
            sx={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              border: '1px solid #FFFFFF1A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src={Chat}
              alt="Chat"
              sx={{
                width: '26px',
                height: '26px',
              }}
            />
          </Box>
          <Typography variant="h3" marginTop={'16px'}>Chat to sales</Typography>

          <Box marginTop={'16px'}>
            <Typography variant="h9" >Speak to our friendly team</Typography>
          </Box>

          <Box marginTop={'24px'}>
            <Typography variant="h6">Contact@vitruvianshield.com</Typography>
            <Typography variant="h6">xxxxxxx@vitruvianshield.com</Typography>
          </Box>

          <Box display="flex" alignItems="center" marginTop={'32px'}>
                <Typography variant="chatText">Start to live chat</Typography>
                <Box display="flex" alignItems="center" ml={2}>
                <CircleIcon sx={{ fontSize: '10px', color: '#00FF00', mr: 1 }} />
                <Typography variant="onlineStatus">Online</Typography>
                </Box>
          </Box>

        </Box>

        <Box
          sx={{
            width: '270px',
            height: '340px',
            backgroundColor: '#14141426',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Box
            sx={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              border: '1px solid #FFFFFF1A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src={Call}
              alt="Call"
              sx={{
                width: '26px',
                height: '26px',
              }}
            />
          </Box>

          <Typography variant="h3" marginTop={'16px'}>Call us</Typography>
          <Typography variant="h6" marginTop={'16px'}>Mon-Fri from 8am to 5pm</Typography>
          <Typography variant="h3" marginTop={'16px'}>3830-352</Typography>

        </Box>

        <Box
          sx={{
            width: '270px',
            height: '340px',
            backgroundColor: '#14141426',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Box
            sx={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              border: '1px solid #FFFFFF1A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src={Map}
              alt="Map"
              sx={{
                width: '26px',
                height: '26px',
              }}
            />
          </Box>
          <Typography variant="h3" marginTop={'16px'}>Map</Typography>

          <Box>
            <Typography variant="h6" marginTop={'12px'}>Switzerland</Typography>
            <Box
                component="iframe"
                sx={{
                width: '100%',
                height: '46px',
                borderRadius: '8px',
                border: 'none',
                mt:'6px',
                }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d686.0635836449344!2d6.661352866723058!3d46.542655424376626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c2e64e5254b4d%3A0xc2335c921cf7e1c2!2sRte%20de%20la%20Corniche%203a%2C%201066%20Epalinges%2C%20Switzerland!5e0!3m2!1sen!2sba!4v1726592686294!5m2!1sen!2sba"
                allowFullScreen=""
                loading="lazy"
            />
          </Box>
          <Box>
            <Typography variant="h6" marginTop={'16px'}>Portugal</Typography>
            <Box
                component="iframe"
                sx={{
                width: '100%',
                height: '46px',
                borderRadius: '8px',
                border: 'none',
                mt:'6px',
                }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1514.282416874022!2d-8.666266888005284!3d40.61742390040893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd23bd4eb377f857%3A0xb1a5a23fa6594e40!2sVia%20do%20Conhecimento%2C%20%C3%8Dlhavo%2C%20Portugal!5e0!3m2!1sen!2sba!4v1726592901728!5m2!1sen!2sba"
                allowFullScreen=""
                loading="lazy"
            />
          </Box>
          <Box>
            <Typography variant="h6" marginTop={'16px'}>Dubai</Typography>
            <Box
                component="iframe"
                sx={{
                width: '100%',
                height: '46px',
                borderRadius: '8px',
                border: 'none',
                mt:'6px',
                }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462564.23152326356!2d54.60365525373314!3d25.075341047912953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sba!4v1726592971206!5m2!1sen!2sba"
                allowFullScreen=""
                loading="lazy"
            />
          </Box>
        </Box>
        
      </Box>
    </Box>
  </ThemeProvider>
);

export default ContactBox;