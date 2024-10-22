import React from 'react';
import {
    Box,
    Typography,
    Button,
    createTheme,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { Download, PictureAsPdf } from '@mui/icons-material';

const theme = createTheme({
    typography: {
        h6: {
            fontFamily: 'Lato',
            fontSize: { xs: '10px', sm: '10px', md: '14px', lg: '14px', xl: '14px' },
            color: "#F1F1F1",
            letterSpacing: '0.4px',
            lineHeight: 'normal',
        },
        h3: {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontSize: { xs: '12px', sm: '15px', md: '18px', lg: '18px', xl: '18px' },
            color: "#FFFFFF",
            letterSpacing: '0.4px',
        },
        button: {
            fontFamily: 'Lato',
            fontSize: { xs: '10px', sm: '10px', md: '14px', lg: '14px', xl: '14px' },
            textTransform: 'none',
        },
    },
});

const billingData = [
    { id: '00', amount: '160,00 CFH', date: 'Aug 1, 2024', plan: 'CTMS + RPM', status: 'Successful' },
    { id: '01', amount: '160,00 CFH', date: 'Aug 1, 2024', plan: 'CTMS + RPM', status: 'Successful' },
    { id: '02', amount: '160,00 CFH', date: 'Aug 1, 2024', plan: 'CTMS + RPM', status: 'Failed' },
    { id: '03', amount: '160,00 CFH', date: 'Aug 1, 2024', plan: 'CTMS + RPM', status: 'Successful' },
    { id: '04', amount: '160,00 CFH', date: 'Aug 1, 2024', plan: 'CTMS + RPM', status: 'Failed' },
];

const BillingPage = () => {
    return (
        <Box sx={{ p: { xs: 2, sm: 4 },mb:10,mt:0,width:'100%',background:'#262626'}}>
            <Typography variant="h3" sx={{ mb: 4 }}>
                Billing and Payments
            </Typography>

            <Paper sx={{ p: 3, mb: 4, borderRadius: 2 }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 2,
                    }}
                >
                    <Box>
                        <Typography sx={{...theme.typography.h3}}>
                            CTMS & RPM
                        </Typography>
                        <Typography sx={{...theme.typography.h6}}>
                            You have 23 days left until your subscription expires
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: { xs: 'left', sm: 'right' }, mt: { xs: 2, sm: 0 },justifyContent: 'space-between' }}>
                        <Typography sx={{...theme.typography.h3}}>
                            160,00 CFH
                        </Typography>
                        <Typography sx={{...theme.typography.h3}}>
                            Next renewal 29 Sept 2024
                        </Typography>
                        <Button variant="contained" sx={{ ...theme.typography.button, mt: 2 }}>
                            Explore plans
                        </Button>
                    </Box>

                </Box>

            </Paper>

            <Paper sx={{ p: 5, borderRadius: 2,width:'100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography sx={{textAlign:'start', ...theme.typography.h3}}>Billing history</Typography>
                    <Button variant="contained" startIcon={<Download />} sx={{ ...theme.typography.button }}>
                        Download all
                    </Button>
                </Box>
                <TableContainer sx={{ overflowX: 'auto', }}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{textAlign:'center'}}>
                                <TableCell sx={{textAlign:'start', ...theme.typography.h3}}>Invoice</TableCell>
                                <TableCell sx={{textAlign:'center',...theme.typography.h3}}>Amount</TableCell>
                                <TableCell sx={{textAlign:'center',...theme.typography.h3}}>Billing date</TableCell>
                                <TableCell sx={{textAlign:'center',...theme.typography.h3}}>Plan</TableCell>
                                <TableCell sx={{textAlign:'center',...theme.typography.h3}}>Status</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {billingData.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <PictureAsPdf sx={{ color: 'error.main', mr: 1 }} />
                                            <Typography sx={{...theme.typography.h6}}>
                                                Billing and payments {row.id}.pdf
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        <Typography sx={{textAlign:'center',...theme.typography.h6}}>{row.amount}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography sx={{textAlign:'center',...theme.typography.h6}}>{row.date}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography sx={{textAlign:'center',...theme.typography.h6}}>{row.plan}</Typography>
                                    </TableCell>
                                    <TableCell sx={{ justifyContent: 'center',
                                        width: { xs: '100px', sm: '110px', md: '130px', lg: '130px', xl: '130px' },
                                        height: { xs: '25px', sm: '25px', md: '25px', lg: '25px', xl: '25px' },
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: row.status === 'Successful' ? 'rgba(89, 186, 99, 1)' : 'rgba(245, 129, 129, 1)',
                                                bgcolor: row.status === 'Successful' ? 'rgba(30, 92, 36, 0.24)' : 'rgba(255, 4, 4, 0.17)',
                                                borderRadius: '30px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',

                                                ...theme.typography.button,
                                            }}
                                        >
                                            {row.status}
                                        </Typography>
                                    </TableCell>
                                    <TableCell sx={{textAlign:'center', ...theme.typography.h3}}>
                                        <Button startIcon={<Download />} sx={{ ...theme.typography.button }}>
                                            Download
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default BillingPage;
