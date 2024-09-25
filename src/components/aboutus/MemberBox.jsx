import React, { useState, useEffect } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Mediacard from './Mediacard';
import { Typography } from "@mui/material"; // Ensure this path is correct

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
            color: "#FFFFFF",
        },
    },
});

const TeamMembers = () => {
    const [teams, setTeams] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState('view_all');
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchTeams = async () => {
            const response = await fetch('https://site.vitruvianshield.com/api/v1/members');
            const teamsData = await response.json();
            setTeams(teamsData);
            setData(teamsData); // Initialize data with all teams
        };

        fetchTeams();
    }, []);

    useEffect(() => {
        if (selectedTeam === 'view_all') {
            setData(teams); // Show all teams if "View All" is selected
        } else {
            const selectedData = teams.find(team => team.team_name === selectedTeam)?.members || [];
            setData(selectedData); // Filter members based on selected team
        }
    }, [selectedTeam, teams]);

    const handleToggle = (event, newSelection) => {
        if (newSelection !== null) {
            setSelectedTeam(newSelection);
        }
    };

    const renderContent = () => {
        if (selectedTeam === 'view_all') {
            return (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0, mt: 10 }}>
                    {teams.map(({ team_name, members }) => (
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
                <Box sx={{ width: '100%' }}>
                    <Typography gutterBottom sx={{ ...theme.typography.h3, pl: 1, mb: -6,mt:10, }}>
                        {selectedTeam} {/* Assuming selectedTeam is the team name for the else case */}
                    </Typography>
                    <Mediacard data={data} />
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
                            borderRadius: '6px', // اضافه کردن borderRadius
                            '&.Mui-selected': {
                                borderRadius: '6px 6px 6px 6px',
                                backgroundColor: '#B50304',  // Color for selected button
                                color: '#ffffff',
                                '&:hover': {
                                    backgroundColor: '#B50304',  // Color for hover on selected button
                                },
                            },
                            '&:hover': {
                                backgroundColor: 'transparent',  // Hover for non-selected buttons
                            },
                        }}
                        disableRipple
                    >
                        View All
                    </ToggleButton>

                    {teams.map(({ team_name }) => (
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
                                borderRadius: '6px', // اضافه کردن borderRadius
                                '&.Mui-selected': {
                                    borderRadius: '6px 6px 6px 6px',
                                    backgroundColor: '#B50304',  // Color for selected button
                                    color: '#ffffff',
                                    '&:hover': {
                                        backgroundColor: '#B50304',  // Color for hover on selected button
                                    },
                                },
                                '&:hover': {
                                    backgroundColor: 'transparent',  // Hover for non-selected buttons
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
