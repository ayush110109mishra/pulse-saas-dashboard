import React from 'react';
import { Users, UserPlus, Shield } from 'lucide-react';
import {
  PageHeader,
  Button,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Skeleton
} from '../components/ui';

export default function UsersPage() {
  return (
    <div className="users-page">
      <PageHeader
        title="User & Team Management"
        description="Manage workspace members, assign RBAC permissions, and review invitations."
        actions={
          <Button variant="primary" size="md" leftIcon={<UserPlus size={15} />} disabled>
            Invite Member
          </Button>
        }
      />

      <div className="placeholder-card">
        <div className="placeholder-icon">
          <Users size={28} />
        </div>
        <Badge variant="primary">Phase 03 Roadmap</Badge>
        <h2 className="placeholder-title">Team Management Module</h2>
        <p className="placeholder-desc">
          User directory, role assignments (Admin, Editor, Viewer), and invite workflows
          will be introduced in Phase 03.
        </p>
      </div>

      {/* Mock Table Skeleton to show UI states foundation */}
      <Card style={{ marginTop: 'var(--space-6)' }}>
        <CardHeader>
          <div>
            <CardTitle>Member Roster Preview</CardTitle>
            <CardDescription>Visual preview of the upcoming member directory layout</CardDescription>
          </div>
          <Badge variant="neutral">Skeleton State</Badge>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 'var(--space-2) 0'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                  <Skeleton width="36px" height="36px" borderRadius="var(--radius-full)" />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <Skeleton width="140px" height="14px" />
                    <Skeleton width="90px" height="11px" />
                  </div>
                </div>
                <Skeleton width="80px" height="24px" borderRadius="var(--radius-full)" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
