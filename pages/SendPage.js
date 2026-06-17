class SendPage {
  constructor(page) {
    this.page            = page;
    this.screen          = page.getByTestId('screen-transfer');
    this.sendToggle      = page.getByTestId('toggle-send');
    this.assetDropdown   = page.getByTestId('select-asset');
    this.amountInput     = page.getByTestId('input-amount');
    this.usdPreview      = page.getByTestId('usd-preview');
    this.addressInput    = page.getByTestId('input-address');
    this.noteInput       = page.getByTestId('input-note');
    this.submitBtn       = page.getByTestId('btn-submit-transfer');
    this.errorAmount     = page.getByTestId('error-amount');
    this.errorAddress    = page.getByTestId('error-address');
    this.successScreen   = page.getByTestId('screen-transfer-success');
    this.successTxId     = page.getByTestId('success-txid');
    this.newTransferBtn  = page.getByTestId('btn-new-transfer');
    this.viewHistoryBtn  = page.getByTestId('btn-goto-history');
  }

  async goto() {
    await this.page.goto('/transfer?type=send');
  }

  async sendFunds(asset, amount, address) {
    await this.sendToggle.click();
    await this.assetDropdown.selectOption(asset);
    await this.amountInput.fill(amount);
    await this.addressInput.fill(address);
    await this.submitBtn.click();
  }
}

module.exports = { SendPage };