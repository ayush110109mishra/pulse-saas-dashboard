import React, { useState } from 'react';
import { Download, RefreshCw, ArrowUpRight, TrendingUp } from 'lucide-react';
import {
  dashboardKpiMetrics,
  dateRangeOptions,
  mockRecentActivity
} from '../data/mockMetrics';
import {
  PageHeader,
  Button,
  Select,
  KpiCard,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Avatar,
  Badge
} from '../components/ui';

export default function DashboardPage() {
  const [selectedRange, setSelectedRange] = useState('30d');
  const [isLoading, setIsLoading] = useState(false);

  // Simulate refresh to demonstrate UI loading state foundation
  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  };

  return (
    <div className="dashboard-page">
      {/* Page Header with Controls */}
      <PageHeader
        title="Overview"
        description="Monitor your business performance and key metrics."
        actions={
          <>
            <Select
              options={dateRangeOptions}
              value={selectedRange}
              onChange={(e) => setSelectedRange(e.target.value)}
              aria-label="Filter by date range"
            />
            <Button
              variant="secondary"
              size="md"
              leftIcon={<RefreshCw size={15} className={isLoading ? 'animate-spin' : ''} />}
              onClick={handleRefresh}
              disabled={isLoading}
              title="Refresh metrics"
            >
              Refresh
            </Button>
            <Button
              variant="primary"
              size="md"
              leftIcon={<Download size={15} />}
              onClick={() => alert('Exporting dashboard report (mock action)...')}
            >
              Export Report
            </Button>
          </>
        }
      />

      {/* KPI Cards Grid - Rendered dynamically from mock data */}
      <section className="kpi-grid" aria-label="Key Performance Indicators">
        {dashboardKpiMetrics.map((metric) => (
          <KpiCard
            key={metric.id}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            trend={metric.trend}
            context={metric.context}
            iconName={metric.iconName}
            isLoading={isLoading}
          />
        ))}
      </section>

      {/* Secondary Dashboard Content Sections */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: 'var(--space-5)',
          marginTop: 'var(--space-6)'
        }}
      >
        {/* Performance Overview Preview Card */}
        <Card>
          <CardHeader>
            <div>
              <CardTitle>Revenue & Trajectory</CardTitle>
              <CardDescription>Monthly recurring revenue compared against targets</CardDescription>
            </div>
            <Badge variant="success" icon={<TrendingUp size={12} />}>
              +14.2% YoY
            </Badge>
          </CardHeader>
          <CardContent>
            {/* SVG Visual Graphic Placeholder */}
            <div
              style={{
                height: 200,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                paddingTop: 16,
                position: 'relative'
              }}
            >
              <svg
                viewBox="0 0 500 140"
                style={{ width: '100%', height: '100%', overflow: 'visible' }}
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="revenueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,110 C80,95 120,70 180,75 C240,80 300,45 360,50 C420,55 460,20 500,25 L500,140 L0,140 Z"
                  fill="url(#revenueGradient)"
                />
                <path
                  d="M0,110 C80,95 120,70 180,75 C240,80 300,45 360,50 C420,55 460,20 500,25"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                {/* Visual points */}
                <circle cx="180" cy="75" r="4" fill="#ffffff" stroke="#2563eb" strokeWidth="2.5" />
                <circle cx="360" cy="50" r="4" fill="#ffffff" stroke="#2563eb" strokeWidth="2.5" />
                <circle cx="500" cy="25" r="4" fill="#ffffff" stroke="#2563eb" strokeWidth="2.5" />
              </svg>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingTop: 12,
                  borderTop: '1px solid var(--border-subtle)',
                  fontSize: 'var(--font-xs)',
                  color: 'var(--text-muted)'
                }}
              >
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity Card */}
        <Card>
          <CardHeader>
            <div>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Live events across your customer base</CardDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              rightIcon={<ArrowUpRight size={13} />}
              onClick={() => alert('Navigating to full audit log (Phase 02)...')}
            >
              View all
            </Button>
          </CardHeader>
          <CardContent style={{ padding: '0 var(--space-5)' }}>
            <ul style={{ listStyle: 'none' }}>
              {mockRecentActivity.map((activity, idx) => (
                <li
                  key={activity.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 'var(--space-3-5, 14px) 0',
                    borderBottom:
                      idx !== mockRecentActivity.length - 1
                        ? '1px solid var(--border-subtle)'
                        : 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                    <Avatar src={activity.avatar} name={activity.user} size="sm" />
                    <div>
                      <div style={{ fontSize: 'var(--font-sm)', fontWeight: 500, color: 'var(--text-primary)' }}>
                        {activity.user}{' '}
                        <span style={{ fontWeight: 400, color: 'var(--text-secondary)' }}>
                          {activity.action}
                        </span>
                      </div>
                      <div style={{ fontSize: 'var(--font-xs)', color: 'var(--text-muted)' }}>
                        {activity.time}
                      </div>
                    </div>
                  </div>
                  {activity.amount && (
                    <Badge variant="success">{activity.amount}</Badge>
                  )}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
