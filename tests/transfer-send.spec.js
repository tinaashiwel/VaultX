const { test, expect } = require('@playwright/test');
const { loginUser }    = require('./helpers/login');
const { SendPage }     = require('../pages/SendPage');

test.describe('Transfer - Send', () => {

  test.beforeEach(async ({ page }) => {
    await loginUser(page);
    await page.waitForSelector('[data-testid="screen-dashboard"]', { timeout: 15000 });
    await page.getByTestId('nav-transfer').click();
    await page.waitForSelector('[data-testid="screen-transfer"]', { timeout: 15000 });
    await page.getByTestId('toggle-send').click();
  });

  test('TC_SEND_001 - Asset dropdown loads with available wallets', async ({ page }) => {
    const sendPage = new SendPage(page);
    await expect(sendPage.assetDropdown).toBeVisible();
    const options = await sendPage.assetDropdown.locator('option').allTextContents();
    expect(options.some(o => /BTC|ETH|USDT|SOL/i.test(o))).toBeTruthy();
  });

  test('TC_SEND_004 - USD preview updates when amount is entered', async ({ page }) => {
    const sendPage = new SendPage(page);
    await sendPage.assetDropdown.selectOption('BTC');
    await sendPage.amountInput.fill('0.1');
    await expect(sendPage.usdPreview).toBeVisible();
    const previewText = await sendPage.usdPreview.textContent();
    expect(previewText).toMatch(/\$/);
  });

  test('TC_SEND_005 - Successful send shows confirmation screen with Tx ID', async ({ page }) => {
    const sendPage = new SendPage(page);
    await sendPage.assetDropdown.selectOption('BTC');
    await sendPage.amountInput.fill('0.01');
    await sendPage.addressInput.fill('1A2B3C4D5E6F7G8H9I0J');
    await sendPage.submitBtn.click();
    await expect(sendPage.successScreen).toBeVisible();
    await expect(sendPage.successTxId).toBeVisible();
  });

  test('TC_SEND_006 - Insufficient balance shows validation error', async ({ page }) => {
    const sendPage = new SendPage(page);
    await sendPage.assetDropdown.selectOption('BTC');
    await sendPage.amountInput.fill('9999');
    await sendPage.addressInput.fill('1A2B3C4D5E6F7G8H9I0J');
    await sendPage.submitBtn.click();
    await expect(sendPage.errorAmount).toBeVisible();
    await expect(sendPage.errorAmount).toContainText(/insufficient/i);
  });

  test('TC_SEND_007 - Empty recipient address shows validation error', async ({ page }) => {
    const sendPage = new SendPage(page);
    await sendPage.assetDropdown.selectOption('ETH');
    await sendPage.amountInput.fill('0.1');
    await sendPage.submitBtn.click();
    await expect(sendPage.errorAddress).toBeVisible();
    await expect(sendPage.errorAddress).toContainText(/required/i);
  });

  test('TC_SEND_008 - Short address shows validation error', async ({ page }) => {
    const sendPage = new SendPage(page);
    await sendPage.assetDropdown.selectOption('ETH');
    await sendPage.amountInput.fill('0.1');
    await sendPage.addressInput.fill('short');
    await sendPage.submitBtn.click();
    await expect(sendPage.errorAddress).toBeVisible();
  });

  test('TC_SEND_009 - New Transfer button on success screen resets the form', async ({ page }) => {
    const sendPage = new SendPage(page);
    await sendPage.assetDropdown.selectOption('BTC');
    await sendPage.amountInput.fill('0.01');
    await sendPage.addressInput.fill('1A2B3C4D5E6F7G8H9I0J');
    await sendPage.submitBtn.click();
    await expect(sendPage.successScreen).toBeVisible();
    await sendPage.newTransferBtn.click();
    await expect(sendPage.screen).toBeVisible();
    await expect(sendPage.amountInput).toHaveValue('');
  });

  test('TC_SEND_010 - View History button on success screen navigates to history', async ({ page }) => {
    const sendPage = new SendPage(page);
    await sendPage.assetDropdown.selectOption('BTC');
    await sendPage.amountInput.fill('0.01');
    await sendPage.addressInput.fill('1A2B3C4D5E6F7G8H9I0J');
    await sendPage.submitBtn.click();
    await expect(sendPage.successScreen).toBeVisible();
    await sendPage.viewHistoryBtn.click();
    await page.waitForSelector('[data-testid="screen-history"]', { timeout: 15000 });
  });

});