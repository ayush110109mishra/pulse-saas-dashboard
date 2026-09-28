import React from 'react';
import { BarChart3, TrendingUp, Filter, Sparkles } from 'lucide-react';
import {
  PageHeader,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge
} from '../components/ui';

export default function AnalyticsPage() {
  return (
    <div className="analytics-page">
      <PageHeader
        title="Analytics & Deep Dive"
        description="Detailed cohort analysis, retention funnels, and revenue metrics."
        actions={
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <Button variant="secondary" size="md" leftIcon={<Filter size={15} />} disabled>
              Add Filter
            </Button>
            <Button variant="primary" size="md" leftIcon={<Sparkles size={15} />} disabled>
              Generate AI Insights
            </Button>
          </div>
        }
      />

      <div className="placeholder-card">
        <div className="placeholder-icon">
          <BarChart3 size={28} />
        </div>
        <Badge variant="primary">Phase 02 Roadmap</Badge>
        <h2 className="placeholder-title">Advanced Analytics in Development</h2>
        <p className="placeholder-desc">
          Custom chart drilldowns, customer lifetime value models, and retention funnel visualizations
          are scheduled for Phase 02. The routing and layout foundation are fully established.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-2)' }}>
          <Button variant="secondary" onClick={() => window.history.back()}>
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
