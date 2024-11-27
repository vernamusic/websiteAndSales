    import React, { useState, useEffect } from 'react';
    import { Box, Typography, TextField, Avatar, Paper, ThemeProvider, createTheme, Autocomplete, Button, Dialog } from '@mui/material';
    import axios from 'axios';
    import { useAuth } from '../../AuthContext.jsx';
    import ChangeEmail from './ChangeEmail';
    import ChangePhone from './ChangePhone';


    const theme = createTheme({
        typography: {
            h6: {
                fontFamily: 'Lato',
                fontSize: {xs:'2.78vw',sm:'1.15vw'},
                lineHeight: 'normal',
                color: '#8C8C8C',
                textTransform: 'none',
            },
            h3: {
                fontFamily: "Lato",
                fontWeight: {xs:600,sm:700},
                fontSize: {xs:'3.89vw',sm:'2.2222vw'},
                color: "#FFFFFF",
                textTransform: 'none',
            },
            button: {
                fontFamily: 'Lato',
                fontSize: {xs:'2.22vw',sm:'1vw'},
                color: "#F1F1F1",
                textTransform: 'none',
                textAlign: 'left',
            },
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
        const [dialogOpen, setDialogOpen] = useState(false);
        const [PhoneDialogOpen, setPhoneDialogOpen] = useState(false);
        const [focused, setFocused] = useState(false);



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

        return (
            <ThemeProvider theme={theme}>
                <Box sx={{ width: '100%', background: '#262626',alignContent:'center',height: '40vw',ml:'5vw' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: '32px' }}>
                        <Avatar sx={{ width: '6vw', height: '6vw', border: '2px solid #B0EEE9', boxShadow: '0px 0px 5px 0px #8AE6DE99' }} />
                        <Box sx={{ ml: '24px' }}>
                            <Typography sx={{ ...theme.typography.h3 }}>{`${formData.first_name} ${formData.last_name}`}</Typography>
                            <Typography

                                sx={{ mt: '0.5vw',...theme.typography.h6 }}
                            >
                                {formData.email}
                            </Typography>
                        </Box>
                    </Box>
                    <Paper component="form" onSubmit={handleSubmit} sx={{width:'60vw',pb:'3vw', borderRadius: '16px',background: '#262626', border: '1px solid', borderImageSource: 'linear-gradient(180deg, rgba(31, 31, 31, 0.3) 0%, rgba(20, 20, 20, 0.3) 100%)', boxShadow: '0px 2px 8px 0px #0000001A' }}>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '2vw',ml:'-2vw' }}>
                            {['first_name', 'last_name', 'email', 'phone', 'country', 'city'].map((field, idx) => (
                                <Box sx={{ width: '19.58vw',mx:'1vw' }} key={idx}>
                                    <Typography sx={{ mb: '0.5vw', ...theme.typography.button }}>
                                        {field.charAt(0).toUpperCase() + field.slice(1).replace('_', ' ')}
                                    </Typography>

                                    {field === 'email' || field === 'phone' ? (
                                        <Button
                                            fullWidth
                                            sx={{
                                                backgroundColor: '#262626',
                                                border: '1px solid #F5F5F5',
                                                borderRadius: '4px',
                                                ...theme.typography.button,
                                                height: '58px',
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                                alignItems: 'center',
                                                paddingLeft: '10px',
                                            }}
                                            disabled={!isEditing}
                                            onClick={() => {
                                                if (field === 'email') {
                                                    setDialogOpen(true);
                                                } else if (field === 'phone') {
                                                    setPhoneDialogOpen(true);
                                                }
                                            }}
                                            disableRipple
                                        >
                                            {formData[field]}
                                        </Button>

                                    ) : field === 'country' ? (
                                        <Autocomplete
                                            freeSolo
                                            disabled={!isEditing}
                                            value={countryList.find((country) => country.id === formData.country) || null}
                                            options={countryList}
                                            getOptionLabel={(option) => option.name}
                                            onChange={handleCountryChange}
                                            ListboxComponent={(props) => (
                                                <ul
                                                    {...props}
                                                    style={{
                                                        maxHeight: '200px',
                                                        overflowY: 'auto',
                                                        backgroundColor: '#262626',
                                                        color: '#F5F5F5',
                                                        maxWidth:'60vw',
                                                    }}
                                                />
                                            )}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    name="country"
                                                    sx={{
                                                        backgroundColor: '#262626',
                                                        border: '1px solid #F5F5F5',
                                                        borderRadius: '4px',
                                                        ...theme.typography.button,
                                                    }}
                                                />
                                            )}
                                            getOptionLimit={(options) => options.slice(0, 5)}
                                        />

                                    ) : (
                                        <TextField
                                            fullWidth
                                            name={field}
                                            value={formData[field]}
                                            onChange={handleInputChange}
                                            disabled={!isEditing}
                                            variant="outlined"
                                            sx={{
                                                // حالت پیش‌نمایش
                                                backgroundColor: 'transparent',
                                                border:'0.05vw solid #fff',
                                                borderRadius:'0.2vw',
                                                color: '#888',
                                                maxHeight:'3vw',
                                            }}
                                        />
                                    )}

                                </Box>
                            ))}
                        </Box>
                    </Paper>
                    <Box sx={{ display: 'flex', justifyContent: 'start', mt:'0.2vw' }}>
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
                </Box>

                <ChangeEmail open={dialogOpen} onClose={() => setDialogOpen(false)} />
                <ChangePhone open={PhoneDialogOpen} onClose={() => setPhoneDialogOpen(false)} />
            </ThemeProvider>
        );
    };

    export default ProfilePage;
