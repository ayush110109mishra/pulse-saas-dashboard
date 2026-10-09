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
      value: '₹19,450',
      numericValue: 19450,
      change: '+14.2%',
      changeValue: 14.2,
      trend: 'up',
      context: 'vs previous 7 days',
      iconName: 'IndianRupee'
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
      value: '₹84,250',
      numericValue: 84250,
      change: '+12.5%',
      changeValue: 12.5,
      trend: 'up',
      context: 'vs previous 30 days',
      iconName: 'IndianRupee'
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
      value: '₹248,600',
      numericValue: 248600,
      change: '+18.4%',
      changeValue: 18.4,
      trend: 'up',
      context: 'vs previous 90 days',
      iconName: 'IndianRupee'
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
      value: '₹682,000',
      numericValue: 682000,
      change: '+22.1%',
      changeValue: 22.1,
      trend: 'up',
      context: 'vs previous year',
      iconName: 'IndianRupee'
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
    { label: 'Day 3', revenue: 6800, target: 6200, orders: 310 },
    { label: 'Day 6', revenue: 7100, target: 6500, orders: 325 },
    { label: 'Day 9', revenue: 7450, target: 6800, orders: 340 },
    { label: 'Day 12', revenue: 7900, target: 7100, orders: 360 },
    { label: 'Day 15', revenue: 8200, target: 7400, orders: 375 },
    { label: 'Day 18', revenue: 8600, target: 7800, orders: 390 },
    { label: 'Day 21', revenue: 8900, target: 8100, orders: 405 },
    { label: 'Day 24', revenue: 9400, target: 8500, orders: 430 },
    { label: 'Day 27', revenue: 9800, target: 8900, orders: 445 },
    { label: 'Day 30', revenue: 10100, target: 9200, orders: 460 }
  ],
  '90d': [
    { label: 'Week 1', revenue: 16200, target: 15000, orders: 740 },
    { label: 'Week 2', revenue: 17100, target: 15500, orders: 780 },
    { label: 'Week 3', revenue: 17800, target: 16000, orders: 810 },
    { label: 'Week 4', revenue: 18600, target: 17000, orders: 840 },
    { label: 'Week 5', revenue: 19500, target: 17500, orders: 880 },
    { label: 'Week 6', revenue: 20400, target: 18500, orders: 920 },
    { label: 'Week 7', revenue: 21200, target: 19000, orders: 960 },
    { label: 'Week 8', revenue: 22100, target: 20000, orders: 1000 },
    { label: 'Week 9', revenue: 22900, target: 20500, orders: 1030 },
    { label: 'Week 10', revenue: 23600, target: 21000, orders: 1060 },
    { label: 'Week 11', revenue: 24200, target: 22000, orders: 1080 },
    { label: 'Week 12', revenue: 25000, target: 22500, orders: 1100 }
  ],
  'ytd': [
    { label: 'Jan', revenue: 56000, target: 50000, orders: 2600 },
    { label: 'Feb', revenue: 61000, target: 54000, orders: 2850 },
    { label: 'Mar', revenue: 66000, target: 59000, orders: 3050 },
    { label: 'Apr', revenue: 71000, target: 64000, orders: 3280 },
    { label: 'May', revenue: 76000, target: 68000, orders: 3520 },
    { label: 'Jun', revenue: 81000, target: 73000, orders: 3750 },
    { label: 'Jul', revenue: 86000, target: 78000, orders: 3980 },
    { label: 'Aug', revenue: 91000, target: 82000, orders: 4180 },
    { label: 'Sep', revenue: 94000, target: 86000, orders: 4240 }
  ]
};

export function getDashboardRevenueSeries(range = '30d') {
  return dashboardRevenueSeriesByRange[range] || dashboardRevenueSeriesByRange['30d'];
}

export const mockRecentActivity = [
  {
    id: 'act-1',
    user: 'Priya Verma',
    action: 'upgraded to Enterprise Tier',
    time: '12 minutes ago',
    amount: '+₹48,000',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 'act-2',
    user: 'Rahul Mehta',
    action: 'created new project workspace',
    time: '45 minutes ago',
    amount: null,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 'act-3',
    user: 'Ananya Singh',
    action: 'purchased Annual Team Plan',
    time: '2 hours ago',
    amount: '+₹1,20,000',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 'act-4',
    user: 'Arjun Patel',
    action: 'invited 4 team members',
    time: '3 hours ago',
    amount: null,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80'
  }
];
