import React, { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { Box } from '@mui/material'; // استفاده از Box از MUI
import Navbar from './Pages/Navbar';
import AppRoutes from './Routes';
import Footer from './Pages/Footer';
import './app.css';

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <MainContent />
        </Router>
    );
};

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, [pathname]);

    return null;
};

const MainContent = () => {
    return (
        <Box className="App">
            <Box className="Navbar">
                <Navbar />
            </Box>

            <Box className="Content">
                <AppRoutes />
            </Box>

            <Footer />
        </Box>
    );
};

export default App;
