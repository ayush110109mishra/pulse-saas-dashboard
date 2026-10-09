/**
 * Mock data for the deep-dive Analytics page (/analytics).
 * Decoupled from presentation to allow seamless replacement with real API calls.
 */

export const analyticsKpisByRange = {
  '7d': [
    {
      id: 'net-mrr',
      title: 'Net MRR Added',
      value: '+₹4,120',
      change: '+16.8%',
      trend: 'up',
      context: 'vs previous 7 days',
      iconName: 'TrendingUp'
    },
    {
      id: 'avg-order-value',
      title: 'Avg Order Value (AOV)',
      value: '₹218',
      change: '+3.4%',
      trend: 'up',
      context: 'vs previous 7 days',
      iconName: 'IndianRupee'
    },
    {
      id: 'cac',
      title: 'Customer Acq. Cost',
      value: '₹42',
      change: '-5.2%',
      trend: 'up', // lower CAC is good
      context: 'vs previous 7 days',
      iconName: 'Users'
    },
    {
      id: 'churn-rate',
      title: 'Customer Churn Rate',
      value: '1.4%',
      change: '-0.3%',
      trend: 'up', // lower churn is good
      context: 'vs previous 7 days',
      iconName: 'Activity'
    }
  ],
  '30d': [
    {
      id: 'net-mrr',
      title: 'Net MRR Added',
      value: '+₹14,850',
      change: '+11.2%',
      trend: 'up',
      context: 'vs previous 30 days',
      iconName: 'TrendingUp'
    },
    {
      id: 'avg-order-value',
      title: 'Avg Order Value (AOV)',
      value: '₹224',
      change: '+5.8%',
      trend: 'up',
      context: 'vs previous 30 days',
      iconName: 'IndianRupee'
    },
    {
      id: 'cac',
      title: 'Customer Acq. Cost',
      value: '₹48',
      change: '-2.1%',
      trend: 'up',
      context: 'vs previous 30 days',
      iconName: 'Users'
    },
    {
      id: 'churn-rate',
      title: 'Customer Churn Rate',
      value: '1.8%',
      change: '-0.1%',
      trend: 'up',
      context: 'vs previous 30 days',
      iconName: 'Activity'
    }
  ],
  '90d': [
    {
      id: 'net-mrr',
      title: 'Net MRR Added',
      value: '+₹48,200',
      change: '+15.4%',
      trend: 'up',
      context: 'vs previous 90 days',
      iconName: 'TrendingUp'
    },
    {
      id: 'avg-order-value',
      title: 'Avg Order Value (AOV)',
      value: '₹231',
      change: '+7.2%',
      trend: 'up',
      context: 'vs previous 90 days',
      iconName: 'IndianRupee'
    },
    {
      id: 'cac',
      title: 'Customer Acq. Cost',
      value: '₹51',
      change: '-1.4%',
      trend: 'up',
      context: 'vs previous 90 days',
      iconName: 'Users'
    },
    {
      id: 'churn-rate',
      title: 'Customer Churn Rate',
      value: '2.1%',
      change: '+0.2%',
      trend: 'down',
      context: 'vs previous 90 days',
      iconName: 'Activity'
    }
  ],
  'ytd': [
    {
      id: 'net-mrr',
      title: 'Net MRR Added',
      value: '+₹132,000',
      change: '+24.5%',
      trend: 'up',
      context: 'vs previous year',
      iconName: 'TrendingUp'
    },
    {
      id: 'avg-order-value',
      title: 'Avg Order Value (AOV)',
      value: '₹238',
      change: '+9.4%',
      trend: 'up',
      context: 'vs previous year',
      iconName: 'IndianRupee'
    },
    {
      id: 'cac',
      title: 'Customer Acq. Cost',
      value: '₹46',
      change: '-8.3%',
      trend: 'up',
      context: 'vs previous year',
      iconName: 'Users'
    },
    {
      id: 'churn-rate',
      title: 'Customer Churn Rate',
      value: '1.9%',
      change: '-0.4%',
      trend: 'up',
      context: 'vs previous year',
      iconName: 'Activity'
    }
  ]
};

