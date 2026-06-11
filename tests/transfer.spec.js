test('Send transaction successfully',
async ({ page }) => {

  await page.getByTestId('input-amount')
    .fill('10');

  await page.getByTestId('input-address')
    .fill(process.env.BTC_ADDRESS);

  await page.getByTestId(
    'btn-submit-transfer'
  ).click();

  await expect(
    page.getByTestId(
      'screen-transfer-success'
    )
  ).toBeVisible();
});

test('Missing address validation',
async ({ page }) => {

  await page.getByTestId('input-amount')
    .fill('10');

  await page.getByTestId(
    'btn-submit-transfer'
  ).click();

  await expect(
    page.getByTestId('error-address')
  ).toBeVisible();
});

test('Insufficient balance validation',
async ({ page }) => {

  await page.getByTestId('input-amount')
    .fill('999999999');

  await page.getByTestId('input-address')
    .fill(process.env.BTC_ADDRESS);

  await page.getByTestId(
    'btn-submit-transfer'
  ).click();

  await expect(
    page.getByTestId('error-amount')
  ).toBeVisible();
});