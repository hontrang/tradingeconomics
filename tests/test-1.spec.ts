import { test, expect } from '@playwright/test';
import { writeFile } from 'fs';

test('test', async ({ page }) => {
  await page.goto('https://tradingeconomics.com/calendar');
  const content = await page.content();
  writeFile('./docs/index.html', content, (err) => {
    if (err) {
      console.error('Error writing to file', err);
    } else {
      console.log('File has been written');
    }
  });
});