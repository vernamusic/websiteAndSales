import React from 'react';
import {Box,} from '@mui/material';
import DownloadBox from '../components/Watch/DownloadBox.jsx';
import HowBox from '../components/Watch/HowBox.jsx';
import OverviewBox from '../components/Watch/OverviewBox.jsx';
import FeaturesBox from '../components/Watch/FeaturesBox.jsx';
import CertificateBox from "../components/Watch/Certification.jsx";


function Watch() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
            }}
        >
            <DownloadBox />
            <HowBox />
            <FeaturesBox />

        </Box>

    );
};

export default Watch;