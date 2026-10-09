import React, { useState, useMemo } from 'react';
import {
  Users,
  UserPlus,
  Search,
  Filter,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  MoreVertical,
  Mail,
  MapPin,
  Calendar,
  Phone,
  Briefcase,
  Clock,
  Shield,
  CheckCircle,
  XCircle,
  AlertCircle,
  RotateCcw
} from 'lucide-react';
import {
  mockUsers as initialMockUsers,
  userRoleOptions,
  userStatusOptions
} from '../data/mockUsers';
import {
  PageHeader,
  Button,
  Card,
  CardContent,
  Badge,
  Avatar,
  Input,
  Select,
  Drawer,
  Modal
} from '../components/ui';

const ITEMS_PER_PAGE = 5;

export default function UsersPage() {
  const [usersList, setUsersList] = useState(initialMockUsers);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc'); // 'asc' | 'desc'
  const [currentPage, setCurrentPage] = useState(1);

  // Selected user for drawer
  const [selectedUser, setSelectedUser] = useState(null);

  // Invite modal state
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [inviteForm, setInviteForm] = useState({
    name: '',
    email: '',
    role: 'Member',
    department: 'Engineering'
  });
  const [inviteSuccessMsg, setInviteSuccessMsg] = useState('');

  // Filtering & Sorting
  const filteredUsers = useMemo(() => {
    return usersList.filter((user) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesRole =
        selectedRole === 'all' || user.role.toLowerCase() === selectedRole.toLowerCase();

      const matchesStatus =
        selectedStatus === 'all' || user.status.toLowerCase() === selectedStatus.toLowerCase();

      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [usersList, searchQuery, selectedRole, selectedStatus]);

  // Sorting
  const sortedUsers = useMemo(() => {
    return [...filteredUsers].sort((a, b) => {
      let aVal = a[sortField];
      let bVal = b[sortField];

      if (typeof aVal === 'string') {
        aVal = aVal.toLowerCase();
        bVal = bVal.toLowerCase();
      }

      if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filteredUsers, sortField, sortDirection]);

  // Pagination calculation
  const totalResults = sortedUsers.length;
  const totalPages = Math.max(1, Math.ceil(totalResults / ITEMS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);

  const paginatedUsers = useMemo(() => {
    const startIndex = (safePage - 1) * ITEMS_PER_PAGE;
    return sortedUsers.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [sortedUsers, safePage]);

  // Reset to page 1 on filter changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
    setCurrentPage(1);
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
    setCurrentPage(1);
  };

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedRole('all');
    setSelectedStatus('all');
    setCurrentPage(1);
  };

  // Status Badge Helper
  const renderStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return <Badge variant="success">Active</Badge>;
      case 'pending':
        return <Badge variant="warning">Pending</Badge>;
      case 'inactive':
        return <Badge variant="neutral">Inactive</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  // Role Badge Helper
  const renderRoleBadge = (role) => {
    switch (role.toLowerCase()) {
      case 'admin':
        return <Badge variant="primary">Admin</Badge>;
      case 'member':
        return <Badge variant="neutral">Member</Badge>;
      case 'viewer':
        return <Badge variant="neutral">Viewer</Badge>;
      default:
        return <Badge>{role}</Badge>;
    }
  };

  // Invite Member handler
  const handleInviteSubmit = (e) => {
    e.preventDefault();
    if (!inviteForm.name || !inviteForm.email) return;

    const newUser = {
      id: `usr-${Date.now().toString().slice(-4)}`,
      name: inviteForm.name,
      email: inviteForm.email,
      role: inviteForm.role,
      status: 'Pending',
      joinedAt: new Date().toISOString().split('T')[0],
      avatarUrl: null,
      department: inviteForm.department,
      location: 'Remote',
      lastActive: 'Just invited',
      phone: '+1 (555) 000-0000'
    };

    setUsersList((prev) => [newUser, ...prev]);
    setIsInviteModalOpen(false);
    setInviteForm({ name: '', email: '', role: 'Member', department: 'Engineering' });
    setInviteSuccessMsg(`Invitation sent to ${newUser.email} (demo user added)`);
    setTimeout(() => setInviteSuccessMsg(''), 4000);
  };

  return (
    <div className="users-page">
      {/* Page Header */}
      <PageHeader
        title="User & Team Management"
        description="Oversee organization members, RBAC roles, invitation workflows, and account activity."
        actions={
          <Button
            variant="primary"
            size="md"
            leftIcon={<UserPlus size={15} />}
            onClick={() => setIsInviteModalOpen(true)}
          >
            Invite Member
          </Button>
        }
      />

      {/* Success Banner */}
      {inviteSuccessMsg && (
        <div className="feedback-banner feedback-banner-success">
          <CheckCircle size={16} />
          <span>{inviteSuccessMsg}</span>
        </div>
      )}

      {/* Search & Filter Toolbar */}
      <Card style={{ marginBottom: 'var(--space-5)' }}>
        <CardContent style={{ padding: 'var(--space-4) var(--space-5)' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 'var(--space-3)',
              flexWrap: 'wrap'
            }}
          >
            {/* Search Input */}
            <div style={{ flex: '1 1 280px', maxWidth: '400px' }}>
              <Input
                leftIcon={<Search size={15} />}
                placeholder="Search by name or email..."
                value={searchQuery}
                onChange={handleSearchChange}
                aria-label="Search members"
              />
            </div>

            {/* Filter Dropdowns */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
              <Select
                options={userRoleOptions}
                value={selectedRole}
                onChange={handleRoleChange}
                aria-label="Filter by role"
              />
              <Select
                options={userStatusOptions}
                value={selectedStatus}
                onChange={handleStatusChange}
                aria-label="Filter by status"
              />

              {(searchQuery || selectedRole !== 'all' || selectedStatus !== 'all') && (
                <Button
                  variant="ghost"
                  size="sm"
                  leftIcon={<RotateCcw size={13} />}
                  onClick={resetFilters}
                  title="Reset all filters"
                >
                  Reset
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Table Card */}
      <Card>
        <div className="table-wrapper">
          <table className="data-table" aria-label="Users and Team Members">
            <thead>
              <tr>
                <th>
                  <button
                    type="button"
                    className="table-sort-header"
                    onClick={() => handleSort('name')}
                    aria-label="Sort by Name"
                  >
                    <span>Member</span>
                    {sortField === 'name' ? (
                      sortDirection === 'asc' ? <ArrowUp size={13} /> : <ArrowDown size={13} />
                    ) : (
                      <ArrowUpDown size={13} style={{ opacity: 0.4 }} />
                    )}
                  </button>
                </th>
                <th>
                  <button
                    type="button"
                    className="table-sort-header"
                    onClick={() => handleSort('role')}
                    aria-label="Sort by Role"
                  >
                    <span>Role</span>
                    {sortField === 'role' ? (
                      sortDirection === 'asc' ? <ArrowUp size={13} /> : <ArrowDown size={13} />
                    ) : (
                      <ArrowUpDown size={13} style={{ opacity: 0.4 }} />
                    )}
                  </button>
                </th>
                <th>
                  <button
                    type="button"
                    className="table-sort-header"
                    onClick={() => handleSort('status')}
                    aria-label="Sort by Status"
                  >
                    <span>Status</span>
                    {sortField === 'status' ? (
                      sortDirection === 'asc' ? <ArrowUp size={13} /> : <ArrowDown size={13} />
                    ) : (
                      <ArrowUpDown size={13} style={{ opacity: 0.4 }} />
                    )}
                  </button>
                </th>
                <th>Department</th>
                <th>
                  <button
                    type="button"
                    className="table-sort-header"
                    onClick={() => handleSort('joinedAt')}
                    aria-label="Sort by Join Date"
                  >
                    <span>Joined Date</span>
                    {sortField === 'joinedAt' ? (
                      sortDirection === 'asc' ? <ArrowUp size={13} /> : <ArrowDown size={13} />
                    ) : (
                      <ArrowUpDown size={13} style={{ opacity: 0.4 }} />
                    )}
                  </button>
                </th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ textAlign: 'center', padding: 'var(--space-10) var(--space-4)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                      <AlertCircle size={28} style={{ color: 'var(--text-muted)' }} />
                      <h4 style={{ fontWeight: 600 }}>No members found</h4>
                      <p style={{ fontSize: 'var(--font-xs)', color: 'var(--text-secondary)' }}>
                        No users match your search query and active filters.
                      </p>
                      <Button variant="secondary" size="sm" onClick={resetFilters} style={{ marginTop: '6px' }}>
                        Clear Filters
                      </Button>
                    </div>
                  </td>
                </tr>
              ) : (
                paginatedUsers.map((user) => (
                  <tr
                    key={user.id}
                    onClick={() => setSelectedUser(user)}
                    title="Click to view details"
                  >
                    <td>
                      <div className="user-cell">
                        <Avatar src={user.avatarUrl} name={user.name} size="sm" />
                        <div className="user-cell-meta">
                          <span className="user-cell-name">{user.name}</span>
                          <span className="user-cell-email">{user.email}</span>
                        </div>
                      </div>
                    </td>
                    <td>{renderRoleBadge(user.role)}</td>
                    <td>{renderStatusBadge(user.status)}</td>
                    <td style={{ color: 'var(--text-secondary)' }}>{user.department}</td>
                    <td style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-xs)' }}>
                      {user.joinedAt}
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedUser(user);
                        }}
                      >
                        View
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Functional Pagination */}
        {totalResults > 0 && (
          <div className="pagination-container">
            <span className="pagination-info">
              Showing {(safePage - 1) * ITEMS_PER_PAGE + 1}–
              {Math.min(safePage * ITEMS_PER_PAGE, totalResults)} of {totalResults} members
            </span>

            <div className="pagination-controls">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={safePage === 1}
              >
                Previous
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  className={`page-num-btn ${safePage === page ? 'active' : ''}`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}

              <Button
                variant="secondary"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={safePage === totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </Card>

      {/* User Details Drawer */}
      <Drawer
        isOpen={Boolean(selectedUser)}
        onClose={() => setSelectedUser(null)}
        title={selectedUser?.name || 'Member Details'}
        subtitle={selectedUser?.email}
        footer={
          <>
            <Button variant="secondary" onClick={() => setSelectedUser(null)}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                alert(`Demo action: Role update requested for ${selectedUser?.name}`);
                setSelectedUser(null);
              }}
            >
              Edit Permissions
            </Button>
          </>
        }
      >
        {selectedUser && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            {/* Header Identity Block */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-4)',
                paddingBottom: 'var(--space-4)',
                borderBottom: '1px solid var(--border-subtle)'
              }}
            >
              <Avatar src={selectedUser.avatarUrl} name={selectedUser.name} size="lg" />
              <div>
                <h4 style={{ fontSize: 'var(--font-lg)', fontWeight: 600 }}>{selectedUser.name}</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                  {renderRoleBadge(selectedUser.role)}
                  {renderStatusBadge(selectedUser.status)}
                </div>
              </div>
            </div>

            {/* Information Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3-5, 14px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <Mail size={16} style={{ color: 'var(--text-muted)' }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Email Address</span>
                  <span style={{ fontSize: 'var(--font-sm)', fontWeight: 500 }}>{selectedUser.email}</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <Briefcase size={16} style={{ color: 'var(--text-muted)' }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Department</span>
                  <span style={{ fontSize: 'var(--font-sm)', fontWeight: 500 }}>{selectedUser.department}</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <MapPin size={16} style={{ color: 'var(--text-muted)' }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Location</span>
                  <span style={{ fontSize: 'var(--font-sm)', fontWeight: 500 }}>{selectedUser.location}</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <Calendar size={16} style={{ color: 'var(--text-muted)' }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Joined Date</span>
                  <span style={{ fontSize: 'var(--font-sm)', fontWeight: 500 }}>{selectedUser.joinedAt}</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <Clock size={16} style={{ color: 'var(--text-muted)' }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Last Active</span>
                  <span style={{ fontSize: 'var(--font-sm)', fontWeight: 500 }}>{selectedUser.lastActive}</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <Phone size={16} style={{ color: 'var(--text-muted)' }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Phone</span>
                  <span style={{ fontSize: 'var(--font-sm)', fontWeight: 500 }}>{selectedUser.phone}</span>
                </div>
              </div>
            </div>

            {/* Access Permissions Box */}
            <div
              style={{
                backgroundColor: 'var(--bg-subtle)',
                padding: 'var(--space-4)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-default)',
                marginTop: 'var(--space-2)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                <Shield size={15} style={{ color: 'var(--primary-500)' }} />
                <span style={{ fontSize: 'var(--font-xs)', fontWeight: 600 }}>Access Permissions</span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {selectedUser.role === 'Admin'
                  ? 'Full read & write access across all workspaces, analytics reports, and member configurations.'
                  : selectedUser.role === 'Member'
                  ? 'Standard editing capabilities for dashboards and metric reports. Cannot delete workspaces.'
                  : 'Read-only access. Can view dashboard metrics and export reports, but cannot edit configuration.'}
              </p>
            </div>
          </div>
        )}
      </Drawer>

      {/* Invite Member Demo Modal */}
      <Modal
        isOpen={isInviteModalOpen}
        onClose={() => setIsInviteModalOpen(false)}
        title="Invite New Workspace Member"
        subtitle="Send an invitation link and grant role-based access."
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsInviteModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleInviteSubmit}>
              Send Invitation
            </Button>
          </>
        }
      >
        <form onSubmit={handleInviteSubmit}>
          <div className="form-row">
            <label className="form-label">Full Name</label>
            <Input
              placeholder="e.g. Rohit Deshmukh"
              value={inviteForm.name}
              onChange={(e) => setInviteForm((prev) => ({ ...prev, name: e.target.value }))}
              required
            />
          </div>

          <div className="form-row">
            <label className="form-label">Email Address</label>
            <Input
              type="email"
              placeholder="rohit.deshmukh@example.com"
              value={inviteForm.email}
              onChange={(e) => setInviteForm((prev) => ({ ...prev, email: e.target.value }))}
              required
            />
          </div>

          <div className="form-row">
            <label className="form-label">Role</label>
            <Select
              options={[
                { value: 'Admin', label: 'Admin (Full access)' },
                { value: 'Member', label: 'Member (Can edit dashboards)' },
                { value: 'Viewer', label: 'Viewer (Read only)' }
              ]}
              value={inviteForm.role}
              onChange={(e) => setInviteForm((prev) => ({ ...prev, role: e.target.value }))}
            />
          </div>

          <div className="form-row">
            <label className="form-label">Department</label>
            <Select
              options={[
                { value: 'Engineering', label: 'Engineering' },
                { value: 'Product', label: 'Product' },
                { value: 'Design', label: 'Design' },
                { value: 'Marketing', label: 'Marketing' },
                { value: 'Sales', label: 'Sales' }
              ]}
              value={inviteForm.department}
              onChange={(e) => setInviteForm((prev) => ({ ...prev, department: e.target.value }))}
            />
          </div>
        </form>
      </Modal>
    </div>
  );
}