export function getAnalyticsKpis(range = '30d') {
  return analyticsKpisByRange[range] || analyticsKpisByRange['30d'];
}

// Financial comparison: Gross Revenue vs Operating Costs vs Net Profit
export const financialTrendsByRange = {
  '7d': [
    { label: 'Mon', revenue: 2400, expenses: 1100, profit: 1300 },
    { label: 'Tue', revenue: 2750, expenses: 1200, profit: 1550 },
    { label: 'Wed', revenue: 2600, expenses: 1150, profit: 1450 },
    { label: 'Thu', revenue: 3100, expenses: 1300, profit: 1800 },
    { label: 'Fri', revenue: 3450, expenses: 1450, profit: 2000 },
    { label: 'Sat', revenue: 2800, expenses: 1250, profit: 1550 },
    { label: 'Sun', revenue: 2350, expenses: 1100, profit: 1250 }
  ],
  '30d': [
    { label: 'Day 3', revenue: 6800, expenses: 3100, profit: 3700 },
    { label: 'Day 6', revenue: 7100, expenses: 3200, profit: 3900 },
    { label: 'Day 9', revenue: 7450, expenses: 3350, profit: 4100 },
    { label: 'Day 12', revenue: 7900, expenses: 3500, profit: 4400 },
    { label: 'Day 15', revenue: 8200, expenses: 3650, profit: 4550 },
    { label: 'Day 18', revenue: 8600, expenses: 3800, profit: 4800 },
    { label: 'Day 21', revenue: 8900, expenses: 3950, profit: 4950 },
    { label: 'Day 24', revenue: 9400, expenses: 4100, profit: 5300 },
    { label: 'Day 27', revenue: 9800, expenses: 4300, profit: 5500 },
    { label: 'Day 30', revenue: 10100, expenses: 4450, profit: 5650 }
  ],
  '90d': [
    { label: 'W1', revenue: 16200, expenses: 7400, profit: 8800 },
    { label: 'W2', revenue: 17100, expenses: 7700, profit: 9400 },
    { label: 'W3', revenue: 17800, expenses: 8000, profit: 9800 },
    { label: 'W4', revenue: 18600, expenses: 8300, profit: 10300 },
    { label: 'W5', revenue: 19500, expenses: 8600, profit: 10900 },
    { label: 'W6', revenue: 20400, expenses: 9000, profit: 11400 },
    { label: 'W7', revenue: 21200, expenses: 9300, profit: 11900 },
    { label: 'W8', revenue: 22100, expenses: 9700, profit: 12400 },
    { label: 'W9', revenue: 22900, expenses: 10000, profit: 12900 },
    { label: 'W10', revenue: 23600, expenses: 10300, profit: 13300 },
    { label: 'W11', revenue: 24200, expenses: 10500, profit: 13700 },
    { label: 'W12', revenue: 25000, expenses: 10800, profit: 14200 }
  ],
  'ytd': [
    { label: 'Jan', revenue: 56000, expenses: 25000, profit: 31000 },
    { label: 'Feb', revenue: 61000, expenses: 27000, profit: 34000 },
    { label: 'Mar', revenue: 66000, expenses: 29000, profit: 37000 },
    { label: 'Apr', revenue: 71000, expenses: 31000, profit: 40000 },
    { label: 'May', revenue: 76000, expenses: 33000, profit: 43000 },
    { label: 'Jun', revenue: 81000, expenses: 35000, profit: 46000 },
    { label: 'Jul', revenue: 86000, expenses: 37000, profit: 49000 },
    { label: 'Aug', revenue: 91000, expenses: 39000, profit: 52000 },
    { label: 'Sep', revenue: 94000, expenses: 40000, profit: 54000 }
  ]
};

export function getFinancialTrends(range = '30d') {
  return financialTrendsByRange[range] || financialTrendsByRange['30d'];
}

