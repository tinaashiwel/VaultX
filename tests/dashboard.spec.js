const { test, expect }  = require('@playwright/test');
const { loginUser }     = require('./helpers/login');
const { DashboardPage } = require('../pages/DashboardPage');

test.describe('Dashboard', () => {

  test.beforeEach(async ({ page }) => {
    // await request.post('http://localhost:4000/api/reset');
    await loginUser(page);
    await page.waitForSelector('[data-testid="screen-dashboard"]', { timeout: 15000 });
  });

  test('TC_DASH_001 - Dashboard loads and total balance is displayed', async ({ page }) => {
    const dash = new DashboardPage(page);
    await expect(dash.totalBalanceUSD).toBeVisible();
    await expect(dash.totalBalanceUSD).toContainText('70,892.18');
  });

  test('TC_DASH_002 - All four wallet cards render correctly', async ({ page }) => {
    const dash = new DashboardPage(page);
    await expect(dash.walletCardBTC).toBeVisible();
    await expect(dash.walletCardETH).toBeVisible();
    await expect(dash.walletCardUSDT).toBeVisible();
    await expect(dash.walletCardSOL).toBeVisible();
  });

  test('TC_DASH_003 - Wallet balances display correct seed values', async ({ page }) => {
  await expect(page.getByTestId('balance-btc')).toContainText('0.8423');
  await expect(page.getByTestId('balance-eth')).toContainText('4.2091');
});

  test('TC_DASH_004 - Recent transactions widget is visible', async ({ page }) => {
    const dash = new DashboardPage(page);
    await expect(dash.recentTransactions).toBeVisible();
  });

  test('TC_DASH_005 - Send button navigates to /transfer?type=send', async ({ page }) => {
    const dash = new DashboardPage(page);
    await dash.sendBtn.click();
    await page.waitForURL('**/transfer**', { timeout: 10000 });
    await expect(page).toHaveURL(/type=send/);
  });

  test('TC_DASH_006 - Receive button navigates to /transfer?type=receive', async ({ page }) => {
    const dash = new DashboardPage(page);
    await dash.receiveBtn.click();
    await page.waitForURL('**/transfer**', { timeout: 10000 });
    await expect(page).toHaveURL(/type=receive/);
  });

});
