import React from 'react';
import { Box, Typography, createTheme, ThemeProvider } from '@mui/material';
import video1 from '../../assets/video1.mp4';

const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'sen',
            fontWeight: '400',
            fontSize: { xs: '12px', sm: '15px', md: '17px', lg: '21px', xl: '24px' },
            color: "#b8b7b7",
            letterSpacing: '0.4px',
            lineHeight: 'normal',
        },
    },
});

const VideoBox = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '20px', // Adjust margin as needed
                }}
            >
                <Box
                    component="video"
                    src={video1}
                    controls
                    sx={{
                        width: '100%', // Set width to 100% to take full space
                        maxWidth: '1200px', // Increase maximum width of the video
                        borderRadius: '8px', // Optional: adds rounded corners
                    }}
                />
                
                <Typography
                    sx={{
                        ...theme.typography.h6,
                        mt: 5,
                        maxWidth: '600px', // Reduce width of the typography
                        textAlign: 'center', // Center-align the text
                    }}
                >
                    Lorem ipsum dolor sit Mauris tincidunt Lorem ipsum dolor sit amet consectetur
                    Mauris tincidunt Lorem ipsum dolor sit amet consectetur.
                </Typography>
                
            </Box>
        </ThemeProvider>
    );
}

export default VideoBox;
