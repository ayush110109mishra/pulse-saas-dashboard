import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
  Activity,
  X
} from 'lucide-react';
import { currentUser } from '../../data/mockUser';

const navItems = [
  {
    path: '/',
    label: 'Dashboard',
    icon: LayoutDashboard,
    badge: null
  },
  {
    path: '/analytics',
    label: 'Analytics',
    icon: BarChart3,
    badge: 'Pro'
  },
  {
    path: '/users',
    label: 'Users',
    icon: Users,
    badge: null
  },
  {
    path: '/settings',
    label: 'Settings',
    icon: Settings,
    badge: null
  }
];

/**
 * Main application sidebar with navigation and workspace branding.
 */
export default function Sidebar({ isOpen, onClose }) {
  return (
    <aside className={`app-sidebar ${isOpen ? 'mobile-open' : ''}`}>
      {/* Brand Header */}
      <div className="sidebar-header">
        <NavLink to="/" className="sidebar-brand" onClick={onClose}>
          <div className="brand-icon-wrapper">
            <Activity size={20} strokeWidth={2.5} />
          </div>
          <span className="brand-text">Pulse</span>
          <span className="brand-badge">v0.1</span>
        </NavLink>

        {/* Mobile close button */}
        {isOpen && (
          <button
            type="button"
            className="icon-btn mobile-close-btn"
            onClick={onClose}
            aria-label="Close navigation sidebar"
            style={{ color: '#94a3b8' }}
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Navigation Section */}
      <nav className="sidebar-nav-container" aria-label="Main Navigation">
        <span className="sidebar-section-title">Navigation</span>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                `sidebar-nav-link ${isActive ? 'active' : ''}`
              }
            >
              <Icon className="nav-icon" />
              <span>{item.label}</span>
              {item.badge && <span className="nav-badge">{item.badge}</span>}
            </NavLink>
          );
        })}
      </nav>

      {/* Workspace Footer */}
      <div className="sidebar-footer">
        <div className="workspace-card">
          <div className="workspace-icon">
            {currentUser.organization.name.slice(0, 1)}
          </div>
          <div className="workspace-info">
            <span className="workspace-name">{currentUser.organization.name}</span>
            <span className="workspace-tier">{currentUser.organization.tier}</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
