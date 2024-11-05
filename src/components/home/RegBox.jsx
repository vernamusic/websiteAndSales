import React, { useState } from 'react';
import { Typography, Button, Box, OutlinedInput, FormControl, InputLabel, } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import backgroundImage from '/src/assets/BG.svg';
import SignUpDialog from "../SignUp/SignUpDialog.jsx";
import FormInput from '../custom/FormInput.jsx'

const navItemStyle = {
    fontFamily: 'Lato',
    fontSize: { xs: '14.22px', lg: '16px' },
    color: '#eee',
    fontStyle: 'normal',
    lineHeight: '100%',
    textTransform: 'none'
}
const RegBox = () => {

    const [email, setEmail] = useState('');
    const [dialogOpen, setDialogOpen] = useState(false);
    const handleOpenDialog = () => setDialogOpen(true);

    return (
        <Box
            sx={{
                width: '100vw',
                position: 'relative',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top right',
                backgroundRepeat: 'no-repeat',
                maxHeight: '746px',
                minHeight: { xs: '500px', sm: '600px', md: '700px', lg: '900px' }
            }}
        >
            <Box
                sx={{
                    mt: { xs: '180px', sm: '220px', md: '270px', lg: '318px' },
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    ml: { xs: 5, sm: 10, md: 19, lg: 24, xl: 28 },
                }}
            >
                <Typography
                    sx={{
                        ...navItemStyle,
                        fontWeight: 600,
                        fontSize: { xs: '20px', sm: '22px', md: '26px', lg: '32px' },
                        pl: 0,
                        color: '#fff'

                    }}
                >
                    Vitruvian Shield
                </Typography>
                <Typography
                    sx={{
                        ...navItemStyle,
                        display: { xs: 'none', sm: 'block' },
                        width: { xs: '300px', sm: '400px', md: '410px', lg: '505px', xl: '600px' },
                        mt: { xs: '10px', sm: '12px', md: '16px' },
                        fontWeight: 500,
                        fontSize: { xs: '12.64px', sm: '14px', md: '14.22px', lg: '18px' },
                        color: '#d9d9d9',
                        lineHeight: '26px',
                        fontStyle: 'normal'
                    }}
                >
                    Vitruvian Shield aims to significantly improve the quality of life of patients in their daily life outside of the hospital by offering a solution which monitors your health signals with medically certified precision.
                </Typography>
                <Typography
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        width: '250px',
                        ...navItemStyle,
                        mt: { xs: '10px', sm: '12px', md: '16px' },
                        fontWeight: 500,
                        fontSize: { xs: '12.64px', sm: '14px', md: '14.22px', lg: '18px' },
                        color: '#d9d9d9',
                        lineHeight: '20px'
                    }}
                >
                    Vitruvian Shield aims to significantly improve the quality of life of patients.
                </Typography>

                <Box
                    sx={{
                        display: { xs: 'flex' },
                        justifyContent: 'space-between',
                        mt: '44px',
                        width:{xs:'300px',sm:'420px',md:'500px'}
                    }}
                >
                    <FormInput
                        value={email}
                        setValue={setEmail}
                        placeholder='Enter your email address'
                        inputname='email'
                        stuckRight={true}
                    />
                    <Button
                        onClick={handleOpenDialog}
                        sx={{
                            height: '50px',
                            whiteSpace: 'nowrap',
                            textTransform: 'none',
                            background: 'linear-gradient(180deg, #930001 0%, #B50304 15.4%, #B50304 84.9%, #930001 100%)',
                            px:'32px',
                            color:'#fcfcfc',
                            width:'149px',
                            fontFamily:'Lato',
                            borderRadius:'8px',
                            borderBottomLeftRadius:'0!important',
                            borderTopLeftRadius:'0!important'
                        }}
                    >
                        Get Started
                    </Button>

                </Box>
            </Box>
            {
                dialogOpen && <SignUpDialog open={dialogOpen} onClose={() => setDialogOpen(false)} email={email} />

            }
        </Box>
    );
}

export default RegBox;
