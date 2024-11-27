import React from 'react';
import { Box } from '@mui/material';
import MessageBox from '../components/partnership/newParter.jsx';
import ReqBox from '../components/partnership/ReqBox';
import Gb from '../components/partnership/groupButton.jsx';
import PartnerBox from '../components/partnership/partnerBox.jsx';
const Partnership = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                minHeight: '100vw',
            }}
        >
                <MessageBox />
                <Gb/>
                <ReqBox />
                <PartnerBox />
        
        </Box>
    );
}

export default Partnership;
