import React from 'react';
import {Box} from '@mui/material';
import DownloadBox from '../components/Moblie/DBtest.jsx';
import HowBox from '../components/Moblie/HowBox.jsx';
import OverviewBox from '../components/Moblie/OverviewBox.jsx';
import FeaturesBox from '../components/Moblie/FeaturesBox.jsx';
import UseBox from "../components/Moblie/UseBox.jsx";


function Moblie() {
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
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <DownloadBox />
            </Box>

            <Box
                sx={{
                    width: '100%',
                    minHeight: { xs: '500px', md: '750px' },
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <HowBox />
            </Box>

            <Box
                sx={{
                    width: '100%',
                    minHeight: { xs: '500px', md: '750px' },
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <FeaturesBox />
            </Box>

            <Box
                sx={{
                    width: '100%',
                    minHeight: { xs: '500px', md: '850px' },
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <UseBox />
            </Box>

            <Box
                sx={{
                    width: '100%',
                    display: {xs:'none',sm:'block'},
                    justifyContent: 'center',
                }}
            >
                <OverviewBox />
            </Box>


        </Box>
            
    );
};

export default Moblie;