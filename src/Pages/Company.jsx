import React from 'react';
import { Box } from '@mui/material';
import CompanyBox from '../components/company/CompanyBox.jsx'

const Company = () =>{
    return(
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
                    minHeight: { xs: '500px', md: '900px',},
                    display: 'flex',
                    justifyContent: 'center',
                    bgcolor: 'black',
                }}
            >
                <CompanyBox />
            </Box>


        </Box>
    );
}

export default Company