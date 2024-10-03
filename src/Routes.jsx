import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Learning from './Pages/Learning';
import Moblie from './Pages/Moblie';
import News from './Pages/News';
import About from './Pages/About';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Watch from './Pages/Watch';
import Company from './Pages/Company';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/products/mobile-app" element={<Moblie />} />
            <Route path="/products/dashboard" element={<Dashboard />} />
            <Route path="/products/smart-watch" element={<Watch />} />
            <Route path="/company" element={<Company />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default AppRoutes;
