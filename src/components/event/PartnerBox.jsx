import React from "react";
import { Box, Typography, createTheme, ThemeProvider,} from "@mui/material";
import paulo from '../../assets/paulo.png'
import bruno from '../../assets/bruno.png'
import tayo from '../../assets/tayo.png'
import vahid from '../../assets/vahid.png'
import linkedin from '../../assets/LinkedIn 2.png'
import Instagram from '../../assets/Instagram.png'
import Twitter from '../../assets/TwitterX.png'

const theme = createTheme({
    typography: {
        name: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize: '16px',
            color: "#54DBCF",
            letterSpacing: '0.4px',
            lineHeight: '19.2px',
        },
        detail: {
            fontFamily: 'Lato',
            fontWeight: 500,
            fontSize: '12px',
            color: "#FCFCFC",
            letterSpacing: '0.4px',
            lineHeight: '16px',
        },
        email: {
            fontFamily: 'Lato',
            fontWeight:400,
            fontSize: '10px',
            color: "#D9D9D9",
            lineHeight: '12px',
            letterSpacing: '0.4px',

        },
        
    },
});

const PartnerData = [
    { picture: paulo,name: 'Paulo Martins', detail:'Management, sales, marketing, design, R&D', email:'XXXXXXX@gmail.com',
        linkedinUrl:'https://www.linkedin.com/in/vitruvianshield/',instagramUrl:'instagram.com', twitterUrl:'x.com'},

    { picture: bruno,name: 'Bruno Carrilho', detail:'General Manager', email:'XXXXXXX@gmail.com',
        linkedinUrl:'https://www.linkedin.com/',instagramUrl:'instagram.com', twitterUrl:'x.com'},

    { picture: tayo,name: 'Mogboluwaga Otegbayo', detail:'QA', email:'XXXXXXX@gmail.com',
        linkedinUrl:'https://www.linkedin.com/in/mogboluwaga-otegbayo/',instagramUrl:'instagram.com', twitterUrl:'x.com'},

    { picture: vahid,name: 'Vahid Khazaei Nezhad', detail:'CTO', email:'XXXXXXX@gmail.com',
        linkedinUrl:'https://www.linkedin.com/in/vahid-khazaei-nezhad-a4074595/',instagramUrl:'instagram.com', twitterUrl:'x.com'},
];

const PartnerCard = ({ picture, name, detail, email, linkedinUrl, instagramUrl, twitterUrl }) => {
    return (
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '329px',
          width: '248px',
          p: '24px',
          borderRadius: '16px',
          backgroundColor: 'rgba(31, 31, 31, 1)',
          justifyContent: 'center',
          boxShadow: '0px 2px 16px 0px rgba(0, 0, 0, 0.32)',
          textAlign: 'start',
          border: '1px solid rgba(38, 38, 38, 1)',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '48px',
          }}
        >
          <img src={picture} alt="" />
        </Box>
  
        <Box
  sx={{
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '165px',
    textAlign: 'center',
    border:'1px solid #FFF'
  }}
>
  <Typography
    variant="name"
    sx={{
      width: '100%',
    }}
  >
    {name}
  </Typography>
  <Typography variant="detail" sx={{ width: '100%', marginTop: '10px' }}>
    {detail}
  </Typography>

  <Typography variant="email" sx={{ width: '100%', marginTop: '20px' }}>
    {email}
  </Typography>
</Box>

  
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            gap: 2,
            marginTop: 'auto',
          }}
        >
          {[
            { icon: linkedin, url: linkedinUrl },
            { icon: Instagram, url: instagramUrl },
            { icon: Twitter, url: twitterUrl },
          ].map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Box
                component="img"
                src={social.icon}
                alt={`social-icon-${index}`}
                sx={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(217, 217, 217, 1)', // زمینه خاکستری
                  padding: 0.5,
                }}
              />
            </a>
          ))}
        </Box>
      </Box>
    );
  };
  


const PartnerBox = () =>{
    return(
        <ThemeProvider theme={theme}>
            <Box
            sx={{
                height: '100%',
                justifyItems: "center",
                background: `linear-gradient(360deg, rgba(50, 50, 50, 1) 0%, rgba(31, 31, 31, 0.6) 100%)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                px: { xs: '40px', sm: '70px', md: '60px', lg: '80px', xl: '100px' },
                pb: { xs: '30px', sm: '40px', md: '80px', lg: '70px' },
                pt: { xs: '120px', sm: '140px', md: '170px' }
            }}>
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        flexWrap: 'wrap',
                        gap: '20px'

                    }}>
                    {PartnerData.map((box, index) => (
                        <PartnerCard
                            key={index}
                            picture={box.picture}
                            name={box.name}
                            detail={box.detail}
                            email={box.email}
                        />
                    ))}
                </Box>

            </Box>
        </ThemeProvider>
    );
};

export default  PartnerBox;
