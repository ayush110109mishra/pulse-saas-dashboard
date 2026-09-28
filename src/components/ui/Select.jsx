import React from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * Reusable Select component
 * @param {Object} props
 * @param {Array<{value: string, label: string}>} [props.options=[]]
 * @param {string} [props.className='']
 * @param {string} [props.wrapperClassName='']
 */
export default function Select({
  options = [],
  className = '',
  wrapperClassName = '',
  value,
  onChange,
  disabled = false,
  ...rest
}) {
  return (
    <div className={`select-wrapper ${wrapperClassName}`.trim()}>
      <select
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`select-field ${className}`.trim()}
        {...rest}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown className="select-icon" size={16} />
    </div>
  );
}
