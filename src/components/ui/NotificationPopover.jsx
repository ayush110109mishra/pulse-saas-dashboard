import React, { useEffect, useRef } from 'react';
import { CheckCheck, CreditCard, Activity, UserPlus, ShieldAlert, Bell, Check } from 'lucide-react';
import { useNotifications } from '../../context/NotificationContext';

const TYPE_ICONS = {
  billing: CreditCard,
  system: Activity,
  team: UserPlus,
  security: ShieldAlert
};

/**
 * Dropdown popover for notifications anchored in Navbar
 */
export default function NotificationPopover({ isOpen, onClose }) {
  const { notifications, unreadCount, markAsRead, markAllAsRead } = useNotifications();
  const popoverRef = useRef(null);

  // Click outside and Escape key listener
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        onClose();
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="notif-popover" ref={popoverRef} role="dialog" aria-label="Notifications popover">
      <div className="notif-popover-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontWeight: 600, fontSize: 'var(--font-sm)', color: 'var(--text-primary)' }}>
            Notifications
          </span>
          {unreadCount > 0 && (
            <span className="notif-unread-count-pill">
              {unreadCount} new
            </span>
          )}
        </div>
        {unreadCount > 0 && (
          <button
            type="button"
            className="notif-mark-all-btn"
            onClick={markAllAsRead}
            title="Mark all notifications as read"
          >
            <CheckCheck size={14} />
            <span>Mark all read</span>
          </button>
        )}
      </div>

      <div className="notif-popover-body">
        {notifications.length === 0 ? (
          <div className="notif-empty-state">
            <Bell size={24} style={{ color: 'var(--text-muted)' }} />
            <p style={{ fontSize: 'var(--font-xs)', color: 'var(--text-secondary)' }}>
              No notifications at this time
            </p>
          </div>
        ) : (
          notifications.map((notif) => {
            const Icon = TYPE_ICONS[notif.type] || Bell;
            return (
              <div
                key={notif.id}
                className={`notif-item ${!notif.isRead ? 'unread' : ''}`}
                onClick={() => markAsRead(notif.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    markAsRead(notif.id);
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <div className={`notif-type-icon notif-icon-${notif.type}`}>
                  <Icon size={14} />
                </div>
                <div className="notif-content">
                  <div className="notif-title-row">
                    <span className="notif-title">{notif.title}</span>
                    <span className="notif-time">{notif.timeAgo}</span>
                  </div>
                  <p className="notif-desc">{notif.description}</p>
                </div>
                {!notif.isRead && <span className="notif-unread-dot" title="Unread" />}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
