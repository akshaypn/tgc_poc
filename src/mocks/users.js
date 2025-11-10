export const mockUsers = [
  {
    id: 1,
    name: 'Alex Kumar',
    username: '@alexkumar',
    email: 'alex@example.com',
    role: 'participant',
    avatar: 'https://i.pravatar.cc/150?img=1',
    coverPhoto: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800',
    bio: 'Tech enthusiast | Music lover | Community builder',
    interests: ['Technology', 'Music', 'Photography', 'Coding'],
    skills: ['Web Development', 'Guitar', 'Event Planning'],
    karma: 450,
    memberSince: '2024-01-15',
    eventsAttended: 23,
    eventsHosted: 5,
    communitiesJoined: 8,
  },
  {
    id: 2,
    name: 'Priya Singh',
    username: '@priyasingh',
    email: 'priya@example.com',
    role: 'participant',
    avatar: 'https://i.pravatar.cc/150?img=5',
    coverPhoto: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800',
    bio: 'Artist & Designer | Yoga instructor | Chai lover ☕',
    interests: ['Art', 'Yoga', 'Design', 'Sustainability'],
    skills: ['UI/UX Design', 'Painting', 'Yoga Teaching'],
    karma: 680,
    memberSince: '2023-11-20',
    eventsAttended: 34,
    eventsHosted: 12,
    communitiesJoined: 6,
  },
  {
    id: 3,
    name: 'Rahul Mehta',
    username: '@rahulm',
    email: 'rahul@example.com',
    role: 'superadmin',
    avatar: 'https://i.pravatar.cc/150?img=12',
    coverPhoto: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    bio: 'Community Manager @ TGC | Building connections',
    interests: ['Community Building', 'Startups', 'Sports'],
    skills: ['Event Management', 'Public Speaking', 'Cricket'],
    karma: 1200,
    memberSince: '2023-08-10',
    eventsAttended: 56,
    eventsHosted: 28,
    communitiesJoined: 15,
  },
  {
    id: 4,
    name: 'Maya Patel',
    username: '@mayapatel',
    email: 'maya@example.com',
    role: 'participant',
    avatar: 'https://i.pravatar.cc/150?img=9',
    coverPhoto: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800',
    bio: 'Dance choreographer | Fitness coach | Foodie',
    interests: ['Dance', 'Fitness', 'Food', 'Travel'],
    skills: ['Choreography', 'Personal Training', 'Cooking'],
    karma: 520,
    memberSince: '2024-02-05',
    eventsAttended: 18,
    eventsHosted: 8,
    communitiesJoined: 5,
  },
];

export const getCurrentUser = () => {
  return mockUsers[0]; // Default to Alex Kumar
};

export const getAdminUser = () => {
  return mockUsers[2]; // Rahul Mehta
};

