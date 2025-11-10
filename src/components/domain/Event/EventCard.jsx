import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
  Chip,
  Avatar,
  Button,
  Rating,
} from '@mui/material';
import {
  Place as LocationIcon,
  CalendarToday as CalendarIcon,
  People as PeopleIcon,
  AttachMoney as MoneyIcon,
} from '@mui/icons-material';

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const getFeeDisplay = (fee) => {
    if (fee === 0) return 'Free';
    if (fee < 0) return `Earn ₹${Math.abs(fee)}`;
    return `₹${fee}`;
  };

  const getAvailability = () => {
    const remaining = event.maxParticipants - event.currentParticipants;
    const percentage = (remaining / event.maxParticipants) * 100;
    
    if (percentage === 0) return { text: 'Full', color: 'error' };
    if (percentage < 20) return { text: `${remaining} spots left`, color: 'warning' };
    return { text: 'Available', color: 'success' };
  };

  const availability = getAvailability();

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
      }}
      onClick={() => navigate(`/events/${event.id}`)}
    >
      <CardMedia
        component="img"
        height="200"
        image={event.image}
        alt={event.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', gap: 1, mb: 1, flexWrap: 'wrap' }}>
          <Chip label={event.type} size="small" color="primary" />
          <Chip label={availability.text} size="small" color={availability.color} />
        </Box>

        <Typography variant="h6" gutterBottom>
          {event.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {event.description}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
          <CalendarIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
          <Typography variant="body2" color="text.secondary">
            {new Date(event.date).toLocaleDateString('en-IN', {
              month: 'short',
              day: 'numeric',
            })} • {event.time}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
          <LocationIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
          <Typography variant="body2" color="text.secondary" noWrap>
            {event.location}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 2 }}>
          <PeopleIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
          <Typography variant="body2" color="text.secondary">
            {event.currentParticipants}/{event.maxParticipants} joined
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <Avatar src={event.host.avatar} sx={{ width: 24, height: 24 }} />
          <Typography variant="caption" color="text.secondary">
            by {event.host.name}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Rating value={event.rating} precision={0.1} size="small" readOnly />
          <Typography variant="caption" color="text.secondary">
            ({event.reviews})
          </Typography>
        </Box>
      </CardContent>

      <CardActions sx={{ p: 2, pt: 0 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <Typography variant="h6">
            {getFeeDisplay(event.fee)}
          </Typography>
          <Button variant="contained" color="primary" size="small">
            View Details
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default EventCard;

