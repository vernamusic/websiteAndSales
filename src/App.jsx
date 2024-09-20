import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import AppRoutes from './Routes';
import Box from '@mui/material/Box';
import Footer from './Pages/Footer';
import Background from './assets/background.svg';

const App = () => {
    return (
        <Router>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                bgcolor: 'black',
                backgroundImage: `url(${Background})`,
                backgroundSize: '100% auto', // عرض تصویر 100% و ارتفاع به صورت خودکار
                backgroundPosition: 'top', // پس‌زمینه از بالا شروع می‌شود
                padding: 0,
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.83)',
                    zIndex: 1,
                },
                '& > *': {
                    position: 'relative',
                    zIndex: 2,
                },
            }}>
                <Navbar sx={{
                    position: 'flex',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    zIndex: 1000,
                }} />
                <Box sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    maxWidth: '100%',
                    boxSizing: 'border-box',
                }}>
                    <AppRoutes />
                </Box>
                <Footer />
            </Box>
        </Router>
    );
}

export default App;
