import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#B50304',
    },
    background: {
      paper: '#18181b',
    },
  },
});

const features = [
  "Select all",
  "Geo tracking",
  "Remote patient monitoring",
  "Staff management",
  "Electronic document management",
  "Feedback",
  "Adverse event reporting",
  "Video consultation",
  "Site management",
];

export default function FeaturesDialog() {
  const [open, setOpen] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState(["Geo tracking"]);

  const handleFeatureToggle = (feature) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const handleSelectAll = () => {
    setSelectedFeatures(
      selectedFeatures.length === features.length - 1 ? [] : features.slice(1)
    );
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
            <Button
            sx={{
                backgroundColor: '#B50304',
                color: 'white', // Adjust text color as needed
                borderColor: '#B50304', // Keep the border color if needed
            }}
            variant="outlined"
            onClick={() => setOpen(true)}
            >
            Buy
            </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            borderRadius: 8,
            maxWidth: 425,
          },
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2, fontWeight: 'bold' }}>
          Features
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <div style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: 16 }}>
            Select the features you want
          </div>
          {features.map((feature, index) => (
            <React.Fragment key={feature}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={
                      feature === "Select all"
                        ? selectedFeatures.length === features.length - 1
                        : selectedFeatures.includes(feature)
                    }
                    onChange={() =>
                      feature === "Select all" ? handleSelectAll() : handleFeatureToggle(feature)
                    }
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      '&.Mui-checked': {
                        color: '#B50304',
                      },
                    }}
                  />
                }
                label={feature}
                sx={{
                  display: 'block',
                  marginBottom: 1,
                  '& .MuiFormControlLabel-label': {
                    fontSize: 14,
                  },
                }}
              />
              {index === 0 && <hr style={{ borderColor: 'rgba(255, 255, 255, 0.12)', margin: '16px 0' }} />}
            </React.Fragment>
          ))}
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', padding: 2 }}>
          <Button
            onClick={handleClose}
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#B50304',
              '&:hover': {
                backgroundColor: '#8f0203',
              },
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}