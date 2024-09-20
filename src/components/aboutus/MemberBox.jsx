import React, { useState, useEffect } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Mediacard from './Mediacard';
import {Typography} from "@mui/material"; // Ensure this path is correct

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

const buttons = [
    { label: 'View All', value: 'view_all' },
    { label: 'Management', value: 'management_team' },
    { label: 'Product', value: 'product_team' },
    { label: 'Design', value: 'design_team' },
    { label: 'Marketing', value: 'marketing_team' },
    { label: 'Sales', value: 'sales_team' },
    { label: 'Advisors', value: 'advisors_team' },
];

const MyToggleButtonGroup = () => {
    const [selected, setSelected] = useState('view_all');
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData(selected);
    }, [selected]);

    const fetchData = async (selection) => {
        let url = `https://site.vitruvianshield.com/api/v1/members`;
        if (selection !== 'view_all') {
            url += `?_team=${selection}`; // Adjust URL for _team filtering
        }
        
        try {
            const response = await fetch(url);
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
            setData([]);
        }
    };

    const handleToggle = (event, newSelection) => {
        if (newSelection !== null) {
            setSelected(newSelection);
        }
    };

    const renderContent = () => {
        if (selected === 'view_all') {
            return (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start',  maxWidth: '100%',gap:5,mt:10 }}>
                    {buttons.slice(1).map(({ label, value }) => (
                        <React.Fragment key={value}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center', // Vertically centers the content
                                    alignItems: 'flex-start',  // Aligns text to the left horizontally
                                    textAlign: 'left',         // Makes sure text inside Typography is left-aligned
                                    mb:-10,
                                }}
                            >
                                <Typography
                                    variant="h9"
                                    gutterBottom
                                >
                                    {label}
                                </Typography>
                            </Box>
                            <Mediacard data={data} buttons={buttons} />
                        </React.Fragment>
                    ))}
                </Box>


            );
        } else {
            return <Mediacard data={data} />;
        }
    };


    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ textAlign: 'center', padding: 2 ,borderRadius: '6px 6px 6px 6px',}}>
                <Box sx={{mt:'44px',}}>
                    <Typography variant='h3'>
                        MEET OUR TEAM
                    </Typography>
                    <Typography variant='h6' sx={{mt:'24px',}}>
                        Meet our diverse team of world-class creators, designers, and problem solvers.
                    </Typography>
                </Box>
                <ToggleButtonGroup
                    value={selected}
                    exclusive
                    onChange={handleToggle}
                    aria-label="Category selection"
                    sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt:'78px' }}
                >
                    {buttons.map(({ label, value }) => (
                        <ToggleButton
                            key={value}
                            value={value}
                            selected={selected === value}  // MUI prop to handle selection
                            sx={{
                                color: '#e0e0e0',
                                borderRadius: '6px',  // Apply borderRadius once
                                backgroundColor: selected === value ? 'red' : 'transparent',  // Conditional background color
                                minWidth: `${label.length * 19}px`,  // Dynamically adjust width based on label length
                                height: '45px',
                                fontSize: '24px',
                                textTransform: 'none',

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
                            {label}
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

export default MyToggleButtonGroup;
