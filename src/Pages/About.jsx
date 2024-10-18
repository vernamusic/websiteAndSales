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
                alignItems:'center',
                width: '100%',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    minHeight: {
                        xs: '250px',
                        sm: '350px',
                        md: '500px',
                        lg: '650px',
                        xl: '100vh',
                    },
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <ContactBox />
            </Box>
            {/* <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <MemberCountBox />
            </Box> */}
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <MemberBox />
            </Box>
            <Box
                sx={{
                    width: '100%',
                    minHeight: {
                        xs: '300px',
                        sm: '350px',
                        md: '500px',
                        lg: '650px',
                        xl: '100vh',
                    },
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
