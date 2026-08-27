const { LoginPage } = require('../../pages/LoginPage');
const { TwoFAPage } = require('../../pages/TwoFAPage');

const USERS = {
  jordan: {
    email: process.env.EMAIL || 'qa@vaultx.io',
    password: process.env.PASSWORD || 'Test@1234',
    otp: process.env.VALID_OTP || '482910',
  },
  priya: {
    email: process.env.SECONDARY_EMAIL || 'intern@vaultx.io',
    password: process.env.SECONDARY_PASSWORD || 'Intern@99',
    otp: process.env.SECONDARY_OTP || '773421',
  },
};

async function loginUser(
  page,
  email = USERS.jordan.email,
  password = USERS.jordan.password,
  otp = USERS.jordan.otp
) {
  const loginPage = new LoginPage(page);
  const twoFAPage = new TwoFAPage(page);

  await loginPage.goto();
  await loginPage.login(email, password);
  await page.getByTestId('screen-2fa').waitFor({ state: 'visible' });
  await twoFAPage.submitOTP(otp);
  await page.getByTestId('screen-dashboard').waitFor({ state: 'visible' });
}

module.exports = { loginUser, USERS };
