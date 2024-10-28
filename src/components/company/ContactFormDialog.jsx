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

// Create a custom theme
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
      fontSize: '16px', // Updated font size
      fontWeight: 600, // Updated font weight
      lineHeight: '16px', // Updated line height
      textAlign: 'center', // Center text
    },
    subtitle2: {
      fontFamily: 'Sen',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '19.25px',
      textAlign: 'center',
      color: '#FFFFFFA6', // Color for subtitle2
    },
    leaveMessage: {
      fontFamily: 'Lato',
      fontSize: '23px', // Adjust as needed
      fontWeight: 600, // Adjust as needed
      lineHeight: '23px', // Adjust as needed
      textAlign: 'center',
      color: '#FFFFFF', // Color for the message text
    },
  },
});

const ContactFormDialog = ({ open, onClose }) => {
  // State for form fields
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: null,
    subject: '',
    message: '',
    type: null,
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
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
        // Reset form after successful submission
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          phone_number: null,
          subject: '',
          message: '',
          type: null,
        });
        onClose(); // Close the dialog
        // Optionally handle success message here
      } else {
        // Handle errors
        console.error('Error submitting the form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <ThemeProvider theme={theme}> {/* Wrap with ThemeProvider */}
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

        <DialogContent sx={{ padding: '16px 24px' }}> {/* Add padding here */}
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
                style: { 
                  backgroundColor: '#fff', // White background
                  borderRadius: '4px', // 4px border radius
                  color: '#262626', // Change text color to #262626 for better contrast
                  fontFamily: theme.typography.fontFamily,
                }
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
                style: { 
                  backgroundColor: '#fff', // White background
                  borderRadius: '4px', // 4px border radius
                  color: '#262626', // Change text color to #262626 for better contrast
                  fontFamily: theme.typography.fontFamily,
                }
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
                style: { 
                  backgroundColor: '#fff', // White background
                  borderRadius: '4px', // 4px border radius
                  color: '#262626', // Change text color to #262626 for better contrast
                  fontFamily: theme.typography.fontFamily,
                }
              }}
            />
          </Box>
          <Box mt={2}>
            <TextField 
              fullWidth 
              name="phone_number"
              placeholder="Enter your number" 
              variant="outlined" 
              margin="dense"
              value={formData.phone_number || ''}
              onChange={handleInputChange}
              InputProps={{
                style: { 
                  backgroundColor: '#fff', // White background
                  borderRadius: '4px', // 4px border radius
                  color: '#262626', // Change text color to #262626 for better contrast
                  fontFamily: theme.typography.fontFamily,
                }
              }}
            />
          </Box>
          <Box mt={2}>
            <TextField 
              fullWidth 
              name="subject"
              placeholder="Enter the subject" 
              variant="outlined" 
              margin="dense"
              value={formData.subject}
              onChange={handleInputChange}
              InputProps={{
                style: { 
                  backgroundColor: '#fff', // White background
                  borderRadius: '4px', // 4px border radius
                  color: '#262626', // Change text color to #262626 for better contrast
                  fontFamily: theme.typography.fontFamily,
                }
              }}
            />
          </Box>
          <Box mt={2}>
            <TextField
              fullWidth
              name="message"
              placeholder="Message"
              variant="outlined"
              margin="dense"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              InputProps={{
                style: { 
                  backgroundColor: '#fff', // White background
                  borderRadius: '4px', // 4px border radius
                  color: '#262626', // Change text color to #262626 for better contrast
                  fontFamily: theme.typography.fontFamily,
                }
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', pb: 2, padding: '0 24px' }}> {/* Add padding here */}
          <Button 
            fullWidth 
            variant="contained" 
            onClick={handleSubmit}
            sx={{ 
              width: '100%', // Fixed width
              minHeight: '50.82px', // Fixed height
              mb: 4,
              backgroundColor: theme.palette.primary.main, 
              '&:hover': { backgroundColor: theme.palette.primary.main },
              fontFamily: theme.typography.fontFamily,
              fontSize: theme.typography.button.fontSize, // Use updated font size
              fontWeight: theme.typography.button.fontWeight, // Use updated font weight
              lineHeight: theme.typography.button.lineHeight, // Use updated line height
              textAlign: theme.typography.button.textAlign, // Center text
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default ContactFormDialog;
