import React from 'react';
import { Box, Typography } from '@mui/material';

const Section = ({ title, subtitle, children, spacing = 3, sx = {} }) => {
  return (
    <Box sx={{ mb: spacing, ...sx }}>
      {title && (
        <Typography 
          variant="h5" 
          sx={{ 
            mb: subtitle ? { xs: 0.75, md: 1 } : { xs: 1.5, md: 2 },
            fontSize: { xs: '1.25rem', md: '1.5rem' },
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ mb: { xs: 1.5, md: 2 } }}
        >
          {subtitle}
        </Typography>
      )}
      {children}
    </Box>
  );
};

export default Section;

