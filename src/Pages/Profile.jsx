import React, { useState } from 'react';
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ThemeProvider,
    createTheme,
    CssBaseline,
} from '@mui/material';
import { Person, CreditCard, Apps } from '@mui/icons-material';
import ProfilePage from '../components/Proflie/ProfilePage';
import BillingPage from '../components/Proflie/BillingPage';
import AppsPage from '../components/Proflie/AppsPage';

// Create a dark theme
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#d32f2f',
        },
        background: {
            default: '#121212',
            paper: '#1E1E1E',
        },
    },
});

const Sidebar = ({ activePage, setActivePage }) => (
    <Box
        component="nav"
        sx={{
            width: '329px',
            flexShrink: 0,
            bgcolor: 'background.paper',
            p: 3,
        }}
    >
        <Typography variant="h6" sx={{ mb: 2 }}>
            Manage settings
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Manage your personal information, billing and payments, and apps.
        </Typography>
        <List sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
        }}
        >
            {[
                { text: 'My profile', icon: <Person />, page: 'profile' },
                { text: 'Billing and payments', icon: <CreditCard />, page: 'billing' },
                { text: 'My apps', icon: <Apps />, page: 'apps' },
            ].map((item) => (
                <ListItem
                    key={item.text}
                    onClick={() => setActivePage(item.page)}
                    sx={{
                        borderRadius: 1,
                        mb: 2,
                        bgcolor: activePage === item.page ? 'action.selected' : 'transparent',
                        '&:hover': { bgcolor: 'action.hover', cursor: 'pointer' },
                    }}
                >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                </ListItem>
            ))}
        </List>
    </Box>
);

const Profile = () => {
    const [activePage, setActivePage] = useState('profile');

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Box sx={{ display: 'flex', minHeight: '600px' }}>
                <Sidebar activePage={activePage} setActivePage={setActivePage} />
                <Box component="main">
                    {activePage === 'profile' && <ProfilePage />}
                    {activePage === 'billing' && <BillingPage />}
                    {activePage === 'apps' && <AppsPage />}
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Profile;
