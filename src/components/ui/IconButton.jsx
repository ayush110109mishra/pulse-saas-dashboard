import React from 'react';

/**
 * Reusable accessible IconButton component
 * @param {Object} props
 * @param {string} props.ariaLabel - Required accessible label
 * @param {boolean} [props.hasBadge=false]
 * @param {string} [props.className='']
 * @param {React.ReactNode} props.children
 */
export default function IconButton({
  ariaLabel,
  hasBadge = false,
  className = '',
  children,
  type = 'button',
  ...rest
}) {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      title={ariaLabel}
      className={`icon-btn ${className}`.trim()}
      {...rest}
    >
      {children}
      {hasBadge && <span className="badge-dot" />}
    </button>
  );
}
