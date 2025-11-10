import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Link,
  Chip,
  useTheme,
} from '@mui/material';
import {
  Google as GoogleIcon,
  Apple as AppleIcon,
  EventNote as EventIcon,
  Star as StarIcon,
  Groups as GroupsIcon,
  Visibility,
  VisibilityOff,
  LightMode,
  DarkMode,
} from '@mui/icons-material';
import { useAuth } from '../../context/AuthContext';
import { useTheme as useAppTheme } from '../../context/ThemeContext';
import { getCurrentUser, getAdminUser } from '../../mocks/users';

const WelcomeScreen = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const theme = useTheme();
  const { mode, toggleTheme } = useAppTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const isDark = mode === 'dark';

  const handleEmailLogin = () => {
    // Mock login - use regular user
    login(getCurrentUser());
    navigate('/');
  };

  const handleAdminLogin = () => {
    // Mock admin login - for demo
    login(getAdminUser());
    navigate('/');
  };

  const handleOAuthLogin = (provider) => {
    // Mock OAuth login
    login(getCurrentUser());
    navigate('/');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      {/* Theme Toggle Button */}
      <IconButton
        onClick={toggleTheme}
        sx={{
          position: 'absolute',
          top: { xs: 2, md: 3 },
          right: { xs: 2, md: 3 },
          zIndex: 1000,
          color: 'text.primary',
          bgcolor: 'action.hover',
          '&:hover': {
            bgcolor: 'action.selected',
          },
        }}
      >
        {isDark ? <LightMode /> : <DarkMode />}
      </IconButton>
      {/* Left Side - Branding & Features */}
      <Box
        sx={{
          flex: { md: '0 0 58%', lg: '0 0 60%' },
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: { md: 6, lg: 8, xl: 12 },
          bgcolor: isDark ? 'background.paper' : 'background.default',
          background: isDark
            ? `linear-gradient(135deg, ${theme.palette.primary.main}08, ${theme.palette.secondary.main}08)`
            : `linear-gradient(135deg, ${theme.palette.primary.main}0D, ${theme.palette.secondary.main}0D)`,
          borderRight: 1,
          borderColor: 'divider',
          position: 'relative',
        }}
      >
        {/* Centered Content Container */}
        <Box sx={{ maxWidth: 600, width: '100%' }}>
          {/* Logo & Tagline */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5, mb: 8 }}>
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: 3,
                background: 'linear-gradient(135deg, #818CF8, #F472B6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <GroupsIcon sx={{ fontSize: 36, color: 'white' }} />
            </Box>
            <Box>
              <Typography 
                variant="h1" 
                sx={{ 
                  fontWeight: 800, 
                  mb: 0.5,
                  fontSize: '2rem',
                  color: 'text.primary',
                }}
              >
                TGC
              </Typography>
              <Typography variant="body1" color="secondary">
                The Gig Community
              </Typography>
            </Box>
          </Box>

          <Typography 
            variant="h2" 
            sx={{ 
              mb: 8, 
              fontSize: { md: '2.25rem', lg: '2.5rem' },
              fontWeight: 700,
              lineHeight: 1.2,
              color: 'text.primary',
            }}
          >
            We make you socially productive.
          </Typography>

          {/* Feature Highlights */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5, mb: 10 }}>
            <Box sx={{ display: 'flex', gap: 3 }}>
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: 2.5,
                  background: 'linear-gradient(135deg, #818CF8, #6366F1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <EventIcon sx={{ color: 'white', fontSize: 28 }} />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 700, 
                    mb: 1,
                    fontSize: '1.125rem',
                    color: 'text.primary',
                  }}
                >
                  Gig. Grow. Glow.
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary"
                  sx={{ lineHeight: 1.6 }}
                >
                  Join real-world events and build your community karma
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 3 }}>
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: 2.5,
                  background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <StarIcon sx={{ color: 'white', fontSize: 28 }} />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 700, 
                    mb: 1,
                    fontSize: '1.125rem',
                    color: 'text.primary',
                  }}
                >
                  Learn & Earn
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary"
                  sx={{ lineHeight: 1.6 }}
                >
                  Transform learning into gigs and opportunities
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 3 }}>
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: 2.5,
                  background: `linear-gradient(135deg, ${theme.palette.success.main}, ${theme.palette.success.dark})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <GroupsIcon sx={{ color: 'white', fontSize: 28 }} />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 700, 
                    mb: 1,
                    fontSize: '1.125rem',
                    color: 'text.primary',
                  }}
                >
                  Connect & Contribute
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary"
                  sx={{ lineHeight: 1.6 }}
                >
                  Be part of a living ecosystem of social productivity
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Stats */}
          <Box>
            <Typography 
              variant="body1" 
              color="text.secondary"
              sx={{ 
                mb: 3,
                fontWeight: 500,
              }}
            >
              Join the movement
            </Typography>
            <Box sx={{ display: 'flex', gap: 2.5, flexWrap: 'wrap' }}>
              <Chip
                label="50+ Venues"
                variant="outlined"
                color="success"
                sx={{
                  fontWeight: 600,
                  px: 1,
                  height: 40,
                  fontSize: '0.9375rem',
                  borderWidth: 2,
                  '&:hover': {
                    bgcolor: 'action.hover',
                  },
                }}
              />
              <Chip
                label="100+ Gigs"
                variant="outlined"
                color="success"
                sx={{
                  fontWeight: 600,
                  px: 1,
                  height: 40,
                  fontSize: '0.9375rem',
                  borderWidth: 2,
                  '&:hover': {
                    bgcolor: 'action.hover',
                  },
                }}
              />
              <Chip
                label="10K+ Community"
                variant="outlined"
                color="success"
                sx={{
                  fontWeight: 600,
                  px: 1,
                  height: 40,
                  fontSize: '0.9375rem',
                  borderWidth: 2,
                  '&:hover': {
                    bgcolor: 'action.hover',
                  },
                }}
              />
            </Box>
          </Box>

          {/* Quote */}
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontStyle: 'italic',
              mt: 10,
              lineHeight: 1.6,
            }}
          >
            "Your vibe can start a revolution of good work."
          </Typography>
        </Box>
      </Box>

      {/* Right Side - Login Form */}
      <Box
        sx={{
          flex: { md: '0 0 42%', lg: '0 0 40%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: { xs: 4, md: 6, lg: 8 },
          bgcolor: isDark ? 'background.default' : 'background.paper',
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 440 }}>
          {/* Mobile Logo */}
          <Box sx={{ display: { xs: 'block', md: 'none' }, mb: 8, textAlign: 'center' }}>
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: 3,
                background: 'linear-gradient(135deg, #818CF8, #F472B6)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 2,
              }}
            >
              <GroupsIcon sx={{ fontSize: 36, color: 'white' }} />
            </Box>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 800,
                color: 'text.primary',
              }}
            >
              TGC
            </Typography>
            <Typography variant="body1" color="secondary">
              The Gig Community
            </Typography>
          </Box>

          <Typography 
            variant="h3" 
            color="text.primary"
            sx={{ 
              mb: 1.5, 
              fontWeight: 700,
              fontSize: '1.75rem',
            }}
          >
            Welcome to TGC
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{ 
              mb: 5,
              lineHeight: 1.6,
            }}
          >
            Sign in to start your social productivity journey
          </Typography>

          {/* OAuth Buttons */}
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            onClick={() => handleOAuthLogin('google')}
            sx={{
              mb: 2.5,
              py: 1.75,
              fontSize: '0.9375rem',
              borderWidth: 1.5,
            }}
          >
            Continue with Google
          </Button>

          <Button
            fullWidth
            variant="outlined"
            startIcon={<AppleIcon />}
            onClick={() => handleOAuthLogin('apple')}
            sx={{
              mb: 4,
              py: 1.75,
              fontSize: '0.9375rem',
              borderWidth: 1.5,
            }}
          >
            Continue with Apple
          </Button>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              textAlign: 'center',
              mb: 4,
              fontSize: '0.875rem',
            }}
          >
            Or continue with email
          </Typography>

          {/* Email Form */}
          <Box sx={{ mb: 3.5 }}>
            <Typography 
              variant="body2" 
              color="text.primary"
              sx={{ 
                mb: 1.5, 
                fontWeight: 600,
                fontSize: '0.875rem',
              }}
            >
              Email address
            </Typography>
            <TextField
              fullWidth
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>

          <Box sx={{ mb: 5 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
              <Typography 
                variant="body2" 
                color="text.primary"
                sx={{ 
                  fontWeight: 600,
                  fontSize: '0.875rem',
                }}
              >
                Password
              </Typography>
              <Link 
                href="#" 
                underline="none"
                color="primary"
                sx={{ 
                  fontSize: '0.875rem',
                }}
              >
                Forgot password?
              </Link>
            </Box>
            <TextField
              fullWidth
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleEmailLogin}
            sx={{
              mb: 2.5,
              py: 1.75,
              fontWeight: 600,
              fontSize: '0.9375rem',
            }}
          >
            Sign In
          </Button>

          <Button
            fullWidth
            variant="outlined"
            color="primary"
            onClick={() => navigate('/setup-profile')}
            sx={{
              mb: 4,
              py: 1.75,
              fontWeight: 600,
              fontSize: '0.9375rem',
              borderWidth: 1.5,
            }}
          >
            Create Your Profile
          </Button>

          {/* Demo Login Button */}
          <Button
            fullWidth
            variant="text"
            color="inherit"
            size="small"
            onClick={handleAdminLogin}
            sx={{
              mb: 4,
              fontSize: '0.8125rem',
              py: 1,
            }}
          >
            🔐 Demo: Login as SuperAdmin
          </Button>

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              display: 'block',
              textAlign: 'center',
              lineHeight: 1.7,
              fontSize: '0.8125rem',
            }}
          >
            By continuing, you agree to our community values of positivity, growth, and inclusivity
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WelcomeScreen;

