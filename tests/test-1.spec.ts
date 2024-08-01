import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://tradingeconomics.com/calendar');
  const content = await page.content();
  console.log(content);
});