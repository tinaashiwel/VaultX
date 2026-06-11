class TransferPage {
  constructor(page) {
    this.page = page;

    this.assetDropdown =
      page.getByTestId('select-asset');

    this.amountInput =
      page.getByTestId('input-amount');

    this.addressInput =
      page.getByTestId('input-address');

    this.submitBtn =
      page.getByTestId('btn-submit-transfer');

    this.errorAmount =
      page.getByTestId('error-amount');

    this.errorAddress =
      page.getByTestId('error-address');
  }

  async sendTransfer(amount, address) {
    await this.amountInput.fill(amount);
    await this.addressInput.fill(address);
    await this.submitBtn.click();
  }
}

module.exports = TransferPage;