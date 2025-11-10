import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
} from '@mui/material';
import {
  Event as EventIcon,
  Groups as GroupsIcon,
  ConfirmationNumber as TicketIcon,
  TrendingUp as TrendingIcon,
  EmojiEvents as TrophyIcon,
  CalendarToday as CalendarIcon,
} from '@mui/icons-material';
import PageContainer from '../../components/common/Layout/PageContainer';
import Section from '../../components/common/Layout/Section';
import EventCard from '../../components/domain/Event/EventCard';
import StatsCard from '../../components/domain/Profile/StatsCard';
import { useAuth } from '../../context/AuthContext';
import { mockEvents } from '../../mocks/events';

const HomeScreen = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  // Get featured events (top 4 events)
  const featuredEvents = mockEvents.slice(0, 4);

  const stats = {
    upcomingEvents: 3,
    communitiesJoined: user?.communitiesJoined || 5,
    karmaPoints: user?.karma || 850,
  };

  return (
    <PageContainer>
      {/* Welcome Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome back, {user?.name?.split(' ')[0] || 'there'}! 👋
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Discover events, connect with communities, and earn karma
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={4}>
          <StatsCard
            icon={<EventIcon />}
            label="Upcoming Events"
            value={stats.upcomingEvents}
            color="primary"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <StatsCard
            icon={<GroupsIcon />}
            label="Communities"
            value={stats.communitiesJoined}
            color="secondary"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <StatsCard
            icon={<TrophyIcon />}
            label="Karma Points"
            value={stats.karmaPoints}
            color="warning"
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {/* Quick Actions */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, mb: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Quick Actions
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<EventIcon />}
                onClick={() => navigate('/events')}
              >
                Browse Events
              </Button>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<GroupsIcon />}
                onClick={() => navigate('/communities')}
              >
                Explore Communities
              </Button>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<TicketIcon />}
                onClick={() => navigate('/tickets')}
              >
                My Tickets
              </Button>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<CalendarIcon />}
                onClick={() => navigate('/karma')}
              >
                Karma History
              </Button>
            </Box>
          </Paper>

          {/* Karma Card */}
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <TrendingIcon color="success" />
              <Typography variant="h6">Your Growth</Typography>
            </Box>
            <Typography variant="h3" sx={{ mb: 1 }}>
              {stats.karmaPoints} Karma
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Keep attending events and contributing to earn more karma!
            </Typography>
            <Button
              variant="contained"
              fullWidth
              onClick={() => navigate('/profile')}
            >
              View Profile
            </Button>
          </Paper>
        </Grid>

        {/* Featured Events */}
        <Grid item xs={12} md={8}>
          <Section
            title="Featured Events"
            subtitle="Handpicked events just for you"
          >
            <Grid container spacing={3}>
              {featuredEvents.map((event) => (
                <Grid item xs={12} sm={6} key={event.id}>
                  <EventCard event={event} />
                </Grid>
              ))}
            </Grid>

            <Box sx={{ mt: 3 }}>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => navigate('/events')}
              >
                View All Events
              </Button>
            </Box>
          </Section>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default HomeScreen;
