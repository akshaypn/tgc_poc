import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Paper,
  Grid,
  Avatar,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import {
  Edit as EditIcon,
  Event as EventIcon,
  Groups as GroupsIcon,
  EmojiEvents as TrophyIcon,
  Star as StarIcon,
} from '@mui/icons-material';
import PageContainer from '../../components/common/Layout/PageContainer';
import KarmaBadge from '../../components/domain/Profile/KarmaBadge';
import StatsCard from '../../components/domain/Profile/StatsCard';
import { useAuth } from '../../context/AuthContext';

const ProfileScreen = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  if (!user) return null;

  return (
    <PageContainer>
      <Paper
        sx={{
          height: 200,
          backgroundImage: `url(${user.coverPhoto})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 4,
          mb: -8,
        }}
      />

      <Box sx={{ px: { xs: 2, md: 4 }, position: 'relative' }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mb: 3 }}>
          <Avatar
            src={user.avatar}
            sx={{
              width: 120,
              height: 120,
              border: '4px solid',
              borderColor: 'background.paper',
              boxShadow: 2,
            }}
          />

          <Box sx={{ flex: 1, mt: { xs: 0, md: 8 } }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
              <Box>
                <Typography variant="h2" gutterBottom>
                  {user.name}
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                  {user.username}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Member since {new Date(user.memberSince).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
                </Typography>
              </Box>
              <Button
                variant="outlined"
                startIcon={<EditIcon />}
                onClick={() => navigate('/profile/edit')}
              >
                Edit Profile
              </Button>
            </Box>

            <Typography variant="body1" paragraph>
              {user.bio}
            </Typography>

            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
              {user.interests.map((interest) => (
                <Chip key={interest} label={interest} size="small" />
              ))}
            </Box>
          </Box>
        </Box>

        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} md={4}>
            <KarmaBadge karma={user.karma} />
          </Grid>

          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={4}>
                <StatsCard
                  icon={<EventIcon />}
                  label="Events Attended"
                  value={user.eventsAttended}
                  color="primary"
                />
              </Grid>
              <Grid item xs={6} sm={4}>
                <StatsCard
                  icon={<TrophyIcon />}
                  label="Events Hosted"
                  value={user.eventsHosted}
                  color="secondary"
                />
              </Grid>
              <Grid item xs={6} sm={4}>
                <StatsCard
                  icon={<GroupsIcon />}
                  label="Communities"
                  value={user.communitiesJoined}
                  color="success"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h3" gutterBottom>
            Skills
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {user.skills.map((skill) => (
              <Chip key={skill} label={skill} color="primary" variant="outlined" />
            ))}
          </Box>
        </Paper>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="outlined" fullWidth onClick={() => navigate('/karma')}>
            View Karma History
          </Button>
          <Button variant="outlined" fullWidth onClick={() => navigate('/tickets')}>
            My Tickets
          </Button>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default ProfileScreen;

