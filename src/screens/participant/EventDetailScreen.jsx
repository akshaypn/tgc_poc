import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Chip,
  Avatar,
  Grid,
  Paper,
  Rating,
  Divider,
  List,
  ListItem,
  ListItemText,
  AvatarGroup,
} from '@mui/material';
import {
  CalendarToday as CalendarIcon,
  AccessTime as TimeIcon,
  Place as LocationIcon,
  People as PeopleIcon,
  Event as EventIcon,
  Star as StarIcon,
} from '@mui/icons-material';
import PageContainer from '../../components/common/Layout/PageContainer';
import Section from '../../components/common/Layout/Section';
import { getEventById } from '../../mocks/events';
import { mockReviews } from '../../mocks/messages';

const EventDetailScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = getEventById(id);

  if (!event) {
    return (
      <PageContainer>
        <Typography>Event not found</Typography>
      </PageContainer>
    );
  }

  const getFeeDisplay = (fee) => {
    if (fee === 0) return 'Free Event';
    if (fee < 0) return `Earn ₹${Math.abs(fee)}`;
    return `₹${fee}`;
  };

  return (
    <PageContainer>
      <Box
        sx={{
          height: 400,
          backgroundImage: `url(${event.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 4,
          mb: 3,
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
            p: 3,
            borderRadius: '0 0 16px 16px',
          }}
        >
          <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
            <Chip label={event.type} size="small" sx={{ bgcolor: 'primary.main', color: 'white' }} />
            <Chip label={event.category} size="small" sx={{ bgcolor: 'white', color: 'text.primary' }} />
          </Box>
          <Typography variant="h4" sx={{ color: 'white' }}>
            {event.title}
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h3" gutterBottom>
              About This Event
            </Typography>
            <Typography variant="body1" paragraph>
              {event.description}
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <CalendarIcon color="primary" />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Date
                    </Typography>
                    <Typography variant="body1">
                      {new Date(event.date).toLocaleDateString('en-IN', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <TimeIcon color="primary" />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Time & Duration
                    </Typography>
                    <Typography variant="body1">
                      {event.time} • {event.duration}
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <LocationIcon color="primary" />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Location
                    </Typography>
                    <Typography variant="body1">{event.location}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {event.address}
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <PeopleIcon color="primary" />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Participants
                    </Typography>
                    <Typography variant="body1">
                      {event.currentParticipants} / {event.maxParticipants}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {event.requiredSkills && event.requiredSkills.length > 0 && (
              <>
                <Divider sx={{ my: 3 }} />
                <Typography variant="h3" gutterBottom>
                  Required Skills
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {event.requiredSkills.map((skill) => (
                    <Chip key={skill} label={skill} />
                  ))}
                </Box>
              </>
            )}

            <Divider sx={{ my: 3 }} />

            <Typography variant="h3" gutterBottom>
              Tags
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {event.tags.map((tag) => (
                <Chip key={tag} label={tag} variant="outlined" />
              ))}
            </Box>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Typography variant="h3" gutterBottom>
              Reviews ({event.reviews})
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <Rating value={event.rating} precision={0.1} readOnly size="large" />
              <Typography variant="h2">{event.rating}</Typography>
            </Box>

            {mockReviews.slice(0, 3).map((review) => (
              <Box key={review.id} sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                  <Avatar src={review.user.avatar} />
                  <Box>
                    <Typography variant="subtitle2" fontWeight={600}>
                      {review.user.name}
                    </Typography>
                    <Rating value={review.rating} size="small" readOnly />
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {review.comment}
                </Typography>
              </Box>
            ))}
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, position: 'sticky', top: 80 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <Avatar src={event.host.avatar} sx={{ width: 56, height: 56 }} />
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Hosted by
                </Typography>
                <Typography variant="subtitle2" fontWeight={600}>
                  {event.host.name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <StarIcon sx={{ fontSize: 16, color: 'warning.main' }} />
                  <Typography variant="caption">{event.host.karma} Karma</Typography>
                </Box>
              </Box>
            </Box>

            <Divider sx={{ mb: 3 }} />

            <Typography variant="h2" sx={{ mb: 2 }}>
              {getFeeDisplay(event.fee)}
            </Typography>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              sx={{ mb: 2 }}
              onClick={() => navigate(`/events/${id}/purchase`)}
            >
              {event.fee <= 0 ? 'Register Now' : 'Buy Ticket'}
            </Button>

            <Button
              fullWidth
              variant="outlined"
              color="primary"
              onClick={() => navigate(`/events/${id}/chat`)}
            >
              Join Event Chat
            </Button>

            <Divider sx={{ my: 3 }} />

            <Typography variant="body2" color="text.secondary" gutterBottom>
              Attendees
            </Typography>
            <AvatarGroup max={8} sx={{ justifyContent: 'flex-start' }}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <Avatar key={i} src={`https://i.pravatar.cc/150?img=${i}`} />
              ))}
            </AvatarGroup>
          </Paper>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default EventDetailScreen;

