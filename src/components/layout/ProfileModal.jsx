import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Settings,
  Mail,
  MapPin,
  Calendar,
  Phone,
  Briefcase,
  Building,
  ShieldCheck,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import Modal from '../ui/Modal';
import Avatar from '../ui/Avatar';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

/**
 * Accessible User Profile Modal component
 * Displays detailed information about the currently logged-in mock user
 */
export default function ProfileModal({ isOpen, onClose, user }) {
  const navigate = useNavigate();

  if (!user) return null;

  const handleGoToSettings = () => {
    onClose();
    navigate('/settings');
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="User Profile"
      subtitle="Personal account & workspace membership"
      maxWidth="540px"
      footer={
        <>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button
            variant="primary"
            leftIcon={<Settings size={15} />}
            onClick={handleGoToSettings}
          >
            Edit in Settings
          </Button>
        </>
      }
    >
      <div className="profile-modal-body">
        {/* Top Header Card */}
        <div className="profile-modal-hero">
          <Avatar
            src={user.avatarUrl}
            name={user.name}
            size="lg"
            showStatus
          />
          <div className="profile-modal-hero-details">
            <div className="profile-modal-hero-title-row">
              <h3 className="profile-modal-name">{user.name}</h3>
              <Badge variant="success" icon={<CheckCircle size={12} />}>
                {user.status || 'Active'}
              </Badge>
            </div>
            <p className="profile-modal-role-subtitle">
              {user.role} at {user.organization?.name || 'Aster Technologies'}
            </p>
            <div className="profile-modal-badges">
              <Badge variant="primary">{user.role}</Badge>
              <Badge variant="neutral">{user.organization?.tier || 'Growth Plan'}</Badge>
            </div>
          </div>
        </div>

        {/* Profile Information Grid */}
        <div className="profile-modal-section-title">Contact & Organization</div>
        <div className="profile-modal-grid">
          <div className="profile-modal-info-item">
            <Mail size={16} className="profile-modal-info-icon" />
            <div className="profile-modal-info-content">
              <span className="profile-modal-info-label">Email Address</span>
              <span className="profile-modal-info-value">{user.email}</span>
            </div>
          </div>

          <div className="profile-modal-info-item">
            <Building size={16} className="profile-modal-info-icon" />
            <div className="profile-modal-info-content">
              <span className="profile-modal-info-label">Organization</span>
              <span className="profile-modal-info-value">{user.organization?.name || 'Aster Technologies'}</span>
            </div>
          </div>

          <div className="profile-modal-info-item">
            <Briefcase size={16} className="profile-modal-info-icon" />
            <div className="profile-modal-info-content">
              <span className="profile-modal-info-label">Department</span>
              <span className="profile-modal-info-value">{user.department || 'Product'}</span>
            </div>
          </div>

          <div className="profile-modal-info-item">
            <MapPin size={16} className="profile-modal-info-icon" />
            <div className="profile-modal-info-content">
              <span className="profile-modal-info-label">Location</span>
              <span className="profile-modal-info-value">{user.location || 'Bengaluru, India'}</span>
            </div>
          </div>

          <div className="profile-modal-info-item">
            <Phone size={16} className="profile-modal-info-icon" />
            <div className="profile-modal-info-content">
              <span className="profile-modal-info-label">Phone</span>
              <span className="profile-modal-info-value">{user.phone || '+91 98201 23456'}</span>
            </div>
          </div>

          <div className="profile-modal-info-item">
            <Calendar size={16} className="profile-modal-info-icon" />
            <div className="profile-modal-info-content">
              <span className="profile-modal-info-label">Member Since</span>
              <span className="profile-modal-info-value">{user.joinedAt || '12 Jan 2025'}</span>
            </div>
          </div>
        </div>

        {/* Workspace Tier Info Card */}
        <div className="profile-modal-tier-box">
          <div className="profile-modal-tier-header">
            <ShieldCheck size={16} className="profile-modal-tier-icon" />
            <span className="profile-modal-tier-title">Workspace Tier</span>
          </div>
          <p className="profile-modal-tier-text">
            Active on the <strong>{user.organization?.tier || 'Growth Plan'}</strong> with full analytical reporting and team collaboration features. Profile and notification preferences can be customized under Settings.
          </p>
        </div>
      </div>
    </Modal>
  );
}
