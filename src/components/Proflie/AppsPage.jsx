import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const AppsPage = () => {
    return (
        <Box>
            <Typography variant="h4" sx={{ mb: 4 }}>
                My Apps
            </Typography>
            <Paper sx={{ p: 3, borderRadius: 2 }}>
                <Typography>
                    This is the Apps page. Content for the apps would go here.
                </Typography>
            </Paper>
        </Box>
    );
};

export default AppsPage;
