class HistoryPage {
  constructor(page) {
    this.page = page;

    this.searchInput =
      page.getByTestId('input-search');

    this.clearFilters =
      page.getByTestId('btn-clear-filters');

    this.noResults =
      page.getByTestId('no-results');
  }

  async search(text) {
    await this.searchInput.fill(text);
  }
}

module.exports = HistoryPage;