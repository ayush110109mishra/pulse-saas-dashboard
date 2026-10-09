import React, { useState, useEffect } from 'react';
import {
  Sliders,
  Palette,
  BellRing,
  User,
  Save,
  RotateCcw,
  CheckCircle2,
  Info,
  Sun,
  Moon,
  Laptop
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import {
  PageHeader,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Input,
  Select
} from '../components/ui';

const STORAGE_KEY = 'pulse_dashboard_settings_v4';

const defaultSettings = {
  // General
  workspaceName: 'Aster Technologies',
  workspaceSlug: 'aster-tech',
  timezone: 'Asia/Kolkata',
  currency: 'INR',
  companySize: '11-50',

  // Appearance
  theme: 'system',
  compactTables: false,
  showAnimations: true,

  // Notifications
  emailDigest: 'weekly',
  trafficAlerts: true,
  weeklyRevenueReport: true,
  securityAlerts: true,
  billingInvoices: true,

  // Account
  displayName: 'Aarav Sharma',
  publicEmail: 'aarav.sharma@example.com',
  jobTitle: 'Product Manager',
  bio: 'Leading product analytics and growth operations across web & mobile platforms.'
};

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : defaultSettings;
    } catch {
      return defaultSettings;
    }
  });

  const [feedbackMsg, setFeedbackMsg] = useState('');
  const { theme, setTheme } = useTheme();

  // Keep settings.theme in sync with global theme
  useEffect(() => {
    setSettings((prev) => (prev.theme !== theme ? { ...prev, theme } : prev));
  }, [theme]);

  // Apply density preferences directly to documentElement
  useEffect(() => {
    if (settings.compactTables) {
      document.documentElement.setAttribute('data-density', 'compact');
    } else {
      document.documentElement.removeAttribute('data-density');
    }
  }, [settings.compactTables]);

  const tabs = [
    { id: 'general', label: 'General', icon: Sliders },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'notifications', label: 'Notifications', icon: BellRing },
    { id: 'account', label: 'Account Profile', icon: User }
  ];

  const handleFieldChange = (field, value) => {
    setSettings((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleThemeChange = (newTheme) => {
    handleFieldChange('theme', newTheme);
    setTheme(newTheme);
  };

  const handleSave = (e) => {
    if (e) e.preventDefault();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
      setFeedbackMsg('Workspace preferences saved successfully!');
      setTimeout(() => setFeedbackMsg(''), 4000);
    } catch (err) {
      setFeedbackMsg('Failed to save to local storage.');
    }
  };

  const handleReset = () => {
    if (window.confirm('Reset all preferences back to default settings?')) {
      setSettings(defaultSettings);
      localStorage.removeItem(STORAGE_KEY);
      setTheme('system');
      document.documentElement.removeAttribute('data-density');
      setFeedbackMsg('Preferences reset to default values.');
      setTimeout(() => setFeedbackMsg(''), 4000);
    }
  };

  return (
    <div className="settings-page">
      {/* Page Header */}
      <PageHeader
        title="Settings & Workspace Preferences"
        description="Configure organization metadata, appearance preferences, and notification channels."
        actions={
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <Button
              variant="secondary"
              size="md"
              leftIcon={<RotateCcw size={14} />}
              onClick={handleReset}
            >
              Reset
            </Button>
            <Button
              variant="primary"
              size="md"
              leftIcon={<Save size={15} />}
              onClick={handleSave}
            >
              Save Changes
            </Button>
          </div>
        }
      />

      {/* Success Feedback Banner */}
      {feedbackMsg && (
        <div className="feedback-banner feedback-banner-success">
          <CheckCircle2 size={16} />
          <span>{feedbackMsg}</span>
        </div>
      )}

      {/* Demo Notice Banner */}
      <div className="feedback-banner feedback-banner-info">
        <Info size={16} style={{ flexShrink: 0 }} />
        <span>
          <strong>Local Demo Mode:</strong> Settings adjustments are stored locally in your browser's
          localStorage. No external server changes will occur.
        </span>
      </div>

      {/* Tabs Navigation Bar */}
      <div className="settings-tabs-bar" role="tablist">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`settings-tab-btn ${isActive ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon size={16} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      <Card>
        {/* TAB 1: GENERAL */}
        {activeTab === 'general' && (
          <div>
            <CardHeader>
              <div>
                <CardTitle>General Workspace Settings</CardTitle>
                <CardDescription>
                  Basic configuration and localization parameters for your Pulse organization.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div style={{ maxWidth: '640px' }}>
                <div className="form-row">
                  <label className="form-label">Organization Name</label>
                  <Input
                    value={settings.workspaceName}
                    onChange={(e) => handleFieldChange('workspaceName', e.target.value)}
                    placeholder="e.g. Acme Technologies"
                  />
                  <span className="form-hint">Displayed across reports, top nav, and export headers.</span>
                </div>

                <div className="form-row">
                  <label className="form-label">Workspace URL Slug</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: 'var(--font-sm)', color: 'var(--text-muted)' }}>pulse.io/</span>
                    <Input
                      value={settings.workspaceSlug}
                      onChange={(e) => handleFieldChange('workspaceSlug', e.target.value)}
                      placeholder="acme-tech"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <label className="form-label">Reporting Timezone</label>
                  <Select
                    options={[
                      { value: 'America/New_York', label: 'Eastern Time (US & Canada) — UTC-5' },
                      { value: 'America/Los_Angeles', label: 'Pacific Time (US & Canada) — UTC-8' },
                      { value: 'America/Chicago', label: 'Central Time (US & Canada) — UTC-6' },
                      { value: 'Europe/London', label: 'London, Edinburgh — UTC+0' },
                      { value: 'Europe/Paris', label: 'Paris, Berlin — UTC+1' },
                      { value: 'Asia/Kolkata', label: 'India Standard Time — UTC+5:30' },
                      { value: 'Asia/Tokyo', label: 'Tokyo, Seoul — UTC+9' }
                    ]}
                    value={settings.timezone}
                    onChange={(e) => handleFieldChange('timezone', e.target.value)}
                  />
                </div>

                <div className="form-row">
                  <label className="form-label">Reporting Currency</label>
                  <Select
                    options={[
                      { value: 'INR', label: 'INR (₹) — Indian Rupee' },
                      { value: 'USD', label: 'USD ($) — US Dollar' },
                      { value: 'EUR', label: 'EUR (€) — Euro' },
                      { value: 'GBP', label: 'GBP (£) — British Pound' },
                      { value: 'JPY', label: 'JPY (¥) — Japanese Yen' },
                      { value: 'CAD', label: 'CAD ($) — Canadian Dollar' }
                    ]}
                    value={settings.currency}
                    onChange={(e) => handleFieldChange('currency', e.target.value)}
                  />
                </div>

                <div className="form-row">
                  <label className="form-label">Company Size</label>
                  <Select
                    options={[
                      { value: '1-10', label: '1–10 employees' },
                      { value: '11-50', label: '11–50 employees' },
                      { value: '51-200', label: '51–200 employees' },
                      { value: '201+', label: '201+ employees' }
                    ]}
                    value={settings.companySize}
                    onChange={(e) => handleFieldChange('companySize', e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </div>
        )}

        {/* TAB 2: APPEARANCE */}
        {activeTab === 'appearance' && (
          <div>
            <CardHeader>
              <div>
                <CardTitle>Appearance & Display Preferences</CardTitle>
                <CardDescription>
                  Tailor the visual interface density and layout behavior.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div style={{ maxWidth: '640px' }}>
                <div className="form-row">
                  <label className="form-label">Interface Theme</label>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: 'var(--space-3)',
                      marginBottom: 'var(--space-3)'
                    }}
                    role="radiogroup"
                    aria-label="Interface theme selection"
                  >
                    <button
                      type="button"
                      className={`theme-picker-btn ${settings.theme === 'light' ? 'active' : ''}`}
                      onClick={() => handleThemeChange('light')}
                      role="radio"
                      aria-checked={settings.theme === 'light'}
                      aria-label="Clean Slate Light Theme"
                    >
                      <Sun size={18} />
                      <span style={{ fontWeight: 600 }}>Light</span>
                      <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Clean Slate</span>
                    </button>
                    <button
                      type="button"
                      className={`theme-picker-btn ${settings.theme === 'dark' ? 'active' : ''}`}
                      onClick={() => handleThemeChange('dark')}
                      role="radio"
                      aria-checked={settings.theme === 'dark'}
                      aria-label="Dark Mode Theme"
                    >
                      <Moon size={18} />
                      <span style={{ fontWeight: 600 }}>Dark</span>
                      <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>High Contrast</span>
                    </button>
                    <button
                      type="button"
                      className={`theme-picker-btn ${settings.theme === 'system' ? 'active' : ''}`}
                      onClick={() => handleThemeChange('system')}
                      role="radio"
                      aria-checked={settings.theme === 'system'}
                      aria-label="System Default Theme"
                    >
                      <Laptop size={18} />
                      <span style={{ fontWeight: 600 }}>System</span>
                      <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Match OS</span>
                    </button>
                  </div>

                  <Select
                    options={[
                      { value: 'system', label: 'System Default (Matches Operating System)' },
                      { value: 'light', label: 'Clean Slate Light Mode' },
                      { value: 'dark', label: 'High Contrast Dark Mode' }
                    ]}
                    value={settings.theme}
                    onChange={(e) => handleThemeChange(e.target.value)}
                    aria-label="Select interface theme"
                  />
                  <span className="form-hint">
                    Choose between clean light mode, high-contrast dark mode, or dynamic sync with your OS preferences.
                  </span>
                </div>

                <div className="switch-container">
                  <div className="switch-label-group">
                    <span className="switch-label">Compact Table Rows</span>
                    <span className="switch-subtext">Reduce vertical padding on the user directory and lists.</span>
                  </div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={settings.compactTables}
                      onChange={(e) => handleFieldChange('compactTables', e.target.checked)}
                    />
                    <span className="switch-slider" />
                  </label>
                </div>

                <div className="switch-container">
                  <div className="switch-label-group">
                    <span className="switch-label">Chart Transitions & Animations</span>
                    <span className="switch-subtext">Animate chart bars and area gradients when date filters change.</span>
                  </div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={settings.showAnimations}
                      onChange={(e) => handleFieldChange('showAnimations', e.target.checked)}
                    />
                    <span className="switch-slider" />
                  </label>
                </div>
              </div>
            </CardContent>
          </div>
        )}

        {/* TAB 3: NOTIFICATIONS */}
        {activeTab === 'notifications' && (
          <div>
            <CardHeader>
              <div>
                <CardTitle>Notification Channels & Alerts</CardTitle>
                <CardDescription>
                  Configure frequency and delivery channels for business performance digests.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div style={{ maxWidth: '640px' }}>
                <div className="form-row">
                  <label className="form-label">Email Digest Schedule</label>
                  <Select
                    options={[
                      { value: 'daily', label: 'Daily Executive Digest' },
                      { value: 'weekly', label: 'Weekly Summary (Mondays)' },
                      { value: 'monthly', label: 'Monthly Report (1st of month)' },
                      { value: 'none', label: 'None (Disabled)' }
                    ]}
                    value={settings.emailDigest}
                    onChange={(e) => handleFieldChange('emailDigest', e.target.value)}
                  />
                </div>

                <div className="switch-container">
                  <div className="switch-label-group">
                    <span className="switch-label">Traffic & Conversion Spikes</span>
                    <span className="switch-subtext">Receive alert when visitor traffic surges by &gt; 30% in 1 hour.</span>
                  </div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={settings.trafficAlerts}
                      onChange={(e) => handleFieldChange('trafficAlerts', e.target.checked)}
                    />
                    <span className="switch-slider" />
                  </label>
                </div>

                <div className="switch-container">
                  <div className="switch-label-group">
                    <span className="switch-label">Weekly Revenue Summary</span>
                    <span className="switch-subtext">Automatic comparison against monthly target benchmarks.</span>
                  </div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={settings.weeklyRevenueReport}
                      onChange={(e) => handleFieldChange('weeklyRevenueReport', e.target.checked)}
                    />
                    <span className="switch-slider" />
                  </label>
                </div>

                <div className="switch-container">
                  <div className="switch-label-group">
                    <span className="switch-label">Security & Key Rotation Notices</span>
                    <span className="switch-subtext">Immediate notice when tokens, passwords, or team roles change.</span>
                  </div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={settings.securityAlerts}
                      onChange={(e) => handleFieldChange('securityAlerts', e.target.checked)}
                    />
                    <span className="switch-slider" />
                  </label>
                </div>

                <div className="switch-container">
                  <div className="switch-label-group">
                    <span className="switch-label">Billing Invoices & Receipts</span>
                    <span className="switch-subtext">Receive automated PDF receipts for monthly subscription renewals.</span>
                  </div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={settings.billingInvoices}
                      onChange={(e) => handleFieldChange('billingInvoices', e.target.checked)}
                    />
                    <span className="switch-slider" />
                  </label>
                </div>
              </div>
            </CardContent>
          </div>
        )}

        {/* TAB 4: ACCOUNT PROFILE */}
        {activeTab === 'account' && (
          <div>
            <CardHeader>
              <div>
                <CardTitle>Account Display Profile</CardTitle>
                <CardDescription>
                  Your public profile details shown on member directories and audit logs.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div style={{ maxWidth: '640px' }}>
                <div className="form-row">
                  <label className="form-label">Full Display Name</label>
                  <Input
                    value={settings.displayName}
                    onChange={(e) => handleFieldChange('displayName', e.target.value)}
                  />
                </div>

                <div className="form-row">
                  <label className="form-label">Work Email</label>
                  <Input
                    type="email"
                    value={settings.publicEmail}
                    onChange={(e) => handleFieldChange('publicEmail', e.target.value)}
                  />
                </div>

                <div className="form-row">
                  <label className="form-label">Job Title / Role</label>
                  <Input
                    value={settings.jobTitle}
                    onChange={(e) => handleFieldChange('jobTitle', e.target.value)}
                  />
                </div>

                <div className="form-row">
                  <label className="form-label">Bio</label>
                  <textarea
                    rows={3}
                    className="input-field"
                    style={{ height: 'auto', resize: 'vertical' }}
                    value={settings.bio}
                    onChange={(e) => handleFieldChange('bio', e.target.value)}
                  />
                  <span className="form-hint">Brief description of your role within the organization.</span>
                </div>
              </div>
            </CardContent>
          </div>
        )}

        {/* Card Footer with Actions */}
        <CardFooter>
          <span style={{ fontSize: 'var(--font-xs)', color: 'var(--text-muted)' }}>
            Unsaved changes will be discarded upon navigating away.
          </span>
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <Button variant="secondary" size="md" onClick={handleReset}>
              Reset
            </Button>
            <Button variant="primary" size="md" leftIcon={<Save size={15} />} onClick={handleSave}>
              Save Preferences
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
