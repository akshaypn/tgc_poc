export const mockKarmaTransactions = [
  {
    id: 1,
    type: 'earned',
    amount: 15,
    reason: 'Attended event',
    event: 'React Native Workshop: Build Your First App',
    date: '2024-11-08',
    balance: 450,
  },
  {
    id: 2,
    type: 'earned',
    amount: 15,
    reason: 'Attended event',
    event: 'Sunset Acoustic Jam Session',
    date: '2024-11-05',
    balance: 435,
  },
  {
    id: 3,
    type: 'earned',
    amount: 15,
    reason: 'Attended event',
    event: 'Yoga & Meditation Morning',
    date: '2024-11-03',
    balance: 420,
  },
  {
    id: 4,
    type: 'earned',
    amount: 15,
    reason: 'Attended event',
    event: 'Street Photography Walk',
    date: '2024-10-30',
    balance: 405,
  },
  {
    id: 5,
    type: 'earned',
    amount: 15,
    reason: 'Attended event',
    event: 'Community Dance Flash Mob Practice',
    date: '2024-10-28',
    balance: 390,
  },
  {
    id: 6,
    type: 'earned',
    amount: 15,
    reason: 'Attended event',
    event: 'Sustainable Living Workshop',
    date: '2024-10-25',
    balance: 375,
  },
  {
    id: 7,
    type: 'earned',
    amount: 15,
    reason: 'Attended event',
    event: 'Startup Pitch Night',
    date: '2024-10-22',
    balance: 360,
  },
  {
    id: 8,
    type: 'earned',
    amount: 15,
    reason: 'Attended event',
    event: 'Cooking Masterclass: Indian Street Food',
    date: '2024-10-20',
    balance: 345,
  },
  {
    id: 9,
    type: 'earned',
    amount: 15,
    reason: 'Attended event',
    event: 'Python for Data Science Bootcamp',
    date: '2024-10-18',
    balance: 330,
  },
  {
    id: 10,
    type: 'earned',
    amount: 15,
    reason: 'Attended event',
    event: 'UI/UX Design Sprint: Product Redesign',
    date: '2024-10-15',
    balance: 315,
  },
];

export const karmaRules = {
  attendEvent: 15,
  hostEvent: 25,
  firstReview: 5,
  helpfulReview: 2,
  joinCommunity: 5,
  verifiedMisconduct: -50,
};

export const karmaBadges = [
  {
    id: 1,
    name: 'Newcomer',
    description: 'Welcome to TGC!',
    icon: '🌱',
    threshold: 0,
  },
  {
    id: 2,
    name: 'Active Member',
    description: 'Attended 5+ events',
    icon: '⭐',
    threshold: 100,
  },
  {
    id: 3,
    name: 'Community Builder',
    description: 'Attended 15+ events',
    icon: '🏆',
    threshold: 250,
  },
  {
    id: 4,
    name: 'Super Star',
    description: 'Attended 30+ events',
    icon: '🌟',
    threshold: 500,
  },
  {
    id: 5,
    name: 'Legend',
    description: 'Attended 50+ events',
    icon: '👑',
    threshold: 750,
  },
];

export const getCurrentBadge = (karma) => {
  const badges = [...karmaBadges].reverse();
  return badges.find(badge => karma >= badge.threshold) || karmaBadges[0];
};

