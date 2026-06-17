const { LoginPage } = require('../../pages/LoginPage');
const { TwoFAPage }  = require('../../pages/TwoFAPage');

const USERS = {
  jordan: {
    email:    'qa@vaultx.io',
    password: 'Test@1234',
    otp:      '482910',
  },
  priya: {
    email:    'intern@vaultx.io',
    password: 'Intern@99',
    otp:      '773421',
  },
};

async function loginUser(page, email = USERS.jordan.email, password = USERS.jordan.password, otp = USERS.jordan.otp) {
  const loginPage = new LoginPage(page);
  const twoFAPage = new TwoFAPage(page);

  await loginPage.goto();
  await loginPage.login(email, password);
  await page.waitForSelector('[data-testid="screen-2fa"]', { timeout: 15000 });
  await twoFAPage.submitOTP(otp);
  await page.waitForSelector('[data-testid="screen-dashboard"]', { timeout: 15000 });
}


module.exports = { loginUser, USERS };