/**
 * Mock metrics data layer for Pulse dashboard.
 * Decoupled from presentation to allow seamless replacement with real API calls.
 */

export const dateRangeOptions = [
  { value: '7d', label: 'Last 7 days' },
  { value: '30d', label: 'Last 30 days' },
  { value: '90d', label: 'Last 90 days' },
  { value: 'ytd', label: 'Year to date' }
];

export const dashboardKpiMetricsByRange = {
  '7d': [
    {
      id: 'total-revenue',
      title: 'Total Revenue',
      value: '$19,450',
      numericValue: 19450,
      change: '+14.2%',
      changeValue: 14.2,
      trend: 'up',
      context: 'vs previous 7 days',
      iconName: 'DollarSign'
    },
    {
      id: 'active-users',
      title: 'Active Users',
      value: '3,840',
      numericValue: 3840,
      change: '+9.1%',
      changeValue: 9.1,
      trend: 'up',
      context: 'vs previous 7 days',
      iconName: 'Users'
    },
    {
      id: 'total-orders',
      title: 'Total Orders',
      value: '890',
      numericValue: 890,
      change: '+4.5%',
      changeValue: 4.5,
      trend: 'up',
      context: 'vs previous 7 days',
      iconName: 'ShoppingCart'
    },
    {
      id: 'conversion-rate',
      title: 'Conversion Rate',
      value: '3.65%',
      numericValue: 3.65,
      change: '+0.4%',
      changeValue: 0.4,
      trend: 'up',
      context: 'vs previous 7 days',
      iconName: 'Activity'
    }
  ],
  '30d': [
    {
      id: 'total-revenue',
      title: 'Total Revenue',
      value: '$84,250',
      numericValue: 84250,
      change: '+12.5%',
      changeValue: 12.5,
      trend: 'up',
      context: 'vs previous 30 days',
      iconName: 'DollarSign'
    },
    {
      id: 'active-users',
      title: 'Active Users',
      value: '14,320',
      numericValue: 14320,
      change: '+8.2%',
      changeValue: 8.2,
      trend: 'up',
      context: 'vs previous 30 days',
      iconName: 'Users'
    },
    {
      id: 'total-orders',
      title: 'Total Orders',
      value: '3,840',
      numericValue: 3840,
      change: '-2.4%',
      changeValue: -2.4,
      trend: 'down',
      context: 'vs previous 30 days',
      iconName: 'ShoppingCart'
    },
    {
      id: 'conversion-rate',
      title: 'Conversion Rate',
      value: '3.42%',
      numericValue: 3.42,
      change: '+0.8%',
      changeValue: 0.8,
      trend: 'up',
      context: 'vs previous 30 days',
      iconName: 'Activity'
    }
  ],
  '90d': [
    {
      id: 'total-revenue',
      title: 'Total Revenue',
      value: '$248,600',
      numericValue: 248600,
      change: '+18.4%',
      changeValue: 18.4,
      trend: 'up',
      context: 'vs previous 90 days',
      iconName: 'DollarSign'
    },
    {
      id: 'active-users',
      title: 'Active Users',
      value: '38,150',
      numericValue: 38150,
      change: '+14.6%',
      changeValue: 14.6,
      trend: 'up',
      context: 'vs previous 90 days',
      iconName: 'Users'
    },
    {
      id: 'total-orders',
      title: 'Total Orders',
      value: '11,200',
      numericValue: 11200,
      change: '+7.8%',
      changeValue: 7.8,
      trend: 'up',
      context: 'vs previous 90 days',
      iconName: 'ShoppingCart'
    },
    {
      id: 'conversion-rate',
      title: 'Conversion Rate',
      value: '3.28%',
      numericValue: 3.28,
      change: '+0.2%',
      changeValue: 0.2,
      trend: 'up',
      context: 'vs previous 90 days',
      iconName: 'Activity'
    }
  ],
  'ytd': [
    {
      id: 'total-revenue',
      title: 'Total Revenue',
      value: '$682,000',
      numericValue: 682000,
      change: '+22.1%',
      changeValue: 22.1,
      trend: 'up',
      context: 'vs previous year',
      iconName: 'DollarSign'
    },
    {
      id: 'active-users',
      title: 'Active Users',
      value: '94,800',
      numericValue: 94800,
      change: '+19.3%',
      changeValue: 19.3,
      trend: 'up',
      context: 'vs previous year',
      iconName: 'Users'
    },
    {
      id: 'total-orders',
      title: 'Total Orders',
      value: '31,450',
      numericValue: 31450,
      change: '+12.0%',
      changeValue: 12.0,
      trend: 'up',
      context: 'vs previous year',
      iconName: 'ShoppingCart'
    },
    {
      id: 'conversion-rate',
      title: 'Conversion Rate',
      value: '3.51%',
      numericValue: 3.51,
      change: '+0.6%',
      changeValue: 0.6,
      trend: 'up',
      context: 'vs previous year',
      iconName: 'Activity'
    }
  ]
};

