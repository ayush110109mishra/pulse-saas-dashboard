/**
 * Mock notifications data for Pulse navbar notification center.
 */

export const initialNotifications = [
  {
    id: 'notif-1',
    title: 'Enterprise Plan Activated',
    description: 'Acme Technologies has been upgraded to Growth Tier with 50 seats.',
    timestamp: '2026-10-09T18:30:00Z',
    timeAgo: '15m ago',
    isRead: false,
    type: 'billing'
  },
  {
    id: 'notif-2',
    title: 'Unusual Traffic Spike',
    description: 'Organic search traffic increased by +42% over the last 2 hours.',
    timestamp: '2026-10-09T17:15:00Z',
    timeAgo: '1h ago',
    isRead: false,
    type: 'system'
  },
  {
    id: 'notif-3',
    title: 'New Member Joined',
    description: 'Sophia Patel accepted the invitation to join the Engineering workspace.',
    timestamp: '2026-10-09T15:00:00Z',
    timeAgo: '3h ago',
    isRead: false,
    type: 'team'
  },
  {
    id: 'notif-4',
    title: 'Weekly Analytics Digest Ready',
    description: 'Your week-over-week revenue report is generated and ready to download.',
    timestamp: '2026-10-08T09:00:00Z',
    timeAgo: '1d ago',
    isRead: true,
    type: 'system'
  },
  {
    id: 'notif-5',
    title: 'Security Key Rotated',
    description: 'Workspace API Key "prod_sec_key_02" was successfully rotated.',
    timestamp: '2026-10-07T14:20:00Z',
    timeAgo: '2d ago',
    isRead: true,
    type: 'security'
  },
  {
    id: 'notif-6',
    title: 'Billing Invoice Paid',
    description: 'Payment of $1,200.00 processed successfully for Annual Team Plan.',
    timestamp: '2026-10-05T11:00:00Z',
    timeAgo: '4d ago',
    isRead: true,
    type: 'billing'
  }
];
