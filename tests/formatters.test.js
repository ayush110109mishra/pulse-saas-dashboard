import test from 'node:test';
import assert from 'node:assert/strict';
import { formatCurrency, formatNumber, formatPercentage } from '../src/utils/formatters.js';

test('formatCurrency utility', async (t) => {
  await t.test('formats positive integer currency correctly in INR', () => {
    assert.equal(formatCurrency(124500), '₹1,24,500');
    assert.equal(formatCurrency(50), '₹50');
  });

  await t.test('formats zero currency correctly', () => {
    assert.equal(formatCurrency(0), '₹0');
  });

  await t.test('formats negative currency correctly', () => {
    assert.equal(formatCurrency(-500), '-₹500');
  });

  await t.test('handles numeric strings gracefully', () => {
    assert.equal(formatCurrency('2500'), '₹2,500');
  });

  await t.test('supports currency override such as USD', () => {
    assert.equal(formatCurrency(2500, 'USD'), '$2,500');
  });

  await t.test('handles null and undefined with defensive fallback', () => {
    assert.equal(formatCurrency(null), '₹0');
    assert.equal(formatCurrency(undefined), '₹0');
  });

  await t.test('handles NaN and invalid strings with defensive fallback', () => {
    assert.equal(formatCurrency(NaN), '₹0');
    assert.equal(formatCurrency('not-a-number'), '₹0');
  });
});

test('formatNumber utility', async (t) => {
  await t.test('formats numbers with Indian comma grouping (lakhs/crores)', () => {
    assert.equal(formatNumber(1250), '1,250');
    assert.equal(formatNumber(1000000), '10,00,000');
    assert.equal(formatNumber(0), '0');
  });

  await t.test('handles numeric strings', () => {
    assert.equal(formatNumber('45000'), '45,000');
  });

  await t.test('handles null and undefined with defensive fallback', () => {
    assert.equal(formatNumber(null), '0');
    assert.equal(formatNumber(undefined), '0');
  });

  await t.test('handles NaN and invalid strings with defensive fallback', () => {
    assert.equal(formatNumber(NaN), '0');
    assert.equal(formatNumber('abc'), '0');
  });
});

test('formatPercentage utility', async (t) => {
  await t.test('formats positive percentage with plus sign', () => {
    assert.equal(formatPercentage(12.5), '+12.5%');
    assert.equal(formatPercentage(4.8), '+4.8%');
  });

  await t.test('formats negative percentage with minus sign', () => {
    assert.equal(formatPercentage(-3.2), '-3.2%');
    assert.equal(formatPercentage(-0.5), '-0.5%');
  });

  await t.test('supports custom decimal precision', () => {
    assert.equal(formatPercentage(12.3456, 2), '+12.35%');
    assert.equal(formatPercentage(5, 0), '+5%');
  });

  await t.test('handles zero correctly', () => {
    assert.equal(formatPercentage(0, 0), '0%');
  });

  await t.test('handles null and undefined with defensive fallback', () => {
    assert.equal(formatPercentage(null), '0%');
    assert.equal(formatPercentage(undefined), '0%');
  });

  await t.test('handles NaN and invalid strings with defensive fallback', () => {
    assert.equal(formatPercentage(NaN), '0%');
    assert.equal(formatPercentage('invalid'), '0%');
  });
});
