import React, { useEffect, useState } from "react";
import {Box, Typography, createTheme, ThemeProvider,Button,} from "@mui/material";
import moreicn from "../../assets/next.png";
import { Link } from "react-router-dom";


const apihost = "https://site.vitruvianshield.com";

const theme = createTheme({
    typography: {
        h6: {
            fontFamily:'sen',
            fontSize: { xs: '6px', sm: '10px', md: '12px', lg: '15px', xl: '20px' },
            lineHeight: 'normal',
            letterSpacing: '0.4px',
            color: "#F1F1F1",
            textTransform: 'none',
        },

        h3: {
            fontFamily: "Lato",
            fontWeight:700,
            fontSize: {xs: '8px', sm: '13px', md: '18px', lg: '21px', xl: '28px'},
            color: "#F1F1F1",
            textTransform: 'none',
        },
        button: {
            fontFamily: 'Inter',
            fontSize: { xs: '6px', sm: '6px', md: '9px', lg: '13px', xl: '16px' },
            textTransform: 'none',
        },
    },
});

const NewsBox = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`${apihost}/api/v1/top-news`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setNewsItems(data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
            position:'relative',
            justifyContent: "center",
        }}
      >
        <Box
            sx={{
                width: "100%",
                display: 'flex',
                position:'relative',
              alignItems: 'flex-start',
                pb:{xs:6, sm: 8, md: 10, lg: 12, xl: 15,},
            }}
        >
            <Typography
                sx={{
                    position: "absolute",
                    left: "13%", // چسباندن به چپ
                    top: "0%", // وسط‌چین عمودی
                    ...theme.typography.h3,
                }}
            >
                News
            </Typography>

            <Button
                component={Link} // لینک به صفحه نیوز
                to="/news"
                sx={{
                    ...theme.typography.h3,
                    position: "absolute",
                    right: "12.5%", // چسباندن به راست
                    top: "0%", // وسط‌چین عمودی
                    "&:hover": {
                        backgroundColor: "transparent", // حذف رنگ پس‌زمینه در حالت هاور
                    },
                }}
                endIcon={<img src={moreicn} alt="more" style={{ width: "20px", height: "20px" }} />}
            >
                more
            </Button>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" sx={{gap:{xs: 1, sm: 2, md: 3, lg: 6, xl: 9}}} >
          {newsItems.map((item) => (
            <Box
              key={item.id}
              sx={{
                  width: { xs: '126px', sm: '210px', md: '280px', lg: '345px', xl: '430px' },
                  height: { xs: '200px', sm: '293px', md: '391px', lg: '488px', xl: '600px' },
                position: "relative",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                color: "white",
                overflow: "hidden",
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 46.58%, rgba(0, 0, 0, 0.472485) 56.73%, rgba(0, 0, 0, 0.86) 66%), url(${item.picture})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                  mb:5,
              }}

            >
                <Box
                    sx={{
                        position: "absolute",
                        height: '37%',
                        bottom: '0',
                        width: { xs: '126px', sm: '189px', md: '252px', lg: '315px', xl: '430px' },
                    }}
                >

                    <Box
                        sx={{
                            position: "absolute",
                            top: '0',
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            ml:{xs:1, sm: 2, md: 3, lg: 3, xl: 4,},

                        }}
                    >
                        <Typography
                            sx={{
                                ...theme.typography.h3,
                            }}
                        >
                            {item.title}
                        </Typography>
                        <Typography
                            sx={{
                                mt: {xs:0.1, sm: 0.2, md: 0.4, lg: 0.6, xl: 0.8,},
                                ...theme.typography.h6,

                            }}
                        >
                            {item.details.length > 50
                                ? `${item.details.substring(0, 80)}...`
                                : item.details}
                        </Typography>
                    </Box>


                    <Box
                        sx={{
                            position: "absolute",
                            bottom: '0',
                            width: '100%',
                            display: "flex",
                            alignContent: "flex-start",

                        }}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                borderRadius: "6px",
                                backgroundColor: "transparent",
                                textTransform: "none",
                                ml:{xs:1, sm: 2, md: 3, lg: 3, xl: 4,},
                                mb:{xs:0.5, sm: 2, md: 2.5, lg: 2.5, xl: 3,},
                                width: { xs: '20px',sm: '55px', md: '80px', lg: '100px', xl: '125px' },
                                height: { xs: '20px', sm: '20px', md: '30px', lg: '35px', xl: '45px' },
                                ...theme.typography.button,
                                border: "1px solid rgba(255, 255, 255, 0.8)",
                                "&:hover": {
                                    backgroundColor: "#000000",
                                    opacity: 0.8,
                                },
                            }}
                        >
                            See more
                        </Button>
                    </Box>
                </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default NewsBox;
