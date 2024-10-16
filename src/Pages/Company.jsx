import React from 'react';
import { Box } from '@mui/material';
import CompanyBox from '../components/company/CompanyBox.jsx'
import CertificationBox from '../components/company/CertificationBox.jsx'
import PartnerBox from '../components/company/PartnerBox.jsx'
import VideoBox from '../components/company/VideoBox.jsx'
import PricingBox from '../components/company/PricingBox.jsx'

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
                <CompanyBox />
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
                }}
            >
                <VideoBox />
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
                }}
            >
                <CertificationBox />
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
                }}
            >
                <PartnerBox />
            </Box>
            <Box
                sx={{
                    width: '100%',
                    minHeight: { xs: '500px', md: '900px',},
                    display: {xs:'none',sm:'flex'},
                    justifyContent: 'center',
                }}
            >
                <PricingBox />
            </Box>
            
            


        </Box>
    );
}

export default Company