const { test, expect } =
require('@playwright/test');

const LoginPage =
require('../pages/LoginPage');

const TwoFAPage =
require('../pages/TwoFAPage');

const data =
require('../fixtures/testData');

test('Valid Login', async ({ page }) => {

  const login = new LoginPage(page);

  await login.goto();

  await login.login(
    data.validUser.email,
    data.validUser.password
  );

  await expect(
    page.getByTestId('screen-2fa')
  ).toBeVisible();
});

test('Wrong Password', async ({ page }) => {

  const login = new LoginPage(page);

  await login.goto();

  await login.login(
    data.validUser.email,
    'WrongPassword'
  );

  await expect(
    login.errorMessage
  ).toBeVisible();
});

test('Wrong OTP', async ({ page }) => {

  const login = new LoginPage(page);
  const twoFA = new TwoFAPage(page);

  await login.goto();

  await login.login(
    data.validUser.email,
    data.validUser.password
  );

  await twoFA.enterOTP('000000');

  await twoFA.verify();

  await expect(
    twoFA.errorMessage
  ).toBeVisible();
});