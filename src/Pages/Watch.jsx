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
                minHeight: '100vw',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    minHeight: '40vw',
                }}
            >
                <DownloadBox />
            </Box>

            <Box
                sx={{
                    width: '100%',
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

            <Box
                sx={{
                    width: '100%',
                    minHeight: '40vw',
                }}
            >
                <CertificateBox/>
            </Box>

            <Box
                sx={{
                    width: '100%',
                    display: {sm:'none',md:'block'},
                    justifyContent: 'center',
                }}
            >
                <OverviewBox />
            </Box>


        </Box>

    );
};

export default Watch;