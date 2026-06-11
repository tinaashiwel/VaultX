test('Search transaction',
async ({ page }) => {

  await page
    .getByTestId('input-search')
    .fill('TX001');

  await expect(
    page.getByTestId(
      'history-row-tx001'
    )
  ).toBeVisible();
});

test('No result state',
async ({ page }) => {

  await page
    .getByTestId('input-search')
    .fill('INVALID_TX');

  await expect(
    page.getByTestId('no-results')
  ).toBeVisible();
});

test('Clear filters',
async ({ page }) => {

  await page
    .getByTestId('btn-clear-filters')
    .click();

  await expect(
    page.getByTestId(
      'transactions-table'
    )
  ).toBeVisible();
});