import React from 'react';
import { Paper, Box, Typography } from '@mui/material';

const StatsCard = ({ icon, label, value, color = 'primary' }) => {
  return (
    <Paper sx={{ p: 2, textAlign: 'center' }}>
      <Box
        sx={{
          display: 'inline-flex',
          p: 1.5,
          borderRadius: 2,
          bgcolor: `${color}.main`,
          color: 'white',
          mb: 1,
        }}
      >
        {icon}
      </Box>
      <Typography variant="h2" sx={{ mb: 0.5 }}>
        {value}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
    </Paper>
  );
};

export default StatsCard;

