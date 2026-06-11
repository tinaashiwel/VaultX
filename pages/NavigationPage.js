class NavigationPage {
  constructor(page) {
    this.page = page;
    this.dashboardLink = page.getByTestId('nav-dashboard');
    this.transferLink = page.getByTestId('nav-transfer');
    this.historyLink = page.getByTestId('nav-history');
    this.sessionLink = page.getByTestId('nav-session');
  }

  async gotoDashboard() {
    await this.dashboardLink.click();
  }

  async gotoTransfer() {
    await this.transferLink.click();
  }

  async gotoHistory() {
    await this.historyLink.click();
  }

  async gotoSession() {
    await this.sessionLink.click();
  }
}

module.exports = NavigationPage;
