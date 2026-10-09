import React, { forwardRef } from 'react';

/**
 * Reusable Input component with ref forwarding
 * @param {Object} props
 * @param {React.ReactNode} [props.leftIcon]
 * @param {string} [props.shortcut]
 * @param {string} [props.className='']
 * @param {string} [props.wrapperClassName='']
 */
const Input = forwardRef(function Input(
  {
    leftIcon,
    shortcut,
    className = '',
    wrapperClassName = '',
    disabled = false,
    type = 'text',
    ...rest
  },
  ref
) {
  const hasLeftIcon = Boolean(leftIcon);

  return (
    <div className={`input-wrapper ${hasLeftIcon ? 'has-left-icon' : ''} ${wrapperClassName}`.trim()}>
      {leftIcon && <span className="input-icon-left">{leftIcon}</span>}
      <input
        ref={ref}
        type={type}
        disabled={disabled}
        className={`input-field ${className}`.trim()}
        {...rest}
      />
      {shortcut && <kbd className="input-shortcut">{shortcut}</kbd>}
    </div>
  );
});

export default Input;
