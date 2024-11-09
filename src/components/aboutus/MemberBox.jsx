import React, { useState, useEffect } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import bg from '../../assets/membersBG1.svg'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Mediacard from './Mediacard';
import { Typography } from "@mui/material";
import Allinonecard from './Allinonecard';


const typoStyle = {
    fontFamily: 'Lato',
    fontSize: { xs: '16px', sm: '18px', md: '20px', lg: '24px' },
    color: '#fff',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '100%',
    textTransform: 'none'
}

const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'sen',
            fontSize: '1.0417vw',
            lineHeight: 'normal',
            letterSpacing: '0.4px',
            color: "#F1F1F1",
            textTransform: 'none',
        },

        h3: {
            fontFamily: "Lato",
            fontWeight: 700,
            fontSize: '1.4583vw',
            color: "#F1F1F1",
            textTransform: 'none',
        },
        button: {
            fontFamily: 'Inter',
            fontSize: '1.0417vw',
            textTransform: 'none',
            color: "#F1F1F1",
        },
    },
});

const TeamMembers = () => {
    const [teams, setTeams] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState('view_all');
    const [data, setData] = useState([]);
    const [advisors, setAdvisors] = useState([]);
    const [members, setMembers] = useState([]);


    useEffect(() => {
        const fetchTeams = async () => {
            const response = await fetch('https://site.vitruvianshield.com/api/v1/members');
            const teamsData = await response.json();
            setAdvisors(teamsData.filter(team => team.team_name === "Advisors"))
            setMembers(teamsData.filter(team => team.team_name !== "Advisors"))
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
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 },
                        mt: { xs: '50px', sm: '60px', md: '70px', lg: '80px' },
                        mb: { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 },
                    }}
                >
                    {advisors.map(({ team_name, members }) => (
                        <Box key={team_name} sx={{ width: '100%' }}>
                            <Allinonecard data={members} advisors={advisors} />
                        </Box>
                    ))}
                </Box>
            );
        } else {
            return (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0, mt: { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 }, }}>
                    <Typography gutterBottom sx={{ ...theme.typography.h3, mb: { xs: 2, sm: 2, md: 3, lg: 4, xl: 4 }, textAlign: 'left', ml: '0.25vw' }}>
                        {selectedTeam}
                    </Typography>
                    <Allinonecard data={data} /> {/* Now passes only members data */}
                </Box>
            );
        }  
    };   

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                width: '100vw',
                position: 'relative',
                backgroundImage: `url(${bg})`,
                backgroundAttachment:'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'repeat-y',
                pt: '80px',
                pb: '80px'
            }}>
                <Box sx={{
                    // mt: { xs: '50px', sm: '60px', md: '70px', lg: '80px' },
                    textAlign: 'center',
                }}>
                    <Typography
                        sx={{
                            ...typoStyle,
                            fontSize: { xs: '18px', sm: '20px', md: '22px', lg: '24px' }
                        }}>
                        OUR ADVISORS
                    </Typography>
                    <Typography
                        sx={{
                            ...typoStyle,
                            mt: { xs: '8px', md: '10px', lg: '10px' },
                            fontSize: { xs: '12.64', sm: '14px', md: '14.22px', lg: '16px' },
                            fontWeight: 400,
                            color: '#f1f1f1',
                            lineHeight: 'normal'
                        }}>
                        Meet our world-class advisors team
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems:'center',
                        //                      mt: { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 },
                        maxHeight: '40px',

                    }}
                >
                    <ToggleButtonGroup
                        value={selectedTeam}
                        exclusive
                        onChange={handleToggle}
                        aria-label="Team selection"
                        sx={{
                            display: 'none',
                            gap: { xs: 0.8, sm: 1, md: 2, lg: 3, xl: 4 },
                            justifyContent: 'center',
                            width: '100%',
                        }}
                    >
                        <ToggleButton
                            value="view_all"
                            selected={selectedTeam === "view_all"}
                            sx={{
                                padding: 0,
                                minWidth: 0,
                                color: '#ffffff',
                                width: '9.375vw',
                                height: '2.3958vw',
                                ...theme.typography.button,
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
                                    padding: 0,
                                    minWidth: 0,
                                    color: '#ffffff',
                                    width: '9.375vw',
                                    height: '2.3958vw',
                                    ...theme.typography.button,
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

                <Box
                    width="50%"
                    margin="0 auto"
                >
                    {renderContent()}
                </Box>
                <Box
                sx={{
                    mt:'200px'
                }}
                >
                    <Box sx={{
                        // mt: { xs: '50px', sm: '60px', md: '70px', lg: '80px' },
                        textAlign: 'center',
                    }}>
                        <Typography
                            sx={{
                                ...typoStyle,
                                fontSize: { xs: '18px', sm: '20px', md: '22px', lg: '24px' }
                            }}>
                            OUR TEAM
                        </Typography>
                        <Typography
                            sx={{
                                ...typoStyle,
                                mt: { xs: '8px', md: '10px', lg: '10px' },
                                fontSize: { xs: '12.64', sm: '14px', md: '14.22px', lg: '16px' },
                                fontWeight: 400,
                                color: '#f1f1f1',
                                lineHeight: 'normal'
                            }}>
                            Meet our world-class team members
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 },
                                mt: { xs: '50px', sm: '60px', md: '70px', lg: '80px' },
                                mb: { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 },
                            }}
                        >
                            {members.map(({ team_name, members }) => (
                                <Box key={team_name} sx={{ width: '100%' }}>
                                    <Allinonecard data={members}  />
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default TeamMembers;
