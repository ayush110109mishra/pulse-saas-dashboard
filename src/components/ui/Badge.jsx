import React from 'react';

/**
 * Reusable Badge component
 * @param {Object} props
 * @param {'success' | 'danger' | 'warning' | 'primary' | 'neutral'} [props.variant='neutral']
 * @param {React.ReactNode} [props.icon]
 * @param {string} [props.className='']
 * @param {React.ReactNode} props.children
 */
export default function Badge({
  variant = 'neutral',
  icon,
  className = '',
  children,
  ...rest
}) {
  return (
    <span className={`badge badge-${variant} ${className}`.trim()} {...rest}>
      {icon && <span className="badge-icon">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
