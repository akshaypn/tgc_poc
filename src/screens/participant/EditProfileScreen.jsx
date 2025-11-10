import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  TextField,
  Paper,
  Avatar,
  IconButton,
  Chip,
  Grid,
} from '@mui/material';
import { CameraAlt as CameraIcon, Delete as DeleteIcon } from '@mui/icons-material';
import PageContainer from '../../components/common/Layout/PageContainer';
import { useAuth } from '../../context/AuthContext';

const EditProfileScreen = () => {
  const navigate = useNavigate();
  const { user, updateProfile } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    bio: user?.bio || '',
    interests: user?.interests || [],
    skills: user?.skills || [],
  });
  const [newInterest, setNewInterest] = useState('');
  const [newSkill, setNewSkill] = useState('');

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleAddInterest = () => {
    if (newInterest && !formData.interests.includes(newInterest)) {
      setFormData({ ...formData, interests: [...formData.interests, newInterest] });
      setNewInterest('');
    }
  };

  const handleRemoveInterest = (interest) => {
    setFormData({
      ...formData,
      interests: formData.interests.filter((i) => i !== interest),
    });
  };

  const handleAddSkill = () => {
    if (newSkill && !formData.skills.includes(newSkill)) {
      setFormData({ ...formData, skills: [...formData.skills, newSkill] });
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skill) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((s) => s !== skill),
    });
  };

  const handleSave = () => {
    updateProfile(formData);
    navigate('/profile');
  };

  return (
    <PageContainer maxWidth={800}>
      <Typography variant="h2" gutterBottom>
        Edit Profile
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
          <Box sx={{ position: 'relative' }}>
            <Avatar src={user?.avatar} sx={{ width: 120, height: 120, mb: 1 }} />
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
            Click to change profile photo
          </Typography>
        </Box>

        <Box sx={{ position: 'relative', mb: 4 }}>
          <Box
            sx={{
              height: 200,
              backgroundImage: `url(${user?.coverPhoto})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconButton
              sx={{
                bgcolor: 'rgba(0,0,0,0.5)',
                color: 'white',
                '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
              }}
            >
              <CameraIcon />
            </IconButton>
          </Box>
          <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
            Click to change cover photo
          </Typography>
        </Box>

        <TextField
          fullWidth
          label="Full Name"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          sx={{ mb: 3 }}
        />

        <TextField
          fullWidth
          label="Bio"
          multiline
          rows={4}
          value={formData.bio}
          onChange={(e) => handleChange('bio', e.target.value)}
          sx={{ mb: 3 }}
        />

        <Typography variant="h3" gutterBottom>
          Interests
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
          {formData.interests.map((interest) => (
            <Chip
              key={interest}
              label={interest}
              onDelete={() => handleRemoveInterest(interest)}
              color="primary"
            />
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
          <TextField
            size="small"
            placeholder="Add interest..."
            value={newInterest}
            onChange={(e) => setNewInterest(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddInterest()}
          />
          <Button variant="outlined" onClick={handleAddInterest}>
            Add
          </Button>
        </Box>

        <Typography variant="h3" gutterBottom>
          Skills
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
          {formData.skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              onDelete={() => handleRemoveSkill(skill)}
              color="primary"
              variant="outlined"
            />
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
          <TextField
            size="small"
            placeholder="Add skill..."
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
          />
          <Button variant="outlined" onClick={handleAddSkill}>
            Add
          </Button>
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="outlined" fullWidth onClick={() => navigate('/profile')}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" fullWidth onClick={handleSave}>
            Save Changes
          </Button>
        </Box>
      </Paper>
    </PageContainer>
  );
};

export default EditProfileScreen;

