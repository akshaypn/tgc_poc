import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Paper,
  Rating,
  TextField,
} from '@mui/material';
import PageContainer from '../../components/common/Layout/PageContainer';
import { getEventById } from '../../mocks/events';

const RatingScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = getEventById(id);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  if (!event) {
    return (
      <PageContainer>
        <Typography>Event not found</Typography>
      </PageContainer>
    );
  }

  const handleSubmit = () => {
    // Mock submit review
    navigate('/tickets');
  };

  return (
    <PageContainer maxWidth={700}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h2" gutterBottom sx={{ textAlign: 'center' }}>
          Rate Your Experience
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Box
            component="img"
            src={event.image}
            sx={{
              width: '100%',
              height: 200,
              objectFit: 'cover',
              borderRadius: 2,
              mb: 2,
            }}
          />
          <Typography variant="h3" gutterBottom>
            {event.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {new Date(event.date).toLocaleDateString('en-IN')} • {event.location}
          </Typography>
        </Box>

        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography variant="body1" gutterBottom>
            How would you rate this event?
          </Typography>
          <Rating
            value={rating}
            onChange={(e, newValue) => setRating(newValue)}
            size="large"
            sx={{ fontSize: '3rem' }}
          />
        </Box>

        <TextField
          fullWidth
          multiline
          rows={6}
          label="Write your review"
          placeholder="Share your experience with others..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          sx={{ mb: 3 }}
        />

        <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
          Your review will help others make informed decisions and earn you karma points!
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="outlined" fullWidth onClick={() => navigate('/tickets')}>
            Skip for Now
          </Button>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
            disabled={rating === 0}
          >
            Submit Review
          </Button>
        </Box>
      </Paper>
    </PageContainer>
  );
};

export default RatingScreen;

