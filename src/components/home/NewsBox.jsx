import React, { useEffect, useState } from "react";
import {Box, Typography, createTheme, ThemeProvider, Button,} from "@mui/material";
import moreicn from "../../assets/next.png";
import {Link, useNavigate} from "react-router-dom";


const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'sen',
            fontSize: { xs: '6px', sm: '8px', md: '12px', lg: '16px', xl: '18px' },
            color: "#F1F1F1",
            letterSpacing: '0.4px',
            lineHeight: 'normal',
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize: { xs: '8.5px', sm: '12px', md: '16px', lg: '20px', xl: '24px' },
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
        button: {
            fontFamily: 'Lato',
            fontSize: { xs: '8px', sm: '8px', md: '10px', lg: '14px', xl: '16px' },
            textTransform: 'none',
            color: "#FFFFFF",
        },
        form: {
            fontFamily: 'Inter',
            fontSize: { xs: '10px', sm: '10px', md: '15px', lg: '18px', xl: '20px' },
            fontWeight: 400,
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

    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate(`/news/${slug}`);
    };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "75%",
        }}
      >
          <Box
              sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb:{xs: 1, sm: 2, md: 3, lg: 4, xl: 4},
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
                          ml:0,
                          mt:0.5,
                          width: { xs: "9px", sm: "15px", md: "19px", lg: "21px", xl: "22px" },
                          height: { xs: "9px", sm: "15px", md: "19px", lg: "21px", xl: "22px" },
                      }}
                  />}
              >
                  more
              </Button>
          </Box>
          <Box sx={{
              width: '100%',
              height:'100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'start',
              position: 'relative',
              gap:{xs: 1, sm: 2, md: 3, lg: 4, xl: 4},

          }}>
                      {newsItems.map((box, index) => (
                          <Box
                              key={index}
                              sx={{
                                  position:'relative',
                                  display: 'flex',
                                  width: '40%',
                                  height: '70%',
                                  borderRadius: "20px",
                                  color: "white",
                                  overflow: "hidden",
                                  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 46.58%, rgba(0, 0, 0, 0.472485) 56.73%, rgba(0, 0, 0, 0.9) 66.51%), url(${box.picture})`,
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                  backgroundRepeat: "no-repeat",
                              }}
                          >
                              <Box
                                  sx={{
                                      position: "absolute", // Keep the main box as relative
                                      width: "100%",
                                      height: '37%', // Ensure the main box has a fixed height
                                      bottom: '0',
                                  }}
                              >
                                  {/* Box for Text (Top Aligned) */}
                                  <Box
                                      sx={{
                                          position: "absolute",
                                          top: '0', // Fixed position from the top of the parent box
                                          width: '100%',
                                          display: "flex",
                                          flexDirection: "column",
                                          alignItems: "flex-start", // Align content to the left
                                          ml:{xs:1, sm: 2, md: 3, lg: 3, xl: 4,},

                                      }}
                                  >
                                      <Typography
                                          sx={{
                                              ...theme.typography.h3,
                                          }}
                                      >
                                          {box.title}
                                      </Typography>
                                      <Typography
                                          sx={{
                                              mt: {xs:0.1, sm: 0.2, md: 0.4, lg: 0.6, xl: 0.8,},
                                              ...theme.typography.h6,
                                              width: { xs: '120px', sm: '189px', md: '200px', lg: '270px', xl: '350px' },
                                          }}
                                      >
                                          {box.details.length > 50
                                              ? `${box.details.substring(0, 80)}...`
                                              : box.details}
                                      </Typography>
                                  </Box>

                                  {/* Box for Button (Bottom Aligned) */}
                                  <Box
                                      sx={{
                                          position: "absolute",
                                          bottom: '0', // Fixed position from the bottom of the parent box
                                          width: '100%',
                                          display: "flex",
                                          alignContent: "flex-start",

                                      }}
                                  >
                                      <Button
                                          variant="contained"
                                          onClick={() => handleClick(box.slug)}
                                          sx={{
                                              borderRadius: "6px",
                                              backgroundColor: "transparent",
                                              textTransform: "none",
                                              ml:{xs:1, sm: 2, md: 3, lg: 3, xl: 4,},
                                              mb:{xs:0.5, sm: 2, md: 2.5, lg: 2.5, xl: 3,},
                                              width: { xs: '20px',sm: '55px', md: '80px', lg: '100px', xl: '125px' },
                                              height: { xs: '20px', sm: '20px', md: '30px', lg: '35px', xl: '45px' },
                                              ...theme.typography.button,
                                              border: "1px solid rgba(255, 255, 255, 0.8)", // Border around the button
                                              "&:hover": {
                                                  backgroundColor: "#000000", // Background color on hover
                                                  opacity: 0.8, // Optional: slightly reduce opacity on hover
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
