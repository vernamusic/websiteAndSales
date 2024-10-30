import React, { useState, useCallback } from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Button,
    IconButton,
    MenuItem,
    Drawer,
    Divider,
    Menu,
    Avatar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../assets/redvslogo.svg';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SignUpDialog from '../components/SignUp/SignUpDialog.jsx';
import { useAuth } from '../AuthContext.jsx';

const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'Lato',
            fontSize: '1.04167vw',
            fontWeight: 500,
            color: "#F1F1F1",
            textTransform: 'none',
        },
        button: {
            fontFamily: 'Lato',
            fontSize: '1.04167vw',
            fontWeight: 500,
            textTransform: 'none',
        },
    },
});

const getActiveStyle = (path, location) => {
    const isActive = location.pathname === path || (
        path === '/products' && (
            location.pathname.startsWith('/products/mobile-app') ||
            location.pathname.startsWith('/products/dashboard') ||
            location.pathname.startsWith('/products/smart-watch')
        )
    );

    return {
        position: 'relative',
        '&::after': {
            fontWeight: 700,
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '0.156vw',
            bottom: 5,
            left: location.pathname === path ? '50%' : '42%',
            backgroundColor: isActive ? 'white' : 'transparent',
            transform: isActive ? 'translateX(-50%) scaleX(0.3)' : 'translateX(-50%) scaleX(0)',
            transformOrigin: 'center',
            transition: 'transform 0.3s ease-in-out',
        },
        '&:hover::after':
            path === '/products' && (
                location.pathname.startsWith('/products/mobile-app') ||
                location.pathname.startsWith('/products/dashboard') ||
                location.pathname.startsWith('/products/smart-watch')
            ) ? {} : {
                content: '""',
                position: 'absolute',
                width: '100%',
                height: '3px',
                bottom: 5,
                left: '50%',
                backgroundColor: isActive ? 'white' : 'gray',
                transform: 'translateX(-50%) scaleX(0.4)',
                transformOrigin: 'center',
                transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
            },
    };
};

