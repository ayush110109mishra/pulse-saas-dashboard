import React from 'react';

/**
 * Reusable Skeleton loader for UI loading states
 * @param {Object} props
 * @param {string|number} [props.width='100%']
 * @param {string|number} [props.height='1rem']
 * @param {string} [props.borderRadius='var(--radius-sm)']
 * @param {string} [props.className='']
 */
export default function Skeleton({
  width = '100%',
  height = '1rem',
  borderRadius = 'var(--radius-sm)',
  className = '',
  style = {}
}) {
  return (
    <div
      className={`skeleton ${className}`.trim()}
      style={{
        width,
        height,
        borderRadius,
        ...style
      }}
      aria-hidden="true"
    />
  );
}
