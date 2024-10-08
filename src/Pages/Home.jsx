import React from 'react';
import { Box } from '@mui/material';
import ProductBox from '../components/home/ProductBox';
import RegBox from '../components/home/RegBox';
import NewsBox from '../components/home/NewsBox';
import SideBox from '../components/home/SideBox';
// import LearningBox from "../components/home/LearningBox.jsx";

const Home = () => {
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
                <RegBox />
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
                <ProductBox />
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
                <NewsBox />
            </Box>
        </Box>
    );
}

export default Home;
