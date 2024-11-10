import { React, useState } from 'react';
import {
    Box,
    Typography,
    Button,
    createTheme,
    ThemeProvider,
    FormControlLabel,
    Checkbox,
    IconButton, Divider
} from '@mui/material';
import pricingBG from '../../assets/pricingBG.png';
import { useAuth } from "../../AuthContext.jsx";
import { Close as CloseIcon } from "@mui/icons-material";
import axios from "axios";

// Custom MUI theme for typography
const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize: { sm: '16px', md: '18px', lg: '22px' },
            color: '#B0EEE9',
            letterSpacing: '0.4px',
            lineHeight: '22px',
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 600,
            fontSize: '1.4583vw',
            color: '#FFFFFF',
            letterSpacing: '0.4px',
        },
        h9: {
            fontFamily: 'Lato',
            fontWeight: 700,
            lineHeight: '20.4px',
            fontSize: { sm: '11px', md: '12px', lg: '0.9vw' },
            color: '#FFFFFF',
        },
        body1: {
            fontFamily: 'Lato',
            fontWeight: 400,
            lineHeight: '19.2px',
            fontSize: { sm: '11px', md: '13px', lg: '0.83vw' },
            color: '#FFFFFF',
        },
        body2: {
            fontFamily: 'Lato',
            fontWeight: 500,
            lineHeight: '15px',
            fontSize: { sm: '11px', md: '12px', lg: '0.78vw' },
            color: '#FFFFFF',
        },
        body3: {
            fontFamily: 'Sen',
            fontWeight: 400,
            lineHeight: '21.66px',
            fontSize: { sm: '11px', md: '13px', lg: '0.93vw' },
            color: '#F1F1F1',
        },
    },
});

// FeatureItem component to render individual list items in the pricing plan
const FeatureItem = ({ text }) => (
    <li
        style={{
            listStyleType: 'none',
            marginBottom: '4px',
            position: 'relative',
            paddingLeft: '0px',
        }}
    >
    <span
        style={{
            position: 'absolute',
            left: '-16px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '8px',
            height: '8px',
            backgroundColor: '#00C9B7',
            borderRadius: '50%',
        }}
    ></span>
        <Typography sx={{ ...theme.typography.body2, display: 'inline', color: '#FFFFFF' }}>
            {text}
        </Typography>
    </li>
);

