import React, { useState } from 'react';
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  InputAdornment,
  Paper,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const EventFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    search: '',
    category: 'all',
    type: 'all',
    fee: 'all',
    date: 'all',
  });

  const handleChange = (field, value) => {
    const newFilters = { ...filters, [field]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const categories = [
    'All',
    'Technology',
    'Music',
    'Wellness',
    'Design',
    'Photography',
    'Dance',
    'Sustainability',
    'Business',
    'Cooking',
  ];

  const types = ['All', 'Workshop', 'Learning', 'Entertainment', 'Gig'];

  return (
    <Paper sx={{ p: 2, mb: 3 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          fullWidth
          placeholder="Search events..."
          value={filters.search}
          onChange={(e) => handleChange('search', e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <FormControl sx={{ minWidth: 150, flex: 1 }}>
            <InputLabel>Category</InputLabel>
            <Select
              value={filters.category}
              label="Category"
              onChange={(e) => handleChange('category', e.target.value)}
            >
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat.toLowerCase()}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 150, flex: 1 }}>
            <InputLabel>Type</InputLabel>
            <Select
              value={filters.type}
              label="Type"
              onChange={(e) => handleChange('type', e.target.value)}
            >
              {types.map((type) => (
                <MenuItem key={type} value={type.toLowerCase()}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 150, flex: 1 }}>
            <InputLabel>Price</InputLabel>
            <Select
              value={filters.fee}
              label="Price"
              onChange={(e) => handleChange('fee', e.target.value)}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="free">Free</MenuItem>
              <MenuItem value="paid">Paid</MenuItem>
              <MenuItem value="gig">Paid Gigs</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 150, flex: 1 }}>
            <InputLabel>Date</InputLabel>
            <Select
              value={filters.date}
              label="Date"
              onChange={(e) => handleChange('date', e.target.value)}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="today">Today</MenuItem>
              <MenuItem value="week">This Week</MenuItem>
              <MenuItem value="month">This Month</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {(filters.search || filters.category !== 'all' || filters.type !== 'all' || filters.fee !== 'all') && (
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {filters.search && (
              <Chip
                label={`Search: ${filters.search}`}
                onDelete={() => handleChange('search', '')}
                size="small"
              />
            )}
            {filters.category !== 'all' && (
              <Chip
                label={`Category: ${filters.category}`}
                onDelete={() => handleChange('category', 'all')}
                size="small"
              />
            )}
            {filters.type !== 'all' && (
              <Chip
                label={`Type: ${filters.type}`}
                onDelete={() => handleChange('type', 'all')}
                size="small"
              />
            )}
            {filters.fee !== 'all' && (
              <Chip
                label={`Price: ${filters.fee}`}
                onDelete={() => handleChange('fee', 'all')}
                size="small"
              />
            )}
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default EventFilters;

