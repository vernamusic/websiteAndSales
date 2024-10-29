import React, {useEffect, useState} from 'react';
import { Box } from '@mui/material';
import ProductBox from '../components/home/ProductBox';
import RegBox from '../components/home/RegBox';
import NewsBox from '../components/home/NewsBox';
import SideBox from '../components/home/SideBox';
import ResetPasswordDialog  from '../components/home/ResetPassword.jsx';
import {useParams} from "react-router-dom";

const Home = () => {
    const { token } = useParams();
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {
        if (token) {
            setOpenDialog(true);
        }
    }, [token]);

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
            }}
        >
            <ResetPasswordDialog open={openDialog} onClose={handleCloseDialog} token={token} />
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
                <RegBox />
            </Box>

            <Box
                sx={{
                    width: { xs: '90%', sm: '100%'},
                    minHeight: {
                        xs: '200px',
                        sm: '450px',
                        md: '540px',
                        lg: '675px',
                        xl: '900px',
                    },
                    display: 'flex',
                    justifyContent: 'center',
                    zIndex:3,
                    mb:{xs:2,sm:0},
                    mx: 'auto',

                }}
            >
                <ProductBox />
            </Box>

            <Box
                sx={{
                    width: { xs: '90%', sm: '100%'},
                    minHeight: {
                        xs: '180px',
                        sm: '450px',
                        md: '540px',
                        lg: '675px',
                        xl: '900px',
                    },
                    display: 'flex',
                    background:{xs:'rgba(20, 20, 20, 1)',sm:'transparent'},
                    borderRadius:'20px',
                    justifyContent: 'center',
                    mb: { xs: 2, sm: 0 },
                    mx: 'auto',
                }}
            >

            <SideBox />
            </Box>

            {/* <Box
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
                <LearningBox />
            </Box> */}

            <Box
                sx={{
                    width: '100%',
                    height: {
                        xs: '150px',
                        sm: '250px',
                        md: '400px',
                        lg: '500px',
                        xl: '600px',
                    },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'start',
                    mb:{xs: 10, sm: 25, md: 25, lg: 25, xl: 25},
                }}
            >
                <NewsBox />
            </Box>
        </Box>
    );
}

export default Home;
