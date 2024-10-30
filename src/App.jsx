import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './Pages/Navbar';
import AppRoutes from './Routes';
import Footer from './Pages/Footer';
import { AuthProvider } from './AuthContext.jsx';

import './app.css';

const App = () => {
    return (
        <Router>
        <AuthProvider>
                <Box className="App">
                    <Box className="Navbar">
                        <Navbar />
                    </Box>

                    <Box className="Content">
                        <AppRoutes />
                    </Box>

                    <Box className="Footer">
                        <Footer />
                    </Box>
                </Box>
        </AuthProvider>
        </Router>
    );
};

export default App;
