import React, { useState } from 'react';

/**
 * Reusable Avatar component with fallback monogram
 * @param {Object} props
 * @param {string} [props.src]
 * @param {string} [props.name='User']
 * @param {'sm' | 'md' | 'lg'} [props.size='md']
 * @param {boolean} [props.showStatus=false]
 * @param {string} [props.className='']
 */
export default function Avatar({
  src,
  name = 'User',
  size = 'md',
  showStatus = false,
  className = ''
}) {
  const [imageError, setImageError] = useState(false);

  const sizePixels = {
    sm: 28,
    md: 36,
    lg: 48
  }[size] || 36;

  const getInitials = (str) => {
    if (!str) return 'U';
    const parts = str.trim().split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return str.slice(0, 2).toUpperCase();
  };

  return (
    <div
      className={`avatar-wrapper ${className}`.trim()}
      style={{ width: sizePixels, height: sizePixels }}
    >
      {src && !imageError ? (
        <img
          src={src}
          alt={name}
          width={sizePixels}
          height={sizePixels}
          className="avatar-img"
          onError={() => setImageError(true)}
        />
      ) : (
        <div
          className="avatar-fallback"
          style={{ width: sizePixels, height: sizePixels, fontSize: sizePixels * 0.38 }}
        >
          {getInitials(name)}
        </div>
      )}
      {showStatus && <span className="avatar-status-dot" />}
    </div>
  );
}
