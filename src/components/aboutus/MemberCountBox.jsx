import React from "react";
import {Box, Typography, createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: 'Sen, Arial, sans-serif',
        h3: {
            fontFamily: 'Lato',
            fontWeight: 800,
            fontSize: '35px',
            lineHeight: '35px',
            color: "#FFFFFF",
        },
        h6: {
            fontFamily: 'Sen',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '21.66px',
            color: "#FFFFFF",
        },
    },
});

const MemberCountBox = () => {
    return(
        <ThemeProvider theme={theme}>
        <Box sx={{
            width:'100%',
            backgroundColor: 'rgba(20, 20, 20, 0.4)',
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '138px',  
        }}>
            <Box 
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                }}>
                <Typography variant='h3'>
                    1.5M
                </Typography>
                <Typography variant='h6'>
                    Global Happy Clients
                </Typography>
            </Box>
            <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                }}>
                <Typography variant='h3'>
                    15
                </Typography>
                <Typography variant='h6'>
                    Team Members
                </Typography>
            </Box>
            <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                }}>
                <Typography variant='h3'>
                    1
                </Typography>
                <Typography variant='h6'>
                    Project Complemented
                </Typography>
            </Box>
        </Box>
        </ThemeProvider>
    );
}

export default MemberCountBox;