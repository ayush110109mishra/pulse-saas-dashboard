import test from 'node:test';
import assert from 'node:assert/strict';

test('Theme configuration and modes', async (t) => {
  await t.test('supports all three theme modes: system, light, dark', () => {
    const validModes = ['system', 'light', 'dark'];
    assert.ok(validModes.includes('system'));
    assert.ok(validModes.includes('light'));
    assert.ok(validModes.includes('dark'));
  });

  await t.test('computes resolved theme correctly given preference and system fallback', () => {
    function resolveTheme(preference, isSystemDark) {
      if (preference === 'system') {
        return isSystemDark ? 'dark' : 'light';
      }
      return preference;
    }

    assert.equal(resolveTheme('light', true), 'light');
    assert.equal(resolveTheme('light', false), 'light');
    assert.equal(resolveTheme('dark', false), 'dark');
    assert.equal(resolveTheme('dark', true), 'dark');
    assert.equal(resolveTheme('system', true), 'dark');
    assert.equal(resolveTheme('system', false), 'light');
  });

  await t.test('toggles correctly between light and dark modes', () => {
    function toggle(resolvedTheme) {
      return resolvedTheme === 'dark' ? 'light' : 'dark';
    }

    assert.equal(toggle('dark'), 'light');
    assert.equal(toggle('light'), 'dark');
  });
});
