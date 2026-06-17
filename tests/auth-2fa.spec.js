const { test, expect } = require('@playwright/test');
const { LoginPage }    = require('../pages/LoginPage');
const { TwoFAPage }    = require('../pages/TwoFAPage');
const { USERS }        = require('./helpers/login');

test.describe('Authentication - 2FA', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(USERS.jordan.email, USERS.jordan.password);
    await page.waitForSelector('[data-testid="screen-2fa"]', { timeout: 15000 });
  });

  test('TC_2FA_001 - 2FA screen renders 6 input boxes', async ({ page }) => {
    for (let i = 0; i <= 5; i++) {
      await expect(page.getByTestId(`otp-input-${i}`)).toBeVisible();
    }
  });

  test('TC_2FA_002 - Verify button is disabled until all 6 digits are filled', async ({ page }) => {
    const twoFAPage = new TwoFAPage(page);
    await expect(twoFAPage.verifyBtn).toBeDisabled();
    await twoFAPage.enterOTP('48291');
    await expect(twoFAPage.verifyBtn).toBeDisabled();
    await page.getByTestId('otp-input-5').fill('0');
    await expect(twoFAPage.verifyBtn).toBeEnabled();
  });

  test('TC_2FA_003 - Correct OTP navigates to dashboard', async ({ page }) => {
    const twoFAPage = new TwoFAPage(page);
    await twoFAPage.submitOTP(USERS.jordan.otp);
    await page.waitForSelector('[data-testid="screen-dashboard"]', { timeout: 15000 });
    await expect(page.getByTestId('screen-dashboard')).toBeVisible();
  });

  test('TC_2FA_004 - Wrong OTP shows error and stays on 2FA page', async ({ page }) => {
    const twoFAPage = new TwoFAPage(page);
    await twoFAPage.submitOTP('111111');
    await expect(twoFAPage.errorMsg).toBeVisible({ timeout: 10000 });
    await expect(page.getByTestId('screen-2fa')).toBeVisible();
  });

});