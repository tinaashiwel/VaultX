class ReceivePage {
  constructor(page) {
    this.page           = page;
    this.receiveToggle  = page.getByTestId('toggle-receive');
    this.assetDropdown  = page.getByTestId('select-asset');
    this.depositAddress = page.getByTestId('receive-address-value');
    this.copyAddressBtn = page.getByTestId('btn-copy-address');
  }

  async goto() {
    await this.page.goto('/transfer?type=receive');
  }

  async switchAsset(asset) {
    await this.assetDropdown.selectOption(asset);
  }
}

module.exports = { ReceivePage };