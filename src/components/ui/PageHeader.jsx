import React from 'react';

/**
 * Standardized PageHeader component
 * @param {Object} props
 * @param {string} props.title - Main page title
 * @param {string} [props.description] - Supporting subtitle/description
 * @param {React.ReactNode} [props.actions] - Right-aligned action controls
 * @param {string} [props.className='']
 */
export default function PageHeader({
  title,
  description,
  actions,
  className = ''
}) {
  return (
    <div className={`page-header ${className}`.trim()}>
      <div className="page-header-text">
        <h1 className="page-title">{title}</h1>
        {description && <p className="page-description">{description}</p>}
      </div>
      {actions && <div className="page-actions">{actions}</div>}
    </div>
  );
}
