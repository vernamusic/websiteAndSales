import React, { useEffect, useState } from 'react';
import { Box, Typography, IconButton, Divider } from '@mui/material';
import { Share, Visibility, Facebook, Twitter } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Mediacard from './Mediacard.jsx';

const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'sen',
            fontSize: '1.0417vw',
            lineHeight: 'normal',
            letterSpacing: '0.8px',
            fontWeight: 400,
            color: '#F1F1F1',
            textTransform: 'none',
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize: '1.4583vw',
            color: '#F1F1F1',
            textTransform: 'none',
        },
        button: {
            fontFamily: 'Inter',
            fontSize: '1.1458vw',
            textTransform: 'none',
            color: '#F1F1F1',
        },
    },
});

const NewsCard = () => {
    const { slug } = useParams();
    const [newsData, setNewsData] = useState(null);
    const [timeAgo, setTimeAgo] = useState('');

    useEffect(() => {
        fetch(`https://site.vitruvianshield.com/api/v1/news/${slug}`)
            .then((response) => response.json())
            .then((data) => {
                setNewsData(data);

                const now = moment();
                const publishedTime = moment(data.created_at);
                const duration = moment.duration(now.diff(publishedTime));
                const hoursAgo = Math.floor(duration.asHours());
                setTimeAgo(hoursAgo > 24 ? `${Math.floor(duration.asDays())} days ago` : `${hoursAgo} hours ago`);
            });
    }, [slug]);

    const shareOnFacebook = (url) => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    };

    const shareOnTwitter = (url) => {
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(newsData.title)}`, '_blank');
    };

    const copyToClipboard = (url) => {
        navigator.clipboard.writeText(url)
            .then(() => {
                alert('Link copied to clipboard!');
            })
            .catch((error) => {
                console.error('Could not copy text: ', error);
            });
    };

    if (!newsData) return <div>Loading...</div>;

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    color: 'white',
                    height: 'auto',
                    position: 'relative',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        width: '100vw',
                        height: '38vw',
                        position: 'relative',
                        backgroundImage: `url(${newsData.picture})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'top right',
                        backgroundRepeat: 'no-repeat',
                    }}
                ></Box>

                <Box
                    sx={{
                        position: 'relative',
                        width: '60%',
                        margin: '0 auto',
                        justifyItems: 'start',
                        pt: { xs: 1, sm: 1, md: 1.5, lg: 2, xl: 2 },
                    }}
                >
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", mb: { xs: 1, sm: 1, md: 2, lg: 3, xl: 5 },mt: { xs: 1, sm: 1, md: 2, lg: 3, xl: 4 } }}>
                        <Typography variant="h4" sx={{
                                ...theme.typography.h3,
                                mt: { xs: 1, sm: 1, md: 2, lg: 3, xl: 4 },
                            }}>
                            {newsData.title}
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 0.5,
                                mt: { xs: 1, sm: 1, md: 2, lg: 3, xl: 4 } }}>
                            <Typography sx={{ ...theme.typography.h6, display: { sm: 'block', xs: 'none' } }}>
                                Share:
                            </Typography>
                            <IconButton color="primary" aria-label="share on facebook" sx={{ p: 0 }} onClick={() => shareOnFacebook(`https://site.vitruvianshield.com/news/${slug}`)}>
                                <Facebook sx={{ fontSize: { xs: '8px', sm: '10px', md: '16px', lg: '20px', xl: '24px' } }} />
                            </IconButton>
                            <IconButton color="primary" aria-label="share on twitter" sx={{ p: 0 }} onClick={() => shareOnTwitter(`https://site.vitruvianshield.com/news/${slug}`)}>
                                <Twitter sx={{ fontSize: { xs: '8px', sm: '10px', md: '16px', lg: '20px', xl: '24px' } }} />
                            </IconButton>
                            <IconButton color="primary" aria-label="share" sx={{ p: 0 }} onClick={() => copyToClipboard(`https://site.vitruvianshield.com/news/${slug}`)}>
                                <Share sx={{ fontSize: { xs: '8px', sm: '10px', md: '16px', lg: '20px', xl: '24px' } }} />
                            </IconButton>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            gap: 1,
                            mt: { xs: 1, sm: 1, md: 2, lg: 3, xl: 4 },
                            mb: 2,
                        }}
                    >
                        <Visibility sx={{ fontSize: { xs: '8px', sm: '10px', md: '16px', lg: '20px', xl: '24px' }, ml: { sx: 0.5, sm: 1, md: 2 }, color: 'gray' }} />
                        <Typography sx={{ ...theme.typography.h6, mr: { sx: 0.5, sm: 1, md: 2 }, color: 'gray' }}>
                            {newsData.views}
                        </Typography>
                        <Typography variant="body2" sx={{ ...theme.typography.h6, color: '#a50202' }}>
                            {newsData.read_time} min read
                        </Typography>
                    </Box>

                    {newsData.details.split('\n').map((paragraph, index) => (
                        <Typography key={index} variant="body1" sx={{
                            mt: { xs: 1, sm: 1, md: 2, lg: 3, xl: 4 }, ...theme.typography.h6 }}>
                            {paragraph}
                        </Typography>
                    ))}

                    <Box sx={{ display: 'flex', alignItems: 'center', mt: { xs: 1, sm: 1, md: 2, lg: 3, xl: 4 }, }}>
                        <Typography sx={{ ...theme.typography.h6, color: 'gray' }}>{timeAgo}</Typography>
                        <Divider orientation="vertical" flexItem sx={{ mx: 2, borderColor: 'gray' }} />
                        <Typography sx={{ ...theme.typography.h6, color: 'gray' }}>
                            {moment(newsData.created_at).format('ddd MMMM D, YYYY')}
                        </Typography>
                    </Box>
                    <Box sx={{ mb: { xs: 9, sm: 10, md: 13, lg: 15, xl: 20 }, }}>
                        <Typography gutterBottom sx={{ ...theme.typography.h3, pl: 1, mb: { xs: 2, sm: 2, md: 3, lg: 4, xl: 4 }, textAlign: 'left', mt: { xs: 3, sm: 4, md: 5, lg: 7, xl: 10 } }}>
                            Related News:
                        </Typography>
                        <Mediacard data={newsData.related_news} />
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default NewsCard;
