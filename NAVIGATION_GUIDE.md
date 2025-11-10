# TGC Prototype - Quick Navigation Guide

## 🚀 Getting Started

The app is now running at: **http://localhost:3000**

## 🔐 Login Options

When you first open the app, you'll see the login screen with two demo options:

1. **Login as Participant** - Regular user experience (Alex Kumar)
2. **Login as SuperAdmin** - Full admin access (Rahul Mehta)

## 📍 Quick Access URLs

### Participant Features
- **Home/Discover Events**: http://localhost:3000/
- **My Tickets**: http://localhost:3000/tickets
- **Profile Dashboard**: http://localhost:3000/profile
- **Edit Profile**: http://localhost:3000/profile/edit
- **Communities**: http://localhost:3000/communities
- **Community Feed (Social Posts)**: http://localhost:3000/communities/1/chat
- **Karma History**: http://localhost:3000/karma
- **Notifications**: http://localhost:3000/notifications

### Event Details (Examples)
- **Event #1 (React Native Workshop)**: http://localhost:3000/events/1
- **Event #2 (Sunset Acoustic Jam)**: http://localhost:3000/events/2
- **Event #3 (Yoga & Meditation)**: http://localhost:3000/events/3

### Community Details (Examples)
- **Tech Innovators**: http://localhost:3000/communities/1
- **Music Circle**: http://localhost:3000/communities/2
- **Fitness Hub**: http://localhost:3000/communities/3

### Admin Features (Login as SuperAdmin first)
- **Admin Dashboard**: http://localhost:3000/admin
- **Create Event**: http://localhost:3000/admin/create-event
- **Venue Management**: http://localhost:3000/admin/venues
- **Payouts & Reports**: http://localhost:3000/admin/payouts

## 🎯 Demo Flow Suggestions

### Flow 1: Event Discovery & Registration
1. Login as Participant
2. Browse events on home page
3. Use filters (Category: Technology, Type: Workshop)
4. Click on "React Native Workshop"
5. View event details
6. Click "Buy Ticket"
7. Complete mock purchase
8. View ticket in "My Tickets"

### Flow 2: Community Engagement (Social Feed)
1. Navigate to Communities
2. Browse and join "Tech Innovators Bangalore"
3. View community details
4. Click "View Feed"
5. See social feed with posts
6. Like/comment/share posts
7. Create your own post
8. View trending hashtags (desktop)

### Flow 3: Profile & Karma
1. Go to Profile
2. View karma points and badges
3. Check event history
4. Click "View Karma History"
5. See transaction ledger

### Flow 4: Admin Operations
1. Logout and login as SuperAdmin
2. Go to Admin Dashboard
3. View analytics overview
4. Click "Create Event"
5. Fill out event form
6. Navigate to Venue Management
7. View Payouts & Reports

## 🎨 Testing Features

### Theme Switching
- Click the sun/moon icon in the header to toggle light/dark mode

### Responsive Design
- Resize browser window to see mobile, tablet, and desktop layouts
- On mobile: bottom navigation appears
- On desktop: sidebar navigation is visible

### Navigation
- All cards are clickable
- All buttons navigate correctly
- Back navigation works throughout

## 📱 Mobile Testing

Open in Chrome DevTools mobile view:
1. Press F12 to open DevTools
2. Click device toolbar icon (Ctrl+Shift+M)
3. Select iPhone or any mobile device
4. See mobile-optimized layout with bottom navigation

## 🔍 What to Look For

### Design System
✅ Consistent color palette (Indigo, Pink, Green)
✅ Material Design components
✅ Proper spacing (4px grid)
✅ Smooth transitions and hover effects
✅ Shadow/elevation system

### UX Features
✅ Clear visual hierarchy
✅ Intuitive navigation
✅ Loading states (mock)
✅ Empty states with helpful messages
✅ Form validation feedback
✅ Role-based access (participant vs admin)

### Content
✅ Mock events with varied types
✅ Community data with members/events
✅ User profiles with karma system
✅ Chat messages
✅ Notifications
✅ Transaction history

## 🎭 Mock Interactions

The following interactions are simulated:
- Login (instant, no real authentication)
- Payment processing (2-second delay)
- Form submissions (redirects after save)
- Filter/search (client-side only)
- Theme toggle (persists to localStorage)
- Navigation (React Router)

## ⚠️ Known Limitations

This is a UI/UX prototype only:
- No backend API calls
- No real data persistence
- No actual file uploads
- No real payment processing
- No live chat (static messages)
- No QR scanning functionality

## 💡 Tips

1. **Test both user roles** - The admin view has additional features
2. **Try all filters** - Event discovery has multiple filter options
3. **Check responsiveness** - Resize to see different layouts
4. **Toggle theme** - See both light and dark modes
5. **Explore all screens** - Use the navigation guide above

## 🐛 Issues?

If you encounter any issues:
1. Check browser console (F12)
2. Ensure you're on http://localhost:3000
3. Clear browser cache if needed
4. Restart dev server: `npm run dev`

---

**Enjoy exploring the TGC prototype!** 🎉

