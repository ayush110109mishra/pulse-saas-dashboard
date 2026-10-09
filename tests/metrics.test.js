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

  await t.test('getDashboardRevenueSeries returns valid chart series and matches KPI totals exactly', () => {
    ['7d', '30d', '90d', 'ytd'].forEach((range) => {
      const series = getDashboardRevenueSeries(range);
      const metrics = getDashboardKpiMetrics(range);
      const revMetric = metrics.find((m) => m.id === 'total-revenue');
      const orderMetric = metrics.find((m) => m.id === 'total-orders');

      assert.ok(Array.isArray(series));
      assert.ok(series.length > 0);

      const sumRevenue = series.reduce((acc, curr) => acc + curr.revenue, 0);
      const sumOrders = series.reduce((acc, curr) => acc + curr.orders, 0);

      assert.equal(sumRevenue, revMetric.numericValue, `Series revenue sum should equal KPI total revenue for ${range}`);
      assert.equal(sumOrders, orderMetric.numericValue, `Series orders sum should equal KPI total orders for ${range}`);

      series.forEach((pt) => {
        assert.ok(pt.label, 'Data point must have a label');
        assert.equal(typeof pt.revenue, 'number', 'Revenue must be numeric');
        assert.equal(typeof pt.target, 'number', 'Target must be numeric');
      });
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

  await t.test('getFinancialTrends returns revenue, expenses, and profit matching KPI totals', () => {
    ['7d', '30d', '90d', 'ytd'].forEach((range) => {
      const trends = getFinancialTrends(range);
      const metrics = getDashboardKpiMetrics(range);
      const revMetric = metrics.find((m) => m.id === 'total-revenue');

      assert.ok(Array.isArray(trends));
      const totalRev = trends.reduce((acc, curr) => acc + curr.revenue, 0);
      assert.equal(totalRev, revMetric.numericValue, `Financial trends revenue sum should equal KPI total revenue for ${range}`);

      trends.forEach((item) => {
        assert.ok(item.label);
        assert.equal(typeof item.revenue, 'number');
        assert.equal(typeof item.expenses, 'number');
        assert.equal(typeof item.profit, 'number');
        assert.equal(item.profit, item.revenue - item.expenses, 'Profit must equal revenue minus expenses');
      });
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

  await t.test('getAcquisitionChannels returns 5 channels matching KPI total revenue', () => {
    ['7d', '30d', '90d', 'ytd'].forEach((range) => {
      const channels = getAcquisitionChannels(range);
      const metrics = getDashboardKpiMetrics(range);
      const revMetric = metrics.find((m) => m.id === 'total-revenue');

      assert.equal(channels.length, 5);
      const totalRev = channels.reduce((acc, curr) => acc + curr.revenue, 0);
      assert.equal(totalRev, revMetric.numericValue, `Channel revenue sum should equal KPI total revenue for ${range}`);

      channels.forEach((c) => {
        assert.ok(c.name);
        assert.equal(typeof c.share, 'number');
        assert.equal(typeof c.revenue, 'number');
        assert.ok(c.color);
      });
    });
  });
});
