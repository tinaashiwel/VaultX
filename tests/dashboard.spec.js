const { test, expect } =
require('@playwright/test');

test('Dashboard loads', async ({ page }) => {

  await expect(
    page.getByTestId('screen-dashboard')
  ).toBeVisible();
});

test('Wallet cards visible', async ({ page }) => {

  await expect(
    page.getByTestId('wallet-grid')
  ).toBeVisible();
});

test('Recent transactions visible',
async ({ page }) => {

  await expect(
    page.getByTestId('recent-transactions')
  ).toBeVisible();
});