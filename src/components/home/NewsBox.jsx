import React, { useEffect, useState } from "react";
import { Box, Typography, createTheme, ThemeProvider, Button, useMediaQuery } from "@mui/material";
import moreicn from "../../assets/next.png";
import { Link, useNavigate } from "react-router-dom";

const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'sen',
            fontSize: { xs: '6px', sm: '6px', md: '11px', lg: '15px', xl: '17px' },
            color: "#F1F1F1",
            letterSpacing: '0.4px',
            lineHeight: 'normal',
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize: { xs: '8px', sm: '10px', md: '15px', lg: '19px', xl: '24px' },
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
        button: {
            fontFamily: 'Lato',
            fontSize: { xs: '8px', sm: '8px', md: '10px', lg: '12px', xl: '14px' },
            textTransform: 'none',
            color: "#FFFFFF",
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
                flexBasis: '30%',
                height: '100%',
                borderRadius: "20px",
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
            <Box sx={{ position: "relative", width: '85%', height: '20%', display: "flex", flexDirection: "column", justifyContent: 'flex-start', mb: 4 }}>
                <Typography sx={{ width: '100%', ...theme.typography.h3 }}>{title}</Typography>
                <Typography sx={{ width: '100%', mt: 0.4, ...theme.typography.h6 }}>
                    {details.length > 50 ? `${details.substring(0, 80)}...` : details}
                </Typography>
            </Box>

            <Box sx={{ position: "relative", width: '85%', height: '12%', display: { xs: 'none', sm: 'flex' }, alignItems: "flex-start" }}>
                <Button
                    variant="contained"
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent click event from propagating to the Box
                        onClick();
                    }}
                    sx={{
                        ...theme.typography.button,
                        mt: 1.2,
                        borderRadius: '4px',
                        border: '1px solid white',
                        backgroundColor: 'transparent',
                        width: { sm: '30px', md: '60px', lg: '75px', xl: '95px' },
                        height: { sm: '20px', md: '30px', lg: '35px', xl: '40px' },
                        paddingX: 0,
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
            <Box sx={{ width: "70%", height: '100%' }}>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
                    <Typography sx={{ fontSize: { xs: "14px", sm: "18px", md: "22px", lg: "26px", xl: "30px" }, color: "#FFFFFF" }}>
                        News
                    </Typography>

                    <Button
                        component={Link}
                        to="/news"
                        sx={{
                            color: "#FFFFFF",
                            textTransform: "none",
                            fontSize: { xs: "12px", sm: "16px", md: "20px", lg: "24px", xl: "28px" },
                            display: "flex",
                            alignItems: "center",
                            "&:hover": { backgroundColor: "transparent" },
                        }}
                        endIcon={<Box component="img" src={moreicn} alt="more" sx={{ width: { xs: "9px", sm: "15px", md: "19px", lg: "21px", xl: "22px" }, height: { xs: "9px", sm: "15px", md: "19px", lg: "21px", xl: "22px" } }} />}
                    >
                        more
                    </Button>
                </Box>

                <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'start' }}>
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
