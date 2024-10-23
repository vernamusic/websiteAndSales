import React, { useEffect, useState } from "react";
import { Box, Typography, createTheme, ThemeProvider, Button, useMediaQuery } from "@mui/material";
import moreicn from "../../assets/next.png";
import { Link, useNavigate } from "react-router-dom";

const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'sen',
            fontSize:'0.8333vw',
            color: "#F1F1F1",
            letterSpacing: '0.4px',
            lineHeight: 'normal',
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize:'1.09375vw',
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
        button: {
            fontFamily: 'Lato',
            fontSize:'0.677vw',
            textTransform: 'none',
            color: "#FFFFFF",
        },
        h1: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize:'1.458vw',
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
    },
});


const NewsCard = ({ picture, title, details, slug, onClick }) => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flexBasis: '28%',
                height: '27.5vw',
                borderRadius: "16px",
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.01) 40.5%, rgba(0, 0, 0, 0.8) 71%, rgba(0, 0, 0, 0.9) 100%), url(${picture})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                justifyContent: 'flex-end',
                textAlign: 'start',
                cursor: isMobile ? 'pointer' : 'default', // Pointer cursor only on mobile
            }}
            onClick={isMobile ? onClick : undefined} // Only enable onClick for mobile
        >
            <Box sx={{ position: "relative", width: '85%', height: '68%', display: "flex", flexDirection: "column", justifyContent: 'flex-end',overflow:'hidden', }}/>
            <Box sx={{ position: "relative", width: '85%', height: '22%', display: "flex", flexDirection: "column", justifyContent: 'flex-start',overflow:'hidden', }}>
                <Typography sx={{ width: '100%', ...theme.typography.h3 }}>{title}</Typography>
                <Typography sx={{ width: '100%', mt: 0.5, ...theme.typography.h6 }}>
                    {details.length > 50 ? `${details.substring(0, 80)}...` : details}
                </Typography>
            </Box>

            <Box sx={{ position: "relative", width: '85%', height: '15%', display: { xs: 'none', sm: 'flex' }, justifyContent: "flex-start",alignItems: 'center' }}>
                <Button
                    onClick={(e) => {
                        e.stopPropagation();
                        onClick();
                    }}
                    sx={{
                        ...theme.typography.button,
                        borderRadius: '4px',
                        border: '1px solid white',
                        backgroundColor: 'transparent',
                        width: '4.6875vw',
                        height: '1.8229vw',
                        paddingX: 0,
                        minWidth: 0,
                        '&:hover': { backgroundColor: 'transparent' },
                    }}
                    disableRipple
                >
                    See more
                </Button>
            </Box>
        </Box>
    );
};

const NewsBox = () => {
    const [newsItems, setNewsItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(`https://site.vitruvianshield.com/api/v1/home-news`);
                if (!response.ok) throw new Error("Network response was not ok");
                const data = await response.json();
                setNewsItems(data);
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        };
        fetchNews();
    }, []);

    const handleClick = (slug) => navigate(`/news/${slug}`);

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: "70%", height: '100%',justifyItems: "center",}}>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", mb: {xs:1,sm:1,md:2,lg:3,xl:4},px:"3%" }}>
                    <Typography sx={{ ...theme.typography.h1, color: "#FFFFFF" }}>
                        News
                    </Typography>

                    <Button
                        component={Link}
                        to="/news"
                        sx={{
                            color: "#FFFFFF",
                            textTransform: "none",
                            ...theme.typography.h1,
                            display: "flex",
                            alignItems: "center",
                            "&:hover": { backgroundColor: "transparent" },
                        }}
                        endIcon={<Box component="img" src={moreicn} alt="more" sx={{ width: { xs: "9px", sm: "15px", md: "19px", lg: "21px", xl: "22px" }, height: { xs: "9px", sm: "15px", md: "19px", lg: "21px", xl: "22px" } }} />}
                    >
                        more
                    </Button>
                </Box>

                <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    {newsItems.map((box, index) => (
                        <NewsCard
                            key={index}
                            picture={box.picture}
                            title={box.title}
                            details={box.details}
                            slug={box.slug}
                            onClick={() => handleClick(box.slug)}
                        />
                    ))}
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default NewsBox;
