import React from 'react';
import {Box} from '@mui/material';
import PartnerBox from '../components/event/PartnerBox.jsx';
import ContactBox from '../components/event/ContactBox.jsx';
import PicSlider from '../components/event/PicSlider.jsx';
function Event () {
    return (
        <Box
        sx={{
            display:'flex',
            flexDirection:'column',
            width:'100%',
            mt:'-5vw'
        }}>
            <PartnerBox />
            <PicSlider />
            <ContactBox />
        </Box>
    );
};

export default Event;