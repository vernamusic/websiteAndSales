import React, { useEffect, useState } from "react";
import {Box, Typography, createTheme, ThemeProvider,Button,} from "@mui/material";
import moreicn from "../../assets/next.png";
import { Link } from "react-router-dom";


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
        const response = await fetch(`https://site.vitruvianshield.com/api/v1/home-news`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setNewsItems(data);
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
        }}
      >
          <Box
              sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb:{xs: 1, sm: 2, md: 3, lg: 4, xl: 4},

                  gap: { xs: 32, sm: 60, md: 92, lg: 120, xl: 156 },
              }}
          >
              <Typography
                  sx={{
                      fontSize: { xs: "14px", sm: "18px", md: "22px", lg: "26px", xl: "30px" },
                      color: "#FFFFFF",
                  }}
              >
                  News
              </Typography>


              <Button
                  component={Link}
                  to="/news"
                  sx={{
                      pl:{xs:3,sm:0},
                      color: "#FFFFFF",
                      textTransform: "none",
                      fontSize: { xs: "12px", sm: "16px", md: "20px", lg: "24px", xl: "28px" },
                      display: "flex",
                      alignItems: "center",
                      "&:hover": {
                          backgroundColor: "transparent",
                      },
                  }}
                  endIcon={<Box
                      component="img"
                      src={moreicn}
                      alt="more"
                      sx={{
                          ml:-1.1,
                          mt:0.3,
                          width: { xs: "9px", sm: "15px", md: "19px", lg: "21px", xl: "22px" },
                          height: { xs: "9px", sm: "15px", md: "19px", lg: "21px", xl: "22px" },
                      }}
                  />}
              >
                  more
              </Button>
          </Box>
        <Box display="flex" alignItems="center" justifyContent="center" sx={{gap:{xs: 1, sm: 1, md: 3, lg: 6, xl: 9}}} >
          {newsItems.map((item) => (
            <Box
              key={item.id}
              sx={{
                  width: { xs: '124px', sm: '200px', md: '280px', lg: '345px', xl: '430px' },
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
                        bottom: '-2%',
                        width: { xs: '120px', sm: '189px', md: '252px', lg: '315px', xl: '430px' },
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
                            {item.title.length > 28
                                ? `${item.title.substring(0, 28)}...`
                                : item.title}

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
                                mb:{xs:1.2, sm: 2.5, md: 3, lg: 5, xl: 6,},
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
