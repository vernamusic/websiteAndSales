import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Avatar,
    Paper,
    Grid,
} from '@mui/material';

const ProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        firstName: 'Jenny',
        lastName: 'Wilson',
        email: 'Jenny@gmail.com',
        phone: '(405) 555-0128',
        country: 'Canada',
        city: 'Toronto',
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);

    };

    return (
        <Box sx={{mb:15}}>
            <Typography variant="h4" sx={{ mb: 10 }}>
                My profile
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <Avatar sx={{ width: 80, height: 80, mr: 2 }} />
                <Box>
                    <Typography variant="h5">Full name</Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        xxxxxxxxxxxxx@gmail.com
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
                    {Object.entries(formData).map(([key, value]) => (
                        <Grid item xs={12} sm={6} key={key}>
                            <TextField
                                fullWidth
                                label={key.charAt(0).toUpperCase() + key.slice(1)}
                                name={key}
                                value={value}
                                onChange={handleInputChange}
                                disabled={!isEditing}
                                variant="outlined"
                            />
                        </Grid>
                    ))}
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
