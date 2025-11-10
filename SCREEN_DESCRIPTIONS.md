# TGC Prototype - Screen-by-Screen Visual Guide

## 🎨 Visual Description of Each Screen

This guide describes what you'll see on each screen to help navigate and understand the prototype.

---

## Authentication Screens

### 1. Welcome/Login Screen (`/login`)
**Visual Elements:**
- Large TGC logo with gradient (Indigo → Pink)
- Tagline: "Learn • Earn • Entertain • Grow"
- Phone number input field
- "Continue with OTP" button (Primary, Indigo)
- "OR" divider
- "Continue with Google" button (Outlined)
- "Continue with Facebook" button (Outlined)
- Demo login buttons for testing
- Clean white card on gradient background

**Key Features:**
- Mobile-optimized layout
- Smooth transitions
- Demo mode for easy testing

---

### 2. Profile Setup Screen (`/setup-profile`)
**Visual Elements:**
- Large circular avatar placeholder
- Camera icon for photo upload
- Full name text field
- Bio text area (3 rows)
- Interest chips (clickable tags)
- Suggested interests list
- Back and Complete Setup buttons

**Key Features:**
- Interactive chip selection
- Add custom interests
- Form validation
- Profile preview

---

## Participant Screens

### 3. Home/Discovery Screen (`/`)
**Visual Elements:**
- Page title: "Discover Events"
- Tab navigation: All Events | Free Events | Paid Gigs
- Filter panel with:
  - Search bar
  - Category dropdown
  - Type dropdown
  - Price filter
  - Date filter
- Active filter chips
- Event count display
- Grid of event cards (3 columns on desktop, 1 on mobile)

**Event Card Contains:**
- Event image (200px height)
- Type badge (Workshop/Gig/etc.)
- Availability status (Available/Limited/Full)
- Event title
- Description preview (2 lines)
- Date and time
- Location
- Participants count
- Host avatar and name
- Rating stars
- Price (or "Free" or "Earn ₹X")
- "View Details" button

**Key Features:**
- Real-time filtering
- Responsive grid
- Hover effects on cards
- Visual availability indicators

---

### 4. Event Detail Screen (`/events/:id`)
**Visual Elements:**
- Hero image (400px height)
- Event type and category chips
- Event title overlay on image
- Two-column layout (content + sidebar)

**Left Column:**
- About This Event section
- Event description
- Date, time, location info with icons
- Participant count
- Required skills chips
- Tags
- Reviews section with:
  - Overall rating (large stars)
  - Individual reviews
  - User avatars
  - Review text

**Right Column (Sticky):**
- Host information:
  - Avatar (56px)
  - Name
  - Karma points
- Price display (large)
- "Buy Ticket" or "Register Now" button
- "Join Event Chat" button
- Attendee avatars (AvatarGroup)

**Key Features:**
- Parallax-style hero
- Sticky sidebar
- Interactive reviews
- Clear call-to-action

---

### 5. Ticket Purchase Screen (`/events/:id/purchase`)
**Visual Elements:**
- Page title based on event type
- Two-column layout

**Left Column:**
- Event details card:
  - Event name
  - Date and time
  - Location
- Payment method selector:
  - UPI (with icon)
  - Credit/Debit Card (with icon)
  - Wallet (with icon)
- Dynamic payment fields based on selection

**Right Column (Sticky):**
- Order summary:
  - Ticket price
  - Platform fee (if applicable)
  - GST (if applicable)
  - Total amount
- Info alert for gigs
- "Pay Now" or "Complete Registration" button
- Karma points note

**Key Features:**
- Mock payment processing
- Clear pricing breakdown
- Responsive forms
- Loading state on submit

---

### 6. My Tickets Screen (`/tickets`)
**Visual Elements:**
- Page title: "My Tickets"
- Tab navigation: Upcoming (X) | Past (X)
- Grid of ticket cards (2 columns on desktop)

**Ticket Card Contains:**
- Event thumbnail (100px)
- Event type chip
- Event title
- Date and time with icons
- Location with icon
- QR code (120x120, only for upcoming)
- Ticket ID
- "View Details" button
- "Show QR" or "Rate Event" button

**Key Features:**
- Interactive QR codes
- Tab switching
- Empty states
- Quick actions

---

### 7. Profile Screen (`/profile`)
**Visual Elements:**
- Cover photo (200px height)
- Large profile avatar (120px) overlapping cover
- Name and username
- Member since date
- Edit Profile button
- Bio text
- Interest chips
- Karma badge card with gradient background:
  - Badge emoji (🌱⭐🏆🌟👑)
  - Badge name
  - Karma points count
- Stats cards grid (3 columns):
  - Events Attended
  - Events Hosted
  - Communities Joined
