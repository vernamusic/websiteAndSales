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
            }}
        >
            <Box
                sx={{
                    width: '100vw',
                    minHeight: {
                        xs: '200px',
                        sm: '450px',
                        md: '540px',
                        lg: '675px',
                        xl: '900px',
                    },
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
