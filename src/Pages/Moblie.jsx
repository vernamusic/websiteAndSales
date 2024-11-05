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
                width: '100%'
            }}
        >
            <DownloadBox />
            <HowBox />
            <FeaturesBox />

        </Box>
            
    );
};

export default Moblie;