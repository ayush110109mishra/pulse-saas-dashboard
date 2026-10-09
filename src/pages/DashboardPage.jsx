import React, { useState } from 'react';
import { Download, RefreshCw, ArrowUpRight, TrendingUp, Calendar } from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';
import {
  dateRangeOptions,
  getDashboardKpiMetrics,
  getDashboardRevenueSeries,
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
  Badge,
  Skeleton,
  ChartTooltip
} from '../components/ui';
import { formatCurrency } from '../utils/formatters';

export default function DashboardPage() {
  const [selectedRange, setSelectedRange] = useState('30d');
  const [isLoading, setIsLoading] = useState(false);

  // Range-responsive data
  const kpiMetrics = getDashboardKpiMetrics(selectedRange) || [];
  const revenueSeries = getDashboardRevenueSeries(selectedRange) || [];

  // Compute total revenue for the current view
  const periodTotalRevenue = revenueSeries.reduce((acc, curr) => acc + (curr?.revenue || 0), 0);

  // Range display labels
  const rangeLabels = {
    '7d': 'Last 7 Days',
    '30d': 'Last 30 Days',
    '90d': 'Last 90 Days',
    'ytd': 'Year to Date'
  };

  // Functional refresh interaction
  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 550);
  };

  const handleExport = () => {
    alert(`Exporting ${rangeLabels[selectedRange]} report in CSV format (mock action)...`);
  };

  return (
    <div className="dashboard-page">
      {/* Page Header with Functional Controls */}
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
              onClick={handleExport}
            >
              Export Report
            </Button>
          </>
        }
      />

      {/* KPI Cards Grid - Reacts dynamically to selectedRange */}
      <section className="kpi-grid" aria-label="Key Performance Indicators">
        {kpiMetrics.map((metric) => (
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

      {/* Main Grid: Interactive Revenue Chart & Recent Activity */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.8fr) minmax(0, 1.2fr)',
          gap: 'var(--space-5)',
          marginTop: 'var(--space-6)'
        }}
        className="dashboard-content-grid"
      >
        {/* Interactive Revenue Analytics Chart */}
        <Card className="chart-card">
          <CardHeader>
            <div>
              <CardTitle>Revenue & Trajectory</CardTitle>
              <CardDescription>
                Gross revenue trajectory for {rangeLabels[selectedRange]}
              </CardDescription>
            </div>
            <div className="chart-header-actions">
              <span className="chart-metric-badge">
                {formatCurrency(periodTotalRevenue)} Total
              </span>
            </div>
          </CardHeader>
          <CardContent>
            {/* Custom Legend */}
            <div className="chart-legend-custom">
              <div className="chart-legend-item">
                <span className="chart-legend-dot" style={{ backgroundColor: '#2563eb' }} />
                <span>Actual Revenue</span>
              </div>
              <div className="chart-legend-item">
                <span className="chart-legend-dot" style={{ backgroundColor: '#94a3b8' }} />
                <span>Target Benchmark</span>
              </div>
            </div>

            {isLoading ? (
              <div style={{ height: 260, display: 'flex', flexDirection: 'column', gap: 12, justifyContent: 'center' }}>
                <Skeleton width="100%" height="220px" borderRadius="var(--radius-md)" />
              </div>
            ) : (
              <div className="chart-container" style={{ height: 260, width: '100%' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={revenueSeries}
                    margin={{ top: 10, right: 10, left: -15, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="100%">
                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.35} />
                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0.0} />
                      </linearGradient>
                      <linearGradient id="targetFill" x1="0" y1="0" x2="0" y2="100%">
                        <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.15} />
                        <stop offset="95%" stopColor="#94a3b8" stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="var(--border-subtle)"
                    />
                    <XAxis
                      dataKey="label"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: 'var(--text-muted)', fontSize: 12 }}
                      dy={8}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: 'var(--text-muted)', fontSize: 12 }}
                      tickFormatter={(val) => (val >= 1000 ? `$${val / 1000}k` : `$${val}`)}
                    />
                    <Tooltip content={<ChartTooltip isCurrency={true} />} />
                    <Area
                      type="monotone"
                      dataKey="target"
                      name="Target"
                      stroke="#94a3b8"
                      strokeWidth={1.5}
                      strokeDasharray="4 4"
                      fillOpacity={1}
                      fill="url(#targetFill)"
                    />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      name="Revenue"
                      stroke="#2563eb"
                      strokeWidth={2.5}
                      fillOpacity={1}
                      fill="url(#revenueFill)"
                      activeDot={{ r: 6, fill: '#2563eb', stroke: '#ffffff', strokeWidth: 2 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Enhanced Recent Activity Feed */}
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
              onClick={() => alert('Full audit log will be accessible in Phase 03.')}
            >
              View all
            </Button>
          </CardHeader>
          <CardContent style={{ padding: '0 var(--space-5)' }}>
            {isLoading ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px 0' }}>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <Skeleton width="32px" height="32px" borderRadius="var(--radius-full)" />
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <Skeleton width="80%" height="14px" />
                      <Skeleton width="40%" height="11px" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <ul style={{ listStyle: 'none' }}>
                {(mockRecentActivity || []).map((activity, idx) => (
                  <li
                    key={activity.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: 'var(--space-3-5, 14px) 0',
                      borderBottom:
                        idx !== (mockRecentActivity || []).length - 1
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
            )}
          </CardContent>
        </Card>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .dashboard-content-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
