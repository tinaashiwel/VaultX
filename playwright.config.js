require('dotenv').config();

module.exports = {

  testDir: './tests',

  // Limit parallel workers to avoid resource exhaustion against staging
  workers: 2,

  // Retry flaky tests once before marking as failed (helpful for staging network variance)
  retries: 1,

  // Global timeout per test (default is 30000ms, bumped slightly for staging latency)
  timeout: 45000,

  reporter: 'html',

  use: {
    baseURL: 'https://vault-ui-zeta.vercel.app',
    headless: process.env.HEADLESS !== 'false',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',

    // Default timeout for actions like click, fill, etc.
    actionTimeout: 15000,

    // Default timeout for navigation
    navigationTimeout: 20000,
  },

};