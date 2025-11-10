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
  InputAdornment,
  MenuItem,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';
import {
  CameraAlt as CameraIcon,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { useAuth } from '../../context/AuthContext';
import { getCurrentUser } from '../../mocks/users';

const ProfileSetupScreen = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [activeStep, setActiveStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [profile, setProfile] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    username: '',
    phone: '',
    city: '',
    bio: '',
    interests: [],
    skills: [],
    avatar: null,
  });
  const [currentInterest, setCurrentInterest] = useState('');
  const [currentSkill, setCurrentSkill] = useState('');

  const steps = ['Account Details', 'Personal Info', 'Interests & Skills'];

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
    'Travel',
    'Fashion',
  ];

  const suggestedSkills = [
    'JavaScript',
    'Python',
    'Design',
    'Marketing',
    'Photography',
    'Video Editing',
    'Public Speaking',
    'Teaching',
    'Project Management',
    'Data Analysis',
  ];

  const cities = [
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Hyderabad',
    'Chennai',
    'Kolkata',
    'Pune',
    'Ahmedabad',
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

  const handleAddSkill = (skill) => {
    if (!profile.skills.includes(skill)) {
      setProfile({ ...profile, skills: [...profile.skills, skill] });
    }
  };

  const handleRemoveSkill = (skill) => {
    setProfile({
      ...profile,
      skills: profile.skills.filter((s) => s !== skill),
    });
  };

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    // Mock sign up - log the user in
    login(getCurrentUser());
    navigate('/');
  };

  const isStepValid = () => {
    switch (activeStep) {
      case 0:
        return (
          profile.email &&
          profile.password &&
          profile.password === profile.confirmPassword &&
          profile.password.length >= 6
        );
      case 1:
        return profile.fullName && profile.username && profile.city;
      case 2:
        return profile.interests.length > 0;
      default:
        return false;
    }
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        // Step 1: Account Details
        return (
          <Box>
            <TextField
              fullWidth
              label="Email Address"
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              sx={{ mb: 3 }}
              required
              placeholder="you@example.com"
            />

            <TextField
              fullWidth
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={profile.password}
              onChange={(e) => setProfile({ ...profile, password: e.target.value })}
              sx={{ mb: 3 }}
              required
              placeholder="At least 6 characters"
              helperText="Password must be at least 6 characters"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              label="Confirm Password"
              type={showConfirmPassword ? 'text' : 'password'}
              value={profile.confirmPassword}
              onChange={(e) => setProfile({ ...profile, confirmPassword: e.target.value })}
              required
              error={profile.confirmPassword && profile.password !== profile.confirmPassword}
              helperText={
                profile.confirmPassword && profile.password !== profile.confirmPassword
                  ? 'Passwords do not match'
                  : ''
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} edge="end">
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        );

      case 1:
        // Step 2: Personal Info
        return (
          <Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
              <Box sx={{ position: 'relative' }}>
                <Avatar sx={{ width: 100, height: 100, mb: 1 }}>
                  {profile.fullName.charAt(0).toUpperCase()}
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
                Upload profile photo (optional)
              </Typography>
            </Box>

            <TextField
              fullWidth
              label="Full Name"
              value={profile.fullName}
              onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
              sx={{ mb: 3 }}
              required
              placeholder="John Doe"
            />

            <TextField
              fullWidth
              label="Username"
              value={profile.username}
              onChange={(e) => setProfile({ ...profile, username: e.target.value })}
              sx={{ mb: 3 }}
              required
              placeholder="@johndoe"
              helperText="This will be your unique identifier"
            />

            <TextField
              fullWidth
              label="Phone Number"
              value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
              sx={{ mb: 3 }}
              placeholder="+91 98765 43210"
            />

            <TextField
              fullWidth
              select
              label="City"
              value={profile.city}
              onChange={(e) => setProfile({ ...profile, city: e.target.value })}
              sx={{ mb: 3 }}
              required
            >
              {cities.map((city) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              fullWidth
              label="Bio"
              multiline
              rows={3}
              placeholder="Tell us about yourself..."
              value={profile.bio}
              onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
            />
          </Box>
        );

      case 2:
        // Step 3: Interests & Skills
        return (
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Interests
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Select your interests to get personalized event recommendations
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
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

            <Typography variant="h6" sx={{ mb: 2 }}>
              Skills (Optional)
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Add your skills to find relevant gig opportunities
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              {profile.skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  onDelete={() => handleRemoveSkill(skill)}
                  color="secondary"
                />
              ))}
            </Box>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Suggested skills:
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {suggestedSkills
                .filter((s) => !profile.skills.includes(s))
                .map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    onClick={() => handleAddSkill(skill)}
                    variant="outlined"
                  />
                ))}
            </Box>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', py: 4 }}>
      <Container maxWidth="md">
        <Paper sx={{ p: { xs: 3, md: 4 } }}>
          <Typography variant="h4" sx={{ mb: 1, textAlign: 'center' }}>
            Create Your Account
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
            Join TGC and start your social productivity journey
          </Typography>

          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {renderStepContent()}

          <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={activeStep === 0 ? () => navigate('/login') : handleBack}
            >
              {activeStep === 0 ? 'Back to Login' : 'Back'}
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
              disabled={!isStepValid()}
            >
              {activeStep === steps.length - 1 ? 'Create Account' : 'Next'}
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ProfileSetupScreen;

