import React, { useState, useCallback } from 'react';
import {AppBar, Box, Toolbar, Button, IconButton, MenuItem, Drawer, Divider, Menu} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link, useLocation } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../assets/redvslogo.svg';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import searchimg from '../assets/searchicon.png';
import SignUpDialog from './SignUpDialog'; // Import the SignUpDialog component

const theme = createTheme({
    typography: {
        h6: {
            fontFamily:'Lato',
            fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '21px', xl: '24px' },
            fontWeight: 500,
            color: "#F1F1F1",
            textTransform: 'none',
        },
        button: {
            fontFamily: 'Lato',
            fontSize: {md: '11px', lg: '16px', xl: '20px' },
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
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '3px',
            bottom: 5,
            left: location.pathname === path ? '50%':'42%',
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
            ) ? {} :
            {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '3px',
            bottom: 5,
            left: '50%',
            backgroundColor: isActive ? 'white' : 'gray',
            transform: 'translateX(-50%) scaleX(0.4)',
            transformOrigin: 'center',
            transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out,',
        },
    };
};


const Navbar = React.memo((props) => {
    const location = useLocation();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const pages = [
        { name: 'Home', path: '/', disabled: false },
        { name: 'Products', path: '/products', disabled: false },
        { name: 'Company', path: '/companies', disabled: true },
        { name: 'Learning', path: '/learning', disabled: true },
        { name: 'News', path: '/news', disabled: true },
        { name: 'About Us', path: '/about', disabled: false }
    ];


    const productItems = [
        { name: 'Mobile App', path: '/products/mobile-app' },
        { name: 'Dashboard', path: '/products/dashboard' },
        { name: 'Smart Watch', path: '/products/smart-watch' },
    ];

    const toggleDrawer = useCallback((open) => () => setDrawerOpen(open), []);

    return (
        <ThemeProvider theme={theme}>
            <AppBar
                position="static"
                sx={{
                    boxShadow: 0,
                    bgcolor: '#141414',
                    width: '100%',
                    }}
            >
                <Toolbar sx={{ py:{xs: 0.4, sm: 0.4, md: 0.6, lg: 0.8, xl: 1}, display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Button
                            component={Link}
                            to="/"
                            sx={{ mx: { xs: '0.5vw', md: '0.8vw' }, display: 'flex', alignItems: 'center',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                },
                            }}
                            disableRipple
                        >
                            <img src={logo} alt="logo" style={{ width: 'calc(2.2vw + 30px)' }} />
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
                                {pages.map((page) => (
                                    <MenuItem
                                        key={page.name}
                                        component={Link}
                                        to={page.path}
                                        disabled={page.disabled}
                                        onClick={toggleDrawer(false)}
                                        sx={{ color: page.disabled === true ? 'rgba(255,255,255,0.40)' : '#fff' }}
                                    >
                                        {page.name}
                                    </MenuItem>
                                ))}
                                <MenuItem>
                                    <Button
                                        variant="outlined"
                                        onClick={() => setDialogOpen(true)} // Open dialog on click
                                        fullWidth
                                        sx={{ color: '#ffffff', borderColor: '#B50304', fontSize: '15px' }}
                                    >
                                        Get started
                                    </Button>
                                </MenuItem>
                            </Box>
                        </Drawer>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            flexGrow: 1,
                            justifyContent: 'start',
                            ml:{md: -0.5, lg: 0.5, xl: 3},
                            gap: {md: 1, lg: 3, xl: 5},
                        }}
                    >
                        {pages.map((page) =>
                            page.name === 'Products' ? (
                                <Button
                                    key={page.name}
                                    component={Link}
                                    color="inherit"
                                    onMouseEnter={handleMenuOpen}
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
                                    <ArrowDropDownIcon sx={{...theme.typography.h6,
                                    }} />
                                </Button>
                            ) : (
                                <Button
                                    key={page.name}
                                    component={Link}
                                    disabled={page.disabled}
                                    to={page.path}
                                    sx={{
                                        ...theme.typography.h6,
                                        color:'rgba(255,255,255,1)',
                                        ...getActiveStyle(page.path, location),
                                        '&.Mui-disabled': {
                                            color: 'rgba(255,255,255,0.40)',
                                    },
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                        },
                                    }}
                                    disableRipple
                                >
                                    {page.name}
                                </Button>
                            )
                        )}

                        {/* Dropdown Menu */}
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleMenuClose}
                            onMouseLeave={handleMenuClose}
                            MenuListProps={{ onMouseLeave: handleMenuClose }}
                            PaperProps={{
                                sx: {
                                    bgcolor: '#141414',
                                    color: 'white',
                                    minWidth: 150,
                                },
                            }}
                        >
                            {productItems.map((item, index) => (
                                <React.Fragment key={item.name}>
                                    <MenuItem component={Link} to={item.path} onClick={handleMenuClose}>
                                        {item.name}
                                    </MenuItem>
                                    {index < productItems.length - 1 && <Divider sx={{ bgcolor: 'gray' }} />}
                                </React.Fragment>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            component={Link}
                            to="/"
                            sx={{

                                ml: 0,
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '18px',
                                fontWeight: 'bold',
                                width: { md: '1.5vw' },
                            }}
                            disableRipple
                        >
                            <img src={searchimg} alt="search" style={{ width: 'calc(1.7vw + 5px)' }} />
                        </Button>
                    </Box>
                    <Button
                        variant="contained"
                        onClick={() => setDialogOpen(true)} // Open dialog on click
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            ...theme.typography.button,
                            ml: { md:-1, lg: 1.2 },
                            borderRadius: '4px',
                            backgroundColor: '#B50304',
                            width: 'calc(9.6vw + 6px)',
                            height: 'calc(2.5vw + 5px)',
                            '&:hover': {
                                backgroundColor: '#B50304',
                            },
                        }}
                        disableRipple
                    >
                        Get started
                    </Button>
                </Toolbar>
            </AppBar>
            <SignUpDialog open={dialogOpen} onClose={() => setDialogOpen(false)} /> {/* Use SignUpDialog */}
        </ThemeProvider>
    );
});

export default Navbar;
