import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  Chip,
  Avatar,
} from '@mui/material';
import {
  Event as EventIcon,
  Groups as GroupsIcon,
  ConfirmationNumber as TicketIcon,
  TrendingUp as TrendingIcon,
  CalendarToday as CalendarIcon,
  ArrowForward as ArrowIcon,
} from '@mui/icons-material';
import PageContainer from '../../components/common/Layout/PageContainer';
import Section from '../../components/common/Layout/Section';
import EventCard from '../../components/domain/Event/EventCard';
import CommunityCard from '../../components/domain/Community/CommunityCard';
import { useAuth } from '../../context/AuthContext';
import { mockEvents } from '../../mocks/events';
import { getJoinedCommunities } from '../../mocks/communities';

const HomeScreen = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  // Get user's registered events (first 3 upcoming events)
  const userEvents = mockEvents.slice(0, 3);

  // Get user's joined communities
  const userCommunities = getJoinedCommunities();

  // Get featured events for discovery
  const featuredEvents = mockEvents.slice(3, 7);

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

      <Grid container spacing={3}>
        {/* Main Content - Left Side */}
        <Grid item xs={12} lg={8}>
          {/* Your Upcoming Events */}
          <Section
            title="Your Upcoming Events"
            subtitle={`${userEvents.length} events you're registered for`}
          >
            <Grid container spacing={3}>
              {userEvents.map((event) => (
                <Grid item xs={12} sm={6} key={event.id}>
                  <EventCard event={event} />
                </Grid>
              ))}
            </Grid>

            <Box sx={{ mt: 3 }}>
              <Button
                variant="outlined"
                fullWidth
                endIcon={<ArrowIcon />}
                onClick={() => navigate('/tickets')}
              >
                View All My Tickets
              </Button>
            </Box>
          </Section>

          {/* Your Communities */}
          <Section
            title="Your Communities"
            subtitle={`${userCommunities.length} communities you've joined`}
            sx={{ mt: 4 }}
          >
            <Grid container spacing={3}>
              {userCommunities.slice(0, 3).map((community) => (
                <Grid item xs={12} sm={6} md={4} key={community.id}>
                  <CommunityCard community={community} />
                </Grid>
              ))}
            </Grid>

            <Box sx={{ mt: 3 }}>
              <Button
                variant="outlined"
                fullWidth
                endIcon={<ArrowIcon />}
                onClick={() => navigate('/communities')}
              >
                View All Communities
              </Button>
            </Box>
          </Section>

          {/* Discover More Events */}
          <Section
            title="Discover More Events"
            subtitle="Events you might be interested in"
            sx={{ mt: 4 }}
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
                endIcon={<ArrowIcon />}
                onClick={() => navigate('/events')}
              >
                Browse All Events
              </Button>
            </Box>
          </Section>
        </Grid>

        {/* Sidebar - Right Side */}
        <Grid item xs={12} lg={4}>
          {/* Karma Card */}
          <Paper sx={{ p: 3, mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <TrendingIcon color="success" />
              <Typography variant="h6">Your Growth</Typography>
            </Box>
            <Typography variant="h3" sx={{ mb: 1 }}>
              {user?.karma || 450} Karma
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

          {/* Quick Actions */}
          <Paper sx={{ p: 3, mb: 3 }}>
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

          {/* Active Communities Quick View */}
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6">Active Communities</Typography>
              <Chip label={userCommunities.length} size="small" color="primary" />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {userCommunities.slice(0, 4).map((community) => (
                <Box
                  key={community.id}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    cursor: 'pointer',
                    p: 1,
                    borderRadius: 1,
                    '&:hover': {
                      bgcolor: 'action.hover',
                    },
                  }}
                  onClick={() => navigate(`/communities/${community.id}`)}
                >
                  <Avatar src={community.image} sx={{ width: 40, height: 40 }} />
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography variant="subtitle2" noWrap>
                      {community.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {community.members.toLocaleString()} members
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
            {userCommunities.length > 4 && (
              <Button
                variant="text"
                fullWidth
                size="small"
                sx={{ mt: 2 }}
                onClick={() => navigate('/communities')}
              >
                View All
              </Button>
            )}
          </Paper>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default HomeScreen;
