import React from 'react';
import {
  DollarSign,
  Users,
  ShoppingCart,
  Activity,
  TrendingUp,
  TrendingDown,
  Minus
} from 'lucide-react';
import Card from './Card';
import Badge from './Badge';
import Skeleton from './Skeleton';

const ICON_MAP = {
  DollarSign: DollarSign,
  Users: Users,
  ShoppingCart: ShoppingCart,
  Activity: Activity
};

/**
 * Reusable KPI Card Component
 * @param {Object} props
 * @param {string} props.title - Metric title/label
 * @param {string} props.value - Formatted metric value
 * @param {string} props.change - Percentage change string (e.g. "+12.5%")
 * @param {'up' | 'down' | 'neutral'} [props.trend='neutral'] - Trend direction
 * @param {string} [props.context='vs last month'] - Supporting context text
 * @param {string} [props.iconName] - Name of icon from lucide
 * @param {boolean} [props.isLoading=false] - Skeleton loading state
 */
export default function KpiCard({
  title,
  value,
  change,
  trend = 'neutral',
  context = 'vs last month',
  iconName = 'Activity',
  isLoading = false,
  className = ''
}) {
  if (isLoading) {
    return (
      <Card className={`kpi-card ${className}`.trim()}>
        <div className="kpi-card-header">
          <Skeleton width="45%" height="16px" />
          <Skeleton width="38px" height="38px" borderRadius="var(--radius-md)" />
        </div>
        <Skeleton width="65%" height="32px" style={{ margin: '8px 0' }} />
        <div className="kpi-card-footer">
          <Skeleton width="25%" height="20px" borderRadius="var(--radius-full)" />
          <Skeleton width="35%" height="14px" />
        </div>
      </Card>
    );
  }

  const IconComponent = ICON_MAP[iconName] || Activity;

  // Determine trend badge variant and icon
  let badgeVariant = 'neutral';
  let TrendIcon = Minus;

  if (trend === 'up') {
    badgeVariant = 'success';
    TrendIcon = TrendingUp;
  } else if (trend === 'down') {
    badgeVariant = 'danger';
    TrendIcon = TrendingDown;
  }

  return (
    <Card className={`kpi-card ${className}`.trim()}>
      <div className="kpi-card-header">
        <span className="kpi-card-title">{title}</span>
        <div className="kpi-icon-container" aria-hidden="true">
          <IconComponent size={20} strokeWidth={2} />
        </div>
      </div>

      <div className="kpi-card-value">{value}</div>

      <div className="kpi-card-footer">
        <Badge
          variant={badgeVariant}
          icon={<TrendIcon size={12} strokeWidth={2.5} />}
        >
          {change}
        </Badge>
        <span className="kpi-context-text">{context}</span>
      </div>
    </Card>
  );
}