// Fallback for Phase 01 backwards compatibility
export const dashboardKpiMetrics = dashboardKpiMetricsByRange['30d'];

export function getDashboardKpiMetrics(range = '30d') {
  return dashboardKpiMetricsByRange[range] || dashboardKpiMetricsByRange['30d'];
}

export const dashboardRevenueSeriesByRange = {
  '7d': [
    { label: 'Mon', revenue: 2400, target: 2100, orders: 110 },
    { label: 'Tue', revenue: 2750, target: 2300, orders: 125 },
    { label: 'Wed', revenue: 2600, target: 2400, orders: 118 },
    { label: 'Thu', revenue: 3100, target: 2600, orders: 142 },
    { label: 'Fri', revenue: 3450, target: 2800, orders: 160 },
    { label: 'Sat', revenue: 2800, target: 2500, orders: 128 },
    { label: 'Sun', revenue: 2350, target: 2200, orders: 107 }
  ],
  '30d': [
    { label: 'Day 1', revenue: 2200, target: 2000, orders: 98 },
    { label: 'Day 4', revenue: 2500, target: 2200, orders: 112 },
    { label: 'Day 7', revenue: 2350, target: 2200, orders: 105 },
    { label: 'Day 10', revenue: 2800, target: 2400, orders: 126 },
    { label: 'Day 13', revenue: 3100, target: 2500, orders: 140 },
    { label: 'Day 16', revenue: 2950, target: 2600, orders: 132 },
    { label: 'Day 19', revenue: 3400, target: 2800, orders: 154 },
    { label: 'Day 22', revenue: 3300, target: 2900, orders: 148 },
    { label: 'Day 25', revenue: 3850, target: 3100, orders: 172 },
    { label: 'Day 28', revenue: 3600, target: 3200, orders: 165 },
    { label: 'Day 30', revenue: 4200, target: 3400, orders: 188 }
  ],
  '90d': [
    { label: 'Week 1', revenue: 16800, target: 15000, orders: 760 },
    { label: 'Week 2', revenue: 18200, target: 16000, orders: 820 },
    { label: 'Week 3', revenue: 17500, target: 16500, orders: 790 },
    { label: 'Week 4', revenue: 19800, target: 17500, orders: 890 },
    { label: 'Week 5', revenue: 21400, target: 18500, orders: 960 },
    { label: 'Week 6', revenue: 20600, target: 19000, orders: 930 },
    { label: 'Week 7', revenue: 23100, target: 20000, orders: 1040 },
    { label: 'Week 8', revenue: 22800, target: 20500, orders: 1020 },
    { label: 'Week 9', revenue: 25400, target: 21500, orders: 1150 },
    { label: 'Week 10', revenue: 24900, target: 22000, orders: 1120 },
    { label: 'Week 11', revenue: 27500, target: 23500, orders: 1240 },
    { label: 'Week 12', revenue: 29200, target: 24500, orders: 1310 }
  ],
  'ytd': [
    { label: 'Jan', revenue: 58000, target: 50000, orders: 2600 },
    { label: 'Feb', revenue: 64000, target: 55000, orders: 2900 },
    { label: 'Mar', revenue: 69000, target: 60000, orders: 3100 },
    { label: 'Apr', revenue: 73000, target: 65000, orders: 3300 },
    { label: 'May', revenue: 78000, target: 70000, orders: 3550 },
    { label: 'Jun', revenue: 84000, target: 75000, orders: 3820 },
    { label: 'Jul', revenue: 89000, target: 80000, orders: 4050 },
    { label: 'Aug', revenue: 95000, target: 85000, orders: 4320 },
    { label: 'Sep', revenue: 101000, target: 90000, orders: 4600 }
  ]
};

export function getDashboardRevenueSeries(range = '30d') {
  return dashboardRevenueSeriesByRange[range] || dashboardRevenueSeriesByRange['30d'];
}

export const mockRecentActivity = [
  {
    id: 'act-1',
    user: 'Sarah Jenkins',
    action: 'upgraded to Enterprise Tier',
    time: '12 minutes ago',
    amount: '+$480.00',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 'act-2',
    user: 'Michael Chen',
    action: 'created new project workspace',
    time: '45 minutes ago',
    amount: null,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 'act-3',
    user: 'Elena Rostova',
    action: 'purchased Annual Team Plan',
    time: '2 hours ago',
    amount: '+$1,200.00',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 'act-4',
    user: 'David Kim',
    action: 'invited 4 team members',
    time: '3 hours ago',
    amount: null,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80'
  }
];
