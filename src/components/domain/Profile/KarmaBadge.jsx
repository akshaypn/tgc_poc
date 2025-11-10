import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { Star as StarIcon } from '@mui/icons-material';
import { getCurrentBadge } from '../../../mocks/karma';

const KarmaBadge = ({ karma, size = 'medium' }) => {
  const badge = getCurrentBadge(karma);
  
  const sizes = {
    small: { icon: 40, font: '1.5rem' },
    medium: { icon: 60, font: '2rem' },
    large: { icon: 80, font: '3rem' },
  };

  return (
    <Paper
      sx={{
        p: 3,
        textAlign: 'center',
        background: 'linear-gradient(135deg, #6366F1, #EC4899)',
        color: 'white',
      }}
    >
      <Box
        sx={{
          fontSize: sizes[size].font,
          mb: 1,
        }}
      >
        {badge.icon}
      </Box>
      <Typography variant="h3" sx={{ mb: 0.5, color: 'white' }}>
        {badge.name}
      </Typography>
      <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.9)' }}>
        {badge.description}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
        <StarIcon />
        <Typography variant="h2" sx={{ color: 'white' }}>
          {karma}
        </Typography>
        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>
          Karma Points
        </Typography>
      </Box>
    </Paper>
  );
};

export default KarmaBadge;

