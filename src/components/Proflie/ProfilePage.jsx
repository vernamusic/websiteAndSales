import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Avatar,
    Paper,
    Grid,
    InputAdornment,
    Autocomplete
} from '@mui/material';
import axios from 'axios';
import { useAuth } from '../../AuthContext.jsx';
import { countriesData } from './countriesData';

const getPhonePrefix = (countryCode) => {
    const country = countriesData.find(country => country.code === countryCode);
    return country ? country.phonePrefix : '';
};

const getCityList = (countryCode) => {
    const country = countriesData.find(country => country.code === countryCode);
    return country ? country.cities : [];
};

const formatPhoneNumber = (phone) => {
    const cleaned = ('' + phone).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{1,4})(\d{1,4})(\d{1,4})$/);
    if (match) {
        return `${match[1]}-${match[2]}-${match[3]}`;
    }
    return phone;
};

const ProfilePage = () => {
    const { authToken } = useAuth();
    const Token = localStorage.getItem('authToken') || authToken;

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        country: '',
        city: '',
    });

    const [countryList, setCountryList] = useState([]);
    const [cityList, setCityList] = useState([]);
    const [phonePrefix, setPhonePrefix] = useState('');

    useEffect(() => {
        setCountryList(countriesData);

        const fetchUserData = async () => {
            try {
                const response = await axios.get('https://site.vitruvianshield.com/api/v1/user/settings', {
                    headers: {
                        'Authorization': `Bearer ${Token}`
                    }
                });
                setFormData(response.data);
                const countryCode = response.data.country;
                if (countryCode) {
                    const prefix = await getPhonePrefix(countryCode);
                    setPhonePrefix(prefix);
                    const cities = await getCityList(countryCode);
                    setCityList(cities);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUserData();
    }, [Token]);

    const handleCountryChange = async (event, newValue) => {
        const countryCode = newValue ? newValue.code : '';
        setFormData(prev => ({ ...prev, country: countryCode }));

        if (countryCode) {
            const prefix = await getPhonePrefix(countryCode);
            setPhonePrefix(prefix);
            const cities = await getCityList(countryCode);
            setCityList(cities);
        } else {
            setPhonePrefix('');
            setCityList([]);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePhoneChange = (e) => {
        const { value } = e.target;
        const phoneWithoutPrefix = value.replace(/\D/g, '');
        setFormData({ ...formData, phone: phoneWithoutPrefix });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsEditing(false);

        const phoneWithPrefix = `${phonePrefix}${formData.phone}`;
        const formattedPhone = formatPhoneNumber(phoneWithPrefix);

        try {
            await axios.patch('https://site.vitruvianshield.com/api/v1/user/settings', {
                ...formData,
                phone: formattedPhone,
            }, {
                headers: {
                    'Authorization': `Bearer ${Token}`
                }
            });
            console.log('Profile updated successfully');
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <Box sx={{ mb: 15 }}>
            <Typography variant="h4" sx={{ mb: 10 }}>
                My profile
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <Avatar sx={{ width: 80, height: 80, mr: 2 }} />
                <Box>
                    <Typography variant="h4">{`${formData.first_name} ${formData.last_name}`}</Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        {formData.email}
                    </Typography>
                </Box>
            </Box>

            <Paper
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    p: 3,
                    borderRadius: 2,
                }}
            >
                <Typography variant="h6" sx={{ mb: 3 }}>
                    Personal information
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            disabled
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="First Name"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Last Name"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Autocomplete
                            freeSolo
                            disabled={!isEditing}
                            value={countryList.find(country => country.code === formData.country) || null}
                            options={countryList}
                            getOptionLabel={(option) => option.name || ''}
                            filterOptions={(options, { inputValue }) =>
                                options.filter(option =>
                                    option.name.toLowerCase().includes(inputValue.toLowerCase())
                                ).slice(0, 5)
                            }
                            onChange={handleCountryChange}
                            PopperComponent={(props) => (
                                <div {...props} style={{ ...props.style, width: '30vw',position:'absolute', }} />
                            )}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Country"
                                    name="country"
                                    disabled={!isEditing}
                                    variant="outlined"
                                    sx={{ width: '100%' }}
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Autocomplete
                            freeSolo
                            disabled={!formData.country || !isEditing}
                            value={cityList.find(city => city === formData.city) || ''}
                            options={cityList}
                            getOptionLabel={(option) => option || ''}
                            filterOptions={(options, { inputValue }) =>
                                options.filter(option =>
                                    option.toLowerCase().includes(inputValue.toLowerCase())
                                ).slice(0, 5)
                            }
                            onChange={(event, newValue) => setFormData(prev => ({ ...prev, city: newValue }))}
                            PopperComponent={(props) => (
                                <div {...props} style={{ ...props.style,position:'absolute', width: '30vw'}} />
                            )}
                            renderInput={(params) => <TextField {...params} label="City" />}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            disabled={!isEditing || !formData.country || !formData.city}
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        ({phonePrefix})
                                    </InputAdornment>
                                ),
                            }}
                            inputProps={{
                                maxLength: 10
                            }}
                        />

                    </Grid>
                </Grid>

                <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                    <Button variant="outlined" onClick={() => setIsEditing(!isEditing)}>
                        {isEditing ? 'Cancel' : 'Edit'}
                    </Button>
                    {isEditing && (
                        <Button type="submit" variant="contained" color="primary">
                            Save
                        </Button>
                    )}
                </Box>
            </Paper>
        </Box>
    );
};

export default ProfilePage;
