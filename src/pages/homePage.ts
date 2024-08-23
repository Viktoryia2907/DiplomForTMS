import { Page } from '@playwright/test';
import { BasePage } from './basePage';
import { NavigationBar } from '../elements/navigationBar';
import { URLS, Locators } from '../../constsUI/consts';

export class HomePage extends BasePage {
    private homeURL: string;
    private mainLogotype: string;
    public navigationBar: NavigationBar;

    constructor(page: Page) {
        super(page);
        this.navigationBar = new NavigationBar(page);
        this.homeURL = URLS.BASE_URL;
        this.mainLogotype = Locators.Logotype;
    }

    async navigateTo(): Promise<void> {
        await this.page.goto(this.homeURL);
    }

    async verifyMainLogotype(): Promise<void> {
        await this.verifyElementVisible(this.mainLogotype, 'Главный логотип виден');
    }
}