// User acquisition & churn trends
export const userGrowthSeriesByRange = {
  '7d': [
    { label: 'Mon', signups: 65, churned: 8, net: 57 },
    { label: 'Tue', signups: 78, churned: 11, net: 67 },
    { label: 'Wed', signups: 72, churned: 9, net: 63 },
    { label: 'Thu', signups: 89, churned: 12, net: 77 },
    { label: 'Fri', signups: 98, churned: 14, net: 84 },
    { label: 'Sat', signups: 80, churned: 10, net: 70 },
    { label: 'Sun', signups: 68, churned: 7, net: 61 }
  ],
  '30d': [
    { label: 'Day 1', signups: 60, churned: 9, net: 51 },
    { label: 'Day 4', signups: 72, churned: 10, net: 62 },
    { label: 'Day 7', signups: 68, churned: 8, net: 60 },
    { label: 'Day 10', signups: 84, churned: 11, net: 73 },
    { label: 'Day 13', signups: 92, churned: 14, net: 78 },
    { label: 'Day 16', signups: 88, churned: 12, net: 76 },
    { label: 'Day 19', signups: 104, churned: 15, net: 89 },
    { label: 'Day 22', signups: 99, churned: 13, net: 86 },
    { label: 'Day 25', signups: 118, churned: 17, net: 101 },
    { label: 'Day 28', signups: 110, churned: 15, net: 95 },
    { label: 'Day 30', signups: 126, churned: 18, net: 108 }
  ],
  '90d': [
    { label: 'W1', signups: 460, churned: 65, net: 395 },
    { label: 'W2', signups: 510, churned: 72, net: 438 },
    { label: 'W3', signups: 490, churned: 68, net: 422 },
    { label: 'W4', signups: 560, churned: 78, net: 482 },
    { label: 'W5', signups: 610, churned: 84, net: 526 },
    { label: 'W6', signups: 580, churned: 80, net: 500 },
    { label: 'W7', signups: 660, churned: 91, net: 569 },
    { label: 'W8', signups: 640, churned: 88, net: 552 },
    { label: 'W9', signups: 720, churned: 96, net: 624 },
    { label: 'W10', signups: 700, churned: 94, net: 606 },
    { label: 'W11', signups: 790, churned: 105, net: 685 },
    { label: 'W12', signups: 840, churned: 112, net: 728 }
  ],
  'ytd': [
    { label: 'Jan', signups: 1650, churned: 240, net: 1410 },
    { label: 'Feb', signups: 1840, churned: 260, net: 1580 },
    { label: 'Mar', signups: 1980, churned: 280, net: 1700 },
    { label: 'Apr', signups: 2150, churned: 295, net: 1855 },
    { label: 'May', signups: 2320, churned: 320, net: 2000 },
    { label: 'Jun', signups: 2510, churned: 345, net: 2165 },
    { label: 'Jul', signups: 2690, churned: 360, net: 2330 },
    { label: 'Aug', signups: 2880, churned: 385, net: 2495 },
    { label: 'Sep', signups: 3100, churned: 410, net: 2690 }
  ]
};

export function getUserGrowthSeries(range = '30d') {
  return userGrowthSeriesByRange[range] || userGrowthSeriesByRange['30d'];
}

