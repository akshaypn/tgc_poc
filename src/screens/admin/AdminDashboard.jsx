import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  LinearProgress,
} from '@mui/material';
import {
  Event as EventIcon,
  People as PeopleIcon,
  AttachMoney as MoneyIcon,
  TrendingUp as TrendingIcon,
  Add as AddIcon,
} from '@mui/icons-material';
import PageContainer from '../../components/common/Layout/PageContainer';
import Section from '../../components/common/Layout/Section';
import StatsCard from '../../components/domain/Profile/StatsCard';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const stats = {
    totalEvents: 45,
    upcomingEvents: 12,
    totalParticipants: 1247,
    totalRevenue: 125000,
    monthlyGrowth: 23,
  };

  const recentEvents = [
    { name: 'React Native Workshop', participants: 18, capacity: 30, revenue: 9000 },
    { name: 'Sunset Acoustic Jam', participants: 32, capacity: 50, revenue: 0 },
    { name: 'Yoga & Meditation', participants: 20, capacity: 25, revenue: 4000 },
  ];

  return (
    <PageContainer>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h2">Admin Dashboard</Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => navigate('/admin/create-event')}
        >
          Create Event
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard
            icon={<EventIcon />}
            label="Total Events"
            value={stats.totalEvents}
            color="primary"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard
            icon={<EventIcon />}
            label="Upcoming Events"
            value={stats.upcomingEvents}
            color="secondary"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard
            icon={<PeopleIcon />}
            label="Total Participants"
            value={stats.totalParticipants.toLocaleString()}
            color="success"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard
            icon={<MoneyIcon />}
            label="Total Revenue"
            value={`₹${stats.totalRevenue.toLocaleString()}`}
            color="warning"
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Section title="Recent Events" subtitle="Latest event performance">
            <Paper>
              {recentEvents.map((event, index) => (
                <Box
                  key={index}
                  sx={{
                    p: 3,
                    borderBottom: index < recentEvents.length - 1 ? 1 : 0,
                    borderColor: 'divider',
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
                        {event.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {event.participants} / {event.capacity} participants
                      </Typography>
                    </Box>
                    <Typography variant="subtitle1" fontWeight={600}>
                      ₹{event.revenue.toLocaleString()}
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={(event.participants / event.capacity) * 100}
                    sx={{ height: 8, borderRadius: 1 }}
                  />
                </Box>
              ))}
            </Paper>
          </Section>

          <Box sx={{ mt: 3 }}>
            <Button variant="outlined" fullWidth>
              View All Events
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h3" gutterBottom>
              Quick Actions
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => navigate('/admin/create-event')}
              >
                Create New Event
              </Button>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => navigate('/admin/venues')}
              >
                Manage Venues
              </Button>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => navigate('/admin/payouts')}
              >
                Process Payouts
              </Button>
            </Box>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <TrendingIcon color="success" />
              <Typography variant="h3">Growth</Typography>
            </Box>
            <Typography variant="h3" sx={{ mb: 1 }}>
              +{stats.monthlyGrowth}%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Monthly user growth
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default AdminDashboard;

