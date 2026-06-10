class LoginPage {
  constructor(page) {
    this.page = page;

    this.emailInput = page.getByTestId('input-email');
    this.passwordInput = page.getByTestId('input-password');
    this.loginBtn = page.getByTestId('btn-login');
    this.errorMessage = page.getByTestId('error-login');
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }
}

module.exports = LoginPage;