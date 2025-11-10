# TGC UI/UX Prototype

A fully navigable React + Material UI prototype for the TGC (The Gig Community) application. This is a **UI/UX demonstration** with no backend functionality - all navigation and interactions are client-side only.

## 🎨 Features

- **18+ Screens**: Complete MVP flow covering authentication, events, communities, profile, and admin
- **Material Design 3**: Custom theming with light/dark mode support
- **Mobile-First**: Responsive design optimized for mobile, tablet, and desktop
- **Role-Based UI**: Different views for Participants and SuperAdmins
- **Mock Data**: Comprehensive sample data for realistic demonstrations
- **Working Navigation**: All buttons and links navigate correctly

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The app will run on `http://localhost:3000`

## 📱 Screen Navigation Map

### Authentication Flow
1. **Login** (`/login`) - Demo login options for Participant and SuperAdmin
2. **Profile Setup** (`/setup-profile`) - First-time user onboarding

### Participant Screens
3. **Home** (`/`) - Event discovery with filters and search
4. **Event Detail** (`/events/:id`) - Full event information
5. **Ticket Purchase** (`/events/:id/purchase`) - Mock payment flow
6. **My Tickets** (`/tickets`) - QR passes and registered events
7. **Profile** (`/profile`) - User dashboard with karma and stats
8. **Edit Profile** (`/profile/edit`) - Update personal information
9. **Communities** (`/communities`) - Discover and join communities
10. **Community Detail** (`/communities/:id`) - Community information
11. **Community Chat** (`/communities/:id/chat`) - Message thread
12. **Event Chat** (`/events/:id/chat`) - Event discussions
13. **Karma History** (`/karma`) - Transaction ledger
14. **Rate Event** (`/events/:id/review`) - Submit feedback
15. **Notifications** (`/notifications`) - Activity feed

### SuperAdmin Screens
16. **Admin Dashboard** (`/admin`) - Analytics overview
17. **Create Event** (`/admin/create-event`) - Multi-step event form
18. **Venue Management** (`/admin/venues`) - Manage venues
19. **Payouts** (`/admin/payouts`) - Transaction management

## 🔐 Demo Accounts

### Participant (Default User)
- **Name**: Alex Kumar
- **Karma**: 450 points
- **Access**: All participant features

### SuperAdmin
- **Name**: Rahul Mehta
- **Karma**: 1200 points
- **Access**: All features + admin dashboard

Use the "Demo Logins" buttons on the login screen to switch between roles.

## 🎨 Design System

### Color Palette

**Light Theme**
- Primary: `#6366F1` (Indigo)
- Secondary: `#EC4899` (Pink)
- Accent: `#10B981` (Green)
- Warning: `#F59E0B` (Amber)

**Dark Theme**
- Primary: `#818CF8` (Light Indigo)
- Secondary: `#F472B6` (Light Pink)
- Accent: `#34D399` (Bright Green)
- Warning: `#FBBF24` (Bright Amber)

### Typography Scale
- Heading XL: 40px / Bold 800
- Heading LG: 28px / Bold 700
- Heading MD: 20px / Bold 700
- Body LG: 18px / Regular 400
- Body MD: 16px / Regular 400
- Body SM: 14px / Regular 400
- Caption: 12px / Regular 400

### Spacing (4px base unit)
- xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px, 2xl: 40px, 3xl: 48px, 4xl: 64px

### Border Radius
- sm: 8px, md: 12px, lg: 16px, xl: 20px, full: 50px

## 📂 Project Structure

```
/data/tgc/
├── src/
│   ├── theme/              # Theme configuration
│   │   ├── tokens.js       # Design tokens
│   │   ├── lightTheme.js   # Light mode theme
│   │   └── darkTheme.js    # Dark mode theme
│   ├── components/
│   │   ├── common/         # Reusable UI components
│   │   │   ├── Layout/     # Page containers, sections
│   │   │   └── Navigation/ # App bar, sidebar, bottom nav
│   │   └── domain/         # Feature-specific components
│   │       ├── Event/      # Event cards, filters
│   │       ├── Community/  # Community cards
│   │       └── Profile/    # Karma badge, stats
│   ├── screens/
│   │   ├── auth/           # Login, profile setup
│   │   ├── participant/    # User screens
│   │   └── admin/          # Admin screens
│   ├── routes/
│   │   └── AppRouter.jsx   # Route configuration
│   ├── context/
│   │   ├── ThemeContext.jsx  # Theme switching
│   │   └── AuthContext.jsx   # Mock authentication
│   ├── mocks/              # Sample data
│   │   ├── events.js
│   │   ├── communities.js
│   │   ├── users.js
│   │   ├── karma.js
│   │   └── messages.js
│   ├── App.jsx             # Root component
│   └── main.jsx            # Entry point
├── package.json
├── vite.config.js
└── index.html
```

## 🎯 Key Components

### Navigation
- **Mobile**: Bottom navigation with 4 tabs (Home, Communities, Tickets, Profile)
- **Desktop**: Persistent sidebar with all navigation items
- **App Bar**: Theme toggle, notifications, user menu

### Event Discovery
- Filters by category, type, price, date
- Search functionality
- Grid layout with responsive cards
- Real-time availability indicators

### Community Features
- Social feed with posts (like Twitter/X)
- Post creation with images and hashtags
- Like, comment, share interactions
- Trending hashtags sidebar
- Member management
- Event listings per community
- Join/leave functionality

### Karma System
- Points for attending events (+15)
- Badge progression (Newcomer → Legend)
- Transaction history
- Visual karma dashboard

### Admin Tools
- Event creation form
- Venue management
- Payout processing (mobile-responsive table/cards)
- Analytics dashboard

## 🔧 Technical Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Material UI v6** - Component library
- **React Router v6** - Navigation
- **Emotion** - CSS-in-JS styling
- **QRCode.react** - QR code generation
- **date-fns** - Date utilities

## 📱 Responsive Breakpoints

- **Mobile**: < 600px (375px baseline)
- **Tablet**: 600px - 960px
- **Desktop**: > 960px

Touch targets are minimum 44px as per accessibility guidelines.

## 🌈 Theme Switching

Toggle between light and dark modes using the button in the app header. Theme preference is saved to localStorage.

## 🎭 Mock Data

The prototype includes realistic mock data:
- **10+ Events** with varied types, categories, and pricing
- **10+ Communities** across different interests
- **Multiple Users** with profiles and karma
- **Transactions** showing karma earning history
- **Messages** for chat demonstrations
- **Notifications** for activity feed

## 🚧 Limitations (Prototype Only)

This is a UI/UX demonstration. The following are NOT implemented:
- Backend API integration
- Real authentication
- Payment processing
- Database persistence
- File uploads (preview only)
- Real-time messaging
- Push notifications
- Actual QR scanning

## 📄 License

This prototype is part of the TGC project proposal by Nuovo Edge Solutions.

## 👥 Credits

**Design & Development**: Based on TGC BRD and Figma Design Guide
**Built with**: Material Design 3 principles
**Icons**: Material Icons
**Images**: Unsplash & Pravatar (demo purposes)

---

For questions or support, refer to the project documentation or contact Nuovo Edge Solutions.

