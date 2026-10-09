/**
 * Utility functions for formatting numbers, currency, and dates.
 */

export function formatCurrency(amount, currency = 'USD') {
  if (amount === undefined || amount === null) return '$0';
  const num = Number(amount);
  if (Number.isNaN(num)) return '$0';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0
  }).format(num);
}

export function formatNumber(value) {
  if (value === undefined || value === null) return '0';
  const num = Number(value);
  if (Number.isNaN(num)) return '0';
  return new Intl.NumberFormat('en-US').format(num);
}

export function formatPercentage(value, decimals = 1) {
  if (value === undefined || value === null) return '0%';
  const num = Number(value);
  if (Number.isNaN(num)) return '0%';
  const prefix = num > 0 ? '+' : '';
  return `${prefix}${num.toFixed(decimals)}%`;
}
