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
        fontFamily: 'Sen, Arial, sans-serif',
        h3: {
            fontFamily: 'Lato',
            fontWeight: 600,
            fontSize: '26px',
            lineHeight: '26px',
            color: "#FFFFFF",
        },
        h6: {
            fontFamily: 'Sen',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '21.66px',
            color: "#FFFFFF",
        },
        h9: {
            fontFamily: 'Lato',
            fontWeight: 600,
            fontSize: '23px',
            lineHeight: '23px',
            color: '#FFFFFF',
        },
    },
});

const teamsData = [
    {
        team_name: "Team 1",
        members: [
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
                        <Box key={team_name} sx={{ width: '100%' }}>
                            <Typography gutterBottom sx={{ ...theme.typography.h3, pl: 1, mb: -6 }}>
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
                    <Typography gutterBottom sx={{ ...theme.typography.h3, pl: 1, mb: -6, textAlign: 'left' }}>
                        {selectedTeam}
                    </Typography>
                    <Box sx={{ width: '100%'}}>
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
                            fontSize: '24px',
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
                                fontSize: '24px',
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
