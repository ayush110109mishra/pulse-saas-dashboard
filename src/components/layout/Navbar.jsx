import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Menu,
  Search,
  Bell,
  ChevronDown,
  Sun,
  Moon
} from 'lucide-react';
import { currentUser } from '../../data/mockUser';
import { useNotifications } from '../../context/NotificationContext';
import { useTheme } from '../../context/ThemeContext';
import Input from '../ui/Input';
import IconButton from '../ui/IconButton';
import Avatar from '../ui/Avatar';
import NotificationPopover from '../ui/NotificationPopover';

const routeTitles = {
  '/': 'Dashboard',
  '/analytics': 'Analytics',
  '/users': 'Users & Teams',
  '/settings': 'Settings'
};

/**
 * Top Navbar component with live notification center and keyboard shortcuts
 */
export default function Navbar({ onToggleMobileMenu }) {
  const location = useLocation();
  const currentTitle = routeTitles[location.pathname] || 'Pulse';
  const [searchQuery, setSearchQuery] = useState('');
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const searchInputRef = useRef(null);

  const { unreadCount } = useNotifications();
  const { resolvedTheme, toggleTheme } = useTheme();

  // Global Cmd+K / Ctrl+K keyboard shortcut to focus search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
          ref={searchInputRef}
          leftIcon={<Search size={16} />}
          shortcut="⌘K"
          placeholder="Search metrics, users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search dashboard (Press Command K to focus)"
        />
      </div>

      {/* Right: Actions, Notifications & Profile */}
      <div className="navbar-right" style={{ position: 'relative' }}>
        {/* Theme Toggle */}
        <IconButton
          ariaLabel={resolvedTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          onClick={toggleTheme}
          title={resolvedTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          {resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </IconButton>

        <div style={{ position: 'relative' }}>
          <IconButton
            ariaLabel={`Notifications (${unreadCount} unread)`}
            hasBadge={unreadCount > 0}
            onClick={() => setIsNotifOpen((prev) => !prev)}
            aria-expanded={isNotifOpen}
          >
            <Bell size={18} />
          </IconButton>

          <NotificationPopover
            isOpen={isNotifOpen}
            onClose={() => setIsNotifOpen(false)}
          />
        </div>

        <div className="navbar-divider" aria-hidden="true" />

        {/* User Profile Trigger */}
        <div
          className="user-profile-trigger"
          tabIndex={0}
          role="button"
          aria-label={`User profile: ${currentUser.name}`}
          aria-haspopup="menu"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              alert(`Logged in as ${currentUser.name} (${currentUser.role})`);
            }
          }}
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
