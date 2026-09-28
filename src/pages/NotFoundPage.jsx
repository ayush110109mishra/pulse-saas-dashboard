import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Home } from 'lucide-react';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        textAlign: 'center',
        gap: 'var(--space-4)'
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 'var(--radius-full)',
          backgroundColor: 'var(--danger-50)',
          color: 'var(--danger-500)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <AlertCircle size={28} />
      </div>
      <h1 style={{ fontSize: 'var(--font-3xl)', fontWeight: 700 }}>404 — Page Not Found</h1>
      <p style={{ maxWidth: 400, color: 'var(--text-secondary)', fontSize: 'var(--font-sm)' }}>
        The page you are looking for doesn't exist or has been moved to another URL.
      </p>
      <Link to="/">
        <Button variant="primary" leftIcon={<Home size={15} />}>
          Return to Dashboard
        </Button>
      </Link>
    </div>
  );
}
