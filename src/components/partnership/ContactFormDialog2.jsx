import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
  Typography,
  Box,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const theme = createTheme({
  palette: {
    primary: {
      main: '#B50304', // Primary color for buttons
    },
    background: {
      default: '#fff',
      paper: '#262626', // Background color for paper components
    },
    text: {
      primary: '#fff', // Primary text color
      secondary: '#fff', // Secondary text color
    },
  },
  typography: {
    fontFamily: 'Lato, sans-serif',
    button: {
      textTransform: 'none', // Prevent uppercase transformation for buttons
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '16px',
      textAlign: 'center', // Center text
    },
    subtitle2: {
      fontFamily: 'Sen',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '19.25px',
      textAlign: 'center',
      color: '#FFFFFFA6',
    },
    leaveMessage: {
      fontFamily: 'Lato',
      fontSize: '23px',
      fontWeight: 600,
      lineHeight: '23px',
      textAlign: 'center',
      color: '#FFFFFF',
    },
  },
});

const ContactFormDialog2 = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://site.vitruvianshield.com/api/v1/contact-req', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          phone_number: '',
          subject: '',
          message: '',
        });
        onClose();
      } else {
        console.error('Error submitting the form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog 
        open={open} 
        onClose={onClose} 
        maxWidth="xs" 
        fullWidth 
        PaperProps={{
          style: {
            maxWidth: '528px',
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            borderRadius: '15px',
            padding: 16
          },
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="leaveMessage" sx={{mt: 4}}>
            Leave a message
          </Typography>
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: theme.palette.text.secondary,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ padding: '16px 24px' }}>
          <Typography variant="subtitle2" align="center" gutterBottom sx={{mb: 4}}>
            Please fill this form in a decent manner
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField 
              fullWidth 
              name="first_name"
              placeholder="First name" 
              variant="outlined" 
              margin="dense"
              value={formData.first_name}
              onChange={handleInputChange}
              InputProps={{
                style: { backgroundColor: '#fff', borderRadius: '4px', color: '#262626' }
              }}
            />
            <TextField 
              fullWidth 
              name="last_name"
              placeholder="Last name" 
              variant="outlined" 
              margin="dense"
              value={formData.last_name}
              onChange={handleInputChange}
              InputProps={{
                style: { backgroundColor: '#fff', borderRadius: '4px', color: '#262626' }
              }}
            />
          </Box>
          <Box mt={2}>
            <TextField 
              fullWidth 
              name="email"
              placeholder="Enter your email" 
              variant="outlined" 
              margin="dense"
              value={formData.email}
              onChange={handleInputChange}
              InputProps={{
                style: { backgroundColor: '#fff', borderRadius: '4px', color: '#262626' }
              }}
            />
          </Box>
          <Box mt={2}>
            <TextField 
              fullWidth 
              name="phone_number"
              placeholder="Enter your phone number" 
              variant="outlined" 
              margin="dense"
              value={formData.phone_number}
              onChange={handleInputChange}
              InputProps={{
                style: { backgroundColor: '#fff', borderRadius: '4px', color: '#262626' }
              }}
            />
          </Box>
          <Box mt={2}>
            <TextField 
              fullWidth 
              name="subject"
              placeholder="Subject" 
              variant="outlined" 
              margin="dense"
              value={formData.subject}
              onChange={handleInputChange}
              InputProps={{
                style: { backgroundColor: '#fff', borderRadius: '4px', color: '#262626' }
              }}
            />
          </Box>
          <Box mt={2} mb={4}>
            <TextField 
              fullWidth 
              name="message"
              placeholder="Message" 
              variant="outlined" 
              multiline
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              InputProps={{
                style: { backgroundColor: '#fff', borderRadius: '4px', color: '#262626' }
              }}
            />
          </Box>
        </DialogContent>

        <DialogActions sx={{ justifyContent: 'center', padding: '16px 24px' }}>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            sx={{
              ...theme.typography.button,
              width: '8.0656vw',
              height: '2.34375vw',
              backgroundColor: '#B50304',
              '&:hover': { backgroundColor: '#9f0303' },
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default ContactFormDialog2;
