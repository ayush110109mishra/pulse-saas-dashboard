import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import './styles/layout.css';
import './styles/components.css';

// Initialize theme and density from localStorage on app boot
try {
  const savedSettings = localStorage.getItem('pulse_dashboard_settings_v3');
  if (savedSettings) {
    const parsed = JSON.parse(savedSettings);
    if (parsed.theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else if (parsed.theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    }
    if (parsed.compactTables) {
      document.documentElement.setAttribute('data-density', 'compact');
    }
  }
} catch {
  // Graceful fallback for environments with restricted storage
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
