class HistoryPage {
  constructor(page) {
    this.page            = page;
    this.screen          = page.getByTestId('screen-history');
    this.txCount         = page.getByTestId('tx-count');
    this.totalSent       = page.getByTestId('stat-total-sent');
    this.totalReceived   = page.getByTestId('stat-total-received');
    this.pendingCount    = page.getByTestId('stat-pending-count');
    this.searchInput     = page.getByTestId('input-search');
    this.filterType      = page.getByTestId('filter-type');
    this.filterStatus    = page.getByTestId('filter-status');
    this.filterAsset     = page.getByTestId('filter-asset');
    this.sortBy          = page.getByTestId('sort-by');
    this.clearFiltersBtn = page.getByTestId('btn-clear-filters');
    this.table           = page.getByTestId('transactions-table');
    this.noResults       = page.getByTestId('no-results');
  }

  async goto() {
    await this.page.goto('/history');
  }

  async filterByType(value) {
    await this.filterType.selectOption(value);
  }

  async filterByStatus(value) {
    await this.filterStatus.selectOption(value);
  }

  async filterByAsset(value) {
    await this.filterAsset.selectOption(value);
  }

  async search(term) {
    await this.searchInput.fill(term);
  }

  async clearFilters() {
    await this.clearFiltersBtn.click();
  }
}

module.exports = { HistoryPage };