const Navbar = React.memo((props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [anchorElProduct, setAnchorElProduct] = useState(null);
    const [anchorElProfile, setAnchorElProfile] = useState(null);
    const openProductMenu = Boolean(anchorElProduct);
    const openProfileMenu = Boolean(anchorElProfile);

    const handleProductMenuOpen = (event) => {
        setAnchorElProduct(event.currentTarget);
        setAnchorElProfile(null); // بستن منوی پروفایل
    };

    const handleProfileMenuOpen = (event) => {
        setAnchorElProfile(event.currentTarget);
        setAnchorElProduct(null); // بستن منوی محصولات
    };

    const handleMenuClose = () => {
        setAnchorElProduct(null);
        setAnchorElProfile(null);
    };

    const handleProfileClick = () => {
        navigate('/profile');
        handleMenuClose();
    };

    const handleLogout = () => {
        logout();
        handleMenuClose();
    };

    const pages = [
        { name: 'Home', path: '/', disabled: false },
        { name: 'Products', path: '/products', disabled: false },
        { name: 'Company', path: '/company', disabled: false },
        { name: 'Partnership', path: '/partnership', disabled: false },
        { name: 'News', path: '/news', disabled: false },
        { name: 'About Us', path: '/about', disabled: false }
    ];

    const productItems = [
        { name: 'Mobile App', path: '/products/mobile-app' },
        { name: 'Dashboard', path: '/products/dashboard' },
        { name: 'Smart Watch', path: '/products/smart-watch' },
    ];

    const toggleDrawer = useCallback((open) => () => setDrawerOpen(open), []);
    const { authToken, logout } = useAuth(); // Using the useAuth hook

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" sx={{ boxShadow: 0, bgcolor: '#141414', width: '100%' }}>
                <Toolbar sx={{ py: { xs: 0.4, sm: 0.4, md: 0.6, lg: 0.8, xl: 1 }, display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Button
                            component={Link}
                            to="/"
                            sx={{ mx: { xs: '0.5vw' }, display: 'flex', alignItems: 'center', '&:hover': { backgroundColor: 'transparent' } }}
                            disableRipple
                        >
                            <img src={logo} alt="logo" style={{ width: 'calc(2vw + 25px)' }} />
                        </Button>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
                        <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                            <MenuIcon sx={{ color: 'white', fontSize: 'calc(5vw + 10px)', mt: '2px' }} />
                        </IconButton>
                        <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
                            <Box sx={{ p: 2, backgroundColor: '#141414' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <IconButton onClick={toggleDrawer(false)}>
                                        <CloseRoundedIcon sx={{ color: 'white', fontSize: 25, my: -1 }} />
                                    </IconButton>
                                </Box>
                                <Divider sx={{ mt: 1.5, height: '1px', backgroundColor: '#B50304' }} />
                                {pages.map((page) =>
                                    page.name === 'Products' ? (
                                        productItems.map((item) => (
                                            <MenuItem
                                                key={item.path}
                                                component={Link}
                                                to={item.path}
                                                onClick={toggleDrawer(false)}
                                                sx={{ color: '#ffffff' }}
                                            >
                                                {item.name}
                                            </MenuItem>
                                        ))
                                    ) : (
                                        <MenuItem
                                            key={page.name}
                                            component={Link}
                                            to={page.path}
                                            disabled={page.disabled}
                                            onClick={toggleDrawer(false)}
                                            sx={{ color: page.disabled ? 'rgba(255,255,255,0.40)' : '#fff' }}
                                        >
                                            {page.name}
                                        </MenuItem>
                                    )
                                )}
                                <MenuItem>
                                    {authToken ? (
                                        <>
                                            <Button
                                                variant="outlined"
                                                onClick={handleProfileClick}
                                                sx={{ color: '#ffffff', borderColor: '#B50304', fontSize: '15px' }}
                                            >
                                                Profile
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                onClick={handleLogout}
                                                sx={{ color: '#ffffff', borderColor: '#B50304', fontSize: '15px' }}
                                            >
                                                Log out
                                            </Button>
                                        </>
                                    ) : (
                                        <Button
                                            variant="outlined"
                                            onClick={() => setDialogOpen(true)}
                                            fullWidth
                                            sx={{ color: '#ffffff', borderColor: '#B50304', fontSize: '15px' }}
                                        >
                                            Get started
                                        </Button>
                                    )}
                                </MenuItem>
                            </Box>
                        </Drawer>
                    </Box>
                    <Box sx={{
                        display: { xs: 'none', md: 'flex' },
                        flexGrow: 1,
                        justifyContent: 'start',
                        ml: { md: -0.5, lg: 0.5, xl: 3 },
                        gap: { md: 1, lg: 3, xl: 5 },
                    }}>
                        {pages.map((page) =>
                            page.name === 'Products' ? (
                                <>
                                    <Button
                                        key={page.name}
                                        component={Link}
                                        color="inherit"
                                        onMouseOver={handleProductMenuOpen}
                                        sx={{
                                            ...theme.typography.h6,
                                            color: '#ffffff',
                                            display: 'flex',
                                            alignItems: 'center',
                                            ...getActiveStyle(page.path, location),
                                        }}
                                        disableRipple
                                    >
                                        {page.name}
                                        <ArrowDropDownIcon sx={{ ...theme.typography.h6, ml: 0.5 }} />
                                    </Button>
                                    <Menu
                                        anchorEl={anchorElProduct}
                                        open={openProductMenu}
                                        onClose={handleMenuClose}
                                        PaperProps={{
                                            sx: {
                                                bgcolor: '#141414',
                                                color: 'white',
                                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                                minWidth: 100,
                                                justifyContent: 'space-between',
                                                textAlign: 'center',
                                            },
                                        }}
                                    >
                                        {productItems.map((item) => (
                                            <MenuItem
                                                key={item.path}
                                                component={Link}
                                                to={item.path}
                                                onClick={handleMenuClose}
                                                sx={{ color: '#ffffff' }}
                                            >
                                                {item.name}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </>
                            ) : (
                                <Button
                                    key={page.name}
                                    component={Link}
                                    to={page.path}
                                    disabled={page.disabled}
                                    sx={{
                                        ...theme.typography.h6,
                                        color: page.disabled ? 'rgba(255,255,255,0.40)' : '#ffffff',
                                        ...getActiveStyle(page.path, location),
                                    }}
                                    disableRipple
                                >
                                    {page.name}
                                </Button>
                            )
                        )}
                    </Box>
                        <Box sx={{ display: { xs: 'none', md: 'flex' },justifyContent: 'flex-end', }}>
                            {authToken ? (
                                <>
                                    <Avatar
                                        onClick={handleProfileMenuOpen}
                                        size='large'
                                        sx={{ cursor: 'pointer', width: '3.5vw', height: '3.5vw', mr: '0.5vw' }}
                                    />
                                    <Menu
                                        anchorEl={anchorElProfile}
                                        open={openProfileMenu}
                                        onClose={handleMenuClose}
                                        PaperProps={{
                                            sx: {
                                                bgcolor: '#141414',
                                                color: 'white',
                                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                                minWidth: 100,
                                                justifyContent: 'space-between',
                                                textAlign: 'center',
                                            },
                                        }}
                                    >
                                        <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
                                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                    </Menu>
                                </>
                            ) : (
                                <Button
                                    variant="contained"
                                    onClick={() => setDialogOpen(true)}
                                    sx={{
                                        ...theme.typography.button,
                                        ml: { md: -1, lg: 1.2 },
                                        backgroundColor: '#B50304',
                                        padding: 0,
                                        minWidth: 0,
                                        borderRadius: '4px',
                                        textTransform: 'none',
                                        width: '8.0656vw',
                                        height: '2.34375vw',
                                        '&:hover': {
                                            backgroundColor: '#B50304',
                                        },
                                    }}
                                    disableRipple
                                >
                                    Get started
                                </Button>
                            )}

                    </Box>
                </Toolbar>
            </AppBar>
            <SignUpDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
        </ThemeProvider>
    );
});

export default Navbar;
