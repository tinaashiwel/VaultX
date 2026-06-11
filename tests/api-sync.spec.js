const { test, expect, request } = require('@playwright/test');
const testData = require('../fixtures/testData');

test('api-sync: synchronizes wallet data', async ({ request }) => {
  const apiUrl = `${process.env.API_URL || 'http://localhost:3000/api'}/sync`;
  const apiResponse = await request.post(apiUrl, {
    data: { accountId: testData.validUser.accountId },
  });

  expect(apiResponse.ok()).toBeTruthy();
});
