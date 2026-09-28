import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Menu,
  Search,
  Bell,
  ChevronDown
} from 'lucide-react';
import { currentUser } from '../../data/mockUser';
import Input from '../ui/Input';
import IconButton from '../ui/IconButton';
import Avatar from '../ui/Avatar';

const routeTitles = {
  '/': 'Dashboard',
  '/analytics': 'Analytics',
  '/users': 'Users & Teams',
  '/settings': 'Settings'
};

/**
 * Top Navbar component
 */
export default function Navbar({ onToggleMobileMenu }) {
  const location = useLocation();
  const currentTitle = routeTitles[location.pathname] || 'Pulse';
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="app-navbar" role="banner">
      {/* Left: Mobile Toggle & Page Title */}
      <div className="navbar-left">
        <button
          type="button"
          className="mobile-toggle-btn"
          onClick={onToggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <Menu size={22} />
        </button>

        <h2 className="navbar-title">{currentTitle}</h2>
      </div>

      {/* Center: Search UI / Trigger */}
      <div className="navbar-search-wrapper">
        <Input
          leftIcon={<Search size={16} />}
          shortcut="⌘K"
          placeholder="Search metrics, users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search dashboard"
        />
      </div>

      {/* Right: Actions, Notifications & Profile */}
      <div className="navbar-right">
        <IconButton
          ariaLabel={`Notifications (${currentUser.notificationsCount} unread)`}
          hasBadge={currentUser.notificationsCount > 0}
        >
          <Bell size={18} />
        </IconButton>

        <div className="navbar-divider" aria-hidden="true" />

        {/* User Profile Trigger */}
        <div
          className="user-profile-trigger"
          tabIndex={0}
          role="button"
          aria-label={`User profile: ${currentUser.name}`}
          aria-haspopup="menu"
        >
          <Avatar
            src={currentUser.avatarUrl}
            name={currentUser.name}
            size="sm"
            showStatus
          />
          <div className="user-profile-info">
            <span className="user-profile-name">{currentUser.name}</span>
            <span className="user-profile-role">{currentUser.role}</span>
          </div>
          <ChevronDown size={14} style={{ color: 'var(--text-muted)' }} />
        </div>
      </div>
    </header>
  );
}
