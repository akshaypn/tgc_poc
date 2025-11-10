import React from 'react';
import { Box, Typography } from '@mui/material';

const Section = ({ title, subtitle, children, spacing = 3, sx = {} }) => {
  return (
    <Box sx={{ mb: spacing, ...sx }}>
      {title && (
        <Typography variant="h3" sx={{ mb: subtitle ? 1 : 2 }}>
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {subtitle}
        </Typography>
      )}
      {children}
    </Box>
  );
};

export default Section;

