import { Page } from '@playwright/test';

export class NavigationBar {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goToCatalogPage(): Promise<void> {
        console.log('Navigating to catalog page');
        await this.page.click('button.styles_catalogButton__z9L_j span');
    }
}