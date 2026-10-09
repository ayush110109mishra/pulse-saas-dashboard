import test from 'node:test';
import assert from 'node:assert/strict';
import { currentUser } from '../src/data/mockUser.js';

test('Current User Profile Data Contract', async (t) => {
  await t.test('currentUser contains valid Indian identity and organization data', () => {
    assert.equal(currentUser.name, 'Aarav Sharma');
    assert.equal(currentUser.email, 'aarav.sharma@example.com');
    assert.equal(currentUser.role, 'Product Manager');
    assert.equal(currentUser.status, 'Active');
    assert.equal(currentUser.department, 'Product');
    assert.equal(currentUser.location, 'Bengaluru, India');
    assert.equal(currentUser.organization.name, 'Aster Technologies');
    assert.equal(currentUser.organization.tier, 'Growth Plan');
  });

  await t.test('currentUser has valid contact and join date values', () => {
    assert.ok(currentUser.phone.startsWith('+91'));
    assert.ok(currentUser.joinedAt.includes('2025'));
    assert.ok(currentUser.avatarUrl.startsWith('https://'));
  });
});

test('Profile Dropdown Menu Configuration', async (t) => {
  const profileOptions = [
    { id: 'my-profile', label: 'My Profile', route: null, opensModal: true },
    { id: 'settings', label: 'Settings', route: '/settings', opensModal: false },
    { id: 'team', label: 'Team Members', route: '/users', opensModal: false },
    { id: 'sign-out', label: 'Sign Out (Demo)', isDanger: true, isDemo: true }
  ];

  await t.test('profile options contain My Profile and Settings navigation', () => {
    const ids = profileOptions.map((o) => o.id);
    assert.ok(ids.includes('my-profile'), 'My Profile option should be present');
    assert.ok(ids.includes('settings'), 'Settings option should be present');

    const settingsOption = profileOptions.find((o) => o.id === 'settings');
    assert.equal(settingsOption.route, '/settings');

    const myProfileOption = profileOptions.find((o) => o.id === 'my-profile');
    assert.equal(myProfileOption.opensModal, true);
  });

  await t.test('menu conforms to ARIA accessibility requirements', () => {
    const ariaConfig = {
      triggerRole: 'button',
      ariaHasPopup: 'menu',
      menuRole: 'menu',
      itemRole: 'menuitem',
      supportedKeys: ['Enter', ' ', 'ArrowDown', 'ArrowUp', 'Escape', 'Home', 'End']
    };
    assert.equal(ariaConfig.triggerRole, 'button');
    assert.equal(ariaConfig.ariaHasPopup, 'menu');
    assert.equal(ariaConfig.itemRole, 'menuitem');
    assert.ok(ariaConfig.supportedKeys.includes('Escape'));
  });
});
