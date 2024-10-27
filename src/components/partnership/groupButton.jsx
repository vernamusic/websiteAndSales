import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import React, { useState } from "react";
import Adscc from "../../assets/adscc.png";
import CHUV from "../../assets/partner5.png";
import yas from "../../assets/yas.png";
import hug from "../../assets/hug.png";
import vaud from "../../assets/vaud.png";
import gilomen from "../../assets/partner4.png";
import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";
import { Category } from "@mui/icons-material";

const customTheme = createTheme({
    typography: {
        h6: {
            fontFamily: 'Lato',
            fontSize: '0.98vw',
            color: "#F1F1F1",
            letterSpacing: '0.4px',
            lineHeight: 'normal',
        },
        h3: {
            fontFamily: 'sen',
            fontWeight: 400,
            fontSize: '1.294vw',
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
        h1: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize: '1.85vw',
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
        button: {
            fontFamily: 'Lato',
            fontWeight: 500,
            fontSize: '1vw',
            lineHeight: '1.2vw',
            textTransform: 'none',
        }
    },
});

const howData = [
    { title: 'ADSCC', description: "Development and Customer", image: Adscc ,Category: "Development" },
    { title: 'CHUV', description: "Development and Customer", image: CHUV ,Category: "Development"},
    { title: 'YAS', description: "Development and Customer", image: yas ,Category: "Development"},
    { title: 'HUG', description: "Development and Customer", image: hug ,Category: "Development"},
    { title: 'VAUD', description: "Government support", image: vaud ,Category: "Technological"},
    { title: 'Gilomen', description: "Financial support", image: gilomen ,Category: "Financial"},
];

const GroupButton = () => {
    const [selectedTeam, setSelectedTeam] = useState("view_all");

    const handleToggle = (event, newSelected) => {
        if (newSelected !== null) {
            setSelectedTeam(newSelected);
        }
    };

    // Filter partners based on the selected category
    const filteredData = selectedTeam === "view_all"
        ? howData
        : howData.filter(box => {
            if (selectedTeam === "financial") return box.Category === "Financial"; // Example filter
            if (selectedTeam === "technological") return box.Category === "Technological"; // Example filter
            if (selectedTeam === "development") return box.Category === "Development"; // Example filter
            return false;
        });

    return (
        <ThemeProvider theme={customTheme}>
            <Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    mb="3vw" // Add bottom margin for spacing
                >
                    <Typography sx={{ ...customTheme.typography.h1, mb: '1vw' }}>
                        OUR PARTNERS
                    </Typography>
                    <Typography sx={{ ...customTheme.typography.h3, mb: '2vw' }}>
                        Explore our trusted partners who help us deliver exceptional experiences
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="center" gap="2.5vw" mb="2.5vw">
                    <ToggleButtonGroup
                        value={selectedTeam}
                        exclusive
                        onChange={handleToggle}
                        aria-label="Team selection"
                        sx={{
                            display: 'flex',
                            gap: { xs: 0.8, sm: 1, md: 2, lg: 3, xl: 4 },
                            justifyContent: 'center',
                            width: '100%',
                        }}
                    >
                        {["View All", "Financial", "Technological", "Development"].map((label, index) => (
                            <ToggleButton
                                key={index}
                                value={label.toLowerCase().replace(" ", "_")}
                                sx={{
                                    padding: 0,
                                    minWidth: '9.375vw',
                                    color: '#ffffff',
                                    height: '2.3958vw',
                                    ...customTheme.typography.button,
                                    '&.Mui-selected': {
                                        borderRadius: '0.3125vw',
                                        backgroundColor: '#B50304',
                                        color: '#ffffff',
                                        '&:hover': {
                                            backgroundColor: '#B50304',
                                        },
                                    },
                                    '&:not(.Mui-selected)': {
                                        backgroundColor: '#0B0B0B',
                                        borderRadius: '0.3125vw',
                                        border: '0.01px solid rgba(255, 255, 255, 0.2)',
                                        '&:hover': {
                                            backgroundColor: '#0B0B0B',
                                        },
                                    },
                                }}
                                disableRipple
                            >
                                {label}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                </Box>
                <Box display="flex" justifyContent="center">
                    <Box width="75vw" display="flex" flexWrap="wrap" justifyContent="center" gap="2.5vw" pt="8.5vw">
                        {filteredData.map((box, index) => (
                            <Box
                                key={index}
                                sx={{
                                    width: '17.5vw',
                                    height: '21vw',
                                    borderRadius: '1.39vw',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    backgroundColor: '#0A0A0A',
                                    border: '1px solid #FFFFFF33',
                                    position: 'relative',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={box.image}
                                    alt={box.title}
                                    sx={{
                                        width: '100%',
                                        height: '50%',
                                        backgroundColor: '#FFFFFF',
                                        objectFit: 'contain',
                                        borderRadius: '1.39vw 1.39vw 0 0',
                                        padding: 3
                                    }}
                                />
                                <Box
                                    sx={{
                                        mt: '2vw',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '0.7vw',
                                        textAlign: 'center',
                                        width: '12vw',
                                    }}
                                >
                                    <Typography sx={{ ...customTheme.typography.h3 }} gutterBottom>
                                        {box.title}
                                    </Typography>
                                    <Typography sx={{ ...customTheme.typography.h6 }}>
                                        {box.description}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default GroupButton;
