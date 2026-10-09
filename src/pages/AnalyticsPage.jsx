import React, { useState } from 'react';
import { Download, RefreshCw, BarChart2, Users, Layers, PieChart as PieChartIcon } from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';
import { dateRangeOptions } from '../data/mockMetrics';
import {
  getAnalyticsKpis,
  getFinancialTrends,
  getUserGrowthSeries,
  getConversionFunnel,
  getAcquisitionChannels
} from '../data/mockAnalytics';
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
  Skeleton,
  ChartTooltip
} from '../components/ui';
import { formatCurrency, formatNumber } from '../utils/formatters';

export default function AnalyticsPage() {
  const [selectedRange, setSelectedRange] = useState('30d');
  const [isLoading, setIsLoading] = useState(false);

  // Range-responsive datasets
  const kpis = getAnalyticsKpis(selectedRange) || [];
  const financialData = getFinancialTrends(selectedRange) || [];
  const userGrowthData = getUserGrowthSeries(selectedRange) || [];
  const funnelData = getConversionFunnel(selectedRange) || [];
  const channelData = getAcquisitionChannels(selectedRange) || [];

  const rangeLabels = {
    '7d': 'Last 7 Days',
    '30d': 'Last 30 Days',
    '90d': 'Last 90 Days',
    'ytd': 'Year to Date'
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 550);
  };

  const handleExport = () => {
    alert(`Exporting Analytics report for ${rangeLabels[selectedRange]} (mock action)...`);
  };

  return (
    <div className="analytics-page">
      {/* Page Header with Time-Period Selector */}
      <PageHeader
        title="Analytics & Deep Dive"
        description={`Comprehensive financial breakdown, funnel progression, and cohort acquisition for ${rangeLabels[selectedRange]}.`}
        actions={
          <>
            <Select
              options={dateRangeOptions}
              value={selectedRange}
              onChange={(e) => setSelectedRange(e.target.value)}
              aria-label="Filter analytics by date range"
            />
            <Button
              variant="secondary"
              size="md"
              leftIcon={<RefreshCw size={15} className={isLoading ? 'animate-spin' : ''} />}
              onClick={handleRefresh}
              disabled={isLoading}
              title="Refresh analytics data"
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

      {/* Analytics KPI Summaries */}
      <section className="kpi-grid" aria-label="Analytical KPIs">
        {kpis.map((kpi) => (
          <KpiCard
            key={kpi.id}
            title={kpi.title}
            value={kpi.value}
            change={kpi.change}
            trend={kpi.trend}
            context={kpi.context}
            iconName={kpi.iconName}
            isLoading={isLoading}
          />
        ))}
      </section>

      {/* Primary Analytics Section: 2 Large Analytical Charts */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))',
          gap: 'var(--space-5)',
          marginBottom: 'var(--space-5)'
        }}
        className="analytics-charts-grid"
      >
        {/* 1. Revenue vs Operating Expenses vs Profit (Bar Chart) */}
        <Card className="chart-card">
          <CardHeader>
            <div>
              <CardTitle>Revenue vs. Operating Costs</CardTitle>
              <CardDescription>
                Gross revenue against operating expenses ({rangeLabels[selectedRange]})
              </CardDescription>
            </div>
            <div className="chart-header-actions">
              <span className="chart-metric-badge">Financial Trajectory</span>
            </div>
          </CardHeader>
          <CardContent>
            {/* Custom Legend */}
            <div className="chart-legend-custom">
              <div className="chart-legend-item">
                <span className="chart-legend-dot" style={{ backgroundColor: '#2563eb' }} />
                <span>Revenue</span>
              </div>
              <div className="chart-legend-item">
                <span className="chart-legend-dot" style={{ backgroundColor: '#f59e0b' }} />
                <span>Expenses</span>
              </div>
              <div className="chart-legend-item">
                <span className="chart-legend-dot" style={{ backgroundColor: '#10b981' }} />
                <span>Net Profit</span>
              </div>
            </div>

            {isLoading ? (
              <div style={{ height: 260, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Skeleton width="100%" height="220px" borderRadius="var(--radius-md)" />
              </div>
            ) : (
              <div className="chart-container" style={{ height: 260, width: '100%' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={financialData}
                    margin={{ top: 10, right: 10, left: -15, bottom: 0 }}
                  >
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
                    <Bar dataKey="revenue" name="Revenue" fill="#2563eb" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="expenses" name="Expenses" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="profit" name="Net Profit" fill="#10b981" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </CardContent>
        </Card>

        {/* 2. User Acquisition & Growth vs Churn (Line Chart) */}
        <Card className="chart-card">
          <CardHeader>
            <div>
              <CardTitle>User Acquisition vs. Churn</CardTitle>
              <CardDescription>
                New customer signups compared with cancellations ({rangeLabels[selectedRange]})
              </CardDescription>
            </div>
            <div className="chart-header-actions">
              <span className="chart-metric-badge">Cohort Growth</span>
            </div>
          </CardHeader>
          <CardContent>
            {/* Custom Legend */}
            <div className="chart-legend-custom">
              <div className="chart-legend-item">
                <span className="chart-legend-dot" style={{ backgroundColor: '#2563eb' }} />
                <span>New Signups</span>
              </div>
              <div className="chart-legend-item">
                <span className="chart-legend-dot" style={{ backgroundColor: '#dc2626' }} />
                <span>Churned Users</span>
              </div>
              <div className="chart-legend-item">
                <span className="chart-legend-dot" style={{ backgroundColor: '#10b981' }} />
                <span>Net Growth</span>
              </div>
            </div>

            {isLoading ? (
              <div style={{ height: 260, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Skeleton width="100%" height="220px" borderRadius="var(--radius-md)" />
              </div>
            ) : (
              <div className="chart-container" style={{ height: 260, width: '100%' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={userGrowthData}
                    margin={{ top: 10, right: 10, left: -15, bottom: 0 }}
                  >
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
                      tickFormatter={(val) => formatNumber(val)}
                    />
                    <Tooltip content={<ChartTooltip isCurrency={false} />} />
                    <Line
                      type="monotone"
                      dataKey="signups"
                      name="Signups"
                      stroke="#2563eb"
                      strokeWidth={2.5}
                      dot={false}
                      activeDot={{ r: 5 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="churned"
                      name="Churned"
                      stroke="#dc2626"
                      strokeWidth={2}
                      strokeDasharray="3 3"
                      dot={false}
                      activeDot={{ r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="net"
                      name="Net Growth"
                      stroke="#10b981"
                      strokeWidth={2}
                      dot={false}
                      activeDot={{ r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Secondary Analytics Section: Conversion Funnel & Channel Breakdown */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
          gap: 'var(--space-5)'
        }}
        className="analytics-breakdowns-grid"
      >
        {/* 3. Conversion Funnel Progression */}
        <Card>
          <CardHeader>
            <div>
              <CardTitle>Conversion Funnel Drop-off</CardTitle>
              <CardDescription>
                Full lifecycle progression from initial visit to paying customer
              </CardDescription>
            </div>
            <span className="chart-metric-badge">
              {funnelData.length > 0 ? funnelData[funnelData.length - 1]?.percentage : 0}% End Conversion
            </span>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Skeleton key={i} width="100%" height="28px" />
                ))}
              </div>
            ) : (
              <div className="funnel-list">
                {funnelData.map((stage) => (
                  <div key={stage.stage} className="funnel-item">
                    <div className="funnel-header">
                      <span className="funnel-stage-name">{stage.stage}</span>
                      <div className="funnel-stage-metrics">
                        <span className="funnel-count">{formatNumber(stage.count)}</span>
                        <span className="funnel-percentage">({stage.percentage}%)</span>
                        {stage.dropoff !== '0%' && (
                          <span style={{ color: 'var(--danger-text)', fontSize: '11px', fontWeight: 500 }}>
                            {stage.dropoff}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="funnel-track">
                      <div
                        className="funnel-bar"
                        style={{ width: `${Math.max(stage.percentage, 4)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* 4. Acquisition Channels Distribution */}
        <Card>
          <CardHeader>
            <div>
              <CardTitle>Acquisition Channel Breakdown</CardTitle>
              <CardDescription>
                Traffic distribution and attributed revenue by acquisition channel
              </CardDescription>
            </div>
            <span className="chart-metric-badge">5 Active Sources</span>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Skeleton key={i} width="100%" height="34px" />
                ))}
              </div>
            ) : (
              <div className="channel-list">
                {channelData.map((channel) => (
                  <div key={channel.name} className="channel-item">
                    <div className="channel-meta">
                      <span className="channel-dot" style={{ backgroundColor: channel.color }} />
                      <span className="channel-name">{channel.name}</span>
                    </div>
                    <div className="channel-stats">
                      <span style={{ fontSize: 'var(--font-xs)', color: 'var(--text-muted)' }}>
                        {formatNumber(channel.visitors)} visits
                      </span>
                      <span className="channel-revenue">{formatCurrency(channel.revenue)}</span>
                      <span className="channel-share">{channel.share}%</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .analytics-charts-grid,
          .analytics-breakdowns-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
