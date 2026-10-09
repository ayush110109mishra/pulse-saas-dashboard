/**
 * Mock user records for Pulse User Management (/users).
 * Decoupled from presentation to allow seamless API replacement.
 */

export const mockUsers = [
  {
    id: 'usr-001',
    name: 'Alex Rivera',
    email: 'alex.rivera@pulse.io',
    role: 'Admin',
    status: 'Active',
    joinedAt: '2025-01-12',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    department: 'Product',
    location: 'San Francisco, USA',
    lastActive: '5 minutes ago',
    phone: '+1 (555) 234-5678'
  },
  {
    id: 'usr-002',
    name: 'Sarah Jenkins',
    email: 'sarah.jenkins@pulse.io',
    role: 'Admin',
    status: 'Active',
    joinedAt: '2025-02-04',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    department: 'Engineering',
    location: 'Austin, USA',
    lastActive: '12 minutes ago',
    phone: '+1 (555) 345-6789'
  },
  {
    id: 'usr-003',
    name: 'Michael Chen',
    email: 'michael.chen@pulse.io',
    role: 'Member',
    status: 'Active',
    joinedAt: '2025-03-18',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    department: 'Engineering',
    location: 'Toronto, Canada',
    lastActive: '45 minutes ago',
    phone: '+1 (555) 456-7890'
  },
  {
    id: 'usr-004',
    name: 'Elena Rostova',
    email: 'elena.rostova@pulse.io',
    role: 'Member',
    status: 'Active',
    joinedAt: '2025-04-22',
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    department: 'Marketing',
    location: 'Berlin, Germany',
    lastActive: '2 hours ago',
    phone: '+49 30 123456'
  },
  {
    id: 'usr-005',
    name: 'David Kim',
    email: 'david.kim@pulse.io',
    role: 'Viewer',
    status: 'Active',
    joinedAt: '2025-05-10',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    department: 'Design',
    location: 'Seoul, South Korea',
    lastActive: '3 hours ago',
    phone: '+82 2 3456 7890'
  },
  {
    id: 'usr-006',
    name: 'Olivia Martinez',
    email: 'olivia.m@pulse.io',
    role: 'Member',
    status: 'Pending',
    joinedAt: '2025-06-01',
    avatarUrl: null,
    department: 'Sales',
    location: 'Madrid, Spain',
    lastActive: 'Invited 2 days ago',
    phone: '+34 91 123 4567'
  },
  {
    id: 'usr-007',
    name: 'James Wilson',
    email: 'james.wilson@pulse.io',
    role: 'Viewer',
    status: 'Inactive',
    joinedAt: '2025-01-30',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    department: 'Customer Support',
    location: 'London, UK',
    lastActive: '2 weeks ago',
    phone: '+44 20 7946 0912'
  },
  {
    id: 'usr-008',
    name: 'Sophia Patel',
    email: 'sophia.patel@pulse.io',
    role: 'Member',
    status: 'Active',
    joinedAt: '2025-07-15',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    department: 'Engineering',
    location: 'Bengaluru, India',
    lastActive: '1 hour ago',
    phone: '+91 80 2345 6789'
  },
  {
    id: 'usr-009',
    name: 'Lucas Dubois',
    email: 'lucas.dubois@pulse.io',
    role: 'Member',
    status: 'Active',
    joinedAt: '2025-08-03',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    department: 'Product',
    location: 'Paris, France',
    lastActive: '30 minutes ago',
    phone: '+33 1 42 68 55 00'
  },
  {
    id: 'usr-010',
    name: 'Emily Watson',
    email: 'emily.watson@pulse.io',
    role: 'Viewer',
    status: 'Pending',
    joinedAt: '2025-08-20',
    avatarUrl: null,
    department: 'Legal & Compliance',
    location: 'New York, USA',
    lastActive: 'Invited yesterday',
    phone: '+1 (555) 678-9012'
  },
  {
    id: 'usr-011',
    name: 'Marcus Vance',
    email: 'marcus.vance@pulse.io',
    role: 'Admin',
    status: 'Active',
    joinedAt: '2025-02-15',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
    department: 'Security',
    location: 'Seattle, USA',
    lastActive: '4 hours ago',
    phone: '+1 (555) 789-0123'
  },
  {
    id: 'usr-012',
    name: 'Chloe Takahashi',
    email: 'chloe.takahashi@pulse.io',
    role: 'Member',
    status: 'Active',
    joinedAt: '2025-09-02',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    department: 'Design',
    location: 'Tokyo, Japan',
    lastActive: '10 minutes ago',
    phone: '+81 3 5555 0142'
  },
  {
    id: 'usr-013',
    name: 'Benjamin Ross',
    email: 'benjamin.ross@pulse.io',
    role: 'Viewer',
    status: 'Inactive',
    joinedAt: '2025-03-12',
    avatarUrl: null,
    department: 'Finance',
    location: 'Chicago, USA',
    lastActive: '1 month ago',
    phone: '+1 (555) 890-1234'
  },
  {
    id: 'usr-014',
    name: 'Amina Al-Mansoor',
    email: 'amina.mansoor@pulse.io',
    role: 'Member',
    status: 'Active',
    joinedAt: '2025-09-19',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    department: 'Marketing',
    location: 'Dubai, UAE',
    lastActive: '3 hours ago',
    phone: '+971 4 123 4567'
  },
  {
    id: 'usr-015',
    name: 'Noah Gallagher',
    email: 'noah.gallagher@pulse.io',
    role: 'Member',
    status: 'Active',
    joinedAt: '2025-10-01',
    avatarUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
    department: 'Engineering',
    location: 'Dublin, Ireland',
    lastActive: 'Just now',
    phone: '+353 1 496 0123'
  },
  {
    id: 'usr-016',
    name: 'Isabella Silva',
    email: 'isabella.silva@pulse.io',
    role: 'Viewer',
    status: 'Pending',
    joinedAt: '2025-10-05',
    avatarUrl: null,
    department: 'Operations',
    location: 'Sao Paulo, Brazil',
    lastActive: 'Invited 3 days ago',
    phone: '+55 11 91234-5678'
  },
  {
    id: 'usr-017',
    name: 'Liam Henderson',
    email: 'liam.henderson@pulse.io',
    role: 'Member',
    status: 'Active',
    joinedAt: '2025-10-12',
    avatarUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80',
    department: 'Engineering',
    location: 'Melbourne, Australia',
    lastActive: '6 hours ago',
    phone: '+61 3 9000 1234'
  },
  {
    id: 'usr-018',
    name: 'Zara Novak',
    email: 'zara.novak@pulse.io',
    role: 'Viewer',
    status: 'Active',
    joinedAt: '2025-10-20',
    avatarUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&auto=format&fit=crop&q=80',
    department: 'Design',
    location: 'Prague, Czechia',
    lastActive: '1 day ago',
    phone: '+420 221 234 567'
  }
];

export const userRoleOptions = [
  { value: 'all', label: 'All Roles' },
  { value: 'Admin', label: 'Admin' },
  { value: 'Member', label: 'Member' },
  { value: 'Viewer', label: 'Viewer' }
];

export const userStatusOptions = [
  { value: 'all', label: 'All Statuses' },
  { value: 'Active', label: 'Active' },
  { value: 'Inactive', label: 'Inactive' },
  { value: 'Pending', label: 'Pending' }
];
