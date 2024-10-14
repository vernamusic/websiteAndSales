import React, { useEffect, useState } from 'react';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import { Share, Visibility, AccessTime } from '@mui/icons-material';
import { useParams } from 'react-router-dom';

const NewsCard = () => {
    const { slug } = useParams();
    const [newsData, setNewsData] = useState(null);

    useEffect(() => {

        fetch(`https://site.vitruvianshield.com/api/v1/news/${slug}`)
            .then((response) => response.json())
            .then((data) => setNewsData(data));
    }, [slug]);

    if (!newsData) return <div>Loading...</div>;

    return (
        <Box
            sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                borderRadius: '10px',
                height: '200vh',
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    width: '100vw',
                    height:'60vh',
                    position: 'relative',
                    backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.738) 14.54%, rgba(0, 0, 0, 0.686) 23.41%, rgba(0, 0, 0, 0.584) 40.86%, rgba(0, 0, 0, 0.164) 100%), url(${newsData.picture})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top right',
                    backgroundRepeat: 'no-repeat',
                }}
            ></Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                {newsData.title}
            </Typography>

            <Grid container alignItems="center" sx={{ margin: '10px 0' }}>
                <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
                    <AccessTime fontSize="small" sx={{ marginRight: '5px' }} />
                    <Typography variant="body2">{newsData.read_time} min read</Typography>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Visibility fontSize="small" sx={{ marginRight: '5px' }} />
                    <Typography variant="body2">{newsData.views}</Typography>
                </Grid>
                <Grid item xs={4} sx={{ textAlign: 'right' }}>
                    <IconButton color="primary" aria-label="share">
                        <Share />
                    </IconButton>
                </Grid>
            </Grid>

            <Typography variant="body1" sx={{ marginTop: '10px' }}>
                {newsData.details}
            </Typography>
        </Box>
    );
};

export default NewsCard;
