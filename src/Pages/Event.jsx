import React from 'react';
import {Box} from '@mui/material';
import PartnerBox from '../components/event/PartnerBox.jsx';

function Event () {
    return (
        <Box
        sx={{
            display:'flex',
            flexDirection:'column',
            width:'100%'
        }}>
            <PartnerBox />
        </Box>
    );
};

export default Event;