class DashboardPage {
  constructor(page) {
    this.page = page;

    this.totalBalance =
      page.getByTestId('total-balance-usd');

    this.walletGrid =
      page.getByTestId('wallet-grid');

    this.transactions =
      page.getByTestId('recent-transactions');

    this.sendBtn =
      page.getByTestId('btn-goto-send');
  }
}

module.exports = DashboardPage;