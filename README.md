# Pulse — Modern SaaS Analytics Dashboard

[![React 18](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0.1-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-v6.28.0-CA4245?style=flat-square&logo=react-router)](https://reactrouter.com/)
[![Tests](https://img.shields.io/badge/Tests-34%20Passed-10b981?style=flat-square)](tests/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

**Pulse** is a responsive, production-ready SaaS analytics dashboard engineered with React 18, modern CSS3 design tokens, Recharts, and Vite. Designed as a real-world enterprise product foundation, Pulse features interactive financial trajectories, conversion funnels, user management with client-side CRUD capabilities, notification workflows, and live theme/density personalization.

The application adheres to clean architectural boundaries: presentation is completely decoupled from data via structured mock stores, allowing future backend or API integration without touching UI components.

---

## 📸 Key Features & Capabilities

### ⚡ Phase 01: Application Shell & Core Design System
- **Responsive Layout:** Dark-slate sidebar navigation with active route highlights, collapsible mobile drawer with backdrop blur, and top navbar.
- **Client-Side Routing:** Built on React Router v6 with seamless page transitions across `/` (Overview), `/analytics` (Analytics), `/users` (Team & Users), and `/settings` (Preferences).
- **Design Tokens:** Strict native CSS custom properties for typography (`Inter` & `Plus Jakarta Sans`), 4px/8px spacing grid, elevated shadows, and semantic colors.
- **Accessible UI Primitives:** Button, Card, Badge, Avatar, Input, Select, Modal, Skeleton shimmer loaders, and KpiCard with custom trends.

### 📊 Phase 02: Interactive Data Visualization
- **Overview Dashboard:** Dynamic KPI cards reacting synchronously to 7-day, 30-day, 90-day, and YTD range selections.
- **Revenue Trajectory Chart:** Area chart displaying actual vs. target benchmark revenue with smooth gradients, custom tooltips, and loading skeletons.
- **Deep-Dive Analytics (`/analytics`):**
  - **Financial Breakdown:** Triple-series bar chart analyzing Gross Revenue, Operating Expenses, and Net Profit.
  - **Cohort Growth:** Multi-line chart tracking New Signups vs. Cancellations vs. Net Growth.
  - **Conversion Funnel:** 5-stage acquisition progression (Visits → Product Views → Trials → Checkouts → Paid Subscriptions) with drop-off percentages.
  - **Acquisition Channels:** Channel breakdown by organic search, direct traffic, referrals, paid media, and social attribution.

### 👥 Phase 03: Product-Level Workflows & Persistence
- **User & Team Management (`/users`):**
  - Data table with client-side multi-field search, role filtering (`All`, `Admin`, `Member`, `Viewer`), status filtering (`All`, `Active`, `Pending`, `Suspended`), column sorting, and pagination (8 items/page).
  - Slide-out **User Detail Drawer** displaying user metadata, activity history, and role badge.
  - **Invite User Modal** with form validation to add team members to local state.
  - Inline row actions: Edit role, resend invite, suspend/activate, and delete with optimistic updates.
- **Notification Center:**
  - Real-time unread badge counter in top navbar.
  - Dropdown popover with categorized events (billing, system, team, security) and timestamp relative badges.
  - Quick actions: Mark individual notification as read or bulk "Mark all read".
- **Multi-Tab Settings (`/settings`):**
  - **Profile:** Editable user details and avatar updates.
  - **Appearance:** Live theme switcher (Light / Dark / System mode) and table display density (Standard / Compact).
  - **Notifications:** Granular email, product, and weekly summary toggle switches.
  - **Team:** Workspace member roster preview and role governance.
  - **LocalStorage Persistence:** Form submissions and preference changes automatically persist across browser reloads.

### 🛡️ Phase 04 & UI Enhancement Pass: Production Polish & Accessibility
- **Complete Theme Switching:**
  - One-click Sun/Moon toggle in top navbar across all routes.
  - Light, Dark, and System modes in Settings → Appearance with real-time OS preference sync (`prefers-color-scheme`).
  - WCAG AA compliant dark mode palette across all charts, tooltips, tables, selects, and status badges.
- **Dashboard Data Parity:** 100% mathematical reconciliation between KPI cards, chart header summaries, and multi-range series.
- **Vite Rollup Optimization:** Custom chunk splitting (`vendor`, `charts`, `icons`) ensuring all output chunks remain strictly under 500 kB.
- **Accessibility:** Global `Cmd+K` / `Ctrl+K` search focus, `Escape` key dismissal for popovers and drawers, `:focus-visible` rings, and `prefers-reduced-motion` support.
- **SPA Fallback Routing:** Zero-config routing fallbacks configured for production hosting via `vercel.json` and `public/_redirects`.
- **Native Test Suite:** 34 automated unit tests utilizing Node 24 native test runner (`node --test`), covering formatters, data contracts, and theme logic.

---

## 🛠️ Architecture & Tech Stack

```
pulse/
├── public/
│   ├── favicon.svg             # SVG favicon
│   └── _redirects              # Netlify SPA rewrite rule
├── src/
│   ├── components/
│   │   ├── layout/             # AppLayout, Navbar, Sidebar
│   │   └── ui/                 # Avatar, Badge, Button, Card, ChartTooltip,
│   │                           # Input, KpiCard, Modal, NotificationPopover,
│   │                           # PageHeader, Select, Skeleton, Toast
│   ├── context/
│   │   └── NotificationContext.jsx # Notification state & unread counts
│   ├── data/
│   │   ├── mockAnalytics.js    # Cohorts, funnels, expenses, channels
│   │   ├── mockMetrics.js      # Dashboard KPIs, revenue trajectory
│   │   └── mockUsers.js        # Seed user database
│   ├── pages/
│   │   ├── DashboardPage.jsx   # / (Overview & KPIs)
│   │   ├── AnalyticsPage.jsx   # /analytics (Deep-dive charts & funnel)
│   │   ├── UsersPage.jsx       # /users (Table, filter, sort, drawer, modal)
│   │   └── SettingsPage.jsx    # /settings (Tabs, appearance, localStorage)
│   ├── styles/
│   │   ├── index.css           # Global reset & layout rules
│   │   ├── utilities.css       # Layout helper classes
│   │   └── variables.css       # CSS design tokens (themes, density, colors)
│   ├── utils/
│   │   └── formatters.js       # Currency, number, and percentage helpers
│   ├── App.jsx                 # App routing definition
│   └── main.jsx                # Theme bootstrap & React DOM render
├── tests/
│   ├── formatters.test.js      # Formatter unit tests
│   └── metrics.test.js         # Data layer contract tests
├── vercel.json                 # Vercel SPA rewrite rule
├── vite.config.js              # Vite build setup with manual chunks
└── package.json
```

---

## ⌨️ Accessibility & Keyboard Navigation

| Shortcut / Trigger | Action |
| :--- | :--- |
| `Cmd + K` or `Ctrl + K` | Instantly focus the global search bar in the navbar |
| `Escape` | Dismiss Notification Popover, User Details Drawer, or Modal |
| `Tab` / `Shift + Tab` | Navigate sequentially through all interactive controls with high-contrast `:focus-visible` rings |
| `Enter` or `Space` | Activate buttons, table actions, and notification item reads |
| `Prefers-Reduced-Motion` | Automatically mutes spinners, transitions, and transforms |

---

## 🧪 Automated Testing

Pulse features a zero-dependency automated test suite leveraging Node.js native test runner (`node:test` and `node:assert/strict`).

Run the automated test suite:
```bash
npm test
```

### Test Coverage Highlights:
- **30 / 30 tests passing** in ~300ms.
- **Currency formatting:** Positive values, zero values, negative values, numeric strings, `null`, `undefined`, and `NaN` guards.
- **Number formatting:** Standard comma separators, boundary zeros, strings, and defensive fallbacks.
- **Percentage formatting:** Positive prefix (`+`), negative (`-`), precision control, and non-number handling.
- **Data Layer Contracts:** Validation of all KPI datasets, chart series, conversion funnel progression, and acquisition channels across all date ranges (`7d`, `30d`, `90d`, `ytd`).

---

## 📦 Bundling & Performance

Vite is configured with chunk splitting via Rollup to avoid monolithic JavaScript bundles and ensure fast initial loads:

```
dist/index.html                  1.06 kB │ gzip:   0.52 kB
dist/assets/index.css           31.59 kB │ gzip:   5.98 kB
dist/assets/icons.js            23.08 kB │ gzip:   5.23 kB
dist/assets/index.js            79.61 kB │ gzip:  19.70 kB
dist/assets/vendor.js          164.66 kB │ gzip:  53.87 kB
dist/assets/charts.js          399.43 kB │ gzip: 115.14 kB
```
- Every vendor and application chunk is kept safely under the 500 kB limit.
- Total gzipped CSS is under 6 kB.

---

## 🚀 Local Development Setup

### Prerequisites
- [Node.js](https://nodejs.org/) v18+ (Node 24 recommended)
- `npm` v9+

### Quickstart

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ayush110109mishra/pulse-saas-dashboard.git
   cd pulse-saas-dashboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local Vite development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Execute unit tests:**
   ```bash
   npm test
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

6. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## 🌐 Production Deployment

Pulse is configured for static hosting with single-page application (SPA) routing:

### Deploy to Vercel
1. Push your changes to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. The build settings are auto-detected (`npm run build`, output directory `dist`).
4. `vercel.json` automatically handles routing all deep paths (`/analytics`, `/users`, `/settings`) to `index.html`.

### Deploy to Netlify
1. Connect the repository in [Netlify](https://netlify.com).
2. Set build command to `npm run build` and publish directory to `dist`.
3. `public/_redirects` ensures all requests redirect to `index.html` with a `200` status.

---

## 📋 Manual QA Checklist

Before deploying or presenting, verify the following core user journeys:

- [x] **Navigation:** Route seamlessly between `/`, `/analytics`, `/users`, and `/settings` without page reloads.
- [x] **Date Filter:** Switch between 7d, 30d, 90d, and YTD on Dashboard and Analytics; observe chart and KPI updates.
- [x] **User Management:** Filter users by role and status, perform live text search, sort columns, switch pagination pages, and click a user row to open the details drawer.
- [x] **Team Member Invite:** Click "Invite User", complete the form, submit, and confirm the new user appears in the table.
- [x] **Notifications:** Open popover via bell icon, click a notification to mark it read, or click "Mark all read" to clear unread badge.
- [x] **Theme Switcher:** In Settings > Appearance, toggle between Light and Dark mode; confirm styles apply instantly and persist upon browser reload.
- [x] **Compact Mode:** Toggle Table Density between Standard and Compact; observe row padding changes in `/users`.
- [x] **Responsive Drawer:** Shrink browser width below 768px; toggle hamburger menu to access sidebar drawer.

---

## 👤 Author

**Ayush Mishra**  
GitHub: [@ayush110109mishra](https://github.com/ayush110109mishra)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
