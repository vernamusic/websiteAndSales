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
        <AuthProvider>
            <Router>
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
            </Router>
        </AuthProvider>
    );
};

export default App;
