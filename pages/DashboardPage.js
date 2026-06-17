class DashboardPage {
  constructor(page) {
    this.page                = page;
    this.totalBalanceUSD     = page.getByTestId('total-balance-usd');
    this.walletGrid          = page.getByTestId('wallet-grid');
    this.walletCardBTC       = page.getByTestId('wallet-card-btc');
    this.walletCardETH       = page.getByTestId('wallet-card-eth');
    this.walletCardUSDT      = page.getByTestId('wallet-card-usdt');
    this.walletCardSOL       = page.getByTestId('wallet-card-sol');
    this.recentTransactions  = page.getByTestId('recent-transactions');
    this.sendBtn             = page.getByTestId('btn-goto-send');
    this.receiveBtn          = page.getByTestId('btn-goto-receive');
    this.viewAllBtn          = page.getByTestId('btn-view-all-transactions');
  }

  async goto() {
    await this.page.goto('/dashboard');
  }
}

module.exports = { DashboardPage };