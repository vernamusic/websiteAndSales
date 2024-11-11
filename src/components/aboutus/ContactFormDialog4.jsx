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
    useMediaQuery,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAuth } from '../../AuthContext.jsx';
import SignUpDialog from '../SignUp/SignUpDialog.jsx';

const theme = createTheme({
    palette: {
        primary: { main: '#B50304' },
        background: { default: '#fff', paper: '#262626' },
        text: { primary: '#fff', secondary: '#fff' },
    },
    typography: {
        fontFamily: 'Lato, sans-serif',
        button: {
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: '16px',
            textAlign: 'center',
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

const ContactFormDialog = ({ open, onClose }) => {
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const { authToken } = useAuth();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        subject: '',
        message: '',
        type: 12,
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (authToken) {
            try {
                const response = await fetch('https://vitruvianshield.com/api/v1/contact-req', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${authToken}`,
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
                        type: 12,
                    });
                    onClose();
                } else {
                    setErrorMessage('خطا در ارسال فرم. لطفاً دوباره امتحان کنید.');
                }
            } catch (error) {
                setErrorMessage('خطا در ارسال فرم. لطفاً دوباره امتحان کنید.');
            }
        } else {
            setDialogOpen(true);
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
                        maxWidth: '481px',
                        backgroundColor: theme.palette.background.paper,
                        color: theme.palette.text.primary,
                        borderRadius: '15px',
                        padding: 0,
                    },
                }}
            >
                <DialogTitle sx={{ m: 0, p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="leaveMessage" sx={{ mt: 4 }}>
                        Leave a message
                    </Typography>
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        sx={{ position: 'absolute', right: 8, top: 8, color: theme.palette.text.secondary }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContent sx={{ padding: '36px 50px', overflow: 'hidden' }}>
                    {errorMessage && <Typography color="error">{errorMessage}</Typography>}
                    <Typography variant="subtitle2" align="center" gutterBottom sx={{ mb: 4 }}>
                        Please fill this form in decent manner
                    </Typography>
                    <Box sx={{ maxHeight: '500px', overflowY: 'auto', '&::-webkit-scrollbar': { display: 'none' } }}>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <TextField
                                fullWidth
                                name="first_name"
                                placeholder="First name"
                                variant="outlined"
                                
                                value={formData.first_name}
                                onChange={handleInputChange}
                                InputProps={{ style: { backgroundColor: '#fff', borderRadius: '4px', color: '#262626' } }}
                                required
                            />
                            <TextField
                                fullWidth
                                name="last_name"
                                placeholder="Last name"
                                variant="outlined"
                                
                                value={formData.last_name}
                                onChange={handleInputChange}
                                InputProps={{ style: { backgroundColor: '#fff', borderRadius: '4px', color: '#262626' } }}
                                required
                            />
                        </Box>
                        <Box mt={1}>
                            <TextField
                                fullWidth
                                name="email"
                                placeholder="Enter your email"
                                variant="outlined"
                                
                                value={formData.email}
                                onChange={handleInputChange}
                                InputProps={{ style: { backgroundColor: '#fff', borderRadius: '4px', color: '#262626' } }}
                                required
                            />
                        </Box>
                        <Box mt={1}>
                            <TextField
                                fullWidth
                                name="phone_number"
                                placeholder="Enter your number"
                                variant="outlined"
                                
                                value={formData.phone_number}
                                onChange={handleInputChange}
                                InputProps={{ style: { backgroundColor: '#fff', borderRadius: '4px', color: '#262626' } }}
                                required
                            />
                        </Box>
                        <Box mt={1}>
                            <TextField
                                fullWidth
                                name="subject"
                                placeholder="Enter the subject"
                                variant="outlined"
                                
                                value={formData.subject}
                                onChange={handleInputChange}
                                InputProps={{ style: { backgroundColor: '#fff', borderRadius: '4px', color: '#262626' } }}
                                required
                            />
                        </Box>
                        <Box mt={1}>
                            <TextField
                                fullWidth
                                name="message"
                                placeholder="Message"
                                variant="outlined"
                                multiline
                                rows={3.5}
                                value={formData.message}
                                onChange={handleInputChange}
                                InputProps={{ style: { backgroundColor: '#fff', borderRadius: '4px', color: '#262626' } }}
                                required
                            />
                        </Box>
                    </Box>
                </DialogContent>
                
                <DialogActions sx={{ justifyContent: 'center', pb: 2, padding: '0 24px' }}>
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={handleSubmit}
                        sx={{
                            width: '381px',
                            minHeight: '50.82px',
                            mb: 6,
                            backgroundColor: theme.palette.primary.main,
                            '&:hover': { backgroundColor: theme.palette.primary.main },
                            borderRadius: '4px',
                        }}
                    >
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
            
            <SignUpDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
        </ThemeProvider>
    );
};

export default ContactFormDialog;
