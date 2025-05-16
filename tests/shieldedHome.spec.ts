import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Validate Shielded Home Page', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();

    // Validate main heading
  await expect(homePage.mainHeading).toBeVisible();

  // Validate navigation links
  await expect(homePage.navigationLinks).toHaveCount(10);

  // Validate team section
  await expect(homePage.teamSection).toBeVisible();
  const acceptCookies = page.getByRole('button', { name: /accept all/i });
  if (await acceptCookies.isVisible()) {
    await acceptCookies.click();
  }

});
