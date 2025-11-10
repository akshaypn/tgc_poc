import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  MenuItem,
  Chip,
  FormControl,
  InputLabel,
  Select,
  InputAdornment,
} from '@mui/material';
import { CloudUpload as UploadIcon } from '@mui/icons-material';
import PageContainer from '../../components/common/Layout/PageContainer';

const CreateEventScreen = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    description: '',
    date: '',
    time: '',
    duration: '',
    location: '',
    address: '',
    category: '',
    maxParticipants: '',
    fee: '',
    requiredSkills: [],
    tags: [],
  });

  const [currentSkill, setCurrentSkill] = useState('');
  const [currentTag, setCurrentTag] = useState('');

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleAddSkill = () => {
    if (currentSkill && !formData.requiredSkills.includes(currentSkill)) {
      setFormData({ ...formData, requiredSkills: [...formData.requiredSkills, currentSkill] });
      setCurrentSkill('');
    }
  };

  const handleRemoveSkill = (skill) => {
    setFormData({
      ...formData,
      requiredSkills: formData.requiredSkills.filter((s) => s !== skill),
    });
  };

  const handleAddTag = () => {
    if (currentTag && !formData.tags.includes(currentTag)) {
      setFormData({ ...formData, tags: [...formData.tags, currentTag] });
      setCurrentTag('');
    }
  };

  const handleRemoveTag = (tag) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((t) => t !== tag),
    });
  };

  const handleSubmit = () => {
    // Mock create event
    navigate('/admin');
  };

  return (
    <PageContainer maxWidth={900}>
      <Typography variant="h2" gutterBottom>
        Create New Event
      </Typography>

      <Paper sx={{ p: 4 }}>
        <Typography variant="h3" gutterBottom>
          Basic Information
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Event Title"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel>Event Type</InputLabel>
              <Select
                value={formData.type}
                label="Event Type"
                onChange={(e) => handleChange('type', e.target.value)}
              >
                <MenuItem value="Workshop">Workshop</MenuItem>
                <MenuItem value="Learning">Learning</MenuItem>
                <MenuItem value="Entertainment">Entertainment</MenuItem>
                <MenuItem value="Gig">Gig</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel>Category</InputLabel>
              <Select
                value={formData.category}
                label="Category"
                onChange={(e) => handleChange('category', e.target.value)}
              >
                <MenuItem value="Technology">Technology</MenuItem>
                <MenuItem value="Music">Music</MenuItem>
                <MenuItem value="Wellness">Wellness</MenuItem>
                <MenuItem value="Design">Design</MenuItem>
                <MenuItem value="Photography">Photography</MenuItem>
                <MenuItem value="Dance">Dance</MenuItem>
                <MenuItem value="Cooking">Cooking</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              multiline
              rows={4}
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="outlined" startIcon={<UploadIcon />} fullWidth>
              Upload Event Image
            </Button>
          </Grid>
        </Grid>

        <Typography variant="h3" gutterBottom>
          Date & Time
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Date"
              type="date"
              value={formData.date}
              onChange={(e) => handleChange('date', e.target.value)}
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Time"
              type="time"
              value={formData.time}
              onChange={(e) => handleChange('time', e.target.value)}
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Duration"
              placeholder="e.g., 2 hours"
              value={formData.duration}
              onChange={(e) => handleChange('duration', e.target.value)}
              required
            />
          </Grid>
        </Grid>

        <Typography variant="h3" gutterBottom>
          Location
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel>Venue</InputLabel>
              <Select
                value={formData.location}
                label="Venue"
                onChange={(e) => handleChange('location', e.target.value)}
              >
                <MenuItem value="TGC Innovation Hub">TGC Innovation Hub</MenuItem>
                <MenuItem value="Skyline Cafe & Terrace">Skyline Cafe & Terrace</MenuItem>
                <MenuItem value="Cubbon Park Pavilion">Cubbon Park Pavilion</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Address"
              value={formData.address}
              onChange={(e) => handleChange('address', e.target.value)}
              required
            />
          </Grid>
        </Grid>

        <Typography variant="h3" gutterBottom>
          Requirements & Pricing
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Max Participants"
              type="number"
              value={formData.maxParticipants}
              onChange={(e) => handleChange('maxParticipants', e.target.value)}
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Fee"
              type="number"
              value={formData.fee}
              onChange={(e) => handleChange('fee', e.target.value)}
              InputProps={{
                startAdornment: <InputAdornment position="start">₹</InputAdornment>,
              }}
              helperText="Enter 0 for free events, negative amount for paid gigs"
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom>
              Required Skills
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
              {formData.requiredSkills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  onDelete={() => handleRemoveSkill(skill)}
                  color="primary"
                />
              ))}
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <TextField
                size="small"
                placeholder="Add required skill..."
                value={currentSkill}
                onChange={(e) => setCurrentSkill(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
              />
              <Button variant="outlined" onClick={handleAddSkill}>
                Add
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom>
              Tags
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
              {formData.tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  onDelete={() => handleRemoveTag(tag)}
                  variant="outlined"
                />
              ))}
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <TextField
                size="small"
                placeholder="Add tag..."
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
              />
              <Button variant="outlined" onClick={handleAddTag}>
                Add
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="outlined" fullWidth onClick={() => navigate('/admin')}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
            disabled={!formData.title || !formData.type || !formData.date}
          >
            Create Event
          </Button>
        </Box>
      </Paper>
    </PageContainer>
  );
};

export default CreateEventScreen;

