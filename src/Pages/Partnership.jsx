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
            <Box
                sx={{
                    width: '100%',
                    minHeight: {
                        xs: '200px',
                        sm: '450px',
                        md: '540px',
                        lg: '675px',
                        xl: '900px',
                    },
                    display: 'flex',
                    justifyContent: 'center',
                    bgcolor: 'black',
                }}
            >
                <MessageBox />
            </Box>

                <Gb/>
            

            <Box
                sx={{
                    width: '100%',
                    minHeight: '40vw',
                }}
            >
                <ReqBox />
            </Box>

            <Box
                sx={{
                    width: '100%',
                    minHeight: {
                        xs: '200px',
                        sm: '450px',
                        md: '540px',
                        lg: '675px',
                        xl: '900px',
                    },
                    display: 'flex',
                    justifyContent: 'center',
                    bgcolor: 'black',
                }}
            >
                <PartnerBox />
            </Box>
        </Box>
    );
}

export default Partnership;
