import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import React, { useState } from "react";
import Adscc from "../../assets/adscc.png";
import CHUV from "../../assets/partner5.png";

import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";

const customTheme = createTheme({
    typography: {
        h6: {
            fontFamily: 'Lato',
            fontSize:'0.98vw',
            color: "#F1F1F1",
            letterSpacing: '0.4px',
            lineHeight: 'normal',
        },
        h3: {
            fontFamily: 'sen',
            fontWeight: 400,
            fontSize:'1.294vw',

            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
        h9: {
            fontFamily: 'Lato',
            fontSize:'0.98vw',
            textTransform: 'none',
            color: 'rgba(255, 255, 255, 1)',

        },
        h1: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize:'1.85vw',
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
    },
});

const howData = [
    { title: 'Gilomen', description: "Development and Customer", image: Adscc, link: '' },
    { title: 'CHUV', description: "Development and Customer", image: CHUV, link: '' },
    { title: 'YAS', description: "Development and Customer", image: Adscc, link: '' },
];

const GroupButton = () => {
    const [selectedTeam, setSelectedTeam] = useState("view_all");

    const handleToggle = (event, newSelected) => {
        if (newSelected !== null) {
            setSelectedTeam(newSelected);
        }
    };

    return (
        <ThemeProvider theme={customTheme}>
            <Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                >
                    <Typography
                        sx={{
                            ...customTheme.typography.h1,
                            mb: '1vw',
                        }}
                    >
                        OUR PARTNERS
                    </Typography>
                    <Typography
                        sx={{
                            ...customTheme.typography.h3,
                            mb: '2vw',
                        }}
                    >
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
                        {["View All", "Option 2", "Option 3", "Option 4"].map((label, index) => (
                            <ToggleButton
                                key={index}
                                value={label.toLowerCase().replace(" ", "_")}
                                sx={{
                                    padding: 0,
                                    minWidth: 0,
                                    color: '#ffffff',
                                    width: '9.375vw',
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
                <Box
                    display="flex"

                    justifyContent="center"
                    gap="2.5vw"
                    pt="1.5vw"
                >


                    {howData.map((box, index) => (
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
                                    objectFit: 'cover',
                                    borderRadius: '1.39vw 1.39vw 0 0',
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
                <Box
                    display="flex"

                    justifyContent="center"
                    gap="2.5vw"
                    pt="8.5vw"
                >


                    {howData.map((box, index) => (
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
                                    objectFit: 'cover',
                                    borderRadius: '1.39vw 1.39vw 0 0',
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
        </ThemeProvider>
    );
};

export default GroupButton;
