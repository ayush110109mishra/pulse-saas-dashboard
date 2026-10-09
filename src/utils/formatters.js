/**
 * Utility functions for formatting numbers, currency, and dates.
 * Localized for Indian business context (INR / en-IN).
 */

export function formatCurrency(amount, currency = 'INR') {
  const isINR = currency === 'INR';
  const fallbackZero = isINR ? '₹0' : '$0';
  if (amount === undefined || amount === null) return fallbackZero;
  const num = Number(amount);
  if (Number.isNaN(num)) return fallbackZero;
  const locale = isINR ? 'en-IN' : 'en-US';
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0
  }).format(num);
}

export function formatNumber(value) {
  if (value === undefined || value === null) return '0';
  const num = Number(value);
  if (Number.isNaN(num)) return '0';
  return new Intl.NumberFormat('en-IN').format(num);
}

export function formatPercentage(value, decimals = 1) {
  if (value === undefined || value === null) return '0%';
  const num = Number(value);
  if (Number.isNaN(num)) return '0%';
  const prefix = num > 0 ? '+' : '';
  return `${prefix}${num.toFixed(decimals)}%`;
}

export function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(date);
}