// Conversion Funnel Stages
export const conversionFunnelByRange = {
  '7d': [
    { stage: 'Site Visitors', count: 28400, percentage: 100, dropoff: '0%' },
    { stage: 'Product Views', count: 12200, percentage: 43.0, dropoff: '-57.0%' },
    { stage: 'Trial Started', count: 3420, percentage: 12.0, dropoff: '-72.0%' },
    { stage: 'Checkout Initiated', count: 1890, percentage: 6.7, dropoff: '-44.7%' },
    { stage: 'Paid Subscription', count: 1036, percentage: 3.65, dropoff: '-45.2%' }
  ],
  '30d': [
    { stage: 'Site Visitors', count: 112000, percentage: 100, dropoff: '0%' },
    { stage: 'Product Views', count: 48600, percentage: 43.4, dropoff: '-56.6%' },
    { stage: 'Trial Started', count: 13440, percentage: 12.0, dropoff: '-72.3%' },
    { stage: 'Checkout Initiated', count: 6940, percentage: 6.2, dropoff: '-48.4%' },
    { stage: 'Paid Subscription', count: 3830, percentage: 3.42, dropoff: '-44.8%' }
  ],
  '90d': [
    { stage: 'Site Visitors', count: 341000, percentage: 100, dropoff: '0%' },
    { stage: 'Product Views', count: 145000, percentage: 42.5, dropoff: '-57.5%' },
    { stage: 'Trial Started', count: 39500, percentage: 11.6, dropoff: '-72.8%' },
    { stage: 'Checkout Initiated', count: 20400, percentage: 6.0, dropoff: '-48.4%' },
    { stage: 'Paid Subscription', count: 11180, percentage: 3.28, dropoff: '-45.2%' }
  ],
  'ytd': [
    { stage: 'Site Visitors', count: 896000, percentage: 100, dropoff: '0%' },
    { stage: 'Product Views', count: 389000, percentage: 43.4, dropoff: '-56.6%' },
    { stage: 'Trial Started', count: 108000, percentage: 12.1, dropoff: '-72.2%' },
    { stage: 'Checkout Initiated', count: 56400, percentage: 6.3, dropoff: '-47.8%' },
    { stage: 'Paid Subscription', count: 31450, percentage: 3.51, dropoff: '-44.2%' }
  ]
};

export function getConversionFunnel(range = '30d') {
  return conversionFunnelByRange[range] || conversionFunnelByRange['30d'];
}

// Acquisition Channels Breakdown
export const acquisitionChannelsByRange = {
  '7d': [
    { name: 'Organic Search', share: 42, revenue: 8170, visitors: 11928, color: '#2563eb' },
    { name: 'Direct Traffic', share: 26, revenue: 5050, visitors: 7384, color: '#3b82f6' },
    { name: 'Referral & Affiliates', share: 18, revenue: 3500, visitors: 5112, color: '#10b981' },
    { name: 'Paid Ads', share: 9, revenue: 1750, visitors: 2556, color: '#f59e0b' },
    { name: 'Social Media', share: 5, revenue: 980, visitors: 1420, color: '#8b5cf6' }
  ],
  '30d': [
    { name: 'Organic Search', share: 44, revenue: 37070, visitors: 49280, color: '#2563eb' },
    { name: 'Direct Traffic', share: 24, revenue: 20220, visitors: 26880, color: '#3b82f6' },
    { name: 'Referral & Affiliates', share: 17, revenue: 14320, visitors: 19040, color: '#10b981' },
    { name: 'Paid Ads', share: 10, revenue: 8425, visitors: 11200, color: '#f59e0b' },
    { name: 'Social Media', share: 5, revenue: 4215, visitors: 5600, color: '#8b5cf6' }
  ],
  '90d': [
    { name: 'Organic Search', share: 45, revenue: 111870, visitors: 153450, color: '#2563eb' },
    { name: 'Direct Traffic', share: 23, revenue: 57180, visitors: 78430, color: '#3b82f6' },
    { name: 'Referral & Affiliates', share: 18, revenue: 44750, visitors: 61380, color: '#10b981' },
    { name: 'Paid Ads', share: 9, revenue: 22370, visitors: 30690, color: '#f59e0b' },
    { name: 'Social Media', share: 5, revenue: 12430, visitors: 17050, color: '#8b5cf6' }
  ],
  'ytd': [
    { name: 'Organic Search', share: 46, revenue: 313720, visitors: 412160, color: '#2563eb' },
    { name: 'Direct Traffic', share: 23, revenue: 156860, visitors: 206080, color: '#3b82f6' },
    { name: 'Referral & Affiliates', share: 17, revenue: 115940, visitors: 152320, color: '#10b981' },
    { name: 'Paid Ads', share: 9, revenue: 61380, visitors: 80640, color: '#f59e0b' },
    { name: 'Social Media', share: 5, revenue: 34100, visitors: 44800, color: '#8b5cf6' }
  ]
};

export function getAcquisitionChannels(range = '30d') {
  return acquisitionChannelsByRange[range] || acquisitionChannelsByRange['30d'];
}
