import React, { useEffect, useState } from 'react';
import { Box, Typography, IconButton, Divider } from '@mui/material';
import {Visibility} from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Newscard from './AllInOneCard.jsx';
import Facebook from '../../assets/logos_facebook.png'
import Share from '../../assets/logos_share.png'
import Twitter from '../../assets/logos_Twitter.png'
const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'Lato',
            fontSize: '1.25vw',
            lineHeight: 'normal',
            letterSpacing: '0.8px',
            fontWeight: 400,
            color: '#F1F1F1',
            textTransform: 'none',
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize: '1.6667vw',
            color: '#F1F1F1',
            textTransform: 'none',
        },
        button: {
            fontFamily: 'Lato',
            fontSize: '1.1111vw',
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
    const timeCall = calculateTimeAgo(newsData.created_at);
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    width: '100vw',
                    height: '740px',
                    position: 'relative',
                    backgroundImage: `url(${newsData.picture})`,
                    backgroundSize: 'fit',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            />
            <Box
                sx={{
                    mb:5,
                    color: 'white',
                    height: 'auto',
                    position: 'relative',
                    alignItems: 'center',
                    background: 'radial-gradient(97.15% 97.15% at 50% 2.85%, #323232 0%, #1F1F1F 100%)'
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
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                        <Typography variant="h4" sx={{
                                ...theme.typography.h3,
                                mt: '5vw',
                            }}>
                            {newsData.title}
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 1, mt: '5vw', }}>
                            <Visibility sx={{ fontSize: '1.8vw', color: 'white' }} />
                            <Typography sx={{ ...theme.typography.button, color: 'white' }}>
                                {newsData.views}
                            </Typography>
                            <Divider
                                orientation="vertical"
                                flexItem
                                sx={{ mx:'0.5vw', borderColor: 'rgba(255, 255, 255, 0.2)', borderStyle: 'dashed',height:'2vw',}}
                            />
                            <Typography sx={{ ...theme.typography.button, display: { sm: 'block', xs: 'none' } }}>
                                Share:
                            </Typography>
                            <IconButton sx={{ p: 0 }} onClick={() => shareOnFacebook(`https://site.vitruvianshield.com/news/${slug}`)}>
                                <img
                                    src={Facebook}
                                    alt="Facebook"
                                    style={{ width: 'auto', height: '1.6667vw' }}
                                />
                            </IconButton>
                            <IconButton sx={{ p: 0 }} onClick={() => shareOnTwitter(`https://site.vitruvianshield.com/news/${slug}`)}>
                                <img
                                    src={Twitter}
                                    alt="Twitter"
                                    style={{ width: 'auto', height: '1.6667vw' }}
                                />
                            </IconButton>
                            <IconButton sx={{ p: 0 }} onClick={() => copyToClipboard(`https://site.vitruvianshield.com/news/${slug}`)}>
                                <img
                                    src={Share}
                                    alt="Share"
                                    style={{ width: 'auto', height: '1.6667vw' }}
                                />
                            </IconButton>
                        </Box>

                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                        }}
                    >

                        <Typography variant="body2" sx={{ ...theme.typography.button, color: 'rgba(144, 193, 226, 1)', mt:'0.5vw',mb:'2vw' }}>
                            {newsData.read_time} min read
                        </Typography>
                    </Box>

                    {newsData.details.split('\n').map((paragraph, index) => (
                        <Typography key={index} variant="body1" sx={{
                            mt: { xs: 1, sm: 1, md: 2, lg: 3, xl: 4 }, ...theme.typography.h6 }}>
                            {paragraph}
                        </Typography>
                    ))}

                    <Box sx={{ display: 'flex', alignItems: 'center', mt: '2vw',gap:'2vw'}}>
                        <Typography sx={{ ...theme.typography.button, color: '#BFBFBF' }}>{timeCall}</Typography>
                        <Typography sx={{ ...theme.typography.button, color: '#BFBFBF' }}>
                            {moment(newsData.created_at).format('ddd MMMM D, YYYY')}
                        </Typography>
                    </Box>
                    <Box sx={{ mb: { xs: 4, sm: 5, md: 6, lg: 8 }, }}>
                        <Typography gutterBottom sx={{ ...theme.typography.h6, pl: 1, mb: { xs: 2, sm: 2, md: 3, lg: 4, xl: 6 }, textAlign: 'left', mt: { xs: 3, sm: 4, md: 5, lg: 7, xl: 10 } }}>
                            Related News:
                        </Typography>
                    </Box>
                </Box>
                <Newscard data={newsData.related_news.slice(0, 4)} />

            </Box>
        </ThemeProvider>
    );
};

export default NewsCard;