const PricingBox = () => {
    const [expanded, setExpanded] = useState({
        ctms: false,
        rpm: false,
    });

    const handleViewMoreClick = (plan) => {
        setExpanded((prevState) => ({
            ...prevState,
            [plan]: true,
        }));
    };

    const handleGoBackClick = (plan) => {
        setExpanded((prevState) => ({
            ...prevState,
            [plan]: false,
        }));
    };

    // Labels for checkboxes under CTMS and RPM plans
    const labelsCTMS = [
        "Geo tracking",
        "Remote patient monitoring",
        "Staff management",
        "Electronic document management",
        "Feedback",
        "Adverse event reporting",
        "Video consultation",
        "Site management",
    ];

    const labelsRPM = [
        "ECG",
        "Emergency call",
        "Geo tracking",
        "Electronic data management",
        "e-Consent",
        "Adverse event reporting",
        "Video consultation",
        "Vital signs",
    ];

    // States to track checkbox selection and selected features
    const [checkedCTMS, setCheckedCTMS] = useState(new Array(labelsCTMS.length).fill(false));
    const [checkedRPM, setCheckedRPM] = useState(new Array(labelsRPM.length).fill(false));
    const [selectedFeaturesCTMS, setSelectedFeaturesCTMS] = useState([]);
    const [selectedFeaturesRPM, setSelectedFeaturesRPM] = useState([]);
    const { authToken } = useAuth();
    const Token = localStorage.getItem("authToken") || authToken;

    // Handle checkbox changes
    const handleCheckboxChange = (index, label, type) => {
        const updatedChecked = type === "ctms" ? [...checkedCTMS] : [...checkedRPM];
        updatedChecked[index] = !updatedChecked[index];

        if (type === "ctms") {
            setCheckedCTMS(updatedChecked);
            setSelectedFeaturesCTMS((prev) =>
                updatedChecked[index] ? [...prev, label] : prev.filter((feature) => feature !== label)
            );
        } else {
            setCheckedRPM(updatedChecked);
            setSelectedFeaturesRPM((prev) =>
                updatedChecked[index] ? [...prev, label] : prev.filter((feature) => feature !== label)
            );
        }
    };

    // Submit selected features for CTMS plan
    const handleSubmitForCTMS = async () => {
        const payload = {
            geo_tracking: selectedFeaturesCTMS.includes("Geo tracking"),
            remote_patient_monitoring: selectedFeaturesCTMS.includes("Remote patient monitoring"),
            staff_management: selectedFeaturesCTMS.includes("Staff management"),
            electronic_document_management: selectedFeaturesCTMS.includes("Electronic document management"),
            feedback: selectedFeaturesCTMS.includes("Feedback"),
            adverse_event_reporting: selectedFeaturesCTMS.includes("Adverse event reporting"),
            video_consultation: selectedFeaturesCTMS.includes("Video consultation"),
            site_management: selectedFeaturesCTMS.includes("Site management"),
        };

        try {
            await axios.post("https://site.vitruvianshield.com/api/v1/ctms-feature-req", payload, {
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });
            console.log("CTMS request successfully submitted");
        } catch (error) {
            console.error("Error submitting CTMS request:", error);
        }
    };

    // Submit selected features for RPM plan
    const handleSubmitForRPM = async () => {
        const payload = {
            geo_tracking: selectedFeaturesRPM.includes("Geo tracking"),
            remote_patient_monitoring: selectedFeaturesRPM.includes("Remote patient monitoring"),
            staff_management: selectedFeaturesRPM.includes("Staff management"),
            electronic_document_management: selectedFeaturesRPM.includes("Electronic document management"),
            feedback: selectedFeaturesRPM.includes("Feedback"),
            adverse_event_reporting: selectedFeaturesRPM.includes("Adverse event reporting"),
            video_consultation: selectedFeaturesRPM.includes("Video consultation"),
            site_management: selectedFeaturesRPM.includes("Site management"),
        };

        try {
            await axios.post("https://site.vitruvianshield.com/api/v1/rpm-feature-req", payload, {
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });
            console.log("RPM request successfully submitted");
        } catch (error) {
            console.error("Error submitting RPM request:", error);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                mb={6}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    backgroundImage: `linear-gradient(180deg, rgba(31, 31, 31, 0.9) 0%, rgba(31, 31, 31, 0.72) 100%), url(${pricingBG})`,
                    backgroundSize: 'cover',
                }}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    mt={6}
                    mb={6}
                >
                    <Typography
                        sx={{
                            ...theme.typography.h3,
                            mb: 2.5,
                            lineHeight: '1.5',
                            width: { xs: '90%', sm: '600px' },
                        }}
                    >
                        OUR PLAN
                    </Typography>
                    <Typography sx={{ ...theme.typography.body3, mb: 5 }}>
                        Two monthly plans to purchase CTMS and RPM:
                    </Typography>
                </Box>

                <Box
                    sx={{
                        gap: { sm: 5, md: 5 },
                        width: '848px',
                        height: '581px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mb: 10,
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >

                    <Box
                        sx={{
                            backgroundColor: 'rgba(38, 38, 38, 1)',
                            boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.18)',
                            borderRadius: '15px',
                            padding: 6,
                            display: 'flex',
                            flexDirection: 'column',
                            border: '1px solid #FFFFFF33',
                            flex: '1 1',
                            width: { sm: '330px', md: '350px', lg: '380px', xl: '404px' },
                            height: { sm: '490px', md: '530px', lg: '560px', xl: '581px' },
                        }}
                    >
                        {expanded.ctms ? (
                            <>
                                <Box sx={{display: 'flex',flexDirection: 'column',mt:-5,ml:-1}}>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end',width:'110%' }}>
                                        <IconButton aria-label="close" sx={{ color: '#FFFFFF' }} onClick={() => handleGoBackClick('ctms')}>
                                            <CloseIcon />
                                        </IconButton>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ ...theme.typography.h6,color:'#FFFFFF'  }}>Features</Typography>
                                        <Typography sx={{ ...theme.typography.body1, mt: 1 }}>
                                            Select the features you want
                                        </Typography>
                                        <Divider
                                            orientation="horizontal"
                                            flexItem
                                            sx={{borderColor: 'rgba(255, 255, 255, 0.2)', borderStyle: 'dashed',width:'100%',mt:2,}}
                                        />

                                        <Box
                                            sx={{
                                                borderRadius: '8px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '5px',
                                                overflow: 'auto',
                                                maxHeight: '383px',
                                                '&::-webkit-scrollbar': {
                                                    display: 'none',
                                                },
                                            }}
                                        >
                                            {labelsCTMS.map((label, index) => (
                                                <FormControlLabel
                                                    key={index}
                                                    control={
                                                        <Checkbox
                                                            checked={checkedCTMS[index]}
                                                            onChange={() => handleCheckboxChange(index, label, 'ctms')}
                                                            sx={{

                                                                color: '#BFBFBF',
                                                                '&.Mui-checked': {
                                                                    color: '#00C9B7',

                                                                },
                                                                '&:hover': {
                                                                    backgroundColor: 'transparent',
                                                                },
                                                            }}
                                                        />
                                                    }
                                                    label={<Typography variant="body1">{label}</Typography>}
                                                    sx={{
                                                        '& .MuiFormControlLabel-root': {
                                                            border: '1px solid #4CAF50',
                                                            padding: '5px',
                                                            borderRadius: '4px',
                                                        },
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            onClick={handleSubmitForCTMS}
                                            sx={{
                                                backgroundColor: '#B50304',
                                                textTransform: 'none',
                                                borderRadius: '5px',
                                            }}
                                        >
                                            Buy Plan
                                        </Button>
                                    </Box>
                                </Box>
                            </>
                        ) : (
                            <>
                                <Box>
                                    <Typography sx={{ ...theme.typography.h6 }}>CTMS</Typography>
                                    <Typography sx={{ ...theme.typography.body1, mt: 1, padding: 0 }}>
                                        Clinical Trials Management System
                                    </Typography>
                                </Box>
                                <Divider
                                    orientation="horizontal"
                                    flexItem
                                    sx={{borderColor: 'rgba(255, 255, 255, 0.2)', borderStyle: 'dashed',width:'100%',mt:2,}}
                                />
                                <Typography sx={{ ...theme.typography.h9, mt: 2 }}>FEATURES</Typography>
                                <Box
                                    component="ul"
                                    sx={{
                                        paddingLeft: '1rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: { sm: 0, md: 0.5, lg: 1.5 },
                                    }}
                                >
                                    <FeatureItem text="Remote patient monitoring" />
                                    <FeatureItem text="Geo tracking" />
                                    <FeatureItem text="Site management" />
                                    <FeatureItem text="Staff management" />
                                    <FeatureItem text="Feedback" />
                                    <FeatureItem text="Adverse event reporting" />
                                    <FeatureItem text="Video consultation" />
                                    <FeatureItem text="Emergency call" />
                                </Box>
                                <Box display="flex" flexDirection="column" gap={2} height="100%">
                                    <Box flexGrow={1} />
                                    <Button
                                        onClick={() => handleViewMoreClick('ctms')}
                                        variant="outlined"
                                        fullWidth
                                        sx={{
                                            color: '#FFFFFF',
                                            borderColor: '#FFFFFF',
                                            textTransform: 'none',
                                            borderRadius: '5px',
                                        }}

                                    >
                                        View More
                                    </Button>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        sx={{
                                            backgroundColor: '#B50304',
                                            textTransform: 'none',
                                            borderRadius: '5px',
                                        }}
                                    >
                                        Buy Plan
                                    </Button>
                                </Box>
                            </>
                        )}
                    </Box>

                    {/* RPM Card */}
                    <Box
                        sx={{
                            backgroundColor: 'rgba(38, 38, 38, 1)',
                            boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.18)',
                            borderRadius: '15px',
                            padding: 6,
                            display: 'flex',
                            flexDirection: 'column',
                            border: '1px solid #FFFFFF33',
                            flex: '1 1',
                            width: { sm: '330px', md: '350px', lg: '380px', xl: '404px' },
                            height: { sm: '490px', md: '530px', lg: '560px', xl: '581px' },
                        }}
                    >
                        {expanded.rpm ? (
                            <>
                                <Box sx={{display: 'flex',flexDirection: 'column',mt:-5,ml:-1}}>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end',width:'110%' }}>
                                        <IconButton aria-label="close" sx={{ color: '#FFFFFF' }} onClick={() => handleGoBackClick('rpm')}>
                                            <CloseIcon />
                                        </IconButton>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ ...theme.typography.h6,color:'#FFFFFF'  }}>Features</Typography>
                                        <Typography sx={{ ...theme.typography.body1, mt: 1 }}>
                                            Select the features you want
                                        </Typography>
                                        <Divider
                                            orientation="horizontal"
                                            flexItem
                                            sx={{borderColor: 'rgba(255, 255, 255, 0.2)', borderStyle: 'dashed',width:'100%',mt:2,}}
                                        />

                                        <Box
                                            sx={{
                                                borderRadius: '8px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '5px',
                                                overflow: 'auto',
                                                maxHeight: '383px',
                                                '&::-webkit-scrollbar': {
                                                    display: 'none',
                                                },
                                            }}
                                        >
                                            {labelsRPM.map((label, index) => (
                                                <FormControlLabel
                                                    key={index}
                                                    control={
                                                        <Checkbox
                                                            checked={checkedRPM[index]}
                                                            onChange={() => handleCheckboxChange(index, label, 'rpm')}
                                                            sx={{

                                                                color: '#BFBFBF',
                                                                '&.Mui-checked': {
                                                                    color: '#00C9B7',

                                                                },
                                                                '&:hover': {
                                                                    backgroundColor: 'transparent',
                                                                },
                                                            }}
                                                        />
                                                    }
                                                    label={<Typography variant="body1">{label}</Typography>}
                                                    sx={{
                                                        '& .MuiFormControlLabel-root': {
                                                            border: '1px solid #4CAF50',
                                                            padding: '5px',
                                                            borderRadius: '4px',
                                                        },
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            onClick={handleSubmitForRPM}
                                            sx={{
                                                backgroundColor: '#B50304',
                                                textTransform: 'none',
                                                borderRadius: '5px',
                                            }}
                                        >
                                            Buy Plan
                                        </Button>
                                    </Box>
                                </Box>
                            </>
                        ) : (
                            <>
                                <Box>
                                    <Typography sx={{ ...theme.typography.h6 }}>RPM</Typography>
                                    <Typography sx={{ ...theme.typography.body1, mt: 1, padding: 0 }}>
                                        Remote patient monitoring system
                                    </Typography>
                                </Box>
                                <Divider
                                    orientation="horizontal"
                                    flexItem
                                    sx={{borderColor: 'rgba(255, 255, 255, 0.2)', borderStyle: 'dashed',width:'100%',mt:2,}}
                                />
                                <Typography sx={{ ...theme.typography.h9, mt: 2 }}>FEATURES</Typography>
                                <Box
                                    component="ul"
                                    sx={{
                                        paddingLeft: '1rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: { sm: 0, md: 0.5, lg: 1.5 },
                                    }}
                                >
                                    <FeatureItem text="Electronic data management" />
                                    <FeatureItem text="ECG" />
                                    <FeatureItem text="Emergency call" />
                                    <FeatureItem text="Geo tracking" />
                                    <FeatureItem text="AI chat bot" />
                                    <FeatureItem text="Adverse event reporting" />
                                    <FeatureItem text="e-Consent" />
                                    <FeatureItem text="Vital signs" />
                                </Box>
                                <Box display="flex" flexDirection="column" gap={2} height="100%">
                                    <Box flexGrow={1} />
                                    <Button
                                        onClick={() => handleViewMoreClick('rpm')}
                                        variant="outlined"
                                        fullWidth
                                        sx={{
                                            color: '#FFFFFF',
                                            borderColor: '#FFFFFF',
                                            textTransform: 'none',
                                            borderRadius: '5px',
                                        }}

                                    >
                                        View More
                                    </Button>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        sx={{
                                            backgroundColor: '#B50304',
                                            textTransform: 'none',
                                            borderRadius: '5px',
                                        }}
                                    >
                                        Buy Plan
                                    </Button>
                                </Box>
                            </>
                        )}
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default PricingBox;
