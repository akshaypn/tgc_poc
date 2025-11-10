import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Paper,
  TextField,
  IconButton,
  Avatar,
  Chip,
  Button,
  Divider,
  Grid,
} from '@mui/material';
import {
  Image as ImageIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  ChatBubbleOutline as CommentIcon,
  Share as ShareIcon,
  MoreVert as MoreIcon,
  ArrowBack as BackIcon,
} from '@mui/icons-material';
import PageContainer from '../../components/common/Layout/PageContainer';
import { getCommunityById } from '../../mocks/communities';
import { mockPosts, mockTrendingHashtags } from '../../mocks/messages';
import { useAuth } from '../../context/AuthContext';

const CommunityChatScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [postContent, setPostContent] = useState('');
  const [posts, setPosts] = useState(mockPosts);
  const community = getCommunityById(id);

  if (!community) {
    return (
      <PageContainer>
        <Typography>Community not found</Typography>
      </PageContainer>
    );
  }

  const handlePost = () => {
    if (postContent.trim()) {
      // Mock create post
      setPostContent('');
    }
  };

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  const getTimeAgo = (timestamp) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diff = Math.floor((now - time) / 1000);
    
    if (diff < 60) return 'Just now';
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  };

  const formatCount = (count) => {
    if (count >= 1000) return `${(count / 1000).toFixed(0)}k`;
    return count;
  };

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      {/* Header */}
      <Paper 
        sx={{ 
          p: 2, 
          position: 'sticky', 
          top: 0, 
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <IconButton onClick={() => navigate('/communities')}>
          <BackIcon />
        </IconButton>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" fontWeight={700}>
            Community
          </Typography>
        </Box>
        <Button variant="contained" color="primary" onClick={() => {}}>
          + Post
        </Button>
      </Paper>

      <Grid container spacing={0}>
        {/* Main Feed */}
        <Grid item xs={12} md={8}>
          <Box sx={{ maxWidth: 600, mx: 'auto' }}>
            {/* Create Post */}
            <Paper sx={{ p: 2.5, mb: 1 }}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Avatar src={user?.avatar} />
                <Box sx={{ flex: 1 }}>
                  <TextField
                    fullWidth
                    multiline
                    rows={2}
                    placeholder="What's happening in your community?"
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                      sx: { fontSize: '1.125rem' },
                    }}
                  />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                    <IconButton color="primary" size="small">
                      <ImageIcon />
                    </IconButton>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handlePost}
                      disabled={!postContent.trim()}
                      sx={{ borderRadius: 50, px: 3 }}
                    >
                      Post
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Paper>

            {/* Posts Feed */}
            {posts.map((post) => (
              <Paper key={post.id} sx={{ p: 2.5, mb: 1 }}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Avatar src={post.user.avatar} />
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <Box>
                        <Typography variant="subtitle2" fontWeight={700}>
                          {post.user.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {post.user.username} · {getTimeAgo(post.timestamp)}
                        </Typography>
                      </Box>
                      <IconButton size="small">
                        <MoreIcon fontSize="small" />
                      </IconButton>
                    </Box>

                    <Typography variant="body1" sx={{ mt: 1.5, mb: 1.5, lineHeight: 1.6 }}>
                      {post.content}
                    </Typography>

                    {post.image && (
                      <Box
                        component="img"
                        src={post.image}
                        sx={{
                          width: '100%',
                          borderRadius: 2,
                          mb: 1.5,
                          maxHeight: 400,
                          objectFit: 'cover',
                        }}
                      />
                    )}

                    <Box sx={{ display: 'flex', gap: 1, mb: 1.5 }}>
                      {post.hashtags.map((tag) => (
                        <Chip
                          key={tag}
                          label={`#${tag}`}
                          size="small"
                          clickable
                          sx={{ 
                            bgcolor: 'transparent',
                            color: 'primary.main',
                            '&:hover': {
                              bgcolor: 'action.hover',
                            },
                          }}
                        />
                      ))}
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                      <IconButton 
                        size="small" 
                        onClick={() => handleLike(post.id)}
                        color={post.isLiked ? 'error' : 'default'}
                      >
                        {post.isLiked ? <FavoriteIcon fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />}
                      </IconButton>
                      <Typography variant="body2" color="text.secondary">
                        {post.likes}
                      </Typography>

                      <IconButton size="small">
                        <CommentIcon fontSize="small" />
                      </IconButton>
                      <Typography variant="body2" color="text.secondary">
                        {post.comments}
                      </Typography>

                      <IconButton size="small">
                        <ShareIcon fontSize="small" />
                      </IconButton>
                      <Typography variant="body2" color="text.secondary">
                        {post.shares}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            ))}
          </Box>
        </Grid>

        {/* Trending Sidebar - Desktop Only */}
        <Grid item xs={12} md={4} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box sx={{ position: 'sticky', top: 80, p: 2 }}>
            <Paper sx={{ p: 2.5 }}>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                # Trending
              </Typography>
              <Divider sx={{ mb: 2 }} />
              {mockTrendingHashtags.map((item) => (
                <Box
                  key={item.tag}
                  sx={{
                    py: 1.5,
                    cursor: 'pointer',
                    '&:hover': {
                      bgcolor: 'action.hover',
                      borderRadius: 1,
                    },
                    px: 1,
                  }}
                >
                  <Typography variant="subtitle2" color="primary" fontWeight={600}>
                    #{item.tag}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {formatCount(item.count)}
                  </Typography>
                </Box>
              ))}
            </Paper>

            <Paper sx={{ p: 2.5, mt: 2 }}>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Community Info
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Box sx={{ mb: 2 }}>
                <Typography variant="caption" color="text.secondary">
                  Members
                </Typography>
                <Typography variant="subtitle2" fontWeight={600}>
                  {community.members.toLocaleString()}
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="caption" color="text.secondary">
                  Events
                </Typography>
                <Typography variant="subtitle2" fontWeight={600}>
                  {community.events}
                </Typography>
              </Box>
              <Button
                variant="outlined"
                color="error"
                size="small"
                fullWidth
              >
                Leave Community
              </Button>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CommunityChatScreen;

