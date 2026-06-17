const { test, expect } = require('@playwright/test');
const { loginUser, USERS } = require('./helpers/login');
const { LoginPage }    = require('../pages/LoginPage');
const { NavPage }      = require('../pages/NavPage');

test.describe('Navigation & Session', () => {

  test('TC_NAV_001 - Navbar is visible after login', async ({ page }) => {
    await loginUser(page);
    const nav = new NavPage(page);
    await expect(nav.navbar).toBeVisible();
    await expect(nav.dashboardTab).toBeVisible();
    await expect(nav.transferTab).toBeVisible();
    await expect(nav.historyTab).toBeVisible();
  });

  test('TC_NAV_005 - Navbar is NOT shown on login page', async ({ page }) => {
    await page.goto('/login');
    await expect(page.getByTestId('nav-bar')).not.toBeVisible();
  });

  test('TC_NAV_006 - Navbar is NOT shown on 2FA page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(USERS.jordan.email, USERS.jordan.password);
    await page.waitForSelector('[data-testid="screen-2fa"]', { timeout: 15000 });
    await expect(page.getByTestId('nav-bar')).not.toBeVisible();
  });

  test('TC_NAV_007 - Logout redirects to login page', async ({ page }) => {
    await loginUser(page);
    const nav = new NavPage(page);
    await nav.logout();
    await page.waitForURL('**/login**', { timeout: 10000 });
    await expect(page.getByTestId('screen-login')).toBeVisible();
  });

  test('TC_NAV_008 - Unauthenticated access to dashboard redirects to login', async ({ page }) => {
    await page.goto('/dashboard');
    await page.waitForURL('**/login**', { timeout: 10000 });
    await expect(page.getByTestId('screen-login')).toBeVisible();
  });

  test('TC_NAV_009 - User display name is correct for logged-in account', async ({ page }) => {
    await loginUser(page);
    const nav = new NavPage(page);
    await expect(nav.userName).toBeVisible();
    await expect(nav.userName).toContainText(/Jordan/i);
  });

});
