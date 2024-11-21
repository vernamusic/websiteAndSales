import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Avatar, Paper, ThemeProvider, createTheme, Autocomplete, Button, Dialog } from '@mui/material';
import axios from 'axios';
import { useAuth } from '../../AuthContext.jsx';
import ChangeEmail from './ChangeEmail';  // ایمپورت کردن کامپوننت ChangeEmail

const theme = createTheme({
    typography: {
        h1: { fontFamily: 'Lato', fontWeight: 600, color: "#FFF" },
        body1: { fontFamily: 'Lato', color: "#8C8C8C" },
        subtitle1: { fontFamily: 'Lato', color: "#FFF" },
    },
});

const getPhonePrefix = (countryCode) => {
    const country = countriesData.find(country => country.code === countryCode);
    return country ? country.phonePrefix : '';
};

const formatPhoneNumber = (phone) => {
    const cleaned = ('' + phone).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{1,4})(\d{1,4})(\d{1,4})$/);
    return match ? `${match[1]}-${match[2]}-${match[3]}` : phone;
};

const ProfilePage = () => {
    const { authToken } = useAuth();
    const Token = localStorage.getItem('authToken') || authToken;
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ first_name: '', last_name: '', email: '', phone: '', country: '', city: '' });
    const [initialFormData, setInitialFormData] = useState({ first_name: '', last_name: '', email: '', phone: '', country: '', city: '' });
    const [countryList, setCountryList] = useState([]);
    const [phonePrefix, setPhonePrefix] = useState('');
    const [openEmailDialog, setOpenEmailDialog] = useState(false);  // وضعیت دایالوگ ایمیل

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const { data } = await axios.get('https://vitruvianshield.com/api/v1/user/settings', { headers: { 'Authorization': `Bearer ${Token}` } });
                setFormData(data);
                setInitialFormData(data);
                const countriesResponse = await axios.get('https://vitruvianshield.com/api/v1/countries');
                setCountryList(countriesResponse.data);
                if (data.country) {
                    setPhonePrefix(await getPhonePrefix(data.country));
                }
            } catch (error) {
                console.error('Error fetching user data or countries:', error);
            }
        };
        fetchUserData();
    }, [Token]);

    const handleCountryChange = async (event, newValue) => {
        const countryId = newValue ? newValue.id : '';
        setFormData(prev => ({ ...prev, country: countryId }));
        if (countryId) {
            const selectedCountry = countryList.find(country => country.id === countryId);
            if (selectedCountry) {
                setPhonePrefix(selectedCountry.phone_prefix);
            }
        } else {
            setPhonePrefix('');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
        const phoneWithPrefix = `${phonePrefix}${formData.phone}`;
        try {
            await axios.patch('https://vitruvianshield.com/api/v1/user/settings', { ...formData, phone: formatPhoneNumber(phoneWithPrefix) }, { headers: { 'Authorization': `Bearer ${Token}` } });
            console.log('Profile updated');
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
        setFormData(initialFormData);
    };

    const handleOpenEmailDialog = () => {
        setOpenEmailDialog(true);  // باز کردن دایالوگ
    };

    const handleCloseEmailDialog = () => {
        setOpenEmailDialog(false);  // بستن دایالوگ
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ m: '7px 128px 63px 64px', width: '100%', background: '#262626' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: '32px' }}>
                    <Avatar sx={{ width: '80px', height: '80px', border: '2px solid #B0EEE9', boxShadow: '0px 0px 5px 0px #8AE6DE99' }} />
                    <Box sx={{ ml: '24px' }}>
                        <Typography variant="h1">{`${formData.first_name} ${formData.last_name}`}</Typography>
                        <Typography
                            variant="body1"
                            sx={{ mt: 1, cursor: 'pointer', color: '#F5F5F5' }}
                        >
                            {formData.email}
                        </Typography>
                    </Box>
                </Box>
                <Paper component="form" onSubmit={handleSubmit} sx={{ p: '42px 240px 42px 42px', borderRadius: '16px', gap: '56px', background: '#262626', border: '1px solid', borderImageSource: 'linear-gradient(180deg, rgba(31, 31, 31, 0.3) 0%, rgba(20, 20, 20, 0.3) 100%)', boxShadow: '0px 2px 8px 0px #0000001A' }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
                        {['first_name', 'last_name', 'email', 'phone', 'country', 'city'].map((field, idx) => (
                            <Box sx={{ width: '282px' }} key={idx}>
                                <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
                                    {field.replace('_', ' ').toUpperCase()}
                                </Typography>

                                {field === 'email' ? (
                                    <Button
                                        fullWidth
                                        sx={{
                                            backgroundColor: '#262626',
                                            border: '1px solid #F5F5F5',
                                            borderRadius: '4px',
                                            color: '#FFF',
                                            textAlign: 'left',
                                            paddingRight: '80px',
                                            height: '58px',
                                            textTransform: 'none',
                                        }}
                                        disabled={!isEditing}
                                        onClick={handleOpenEmailDialog}
                                        disableRipple
                                    >
                                        {formData[field]}
                                    </Button>


                                ) : (
                                    field === 'country' ? (
                                        <Autocomplete
                                            freeSolo
                                            disabled={!isEditing}
                                            value={countryList.find(country => country.id === formData.country) || null}
                                            options={countryList}
                                            getOptionLabel={(option) => option.name}
                                            onChange={handleCountryChange}
                                            renderInput={(params) => <TextField {...params} name="country" variant="outlined" sx={{ backgroundColor: '#262626', border: '1px solid #F5F5F5', borderRadius: '4px' }} />}
                                        />
                                    ) : (
                                        <TextField
                                            fullWidth
                                            name={field}
                                            value={formData[field]}
                                            onChange={handleInputChange}
                                            disabled={field === 'phone' || !isEditing}
                                            variant="outlined"
                                            sx={{ backgroundColor: '#262626', border: '1px solid #F5F5F5', borderRadius: '4px' }}
                                        />
                                    )
                                )}
                            </Box>
                        ))}
                    </Box>


                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                        {isEditing && (
                            <Button
                                variant="contained"
                                sx={{ mt: '24px', minWidth: '120px', minHeight: '40px', mr: 2, border: '1px solid #FFFFFF', background: 'transparent' }}
                                onClick={handleCancel}
                            >
                                Cancel
                            </Button>
                        )}
                        <Button
                            variant="contained"
                            sx={{ mt: '24px', minWidth: '120px', minHeight: '40px', background: '#B50304' }}
                            onClick={() => {
                                if (isEditing) {
                                    handleSubmit();
                                }
                                setIsEditing(!isEditing);
                            }}
                        >
                            {isEditing ? 'Save' : 'Edit'}
                        </Button>
                    </Box>
                </Paper>
            </Box>

            <ChangeEmail open={openEmailDialog} handleClose={handleCloseEmailDialog} />
        </ThemeProvider>
    );
};

export default ProfilePage;
