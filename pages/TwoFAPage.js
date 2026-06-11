class TwoFAPage {
  constructor(page) {
    this.page = page;

    this.verifyBtn = page.getByTestId('btn-verify-2fa');
    this.errorMessage = page.getByTestId('error-2fa');
  }

  async enterOTP(code) {
    const digits = code.split('');

    for (let i = 0; i < digits.length; i++) {
      await this.page
        .getByTestId(`otp-input-${i}`)
        .fill(digits[i]);
    }
  }

  async verify() {
    await this.verifyBtn.click();
  }
}

module.exports = TwoFAPage;