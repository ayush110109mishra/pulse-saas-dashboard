import React from 'react';
import { formatCurrency, formatNumber } from '../../utils/formatters';

/**
 * Reusable Chart Tooltip component styled with Pulse design system tokens
 */
export default function ChartTooltip({ active, payload, label, isCurrency = true }) {
  if (!active || !payload || !payload.length) {
    return null;
  }

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-md)',
        padding: '10px 14px',
        boxShadow: 'var(--shadow-dropdown)',
        fontSize: 'var(--font-xs)',
        color: 'var(--text-primary)',
        minWidth: '140px'
      }}
    >
      {label && (
        <div
          style={{
            fontWeight: 600,
            marginBottom: '6px',
            color: 'var(--text-secondary)',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '4px'
          }}
        >
          {label}
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {payload.map((item, idx) => {
          const formattedVal =
            typeof item.value === 'number'
              ? isCurrency && (item.name?.toLowerCase().includes('rev') || item.name?.toLowerCase().includes('profit') || item.name?.toLowerCase().includes('expense') || item.name?.toLowerCase().includes('target'))
                ? formatCurrency(item.value)
                : formatNumber(item.value)
              : item.value;

          return (
            <div
              key={`tooltip-item-${idx}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: item.color || item.fill || 'var(--primary-500)',
                    display: 'inline-block'
                  }}
                />
                <span style={{ color: 'var(--text-secondary)', textTransform: 'capitalize' }}>
                  {item.name || 'Value'}:
                </span>
              </div>
              <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                {formattedVal}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
