import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Avatar,
    Paper,
    ThemeProvider,
    createTheme,
    InputAdornment,
    Autocomplete
} from '@mui/material';
import axios from 'axios';
import { useAuth } from '../../AuthContext.jsx';
import { countriesData } from './countriesData';

const theme = createTheme({
    typography: {
        h1: {
            fontFamily: 'Lato',
            fontSize: { xs: '12.64px', sm: '16px', md: '17.5px', lg: '19px' },
            lineHeight: '22.8px',
            fontWeight: 600,
            color: "#FFF",
            letterSpacing: '0.3px',
        },
        body1: {
            fontFamily: 'Lato',
            fontSize: { xs: '12.64px', sm: '12.8px', md: '14px', lg: '16px' },
            lineHeight: '16px',
            fontWeight: 500,
            color: "#8C8C8C",
            letterSpacing: '0.3px',
        },
        
        subtitle1: {
            fontFamily: 'Lato',
            fontSize: { xs: '9px', sm: '10.6px', md: '12px', lg: '14px' },
            lineHeight: '14px',
            fontWeight: 500,
            color: "#FFFFFF",
            letterSpacing: '0.3px',
        },
    },
});

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

    const [originalData, setOriginalData] = useState({});
    const [countryList, setCountryList] = useState([]);
    const [cityList, setCityList] = useState([]);
    const [phonePrefix, setPhonePrefix] = useState('');

    useEffect(() => {
        setCountryList(countriesData);

        const fetchUserData = async () => {
            try {
                const response = await axios.get('https://vitruvianshield.com/api/v1/user/settings', {
                    headers: {
                        'Authorization': `Bearer ${Token}`
                    }
                });
                setFormData(response.data);
                setOriginalData(response.data);  // Save original data
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
            await axios.patch('https://vitruvianshield.com/api/v1/user/settings', {
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

    const handleCancel = () => {
        setFormData(originalData); // Revert changes
        setIsEditing(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                m: '7px 128px 63px 64px',
                width: '100%',
                background: '#262626'
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: '32px' }}>
                    <Avatar sx={{ width: '80px', height: '80px',border: '2px solid #B0EEE9',boxShadow: '0px 0px 5px 0px #8AE6DE99', }} />
                    <Box sx={{ ml:'24px'}}>
                        <Typography variant="h1">{`${formData.first_name} ${formData.last_name}`}</Typography>
                        <Typography variant="body1" sx={{ mt: 1 }}>
                            {formData.email}
                        </Typography>
                    </Box>
                </Box>

                <Paper
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        p: '42px 240px 42px 42px',
                        borderRadius: '16px',
                        gap: '56px',
                        background: '#262626',
                        border: '1px solid',
                        borderImageSource: 'linear-gradient(180deg, rgba(31, 31, 31, 0.3) 0%, rgba(20, 20, 20, 0.3) 100%)',
                        boxShadow: '0px 2px 8px 0px #0000001A',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '32px',
                        }}
                    >
                        {/* First Name */}
                        <Box sx={{width:'282px' }}>
                            <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>First Name</Typography>
                            <TextField
                                fullWidth
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleInputChange}
                                disabled={!isEditing}
                                variant="outlined"
                                sx={{
                                    backgroundColor: '#262626',
                                    border: '1px solid #F5F5F5',
                                    borderRadius: '4px',
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#F5F5F5', // Consistent border color
                                            borderRadius: '4px', // Apply the same border-radius to the fieldset
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#F5F5F5', // Border color when focused
                                        },
                                        '& .MuiOutlinedInput-input': {
                                            color: '#8C8C8C', // Font color when not focused
                                            '&.Mui-focused': {
                                                color: '#FFF', // Font color when focused
                                            },
                                        },
                                    },
                                }}
                            />


                        </Box>
                        {/* Last Name */}
                        <Box sx={{ width:'282px' }}>
                            <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>Last Name</Typography>
                            <TextField
                                fullWidth
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleInputChange}
                                disabled={!isEditing}
                                variant="outlined"
                                sx={{
                                    backgroundColor: '#262626',
                                    border: '1px solid #F5F5F5',
                                    borderRadius: '4px',
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#F5F5F5', // Consistent border color
                                            borderRadius: '4px', // Apply the same border-radius to the fieldset
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#F5F5F5', // Border color when focused
                                        },
                                        '& .MuiOutlinedInput-input': {
                                            color: '#8C8C8C', // Font color when not focused
                                            '&.Mui-focused': {
                                                color: '#FFF', // Font color when focused
                                            },
                                        },
                                    },
                                }}
                            />
                        </Box>
                        {/* Email */}
                        <Box sx={{ width:'282px' }}>
                            <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>Email</Typography>
                            <TextField
                                fullWidth
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                disabled
                                variant="outlined"
                                sx={{
                                    backgroundColor: '#262626',
                                    border: '1px solid #F5F5F5',
                                    borderRadius: '4px',
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#F5F5F5', // Consistent border color
                                            borderRadius: '4px', // Apply the same border-radius to the fieldset
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#F5F5F5', // Border color when focused
                                        },
                                        '& .MuiOutlinedInput-input': {
                                            color: '#8C8C8C', // Font color when not focused
                                            '&.Mui-focused': {
                                                color: '#FFF', // Font color when focused
                                            },
                                        },
                                    },
                                }}
                            />
                        </Box>
                        {/* Phone */}
                        <Box sx={{ width:'282px' }}>
                                            <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>Phone</Typography>
                                            <TextField
                                                fullWidth
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
                                                sx={{
                                                    backgroundColor: '#262626',
                                                    border: '1px solid #F5F5F5',
                                                    borderRadius: '4px',
                                                    '& .MuiOutlinedInput-root': {
                                                        '& fieldset': {
                                                            borderColor: '#F5F5F5', // Consistent border color
                                                            borderRadius: '4px', // Apply the same border-radius to the fieldset
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: '#F5F5F5', // Border color when focused
                                                        },
                                                        '& .MuiOutlinedInput-input': {
                                                            color: '#8C8C8C', // Font color when not focused
                                                            '&.Mui-focused': {
                                                                color: '#FFF', // Font color when focused
                                                            },
                                                        },
                                                    },
                                                }}
                                            />
                        </Box>
                        {/* Country */}
                        <Box sx={{ width:'282px' }}>
                            <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>Country</Typography>
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
                                    <div {...props} style={{ ...props.style, width: '30vw', position: 'absolute' }} />
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        name="country"
                                        disabled={!isEditing}
                                        variant="outlined"
                                sx={{
                                    backgroundColor: '#262626',
                                    border: '1px solid #F5F5F5',
                                    borderRadius: '4px',
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#F5F5F5', // Consistent border color
                                            borderRadius: '4px', // Apply the same border-radius to the fieldset
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#F5F5F5', // Border color when focused
                                        },
                                        '& .MuiOutlinedInput-input': {
                                            color: '#8C8C8C', // Font color when not focused
                                            '&.Mui-focused': {
                                                color: '#FFF', // Font color when focused
                                            },
                                        },
                                    },
                                }}
                                    />
                                )}
                            />
                        </Box>
                        {/* City */}
                        <Box sx={{ width:'282px' }}>
                            <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>City</Typography>
                            <Autocomplete
                                freeSolo
                                value={cityList.find(city => city === formData.city) || ''}
                                options={cityList}
                                getOptionLabel={(option) => option || ''}
                                onChange={(event, newValue) => setFormData(prev => ({ ...prev, city: newValue }))}
                                PopperComponent={(props) => (
                                    <div {...props} style={{ ...props.style, position: 'absolute', width: '30vw' }} />
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="outlined"
                                        disabled={!formData.country || !isEditing}
                                        sx={{
                                            backgroundColor: '#262626',
                                            border: '1px solid #F5F5F5',
                                            borderRadius: '4px',
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: '#F5F5F5', // Consistent border color
                                                    borderRadius: '4px', // Apply the same border-radius to the fieldset
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#F5F5F5', // Border color when focused
                                                },
                                                '& .MuiOutlinedInput-input': {
                                                    color: '#8C8C8C', // Font color when not focused
                                                    '&.Mui-focused': {
                                                        color: '#FFF', // Font color when focused
                                                    },
                                                },
                                            },
                                        }}
                                    />
                                )}
                            />
                        </Box>
                    </Box>

                </Paper>
                    <Box sx={{ display: 'flex', }}>
                        {isEditing && (
                            <Button
                                variant="contained"
                                sx={{ mt: '24px', minWidth: '120px',minHeight:'40px', mr: 2,border: '1px solid #FFFFFF',background:'transparent' }}
                                onClick={handleCancel}
                            >
                                Cancel
                            </Button>
                        )}
                        <Button
                            variant="contained"
                            sx={{ mt: '24px', minWidth: '120px',minHeight:'40px', background:'#B50304' }}
                            onClick={() => setIsEditing(!isEditing)}
                        >
                            {isEditing ? 'Save' : 'Edit'}
                        </Button>
                    </Box>
            </Box>
        </ThemeProvider>
    );
};

export default ProfilePage;
