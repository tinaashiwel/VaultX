class NavPage {
  constructor(page) {
    this.page             = page;
    this.navbar           = page.getByTestId('nav-bar');
    this.dashboardTab     = page.getByTestId('nav-dashboard');
    this.transferTab      = page.getByTestId('nav-transfer');
    this.historyTab       = page.getByTestId('nav-history');
    this.logoutBtn        = page.getByTestId('btn-logout');
    this.userAvatar       = page.getByTestId('user-avatar');
    this.userName         = page.getByTestId('user-name');
    this.connectionStatus = page.getByTestId('connection-status');
  }

  async logout() {
    await this.logoutBtn.click();
  }
}

module.exports = { NavPage };