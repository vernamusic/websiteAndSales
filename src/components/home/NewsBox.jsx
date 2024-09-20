import React, { useEffect, useState } from "react";
import {Box, Typography, createTheme, ThemeProvider,Button,} from "@mui/material";
import moreicn from "../../assets/next.png";


const apihost = "https://site.vitruvianshield.com";

const theme = createTheme({
  typography: {
    h6: {
      fontFamily:'sen',
      fontSize: { xs: '12px', sm: '14px', md: '14px', lg: '18px', xl: '22px' },
        lineHeight: { xs: '18px', sm: '20px', md: '20px', lg: '24px', xl: '26px' },
        color: "#F1F1F1",
        textTransform: 'none',
    },

    h3: {
      fontFamily: "Lato",
        fontWeight:700,
      fontSize: {xs: '16px', sm: '19px', md: '20px', lg: '25px', xl: '29px'},
      color: "#F1F1F1",
        textTransform: 'none',
    },
      button: {
          fontFamily: 'Inter',
          fontSize: { xs: '12px', sm: '15px', md: '6.5px', lg: '11.5px', xl: '16px' },
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
          width: "100vw",
          mt: { xs: 8, md: 17 },
        }}
      >
        <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'start',
              px: {xs: 3, sm: 17, md: 19, lg: 23.5, xl: 29},
                pb:6,
            }}
        >
         <Typography
         sx={{
             pl:1,
           pt:1.4,
           display:'flex',
           alignItems: 'flex-end',
           ...theme.typography.h3
         }}
         >
          News
         </Typography>

          <Button
              sx={{
                display:'flex',
                ...theme.typography.h3,
                color: '#FFFFFF',
                textTransform: 'none',
                alignItems: 'flex-end',
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
              endIcon={<img src={moreicn} alt="Apple Logo" style={{ width: 24, height: 24 }} />}
          >
            more
          </Button>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" sx={{gap:{xs: 1, sm: 2, md: 3, lg: 6, xl: 9}}} >
          {newsItems.map((item) => (
            <Box
              key={item.id}
              sx={{
                width: { xs: '143', sm: '185px', md: '280px', lg: '350px', xl: '430px' },
                height: { xs: '200', sm: '265px', md: '390px', lg: '488px', xl: '600px' },
                position: "relative",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                color: "white",
                overflow: "hidden",
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 46.58%, rgba(0, 0, 0, 0.472485) 56.73%, rgba(0, 0, 0, 0.86) 66%), url(${item.picture})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                padding:4,
                  mb:5,
              }}
              
            >
              <Typography sx={{
                  ...theme.typography.h3
              }}>
                {item.title}
              </Typography>
              <Typography
                sx={{mt:0.8,
                    ...theme.typography.h6 }}
              >
                {item.details.length > 50
                  ? `${item.details.substring(0, 80)}...`
                  : item.details}
              </Typography>
              <Box sx={{ mt: 1.8 }}>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "6px",
                    backgroundColor: "transparent",
                    textTransform: "none",
                      width: '31%',
                      height: { xs: '10px', sm: '15px', md: '25px', lg: '35px', xl: '42px' },
                      ...theme.typography.button,
                    border: "1.5px solid rgba(255, 255, 255, 1)", // Added border property
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
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default NewsBox;
