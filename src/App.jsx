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
                backgroundSize: '100% auto',
                backgroundPosition: 'top',
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
                {/* Navbar */}
                <Box sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    zIndex: 1000,
                    bgcolor: 'black',
                }}>
                    <Navbar />
                </Box>

                <Box sx={{ mt: '64px', flex: 1 }}>
                    <AppRoutes />
                </Box>

                <Footer />
            </Box>
        </Router>
    );
};

export default App;
