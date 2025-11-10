import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Paper,
  Grid,
  Avatar,
  Chip,
  Tabs,
  Tab,
  AvatarGroup,
} from '@mui/material';
import {
  People as PeopleIcon,
  Event as EventIcon,
  Chat as ChatIcon,
} from '@mui/icons-material';
import PageContainer from '../../components/common/Layout/PageContainer';
import EventCard from '../../components/domain/Event/EventCard';
import { getCommunityById } from '../../mocks/communities';
import { mockEvents } from '../../mocks/events';

const CommunityDetailScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);
  const community = getCommunityById(id);

  if (!community) {
    return (
      <PageContainer>
        <Typography>Community not found</Typography>
      </PageContainer>
    );
  }

  // Mock community events (first 4 events)
  const communityEvents = mockEvents.slice(0, 4);

  return (
    <PageContainer>
      <Paper
        sx={{
          height: 300,
          backgroundImage: `url(${community.coverPhoto})`,
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
          <Chip label={community.category} size="small" sx={{ bgcolor: 'white', mb: 2 }} />
          <Typography variant="h4" sx={{ color: 'white', mb: 1 }}>
            {community.name}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, color: 'white' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <PeopleIcon fontSize="small" />
              <Typography variant="body2">{community.members.toLocaleString()} members</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <EventIcon fontSize="small" />
              <Typography variant="body2">{community.events} events</Typography>
            </Box>
          </Box>
        </Box>
      </Paper>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h3" gutterBottom>
              About
            </Typography>
            <Typography variant="body1" paragraph>
              {community.description}
            </Typography>

            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {community.tags.map((tag) => (
                <Chip key={tag} label={tag} size="small" variant="outlined" />
              ))}
            </Box>
          </Paper>

          <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} sx={{ mb: 3 }}>
            <Tab label="Feed" />
            <Tab label="Events" />
            <Tab label="Members" />
            <Tab label="About" />
          </Tabs>

          {tabValue === 0 && (
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => navigate(`/communities/${id}/chat`)}
              sx={{ mb: 2 }}
            >
              View Community Feed
            </Button>
          )}

          {tabValue === 1 && (
            <Grid container spacing={3}>
              {communityEvents.map((event) => (
                <Grid item xs={12} sm={6} key={event.id}>
                  <EventCard event={event} />
                </Grid>
              ))}
            </Grid>
          )}

          {tabValue === 2 && (
            <Paper sx={{ p: 3 }}>
              <Typography variant="h3" gutterBottom>
                Members ({community.members.toLocaleString()})
              </Typography>
              <AvatarGroup max={20} sx={{ justifyContent: 'flex-start' }}>
                {[...Array(20)].map((_, i) => (
                  <Avatar key={i} src={`https://i.pravatar.cc/150?img=${i + 1}`} />
                ))}
              </AvatarGroup>
            </Paper>
          )}

          {tabValue === 3 && (
            <Paper sx={{ p: 3 }}>
              <Typography variant="h3" gutterBottom>
                Community Guidelines
              </Typography>
              <Typography variant="body2" paragraph>
                1. Be respectful and kind to all members
              </Typography>
              <Typography variant="body2" paragraph>
                2. No spam or self-promotion
              </Typography>
              <Typography variant="body2" paragraph>
                3. Keep discussions relevant to the community
              </Typography>
              <Typography variant="body2" paragraph>
                4. Report inappropriate content
              </Typography>
            </Paper>
          )}
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, position: 'sticky', top: 80 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <Avatar src={community.createdBy.avatar} sx={{ width: 56, height: 56 }} />
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Created by
                </Typography>
                <Typography variant="subtitle2" fontWeight={600}>
                  {community.createdBy.name}
                </Typography>
              </Box>
            </Box>

            <Button
              fullWidth
              variant={community.isJoined ? 'outlined' : 'contained'}
              color="primary"
              size="large"
              sx={{ mb: 2 }}
            >
              {community.isJoined ? 'Leave Community' : 'Join Community'}
            </Button>

            {community.isJoined && (
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                startIcon={<ChatIcon />}
                onClick={() => navigate(`/communities/${id}/chat`)}
              >
                View Feed
              </Button>
            )}

            <Box sx={{ mt: 3 }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Created on
              </Typography>
              <Typography variant="body1" gutterBottom>
                {new Date(community.createdAt).toLocaleDateString('en-IN', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default CommunityDetailScreen;

