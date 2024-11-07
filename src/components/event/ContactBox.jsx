import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  ThemeProvider,
  createTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import BG from "../../assets/newsBoxBG.svg";

const theme = createTheme({
  palette: {
    primary: { main: "#B50304" },
    background: { default: "#fff", paper: "#262626" },
    text: { primary: "#fff", secondary: "#fff" },
  },
  typography: {
    fontFamily: "Lato, sans-serif",
    button: {
      textTransform: "none",
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "16px",
      textAlign: "center",
    },
    subtitle2: {
      fontFamily: "Sen",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "19.25px",
      textAlign: "center",
      color: "#FFFFFFA6",
    },
    h1: {
      fontFamily: "Lato",
      fontSize: "18px",
      fontWeight: 600,
      lineHeight: "18px",
      textAlign: "center",
      color: "#FFFFFF",
    },
    body1: {
      fontFamily: "Lato",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "16.8px",
      textAlign: "center",
      color: "#FFFFFFA6",
    },
    h2: {
      fontFamily: "Lato",
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "24px",
      textAlign: "center",
      color: "#FFFFFF",
    },
    body2: {
      fontFamily: "Lato",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "19.2px",
      textAlign: "center",
      color: "#F1F1F1",
    },
  },
});

const ContactBox = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
    type: 13,
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://site.vitruvianshield.com/api/v1/contact-req",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone_number: "",
          message: "",
          type: 13,
        });
      } else {
        setErrorMessage("Error submitting form, please try again.");
      }
    } catch (error) {
      setErrorMessage("Error submitting form, please try again.");
      console.error("Error submitting form:", error);
    }
  };

  const textFieldStyle = {
    backgroundColor: "#EEEEEE",
    color: "#262626",
    borderRadius: "4px",
    border: "1px solid #8C8C8C",
    opacity: 1,
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: "100%",
          justifyItems: "center",
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.01) 40.5%, rgba(0, 0, 0, 0.8) 71%, rgba(0, 0, 0, 0.9) 100%), url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          px: { xs: "40px", sm: "70px", md: "60px", lg: "80px", xl: "100px" },
          pb: { xs: "30px", sm: "40px", md: "80px", lg: "70px" },
          pt: { xs: "30px", sm: "40px", md: "70px" },
        }}
      >
        <Box>
            <Typography variant="h2">
            CONTACT US
            </Typography>
            <Typography variant="body2" marginTop="10px">
            Integrate advanced features to improve user experience
            </Typography>
        </Box>
        <Box
          sx={{
            width: "368px",
            borderRadius: "16px",
            background: "#262626",
            mt:'48px',
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              top: 0,
            }}
          >
            <Typography variant="h1" sx={{ mt: 4 }}>
              Contact Us
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Please fill this form in a decent manner
            </Typography>
          </Box>
          <Box sx={{ padding: "32px 32px 0px 32px" }}>
            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                name="first_name"
                placeholder="First name"
                variant="outlined"
                value={formData.first_name}
                onChange={handleInputChange}
                InputProps={{ style: { color: "#262626" } }}
                sx={textFieldStyle}
                required
              />
              <TextField
                name="last_name"
                placeholder="Last name"
                variant="outlined"
                value={formData.last_name}
                onChange={handleInputChange}
                InputProps={{ style: { color: "#262626" } }}
                sx={textFieldStyle}
                required
              />
            </Box>

            {["email", "phone_number", "message"].map((field) => (
              <Box key={field} sx={{ mt: 1.75 }}>
                <TextField
                  fullWidth
                  name={field}
                  placeholder={`Enter your ${field.replace("_", " ")}`}
                  variant="outlined"
                  value={formData[field]}
                  onChange={handleInputChange}
                  InputProps={{ style: { color: "#262626" } }}
                  sx={textFieldStyle}
                  required
                  multiline={field === "message"}
                  rows={field === "message" ? 3 : 1}
                />
              </Box>
            ))}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", pb: 4,mt:'24px' }}>
            <Button
              fullWidth
              onClick={handleSubmit}
              sx={{
                width: "80%",
                minHeight: "44px",
                color:'#FCFCFC',
                backgroundColor: theme.palette.primary.main,
                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                },
                borderRadius: "4px",
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ContactBox;
