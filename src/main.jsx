import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import './styles/layout.css';
import './styles/components.css';

// Initialize theme and density from localStorage on app boot
try {
  let themePref = localStorage.getItem('pulse_theme_preference');
  const savedSettings = localStorage.getItem('pulse_dashboard_settings_v3');
  
  if (!themePref && savedSettings) {
    const parsed = JSON.parse(savedSettings);
    if (parsed.theme) themePref = parsed.theme;
  }

  if (themePref === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else if (themePref === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    // System default
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  }

  if (savedSettings) {
    const parsed = JSON.parse(savedSettings);
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
