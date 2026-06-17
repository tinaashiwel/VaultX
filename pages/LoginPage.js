class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput      = page.getByTestId('input-email');
    this.passwordInput   = page.getByTestId('input-password');
    this.loginBtn        = page.getByTestId('btn-login');
    this.errorMsg        = page.getByTestId('error-login');
    this.credentialsHint = page.getByTestId('test-credentials');
  }

  async goto() {
    await this.page.goto('/login');
    await this.emailInput.waitFor({ state: 'visible', timeout: 20000 });
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }
}

module.exports = { LoginPage };