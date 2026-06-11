require('dotenv').config();

module.exports = {

  use: {

    baseURL: process.env.BASE_URL,

    headless: false,

    screenshot: 'only-on-failure',

    trace: 'retain-on-failure',

    video: 'retain-on-failure'
  }
};