test('Unauthenticated user redirected',
async ({ page }) => {

  await page.goto('/dashboard');

  await expect(
    page.getByTestId('screen-login')
  ).toBeVisible();
});

test('Logout works',
async ({ page }) => {

  await page.getByTestId('btn-logout')
    .click();

  await expect(
    page.getByTestId('screen-login')
  ).toBeVisible();
});