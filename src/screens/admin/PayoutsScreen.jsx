import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Button,
  Tabs,
  Tab,
  Grid,
} from '@mui/material';
import { Download as DownloadIcon } from '@mui/icons-material';
import PageContainer from '../../components/common/Layout/PageContainer';
import StatsCard from '../../components/domain/Profile/StatsCard';
import {
  AttachMoney as MoneyIcon,
  HourglassEmpty as PendingIcon,
  CheckCircle as CompletedIcon,
} from '@mui/icons-material';

const PayoutsScreen = () => {
  const [tabValue, setTabValue] = useState(0);

  const stats = {
    totalRevenue: 125000,
    pendingPayouts: 15000,
    completedPayouts: 110000,
  };

  const payouts = [
    {
      id: 1,
      eventName: 'React Native Workshop',
      host: 'Alex Kumar',
      amount: 9000,
      status: 'completed',
      date: '2024-11-08',
    },
    {
      id: 2,
      eventName: 'Yoga & Meditation Morning',
      host: 'Priya Singh',
      amount: 4000,
      status: 'pending',
      date: '2024-11-10',
    },
    {
      id: 3,
      eventName: 'Python Bootcamp',
      host: 'Rahul Mehta',
      amount: 33000,
      status: 'completed',
      date: '2024-11-05',
    },
    {
      id: 4,
      eventName: 'Cooking Masterclass',
      host: 'Maya Patel',
      amount: 9600,
      status: 'pending',
      date: '2024-11-12',
    },
  ];

  const filteredPayouts = tabValue === 0
    ? payouts
    : tabValue === 1
    ? payouts.filter(p => p.status === 'pending')
    : payouts.filter(p => p.status === 'completed');

  return (
    <PageContainer>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h2">Payouts & Reports</Typography>
        <Button variant="outlined" startIcon={<DownloadIcon />}>
          Export Report
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={4}>
          <StatsCard
            icon={<MoneyIcon />}
            label="Total Revenue"
            value={`₹${stats.totalRevenue.toLocaleString()}`}
            color="primary"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <StatsCard
            icon={<PendingIcon />}
            label="Pending Payouts"
            value={`₹${stats.pendingPayouts.toLocaleString()}`}
            color="warning"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <StatsCard
            icon={<CompletedIcon />}
            label="Completed Payouts"
            value={`₹${stats.completedPayouts.toLocaleString()}`}
            color="success"
          />
        </Grid>
      </Grid>

      <Paper>
        <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
          <Tab label="All Payouts" />
          <Tab label="Pending" />
          <Tab label="Completed" />
        </Tabs>

        {/* Desktop Table View */}
        <TableContainer sx={{ display: { xs: 'none', md: 'block' } }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Event Name</TableCell>
                <TableCell>Host</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredPayouts.map((payout) => (
                <TableRow key={payout.id}>
                  <TableCell>{payout.eventName}</TableCell>
                  <TableCell>{payout.host}</TableCell>
                  <TableCell>₹{payout.amount.toLocaleString()}</TableCell>
                  <TableCell>
                    {new Date(payout.date).toLocaleDateString('en-IN')}
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={payout.status}
                      size="small"
                      color={payout.status === 'completed' ? 'success' : 'warning'}
                    />
                  </TableCell>
                  <TableCell>
                    {payout.status === 'pending' ? (
                      <Button variant="outlined" size="small">
                        Process
                      </Button>
                    ) : (
                      <Button variant="text" size="small">
                        View
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Mobile Card View */}
        <Box sx={{ display: { xs: 'block', md: 'none' }, p: 2 }}>
          {filteredPayouts.map((payout) => (
            <Paper key={payout.id} sx={{ p: 2, mb: 2 }} elevation={0} variant="outlined">
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    {payout.eventName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {payout.host}
                  </Typography>
                </Box>
                <Chip
                  label={payout.status}
                  size="small"
                  color={payout.status === 'completed' ? 'success' : 'warning'}
                />
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    Amount
                  </Typography>
                  <Typography variant="h6" color="primary">
                    ₹{payout.amount.toLocaleString()}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    Date
                  </Typography>
                  <Typography variant="body2">
                    {new Date(payout.date).toLocaleDateString('en-IN')}
                  </Typography>
                </Box>
              </Box>

              {payout.status === 'pending' ? (
                <Button variant="outlined" size="small" fullWidth>
                  Process Payout
                </Button>
              ) : (
                <Button variant="text" size="small" fullWidth>
                  View Details
                </Button>
              )}
            </Paper>
          ))}
        </Box>
      </Paper>
    </PageContainer>
  );
};

export default PayoutsScreen;

