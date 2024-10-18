import React, { useState, useEffect } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Mediacard from './Mediacard';
import { Typography } from "@mui/material";
import Allinonecard from './Allinonecard';

const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'sen',
            fontSize: { xs: '8px', sm: '11px', md: '17px', lg: '20px', xl: '24px' },
            lineHeight: 'normal',
            letterSpacing: '0.4px',
            color: "#F1F1F1",
            textTransform: 'none',
        },
        h3: {
            fontFamily: "Lato",
            fontWeight: 700,
            fontSize: { xs: '12px', sm: '18px', md: '24px', lg: '28px', xl: '32px' },
            color: "#F1F1F1",
            textTransform: 'none',
        },
        button: {
            fontFamily: 'Inter',
            fontSize: { xs: '9px', sm: '12px', md: '18px', lg: '22px', xl: '26px' },
            textTransform: 'none',
            color: "#F1F1F1",
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
            const selectedMembers = teams.find(team => team.team_name === selectedTeam)?.members || [];
            setData(selectedMembers); // Filter members based on selected team
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
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0, mt: { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 }, }}>
                    {teams.map(({ team_name, members }) => (
                        <Box key={team_name} sx={{ width: '100%', mb: { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 }, }}>
                            <Typography gutterBottom sx={{ ...theme.typography.h3, pl: 1, mb: { xs: 2, sm: 2, md: 3, lg: 4, xl: 4 }, textAlign: 'left' }}>
                                {team_name}
                            </Typography>
                            <Mediacard data={members} />
                        </Box>
                    ))}
                </Box>
            );
        } else {
            return (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0, mt: { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 },}}>
                    <Typography gutterBottom sx={{ ...theme.typography.h3,  mb: { xs: 2, sm: 2, md: 3, lg: 4, xl: 4 }, textAlign: 'left', pl:{xs:5.5,sm:1}, }}>
                        {selectedTeam}
                    </Typography>
                    <Allinonecard data={data} /> {/* Now passes only members data */}
                </Box>
            );
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ textAlign: 'left', }}>
                <Box sx={{ mt: '40px', textAlign: 'center', display:{xs:'none', sm:'block'} }}>
                    <Typography sx={{ ...theme.typography.h3 }}>
                        MEET OUR TEAM
                    </Typography>
                    <Typography sx={{ ...theme.typography.h6, mt: { xs: 1, sm: 1, md: 2, lg: 3, xl: 4 } }}>
                        Meet our diverse team of world-class creators, designers, and problem solvers.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mt: { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 },
                        maxHeight: '40px',
                        maxWidth: '1220px',
                    }}
                >
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
                        <ToggleButton
                            value="view_all"
                            selected={selectedTeam === "view_all"}
                            sx={{
                                color: '#ffffff',
                                width: {
                                    xs: '90px',
                                    sm: '130px',
                                    md: '180px',
                                    lg: '200px',
                                    xl: '220px',
                                },
                                height: {
                                    xs: '30px',
                                    sm: '36px',
                                    md: '46px',
                                    lg: '48px',
                                    xl: '52px',
                                },
                                ...theme.typography.button,
                                '&.Mui-selected': {
                                    borderRadius: '6px',
                                    backgroundColor: '#B50304',
                                    color: '#ffffff',
                                    '&:hover': {
                                        backgroundColor: '#B50304',
                                    },
                                },
                                '&:not(.Mui-selected)': {
                                    backgroundColor: '#0B0B0B',
                                    borderRadius: '6px',
                                    border: '0.01px solid rgba(255, 255, 255, 0.15)',
                                    '&:hover': {
                                        backgroundColor: '#0B0B0B',
                                    },
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
                                    width: {
                                        xs: '90px',
                                        sm: '130px',
                                        md: '180px',
                                        lg: '200px',
                                        xl: '220px',
                                    },
                                    height: {
                                        xs: '30px',
                                        sm: '36px',
                                        md: '46px',
                                        lg: '48px',
                                        xl: '52px',
                                    },
                                    ...theme.typography.button,
                                    '&.Mui-selected': {
                                        borderRadius: '6px',
                                        backgroundColor: '#B50304',
                                        color: '#ffffff',
                                        '&:hover': {
                                            backgroundColor: '#B50304',
                                        },
                                    },
                                    '&:not(.Mui-selected)': {
                                        backgroundColor: '#0B0B0B',
                                        borderRadius: '6px',
                                        border: '0.01px solid rgba(255, 255, 255, 0.15)',
                                        '&:hover': {
                                            backgroundColor: '#0B0B0B',
                                        },
                                    },
                                }}
                                disableRipple
                            >
                                {team_name}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                </Box>

                <Box width={'100%'}>
                    {renderContent()}
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default TeamMembers;
