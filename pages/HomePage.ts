import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly mainHeading: Locator;
  readonly navigationLinks: Locator;
  readonly teamSection: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mainHeading = page.locator('text=Redefining the standard for privacy on blockchain');
    this.navigationLinks = page.locator('nav >> a');
    this.teamSection = page.locator('text=Meet the team');
  }

  async navigate() {
    await this.page.goto('/');
  }
}
