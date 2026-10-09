# Pulse — SaaS Analytics Dashboard

[![React 18](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0.1-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?style=flat-square&logo=react-router)](https://reactrouter.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

**Pulse** is a modern, high-performance SaaS analytics dashboard designed to visualize mission-critical business metrics including revenue trajectories, active users, order volume, and conversion funnels.

Built with clean architectural boundaries, Pulse separates presentation from data so that mock data can be swapped for production API endpoints without modifying UI components.

---

## 🚀 Phase 01 Highlights

- **Shared Layout Shell:** Fixed dark-slate sidebar with active navigation state, collapsible responsive mobile drawer with backdrop blur, and top navbar.
- **Dynamic Routing:** Integrated React Router v6 for client-side routing between `/` (Dashboard), `/analytics` (Analytics), `/users` (Users & Teams), and `/settings` (Settings).
- **Reusable KPI Cards:** 4 core metric cards (Total Revenue, Active Users, Total Orders, Conversion Rate) rendered dynamically from structured mock data.
- **Design System:** Native CSS custom property token system for typography (`Inter` & `Plus Jakarta Sans`), 4px/8px spacing grid, elevated shadows, and semantic colors.
- **UI States Foundation:** Built-in shimmer loading skeletons (`Skeleton.jsx`), disabled states, accessible keyboard focus rings (`:focus-visible`), and error handling.
- **Responsive Architecture:** Fluid reflow across desktop (>1200px), tablet (768px–1024px), and mobile (<768px) with zero horizontal overflow.

---

## 🛠️ Tech Stack

- **Framework:** React 18 (`react`, `react-dom`)
- **Language:** JavaScript (ES6+)
- **Build Tool:** Vite
- **Routing:** React Router DOM (v6)
- **Icons:** Lucide React (`lucide-react`)
- **Charts:** Recharts (`recharts` v2)
- **Styling:** CSS3 Custom Properties (Design System tokens)

---

 

## ⚡ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ayush110109mishra/pulse-saas-dashboard.git
   cd pulse-saas-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build locally:
   ```bash
   npm run preview
   ```

---

## 📊 Data Flow Architecture

The data layer is completely decoupled from UI components:

```
[src/data/mockMetrics.js]  ──>  [src/pages/DashboardPage.jsx]  ──>  [src/components/ui/KpiCard.jsx]
(Raw Data Objects)               (Maps over metrics array)           (Renders badges, values & icons)
```

In future phases, `mockMetrics.js` can be replaced with an API query (`TanStack Query`, `SWR`, or native `fetch`) without altering component JSX.

---

## 🗺️ Roadmap

- [x] **Phase 01:** Application foundation, product shell, design system, and mock data layer.
- [x] **Phase 02:** Interactive analytics charts (Recharts), reactive date-range filtering (7d/30d/90d/YTD), conversion funnels, and deep-dive Analytics page.
- [ ] **Phase 03:** User and team management directory with RBAC permissions.
- [ ] **Phase 04:** Workspace settings, API keys, audit logs, and billing controls.

---

## 👤 Author

**Ayush Mishra**
- GitHub: [@ayush110109mishra](https://github.com/ayush110109mishra)

---

## 📄 License

This project is licensed under the MIT License.
