import React from 'react';
import {Box} from '@mui/material';
import DownloadBox from '../components/Moblie/DownloadBox.jsx';
import HowBox from '../components/Moblie/HowBox.jsx';
import FeaturesBox from '../components/Moblie/FeaturesBox.jsx';
import UseBox from "../components/Moblie/UseBox.jsx";

function Moblie() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100vw',
                minHeight: '100vh',
                position: 'relative',
                top: '-64px',
                mb: '-80px'
            }}
        >
            <Box
                sx={{
                    width: '100vw',
                    minHeight: '40vw',
                }}
            >
                <DownloadBox />
            </Box>

            <Box
                sx={{
                    width: '100vw',
                    minHeight: '50vw',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <HowBox />
            </Box>

            <Box
                sx={{
                    width: '100%',
                    minHeight: '50vw',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <FeaturesBox />
            </Box>

        </Box>
            
    );
};

export default Moblie;