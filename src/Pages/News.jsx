// src/pages/About.jsx
import React,{useEffect, useRef} from 'react';
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
                    minHeight: '49.48vw',
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
                    background: 'radial-gradient(97.15% 97.15% at 50% 2.85%, #323232 0%, #1F1F1F 100%)'


                }}
            >
                <MemberBox />
            </Box>
        </Box>
    );
}

export default About;
