import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import ProductBox from '../components/home/ProductBox';
import RegBox from '../components/home/RegBox';
import NewsBox from '../components/home/NewsBox';
import SideBox from '../components/home/SideBox';
import ResetPasswordDialog from '../components/home/ResetPassword.jsx';
import { useParams } from "react-router-dom";

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
            <RegBox />
            <ProductBox />
            <SideBox />
            <NewsBox />
        </Box>
    );
}

export default Home;
