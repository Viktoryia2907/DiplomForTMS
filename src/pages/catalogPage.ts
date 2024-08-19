import { Page } from '@playwright/test';
import { BasePage } from './basePage';

export class CatalogPage extends BasePage {
    private catalogButtonActive: string;
    private catalogActive: string;

    constructor(page: Page) {
        super(page);
        this.catalogButtonActive = 'button.styles_catalogButton__z9L_j.styles_pressed__kCcrg';
        this.catalogActive = '//*[@id="header"]/div[1]/div[5]/div'
    }

    async verifyCatalogButtonInActive(): Promise<void> {
        await this.verifyElementVisible(this.catalogButtonActive, 'Активная кнопка каталога не видна');
    }

    async clickAndVerifyComparison(page: any) {
        await page.click('.n-item__icon.ic-compare');
        const textElementCompare = await page.waitForSelector('.h-drop__content p');
        const textCompare = await textElementCompare.innerText();
        return textCompare;
    }
    async verifyCatalogActive(): Promise<void> {
        await this.verifyElementVisible(this.catalogActive, 'Каталог товаров открыт');
    }
}