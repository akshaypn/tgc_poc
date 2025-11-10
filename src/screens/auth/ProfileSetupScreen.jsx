import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  Chip,
  Paper,
  Avatar,
  IconButton,
} from '@mui/material';
import { CameraAlt as CameraIcon } from '@mui/icons-material';
import PageContainer from '../../components/common/Layout/PageContainer';

const ProfileSetupScreen = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: '',
    bio: '',
    interests: [],
    avatar: null,
  });
  const [currentInterest, setCurrentInterest] = useState('');

  const suggestedInterests = [
    'Technology',
    'Music',
    'Art',
    'Photography',
    'Cooking',
    'Fitness',
    'Dance',
    'Reading',
    'Writing',
    'Gaming',
  ];

  const handleAddInterest = (interest) => {
    if (!profile.interests.includes(interest)) {
      setProfile({ ...profile, interests: [...profile.interests, interest] });
    }
  };

  const handleRemoveInterest = (interest) => {
    setProfile({
      ...profile,
      interests: profile.interests.filter((i) => i !== interest),
    });
  };

  const handleSubmit = () => {
    // Mock profile setup
    navigate('/');
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', py: 4 }}>
      <Container maxWidth="md">
        <Paper sx={{ p: 4 }}>
          <Typography variant="h2" sx={{ mb: 1, textAlign: 'center' }}>
            Complete Your Profile
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
            Tell us about yourself to get personalized event recommendations
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
            <Box sx={{ position: 'relative' }}>
              <Avatar sx={{ width: 120, height: 120, mb: 1 }}>
                {profile.name.charAt(0).toUpperCase()}
              </Avatar>
              <IconButton
                sx={{
                  position: 'absolute',
                  bottom: 8,
                  right: -8,
                  bgcolor: 'primary.main',
                  color: 'white',
                  '&:hover': { bgcolor: 'primary.dark' },
                }}
                size="small"
              >
                <CameraIcon fontSize="small" />
              </IconButton>
            </Box>
            <Typography variant="caption" color="text.secondary">
              Upload profile photo
            </Typography>
          </Box>

          <TextField
            fullWidth
            label="Full Name"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            sx={{ mb: 3 }}
            required
          />

          <TextField
            fullWidth
            label="Bio"
            multiline
            rows={3}
            placeholder="Tell us about yourself..."
            value={profile.bio}
            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
            sx={{ mb: 3 }}
          />

          <Typography variant="h3" sx={{ mb: 2 }}>
            Interests
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
            {profile.interests.map((interest) => (
              <Chip
                key={interest}
                label={interest}
                onDelete={() => handleRemoveInterest(interest)}
                color="primary"
              />
            ))}
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Suggested interests:
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
            {suggestedInterests
              .filter((i) => !profile.interests.includes(i))
              .map((interest) => (
                <Chip
                  key={interest}
                  label={interest}
                  onClick={() => handleAddInterest(interest)}
                  variant="outlined"
                />
              ))}
          </Box>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button fullWidth variant="outlined" onClick={() => navigate('/login')}>
              Back
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={!profile.name}
            >
              Complete Setup
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ProfileSetupScreen;

