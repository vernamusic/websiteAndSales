import React from 'react';
import {Box} from '@mui/material';
import DownloadBox from '../components/Moblie/DownloadBox.jsx';
import HowBox from '../components/Moblie/HowBox.jsx';
import OverviewBox from '../components/Moblie/OverviewBox.jsx';
import FeaturesBox from '../components/Moblie/FeaturesBox.jsx';
import UseBox from "../components/Moblie/UseBox.jsx";
import CertificateBox from '../components/Moblie/Certification.jsx';

function Moblie() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100vw',
                minHeight: '100vw',
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

            <Box
                sx={{
                    mt:'4vw',
                    width: '100%',
                    minHeight: '50vw',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <UseBox />
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
                    display: {xs:'none',sm:'none',md:'flex'},
                    justifyContent: 'center',
                }}
            >
                <OverviewBox />
            </Box>


        </Box>
            
    );
};

export default Moblie;