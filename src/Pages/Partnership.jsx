import React from 'react';
import { Box } from '@mui/material';
import MessageBox from '../components/partnership/MessageBox';
import ReqBox from '../components/partnership/ReqBox';
import FinancialBox from '../components/partnership/FinancialBox';
import TechnologicalBox from '../components/partnership/TechnologicalBox';
import DevBox from '../components/partnership/DevBox';

const Partnership = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    minHeight: {
                        xs: '300px',
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

            <Box
                sx={{
                    width: '100%',
                    minHeight: {
                        xs: '300px',
                        sm: '450px',
                        md: '540px',
                        lg: '675px',
                        xl: '900px',
                    },
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <ReqBox />
            </Box>
            <Box
                sx={{
                    width: '100%',
                    minHeight: {
                        xs: '300px',
                        sm: '450px',
                        md: '540px',
                        lg: '675px',
                        xl: '900px',
                    },
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <FinancialBox />
            </Box>
            <Box
                sx={{
                    width: '100%',
                    minHeight: {
                        xs: '300px',
                        sm: '450px',
                        md: '540px',
                        lg: '675px',
                        xl: '900px',
                    },
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <TechnologicalBox />
            </Box>
            <Box
                sx={{
                    width: '100%',
                    minHeight: {
                        xs: '300px',
                        sm: '450px',
                        md: '540px',
                        lg: '675px',
                        xl: '900px',
                    },
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <DevBox />
            </Box>

            <Box
                sx={{
                    width: '100%',
                    minHeight: {
                        xs: '300px',
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
        </Box>
    );
}

export default Partnership;