- Skills section with outlined chips
- Action buttons: View Karma History | My Tickets

**Key Features:**
- Visual hierarchy
- Gradient karma display
- Stat cards with icons
- Profile completeness

---

### 8. Edit Profile Screen (`/profile/edit`)
**Visual Elements:**
- Page title: "Edit Profile"
- Profile photo upload (120px avatar)
- Cover photo upload (200px)
- Camera icons for uploads
- Full name field
- Bio text area (4 rows)
- Interests section:
  - Current interest chips (deletable)
  - Add new interest input
  - Add button
- Skills section:
  - Current skill chips (deletable)
  - Add new skill input
  - Add button
- Cancel and Save Changes buttons

**Key Features:**
- Image upload UI (preview only)
- Dynamic chip management
- Form validation
- Unsaved changes warning (implied)

---

### 9. Community List Screen (`/communities`)
**Visual Elements:**
- Page title: "Communities"
- Tab navigation: Discover | My Communities (X)
- Search bar
- Community count display
- Grid of community cards (3 columns)

**Community Card Contains:**
- Community image (180px height)
- Category chip
- Privacy badge (if private)
- "Joined" badge (if applicable)
- Community name
- Description preview (2 lines)
- Member count with icon
- Event count with icon
- Creator avatar and name
- "Join Community" or "View Community" button

**Key Features:**
- Search filtering
- Join/leave actions
- Visual membership status
- Category badges

---

### 10. Community Detail Screen (`/communities/:id`)
**Visual Elements:**
- Hero cover photo (300px)
- Category chip
- Community name overlay
- Member and event counts
- Two-column layout

**Left Column:**
- About section with description
- Tag chips
- Tab navigation: Events | Members | About
- Content based on active tab:
  - Events: Grid of event cards
  - Members: Avatar group (20 members)
  - About: Community guidelines

**Right Column (Sticky):**
- Creator information
- "Join Community" or "Leave Community" button
- "Open Chat" button (if joined)
- Creation date

**Key Features:**
- Tabbed content
- Sticky action panel
- Member visualization
- Clear guidelines

---

### 11. Community Feed Screen (`/communities/:id/chat`)
**Visual Elements:**
- Header with back button, "Community" title, and "+ Post" button
- Two-column layout (Feed + Trending sidebar on desktop)

**Main Feed:**
- "What's happening in your community?" post composer:
  - User avatar
  - Multiline text input
  - Image upload button
  - Post button (rounded pill)
- Social posts feed:
  - User avatar
  - User name and username
  - Timestamp ("2h ago")
  - Post content text
  - Post image (if attached)
  - Hashtag chips (clickable, blue)
  - Action bar:
    - Heart icon with like count
    - Comment icon with count
    - Share icon with count
  - More options menu (3 dots)

**Trending Sidebar (Desktop Only):**
- "# Trending" section:
  - Hashtag list with counts
  - Clickable hashtags
- Community Info card:
  - Member count
  - Event count
  - "Leave Community" button

**Key Features:**
- Social media-style feed
- Like/unlike posts (interactive)
- Post creation
- Trending hashtags
- Responsive (sidebar hides on mobile)

---

### 12. Event Chat Screen (`/events/:id/chat`)
**Visual Elements:**
- (Same layout as Community Chat)
- Event name in header
- Participant count
- Event-specific messages

---

### 13. Karma History Screen (`/karma`)
**Visual Elements:**
- Two-column layout

**Left Column:**
- Large karma badge card (gradient)
- "How to Earn Karma" list:
  - +15 Attend event
  - +25 Host event
  - +5 Leave review
  - +5 Join community
- Badges section:
  - 5 badge cards
  - Active badges highlighted
  - Grayed out locked badges
  - Progress indicators

**Right Column:**
- Transaction History
- List of transactions:
  - Circular icon (green for earned)
  - Reason
  - Points badge (+15)
  - Event name
  - Date and balance

**Key Features:**
- Visual karma progression
- Badge unlocking visualization
- Complete transaction log
- Clear earning mechanics

---

### 14. Rating Screen (`/events/:id/review`)
**Visual Elements:**
- Page title: "Rate Your Experience"
- Event image (200px)
- Event title
- Date and location
- "How would you rate this event?"
- Large rating stars (clickable, 3rem size)
- Review text area (6 rows)
- Helper text about karma
- "Skip for Now" and "Submit Review" buttons

**Key Features:**
- Large interactive stars
- Multiline review input
- Skip option
- Submit validation

---

### 15. Notifications Screen (`/notifications`)
**Visual Elements:**
- Page title: "Notifications"
- Tab navigation: Unread (X) | All
- List of notifications:
  - Circular avatar with emoji icon
  - "New" chip (if unread)
  - Title (bold if unread)
  - Message text
  - Time ago
  - More options button
