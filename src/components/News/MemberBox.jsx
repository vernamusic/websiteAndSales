import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Mediacard from './Mediacard';
import { Typography } from "@mui/material";
import Allinonecard from './Allinonecard';
import photo5 from '../../assets/news3.png'

const theme = createTheme({
    typography: {
        h6: {
            fontFamily:'sen',
            fontSize: { xs: '6px', sm: '10px', md: '12px', lg: '16px', xl: '20px' },
            lineHeight: { xs: '18px', sm: '20px', md: '20px', lg: '24px', xl: '26px' },
            color: "#F1F1F1",
            textTransform: 'none',
        },

        h3: {
            fontFamily: "Lato",
            fontWeight:700,
            fontSize: {xs: '8px', sm: '13px', md: '20px', lg: '25px', xl: '29px'},
            color: "#F1F1F1",
            textTransform: 'none',
        },
        button: {
            fontFamily: 'Inter',
            fontSize: { xs: '10px', sm: '15px', md: '18px', lg: '20px', xl: '24px' },
            textTransform: 'none',
        },
    },
});

const teamsData = [
    {
        team_name: "Top News",
        members: [
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Hggggggggggggggggandles campaignsfgdfkjgnd kjdgn dfjk gdfkg kdnkgnkjdfnkkjdn gdfgdfgbdbdgrebgdbhrhrr  ebetgetgvb", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
        ]
    },
    {
        team_name: "Team 2",
        members: [
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
        ]
    },
    {
        team_name: "Team 3",
        members: [
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
            { title: "Charlie Lee", details: "Handles campaigns", photo: photo5 },
        ]
    }
];

const TeamMembers = () => {
    const [selectedTeam, setSelectedTeam] = useState('view_all');
    const [data, setData] = useState(teamsData);

    const handleToggle = (event, newSelection) => {
        if (newSelection !== null) {
            setSelectedTeam(newSelection);
            if (newSelection === 'view_all') {
                setData(teamsData); // Show all teams
            } else {
                const selectedTeamData = teamsData.find(team => team.team_name === newSelection)?.members || [];
                setData(selectedTeamData); // Show members of the selected team
            }
        }
    };

    const renderContent = () => {
        if (selectedTeam === 'view_all') {
            return (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0, mt: 10 }}>
                    {teamsData.map(({ team_name, members }) => (
                        <Box key={team_name} sx={{ width: '100%',mb: {xs:4, sm: 5, md: 7, lg: 9, xl: 10,}, }}>
                            <Typography gutterBottom sx={{ ...theme.typography.h3, pl: 1,  }}>
                                {team_name}
                            </Typography>
                            <Mediacard data={members} />
                        </Box>
                    ))}
                </Box>
            );
        } else {
            return (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0, mt: 10 }}>
                    <Typography gutterBottom sx={{ ...theme.typography.h3, pl: 1, mb: 0, textAlign: 'left' }}>
                        {selectedTeam}
                    </Typography>
                    <Box sx={{ width: '100%',}}>
                        <Mediacard data={data} />
                    </Box>
                </Box>
            );
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ textAlign: 'left', padding: 2 }}>
                <Box sx={{ mt: '40px', textAlign: 'center' }}>
                    <Typography sx={{ ...theme.typography.h3 }}>
                        MEET OUR TEAM
                    </Typography>
                    <Typography sx={{ mt: '24px', ...theme.typography.h6 }}>
                        Meet our diverse team of world-class creators, designers, and problem solvers.
                    </Typography>
                </Box>
                <ToggleButtonGroup
                    value={selectedTeam}
                    exclusive
                    onChange={handleToggle}
                    aria-label="Team selection"
                    sx={{ display: 'flex', justifyContent: 'center', gap: 4, mt: '78px' }}
                >
                    <ToggleButton
                        value="view_all"
                        selected={selectedTeam === "view_all"}
                        sx={{
                            color: '#e0e0e0',
                            backgroundColor: selectedTeam === "view_all" ? '#B50304' : 'transparent',
                            height: '45px',
                            ...theme.typography.button,
                            textTransform: 'none',
                            borderRadius: '6px',
                            '&.Mui-selected': {
                                borderRadius: '6px 6px 6px 6px',
                                backgroundColor: '#B50304',
                                color: '#ffffff',
                                '&:hover': {
                                    backgroundColor: '#B50304',
                                },
                            },
                            '&:hover': {
                                backgroundColor: 'transparent',
                            },
                        }}
                        disableRipple
                    >
                        View All
                    </ToggleButton>

                    {teamsData.map(({ team_name }) => (
                        <ToggleButton
                            key={team_name}
                            value={team_name}
                            selected={selectedTeam === team_name}
                            sx={{
                                color: '#e0e0e0',
                                backgroundColor: selectedTeam === team_name ? '#B50304' : 'transparent',
                                height: '45px',
                                ...theme.typography.button,
                                textTransform: 'none',
                                borderRadius: '6px',
                                '&.Mui-selected': {
                                    borderRadius: '6px 6px 6px 6px',
                                    backgroundColor: '#B50304',
                                    color: '#ffffff',
                                    '&:hover': {
                                        backgroundColor: '#B50304',
                                    },
                                },
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                },
                            }}
                            disableRipple
                        >
                            {team_name}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>

                <Box
                    sx={{
                        minHeight: '200px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                    }}
                >
                    {renderContent()}
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default TeamMembers;
