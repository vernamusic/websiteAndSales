import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Avatar,
    Paper,
    Grid,
} from '@mui/material';
import axios from 'axios';
import { useAuth } from '../../AuthContext.jsx';

const ProfilePage = () => {
    const { authToken } = useAuth();
    const Token = localStorage.getItem('authToken') || authToken;

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
    });

    // واکشی اطلاعات از API هنگام بارگذاری کامپوننت
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('https://site.vitruvianshield.com/api/v1/user/settings', {
                    headers: {
                        'Authorization': `Bearer ${Token}`
                    }
                });
                setFormData(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUserData();
    }, [Token]);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // ارسال داده‌های ویرایش‌شده به API
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsEditing(false);

        try {
            await axios.patch('https://site.vitruvianshield.com/api/v1/user/settings', formData, {
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
                            disabled={true} // غیرفعال کردن فیلد ایمیل در حالت ویرایش
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
                            disabled={!isEditing} // غیرفعال کردن فیلد در حالت ویرایش
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
                            disabled={!isEditing} // غیرفعال کردن فیلد در حالت ویرایش
                            variant="outlined"
                        />
                    </Grid>
                </Grid>

                <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                    <Button
                        variant="outlined"
                        onClick={() => setIsEditing(!isEditing)}
                    >
                        {isEditing ? 'Cancel' : 'Edit'}
                    </Button>
                    {isEditing && (
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Save
                        </Button>
                    )}
                </Box>
            </Paper>
        </Box>
    );
};

export default ProfilePage;
