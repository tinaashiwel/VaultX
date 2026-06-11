const { expect } = require('@playwright/test');

async function waitForNetworkIdle(page) {
  await page.waitForLoadState('networkidle');
}

function assertVisible(element) {
  return expect(element).toBeVisible();
}

module.exports = {
  waitForNetworkIdle,
  assertVisible,
};
