import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  User,
  Settings,
  Users,
  LogOut,
  Building,
  Shield,
  ChevronRight
} from 'lucide-react';
import Avatar from '../ui/Avatar';

/**
 * Accessible Profile Dropdown Menu for Top Navbar
 * Supports click-outside, Escape key dismissal, keyboard arrow navigation, and roving focus.
 */
export default function ProfileDropdown({
  isOpen,
  onClose,
  onOpenProfile,
  triggerRef,
  user
}) {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [feedbackMsg, setFeedbackMsg] = useState('');

  // Define interactive menu options
  const menuItems = [
    {
      id: 'my-profile',
      label: 'My Profile',
      icon: User,
      action: () => {
        onClose();
        onOpenProfile();
      }
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      action: () => {
        onClose();
        navigate('/settings');
      }
    },
    {
      id: 'team',
      label: 'Team Members',
      icon: Users,
      action: () => {
        onClose();
        navigate('/users');
      }
    },
    {
      id: 'sign-out',
      label: 'Sign Out (Demo)',
      icon: LogOut,
      isDanger: true,
      badge: 'Demo',
      action: () => {
        setFeedbackMsg('Signed out of demo session.');
        setTimeout(() => {
          setFeedbackMsg('');
          onClose();
        }, 1200);
      }
    }
  ];

  // Reset focus index when dropdown opens/closes
  useEffect(() => {
    if (isOpen) {
      setFocusedIndex(0);
      setFeedbackMsg('');
    } else {
      setFocusedIndex(-1);
    }
  }, [isOpen]);

  // Handle click outside and Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        triggerRef?.current &&
        !triggerRef.current.contains(e.target)
      ) {
        onClose();
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        triggerRef?.current?.focus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, triggerRef]);

  // Handle arrow key navigation inside menu
  const handleMenuKeyDown = (e) => {
    if (!isOpen) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIndex((prev) => (prev + 1) % menuItems.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length);
    } else if (e.key === 'Home') {
      e.preventDefault();
      setFocusedIndex(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setFocusedIndex(menuItems.length - 1);
    } else if (e.key === 'Tab') {
      // Allow tab to close or cycle
      onClose();
    }
  };

  // Focus the item when focusedIndex changes
  useEffect(() => {
    if (isOpen && focusedIndex >= 0 && dropdownRef.current) {
      const buttons = dropdownRef.current.querySelectorAll('[role="menuitem"]');
      if (buttons[focusedIndex]) {
        buttons[focusedIndex].focus();
      }
    }
  }, [isOpen, focusedIndex]);

  if (!isOpen) return null;

  return (
    <div
      id="profile-dropdown-menu"
      ref={dropdownRef}
      className="profile-dropdown"
      role="menu"
      aria-label="User account menu"
      onKeyDown={handleMenuKeyDown}
    >
      {/* User Header Summary */}
      <div className="profile-dropdown-header">
        <div className="profile-dropdown-user">
          <Avatar
            src={user.avatarUrl}
            name={user.name}
            size="md"
            showStatus
          />
          <div className="profile-dropdown-user-details">
            <span className="profile-dropdown-name">{user.name}</span>
            <span className="profile-dropdown-email">{user.email}</span>
            <span className="profile-dropdown-org-badge">
              <Building size={11} style={{ marginRight: 3 }} />
              {user.organization?.name || 'Aster Technologies'}
            </span>
          </div>
        </div>
      </div>

      {feedbackMsg && (
        <div className="profile-dropdown-feedback" role="status">
          {feedbackMsg}
        </div>
      )}

      {/* Primary Actions */}
      <div className="profile-dropdown-section" role="none">
        {menuItems.slice(0, 3).map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              type="button"
              className="profile-dropdown-item"
              role="menuitem"
              tabIndex={focusedIndex === index ? 0 : -1}
              onClick={item.action}
              onMouseEnter={() => setFocusedIndex(index)}
            >
              <Icon size={16} className="profile-item-icon" aria-hidden="true" />
              <span>{item.label}</span>
              <ChevronRight size={14} className="profile-item-chevron" aria-hidden="true" />
            </button>
          );
        })}
      </div>

      <div className="profile-dropdown-divider" role="separator" />

      {/* Secondary / Session Action */}
      <div className="profile-dropdown-section" role="none">
        {menuItems.slice(3).map((item, index) => {
          const actualIndex = index + 3;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              type="button"
              className={`profile-dropdown-item ${item.isDanger ? 'profile-dropdown-item-danger' : ''}`}
              role="menuitem"
              tabIndex={focusedIndex === actualIndex ? 0 : -1}
              onClick={item.action}
              onMouseEnter={() => setFocusedIndex(actualIndex)}
            >
              <Icon size={16} className="profile-item-icon" aria-hidden="true" />
              <span>{item.label}</span>
              {item.badge && <span className="profile-item-badge">{item.badge}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
