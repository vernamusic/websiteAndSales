import React, { useEffect, useState } from 'react';
import { Box, Typography, IconButton, Divider } from '@mui/material';
import { Visibility } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Newscard from './AllInOneCard.jsx';
import Facebook from '../../assets/logos_facebook.png';
import Share from '../../assets/logos_share.png';
import Twitter from '../../assets/logos_Twitter.png';

const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'Lato',
            fontSize: {xs:'2.78vw',sm:'1.25vw'},
            lineHeight: 'normal',
            letterSpacing: '0.8px',
            fontWeight: 400,
            color: '#F1F1F1',
            textTransform: 'none',
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: {xs:600,sm:700},
            fontSize: {xs:'3.33vw',sm:'1.6667vw'},
            color: '#F1F1F1',
            textTransform: 'none',
        },
        button: {
            fontFamily: 'Lato',
            fontSize: {xs:'2.78vw',sm:'1.1111vw'},
            textTransform: 'none',
            color: '#F1F1F1',
        },
    },
});

const calculateTimeAgo = (createdAt) => {
    const now = moment();
    const duration = moment.duration(now.diff(createdAt));
    const days = duration.asDays();

    if (days > 7) {
        const weeks = Math.round(days / 7);
        return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    }

    if (days < 1) {
        const hours = Math.round(duration.asHours());
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
        return `${Math.round(days)} day${days > 1 ? 's' : ''} ago`;
    }
};

const NewsCard = () => {
    const { slug } = useParams();
    const [newsData, setNewsData] = useState(null);
    const [timeAgo, setTimeAgo] = useState('');

    useEffect(() => {
        fetch(`https://vitruvianshield.com/api/v1/news/${slug}`)
            .then((response) => response.json())
            .then((data) => {
                setNewsData(data);

                const now = moment();
                const publishedTime = moment(data.created_at);
                const duration = moment.duration(now.diff(publishedTime));
                const hoursAgo = Math.floor(duration.asHours());
                setTimeAgo(hoursAgo > 24 ? `${Math.floor(duration.asDays())} days ago` : `${hoursAgo} hours ago`);
            })
            .catch((error) => {
                console.error('Error fetching news:', error);
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

    if (!newsData) {
        return <div>Loading...</div>;
    }

    const timeCall = calculateTimeAgo(newsData.created_at);

    const formattedDetails = newsData.details.split('\n').map((paragraph, index) => {
        const isLink = paragraph.startsWith('https');
        return (
            <Box key={index} sx={{ mb: '2vw' }}>
                {isLink ? (
                    <Typography

                        sx={{
                            ...theme.typography.h6,
                            color: '#3E93CC',
                            textDecoration: 'underline',
                            cursor: 'pointer',
                        }}
                        onClick={() => window.open(paragraph, '_blank')}
                    >
                        {paragraph}
                    </Typography>
                ) : (
                    <Typography  sx={{ ...theme.typography.h6, }}>
                        {paragraph}
                    </Typography>
                )}
            </Box>
        );
    });

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    width: '100vw',
                    minHeight: '50vw',
                    position: 'relative',
                    backgroundImage: `url(${newsData.picture})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            />
            <Box
                sx={{
                    mb: 5,
                    color: 'white',
                    height: 'auto',
                    position: 'relative',
                    alignItems: 'center',
                    background: 'radial-gradient(97.15% 97.15% at 50% 2.85%, #323232 0%, #1F1F1F 100%)',
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        width: '85.56vw',
                        margin: '0 auto',
                        justifyItems: 'start',
                        pt: { xs: 1, sm: 1, md: 1.5, lg: 2, xl: 2 },
                    }}
                >
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h4" sx={{ ...theme.typography.h3, mt: '5vw' }}>
                            {newsData.title}
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 1, mt: '5vw' }}>
                            <Visibility sx={{display: { sm: 'block', xs: 'none' }, fontSize: '1.8vw', color: 'white' }} />
                            <Typography sx={{  display: { sm: 'block', xs: 'none' },...theme.typography.button, color: 'white' }}>{newsData.views}</Typography>
                            <Divider
                                orientation="vertical"
                                flexItem
                                sx={{
                                    display: { sm: 'block', xs: 'none' },
                                    mx: '0.5vw',
                                    borderColor: 'rgba(255, 255, 255, 0.2)',
                                    borderStyle: 'dashed',
                                    height: '2vw',
                                }}
                            />
                            <Typography sx={{ ...theme.typography.button, display: { sm: 'block', xs: 'none' } }}>Share:</Typography>
                            <IconButton sx={{ p: 0 }} onClick={() => shareOnFacebook(`https://vitruvianshield.com/news/${slug}`)}>
                                <img
                                    src={Facebook}
                                    alt="Facebook"
                                    style={{
                                        width: 'auto',
                                        height: '3vw',
                                        '@media (min-width:600px)': { height: '1.6667vw' }
                                    }}
                                />
                            </IconButton>
                            <IconButton sx={{ p: 0 }} onClick={() => shareOnTwitter(`https://vitruvianshield.com/news/${slug}`)}>
                                <img
                                    src={Twitter}
                                    alt="Twitter"
                                    style={{
                                        width: 'auto',
                                        height: '3vw',
                                        '@media (min-width:600px)': { height: '1.6667vw' }
                                    }}
                                />
                            </IconButton>
                            <IconButton sx={{ p: 0 }} onClick={() => copyToClipboard(`https://vitruvianshield.com/news/${slug}`)}>
                                <img
                                    src={Share}
                                    alt="Share"
                                    style={{
                                        width: 'auto',
                                        height: '3vw',
                                        '@media (min-width:600px)': { height: '1.6667vw' }
                                    }}
                                />
                            </IconButton>

                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start',mt: {xs:'2vw',sm:'0.5vw'} }}>


                        <Typography variant="body2" sx={{ ...theme.typography.button, color: 'rgba(144, 193, 226, 1)', mt: '0vw', mb: '2vw' }}>
                            {newsData.read_time} min read
                        </Typography>
                        <Divider
                            orientation="vertical"
                            flexItem
                            sx={{
                                display: { sm: 'none', xs: 'block' },
                                mx: '3vw',
                                borderColor: 'rgba(255, 255, 255, 0.2)',
                                borderStyle: 'dashed',
                                height: '5vw',
                            }}
                        />
                        <Visibility sx={{display: { sm: 'none', xs: 'block' }, fontSize: '3.5vw', color: 'white',mt: '0.7vw' }} />

                        <Typography sx={{display: { sm: 'none', xs: 'block' }, ...theme.typography.button, color: 'white',ml:'1vw' }}>{newsData.views}</Typography>
                    </Box>

                    {formattedDetails}

                    <Box sx={{ display: 'flex', alignItems: 'center', mt: '2vw', gap: '2vw' }}>
                        <Typography sx={{ ...theme.typography.button, color: '#BFBFBF' }}>{timeCall}</Typography>
                        <Typography sx={{ ...theme.typography.button, color: '#BFBFBF' }}>
                            {moment(newsData.created_at).format('MMMM DD, YYYY')}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default NewsCard;
