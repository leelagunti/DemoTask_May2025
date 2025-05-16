import { test, expect } from '@playwright/test';

test('Search for SDET role on Career page', async ({ context, page }) => {
  // Step 1: Go to Shielded homepage
  await page.goto('/');

  // Step 2: Click on "Careers" link 
  await page.getByRole('link', { name: /careers/i }).click();

  // Step 3: Wait for the careers page to load
  await expect(page).toHaveURL(/careers/);
  const acceptCookies = page.getByRole('button', { name: /accept all/i });
  if (await acceptCookies.isVisible()) {
    await acceptCookies.click();
  }  

  // Step 4: Search for "Software Development Engineer in Test"
  const searchInput = page.getByPlaceholder(/Search/i);
  await searchInput.fill('Software Development Engineer in Test');


  // Step 5: Wait for the job result to appear
  const jobRow = page.getByRole('row', { name: /Software Development Engineer in Test - Midnight/i });

// Assertions: Workplace type is Remote, Work type is Full-time
await expect(jobRow).toContainText('Remote');
await expect(jobRow).toContainText('Full-time');

 
});
