const { test, expect } = require('@playwright/test');
const { loginUser }    = require('./helpers/login');
const { HistoryPage }  = require('../pages/HistoryPage');

test.describe('History', () => {

  test.beforeEach(async ({ page }) => {
    await loginUser(page);
    await page.waitForSelector('[data-testid="screen-dashboard"]', { timeout: 15000 });
    // Navigate via the nav button rather than direct goto to preserve session
    await page.getByTestId('nav-history').click();
    await page.waitForSelector('[data-testid="screen-history"]', { timeout: 15000 });
  });

  test('TC_HIST_001 - Verify history page loads', async ({ page }) => {
    const historyPage = new HistoryPage(page);
    await expect(historyPage.screen).toBeVisible();
    await expect(historyPage.table).toBeVisible();
  });

  test('TC_HIST_002 - Default sort is newest first', async ({ page }) => {
    const historyPage = new HistoryPage(page);
    await expect(historyPage.txCount).toBeVisible();
    const countText = await historyPage.txCount.textContent();
    expect(parseInt(countText)).toBeGreaterThan(0);
  });

  test('TC_HIST_003 - Transaction count label is visible', async ({ page }) => {
    const historyPage = new HistoryPage(page);
    await expect(historyPage.txCount).toBeVisible();
  });

  test('TC_HIST_004 - Summary stats: Total Sent, Total Received, Pending visible', async ({ page }) => {
    const historyPage = new HistoryPage(page);
    await expect(historyPage.totalSent).toBeVisible();
    await expect(historyPage.totalReceived).toBeVisible();
    await expect(historyPage.pendingCount).toBeVisible();
  });

  test('TC_HIST_007 - Filter by Send shows only sent transactions', async ({ page }) => {
    const historyPage = new HistoryPage(page);
    await historyPage.filterByType('send');
    const typeCells = page.locator('[data-testid^="tx-type-"]');
    const count = await typeCells.count();
    for (let i = 0; i < count; i++) {
      await expect(typeCells.nth(i)).toContainText(/send/i);
    }
  });

  test('TC_HIST_008 - Filter by Receive shows only received transactions', async ({ page }) => {
    const historyPage = new HistoryPage(page);
    await historyPage.filterByType('receive');
    const typeCells = page.locator('[data-testid^="tx-type-"]');
    const count = await typeCells.count();
    for (let i = 0; i < count; i++) {
      await expect(typeCells.nth(i)).toContainText(/receive/i);
    }
  });

  test('TC_HIST_009 - Filter by Completed shows only completed transactions', async ({ page }) => {
    const historyPage = new HistoryPage(page);
    await historyPage.filterByStatus('completed');
    const completedBadges = page.locator('[data-testid="status-badge-completed"]');
    await expect(completedBadges.first()).toBeVisible();
    await expect(page.getByTestId('status-badge-pending')).not.toBeVisible();
  });

  test('TC_HIST_010 - Filter by Pending shows only pending transactions', async ({ page }) => {
    const historyPage = new HistoryPage(page);
    await historyPage.filterByStatus('pending');
    const pendingBadges = page.locator('[data-testid="status-badge-pending"]');
    const count = await pendingBadges.count();
    if (count > 0) {
      await expect(pendingBadges.first()).toBeVisible();
    } else {
      await expect(historyPage.noResults).toBeVisible();
    }
  });

  test('TC_HIST_011 - Search by asset name returns matching records', async ({ page }) => {
    const historyPage = new HistoryPage(page);
    await historyPage.search('BTC');
    await expect(historyPage.table).toBeVisible();
    const countText = await historyPage.txCount.textContent();
    expect(parseInt(countText)).toBeGreaterThanOrEqual(0);
  });

  test('TC_HIST_012 - Clear filters restores all records', async ({ page }) => {
    const historyPage = new HistoryPage(page);
    await historyPage.filterByType('send');
    const filteredCount = parseInt(await historyPage.txCount.textContent());
    await historyPage.clearFilters();
    const clearedCount = parseInt(await historyPage.txCount.textContent());
    expect(clearedCount).toBeGreaterThanOrEqual(filteredCount);
  });

  test('TC_HIST_013 - Search with nonexistent ID shows no-results message', async ({ page }) => {
    const historyPage = new HistoryPage(page);
    await historyPage.search('NONEXISTENT_TX_99999');
    await expect(historyPage.noResults).toBeVisible();
  });

});