import React from 'react';
import {Box, createTheme} from '@mui/material';
import DownloadBox from '../components/Dashboard/DownloadBox.jsx';
import HowBox from '../components/Dashboard/HowBox.jsx';
import OverviewBox from '../components/Dashboard/OverviewBox.jsx';
import FeaturesBox from '../components/Dashboard/FeaturesBox.jsx';
import UseBox from "../components/Dashboard/UseBox.jsx";
import CertificateBox from "../components/Dashboard/Certification.jsx";

const theme = createTheme({
    typography: {
        fontFamily: 'Sen, Arial, sans-serif',
        h6: {
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '24px',
            color: "#F1F1F1",
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize: '24px',
            lineHeight: '28px',
            color: "#FFFFFF",
        },
    },
});

function Moblie() {
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
            <UseBox />
            

        </Box>

    );
};

export default Moblie;