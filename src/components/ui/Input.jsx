import React from 'react';

/**
 * Reusable Input component
 * @param {Object} props
 * @param {React.ReactNode} [props.leftIcon]
 * @param {string} [props.shortcut]
 * @param {string} [props.className='']
 * @param {string} [props.wrapperClassName='']
 */
export default function Input({
  leftIcon,
  shortcut,
  className = '',
  wrapperClassName = '',
  disabled = false,
  ...rest
}) {
  const hasLeftIcon = Boolean(leftIcon);

  return (
    <div className={`input-wrapper ${hasLeftIcon ? 'has-left-icon' : ''} ${wrapperClassName}`.trim()}>
      {leftIcon && <span className="input-icon-left">{leftIcon}</span>}
      <input
        type="text"
        disabled={disabled}
        className={`input-field ${className}`.trim()}
        {...rest}
      />
      {shortcut && <kbd className="input-shortcut">{shortcut}</kbd>}
    </div>
  );
}
