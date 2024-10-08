// src/pages/About.jsx
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import TopNews from '../components/News/TopNews.jsx'
import MemberBox from '../components/News/NewsMain.jsx';

const About = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                minHeight: '95vh',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    minHeight: '95vh',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <TopNews />
            </Box>
            <Box
                sx={{
                    width: '100%',
                    minHeight: { xs: '500px', md: '850px' },
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <MemberBox />
            </Box>
        </Box>
    );
}

export default About;