- Empty state if no notifications

**Notification Types:**
- 📅 Event reminder
- ⭐ Karma earned
- 👥 Community invite
- 📝 Event update
- ⭐ Review request

**Key Features:**
- Read/unread status
- Time formatting
- Clickable notifications
- Empty state

---

## SuperAdmin Screens

### 16. Admin Dashboard (`/admin`)
**Visual Elements:**
- Page header with "Create Event" button
- Stats cards grid (4 columns):
  - Total Events (blue)
  - Upcoming Events (pink)
  - Total Participants (green)
  - Total Revenue (amber)
- Two-column layout

**Left Column:**
- Recent Events section
- Event performance cards:
  - Event name
  - Participant count
  - Revenue
  - Progress bar
- "View All Events" button

**Right Column:**
- Quick Actions panel:
  - Create New Event
  - Manage Venues
  - Process Payouts
- Growth card:
  - Trending icon
  - +23% monthly growth

**Key Features:**
- At-a-glance metrics
- Performance visualization
- Quick action shortcuts
- Growth indicators

---

### 17. Create Event Screen (`/admin/create-event`)
**Visual Elements:**
- Page title: "Create New Event"
- Sectioned form:

**Basic Information:**
- Event title field
- Event type dropdown
- Category dropdown
- Description textarea (4 rows)
- Upload image button

**Date & Time:**
- Date picker
- Time picker
- Duration field

**Location:**
- Venue dropdown
- Address field

**Requirements & Pricing:**
- Max participants number
- Fee input (₹)
- Helper text for pricing
- Required skills:
  - Current chips
  - Add skill input
- Tags:
  - Current chips
  - Add tag input

- Cancel and Create Event buttons

**Key Features:**
- Multi-section form
- Dynamic chip management
- Field validation
- Image upload UI
- Helper texts

---

### 18. Venue Management Screen (`/admin/venues`)
**Visual Elements:**
- Page header with "Add Venue" button
- Grid of venue cards (2 columns)

**Venue Card Contains:**
- Venue name
- Address
- Availability chip (Available/Booked)
- Capacity (people)
- Events hosted count
- Edit and View Details buttons

**Add Venue Dialog:**
- Venue name field
- Address field
- Capacity field
- Cancel and Add Venue buttons

**Key Features:**
- CRUD operations
- Status indicators
- Modal dialogs
- Grid layout

---

### 19. Payouts & Reports Screen (`/admin/payouts`)
**Visual Elements:**
- Page header with "Export Report" button
- Stats cards (3 columns):
  - Total Revenue
  - Pending Payouts
  - Completed Payouts
- Tab navigation: All Payouts | Pending | Completed
- Data table:
  - Event Name
  - Host
  - Amount
  - Date
  - Status chip
  - Action button (Process/View)

**Key Features:**
- Tabulated data
- Status filtering
- Action buttons
- Export functionality (UI)
- Financial overview

---

## Navigation Elements

### Desktop Sidebar (>960px)
- TGC logo
- Tagline
- Navigation items:
  - Home
  - Communities
  - My Tickets
  - Profile
  - Karma
  - Notifications
- Admin section (if SuperAdmin):
  - Dashboard
  - Create Event
  - Venues
  - Payouts
- Selected state highlighting

### Mobile Bottom Nav (<960px)
- 4 tabs with icons:
  - Home
  - Communities
  - Tickets
  - Profile
- Active tab highlighted
- Fixed to bottom

### App Header (All Screens)
- TGC logo (clickable)
- Theme toggle (sun/moon icon)
- Notifications bell (with badge)
- User avatar (clickable)
- User menu dropdown:
  - Profile
  - Edit Profile
  - Karma History
  - Admin Dashboard (if admin)
  - Logout

---

## Design Patterns

### Empty States
- Icon or illustration
- "No X found" heading
- Helpful message
- Action button (when applicable)

### Loading States
- Button text changes to "Processing..."
- Disabled state
- (No spinners in this prototype)

### Error States
- Validation messages
- Required field indicators
- Form helper texts

### Success States
- Navigation to success page
- (No toast notifications in prototype)

---

## Color Usage

### Primary (Indigo)
- Main CTAs
- Active states
- Links
- Primary chips

### Secondary (Pink)
- Featured content
- Secondary buttons
- Highlights

### Accent (Green)
- Success states
- Available status
- Positive actions

### Warning (Amber)
- Limited availability
- Pending states
- Attention items

---

This visual guide should help you understand what to expect when navigating through the prototype. All screens are fully interactive and connected!

