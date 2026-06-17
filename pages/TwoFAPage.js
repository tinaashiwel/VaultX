class TwoFAPage {
  constructor(page) {
    this.page       = page;
    this.verifyBtn  = page.getByTestId('btn-verify-2fa');
    this.backBtn    = page.getByTestId('btn-back-login');
    this.errorMsg   = page.getByTestId('error-2fa');
  }

  // Fills each digit into its own input box otp-input-0 through otp-input-5
  async enterOTP(code) {
    const digits = code.toString().split('');
    for (let i = 0; i < digits.length; i++) {
      await this.page.getByTestId(`otp-input-${i}`).fill(digits[i]);
    }
  }

  async submitOTP(code) {
    await this.enterOTP(code);
    await this.verifyBtn.click();
  }
}

module.exports = { TwoFAPage };