/**
 * Mock metrics data layer for Pulse dashboard.
 * Decoupled from presentation to allow seamless replacement with real API calls.
 */

export const dashboardKpiMetrics = [
  {
    id: 'total-revenue',
    title: 'Total Revenue',
    value: '$84,250',
    numericValue: 84250,
    change: '+12.5%',
    changeValue: 12.5,
    trend: 'up', // 'up' | 'down' | 'neutral'
    context: 'vs last month',
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
    context: 'vs last month',
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
    context: 'vs last month',
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
    context: 'vs last month',
    iconName: 'Activity'
  }
];

export const dateRangeOptions = [
  { value: '7d', label: 'Last 7 days' },
  { value: '30d', label: 'Last 30 days' },
  { value: '90d', label: 'Last 90 days' },
  { value: '12m', label: 'Last 12 months' },
  { value: 'ytd', label: 'Year to date' }
];

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
