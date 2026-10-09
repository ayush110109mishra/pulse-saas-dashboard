import test from 'node:test';
import assert from 'node:assert/strict';
import {
  dateRangeOptions,
  getDashboardKpiMetrics,
  getDashboardRevenueSeries,
  mockRecentActivity
} from '../src/data/mockMetrics.js';
import {
  getAnalyticsKpis,
  getFinancialTrends,
  getUserGrowthSeries,
  getConversionFunnel,
  getAcquisitionChannels
} from '../src/data/mockAnalytics.js';

test('mockMetrics data layer', async (t) => {
  await t.test('dateRangeOptions contains valid presets', () => {
    assert.equal(dateRangeOptions.length, 4);
    const values = dateRangeOptions.map((o) => o.value);
    assert.deepEqual(values, ['7d', '30d', '90d', 'ytd']);
  });

  await t.test('getDashboardKpiMetrics returns complete metric contracts', () => {
    ['7d', '30d', '90d', 'ytd'].forEach((range) => {
      const metrics = getDashboardKpiMetrics(range);
      assert.equal(metrics.length, 4, `Expected 4 KPIs for range ${range}`);
      metrics.forEach((metric) => {
        assert.ok(metric.id, 'Metric must have an id');
        assert.ok(metric.title, 'Metric must have a title');
        assert.ok(metric.value, 'Metric must have a formatted value');
        assert.ok(metric.trend, 'Metric must have a trend direction');
        assert.ok(metric.iconName, 'Metric must have an iconName');
      });
    });
  });

  await t.test('getDashboardRevenueSeries returns valid chart series', () => {
    const series = getDashboardRevenueSeries('30d');
    assert.ok(Array.isArray(series));
    assert.ok(series.length > 0);
    series.forEach((pt) => {
      assert.ok(pt.label, 'Data point must have a label');
      assert.equal(typeof pt.revenue, 'number', 'Revenue must be numeric');
      assert.equal(typeof pt.target, 'number', 'Target must be numeric');
    });
  });

  await t.test('mockRecentActivity has valid activity elements', () => {
    assert.ok(Array.isArray(mockRecentActivity));
    assert.ok(mockRecentActivity.length >= 4);
    mockRecentActivity.forEach((act) => {
      assert.ok(act.id);
      assert.ok(act.user);
      assert.ok(act.action);
    });
  });
});

test('mockAnalytics data layer', async (t) => {
  await t.test('getAnalyticsKpis returns 4 deep-dive KPIs', () => {
    const kpis = getAnalyticsKpis('30d');
    assert.equal(kpis.length, 4);
    kpis.forEach((k) => {
      assert.ok(k.id);
      assert.ok(k.title);
      assert.ok(k.value);
    });
  });

  await t.test('getFinancialTrends returns revenue, expenses, and profit', () => {
    const trends = getFinancialTrends('30d');
    assert.ok(Array.isArray(trends));
    trends.forEach((item) => {
      assert.ok(item.label);
      assert.equal(typeof item.revenue, 'number');
      assert.equal(typeof item.expenses, 'number');
      assert.equal(typeof item.profit, 'number');
    });
  });

  await t.test('getUserGrowthSeries returns signups, churned, and net growth', () => {
    const growth = getUserGrowthSeries('30d');
    assert.ok(Array.isArray(growth));
    growth.forEach((item) => {
      assert.ok(item.label);
      assert.equal(typeof item.signups, 'number');
      assert.equal(typeof item.churned, 'number');
      assert.equal(typeof item.net, 'number');
    });
  });

  await t.test('getConversionFunnel returns 5 funnel stages', () => {
    const funnel = getConversionFunnel('30d');
    assert.equal(funnel.length, 5);
    funnel.forEach((stage) => {
      assert.ok(stage.stage);
      assert.equal(typeof stage.count, 'number');
      assert.equal(typeof stage.percentage, 'number');
    });
  });

  await t.test('getAcquisitionChannels returns 5 acquisition channels', () => {
    const channels = getAcquisitionChannels('30d');
    assert.equal(channels.length, 5);
    channels.forEach((c) => {
      assert.ok(c.name);
      assert.equal(typeof c.share, 'number');
      assert.equal(typeof c.revenue, 'number');
      assert.ok(c.color);
    });
  });
});
