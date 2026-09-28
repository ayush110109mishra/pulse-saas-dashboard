import React from 'react';
import { Settings, Save, Sliders, BellRing, Key, CreditCard } from 'lucide-react';
import {
  PageHeader,
  Button,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '../components/ui';

export default function SettingsPage() {
  const tabs = [
    { label: 'General', icon: Sliders, active: true },
    { label: 'Notifications', icon: BellRing, active: false },
    { label: 'Security & API Keys', icon: Key, active: false },
    { label: 'Billing & Plan', icon: CreditCard, active: false }
  ];

  return (
    <div className="settings-page">
      <PageHeader
        title="Settings & Workspace Preferences"
        description="Configure organization details, API tokens, and notification preferences."
        actions={
          <Button variant="primary" size="md" leftIcon={<Save size={15} />} disabled>
            Save Changes
          </Button>
        }
      />

      {/* Settings Navigation Tabs */}
      <div
        style={{
          display: 'flex',
          gap: 'var(--space-2)',
          borderBottom: '1px solid var(--border-default)',
          marginBottom: 'var(--space-6)',
          overflowX: 'auto',
          paddingBottom: '1px'
        }}
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.label}
              type="button"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                padding: 'var(--space-2-5) var(--space-4)',
                borderBottom: tab.active ? '2px solid var(--primary-500)' : '2px solid transparent',
                color: tab.active ? 'var(--primary-600)' : 'var(--text-secondary)',
                fontWeight: tab.active ? 600 : 500,
                fontSize: 'var(--font-sm)',
                whiteSpace: 'nowrap'
              }}
            >
              <Icon size={16} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div className="placeholder-card">
        <div className="placeholder-icon">
          <Settings size={28} />
        </div>
        <Badge variant="primary">Phase 04 Roadmap</Badge>
        <h2 className="placeholder-title">Workspace Configuration</h2>
        <p className="placeholder-desc">
          Workspace settings, SSO/SAML integration, webhooks, and billing management
          are scheduled for Phase 04.
        </p>
      </div>
    </div>
  );
}
