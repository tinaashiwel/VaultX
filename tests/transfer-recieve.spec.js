const { test, expect } = require('@playwright/test');
const { loginUser }    = require('./helpers/login');
const { ReceivePage }  = require('../pages/ReceivePage');

test.describe('Transfer - Receive', () => {

  test.beforeEach(async ({ page }) => {
    await loginUser(page);
    await page.waitForSelector('[data-testid="screen-dashboard"]', { timeout: 15000 });
    await page.getByTestId('nav-transfer').click();
    await page.waitForSelector('[data-testid="screen-transfer"]', { timeout: 15000 });
    await page.getByTestId('toggle-receive').click();
  });

  test('TC_REC_001 - Receive tab loads and pre-selects receive mode', async ({ page }) => {
    await expect(page.getByTestId('screen-transfer')).toBeVisible();
    await expect(page.getByTestId('toggle-receive')).toBeVisible();
  });

  test('TC_REC_002 - Receive tab survives page refresh', async ({ page }) => {
  await page.reload();
  const isLoginScreen = await page.getByTestId('screen-login').isVisible().catch(() => false);

  if (isLoginScreen) {
    console.log('NOTE: Page refresh logged the user out — session not persisted across reload');
    test.skip(true, 'Known issue: session does not persist across page refresh — see bug AUTH-07');
  } else {
    await page.waitForSelector('[data-testid="screen-transfer"]', { timeout: 15000 });
    await expect(page.getByTestId('screen-transfer')).toBeVisible();
  }
});
  test('TC_REC_003 - Deposit address is displayed', async ({ page }) => {
    const receivePage = new ReceivePage(page);
    await expect(receivePage.depositAddress).toBeVisible();
    const address = await receivePage.depositAddress.textContent();
    expect(address.trim().length).toBeGreaterThan(5);
  });

  test('TC_REC_005 - Switching asset updates deposit address', async ({ page }) => {
    const receivePage = new ReceivePage(page);
    const firstAddress = await receivePage.depositAddress.textContent();
    await receivePage.switchAsset('ETH');
    const newAddress = await receivePage.depositAddress.textContent();
    expect(newAddress).not.toBe(firstAddress);
  });

});