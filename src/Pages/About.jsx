// src/pages/About.jsx
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import ContactBox from '../components/aboutus/ContactBox.jsx'
import MeetBox from '../components/aboutus/MeetBox.jsx';
import MemberBox from '../components/aboutus/MemberBox.jsx';
import MemberCountBox from '../components/aboutus/MemberCountBox.jsx'

const About = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                minHeight: '100vh',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    minHeight: { xs: '500px', md: '850px' },
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <ContactBox />
            </Box>
            <Box
                sx={{
                    width: '100%',
                    minHeight: { xs: '150px', md: '200px' },
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <MemberCountBox />
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
            <Box
                sx={{
                    width: '100%',
                    minHeight: { xs: '500px', md: '850px' },
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <MeetBox />
            </Box>
        </Box>
    );
}

export default About;
