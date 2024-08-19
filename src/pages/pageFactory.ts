import { Page } from '@playwright/test';
import { HomePage } from './homePage';
import { CatalogPage } from './catalogPage';
import { NavigationBar } from '../elements/navigationBar';

export class PageFactory {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getHomePage(): HomePage {
        return new HomePage(this.page);
    }

    getNavigationBar(): NavigationBar {
        return new NavigationBar(this.page);
    }

    getCatalogPage(): CatalogPage {
        return new CatalogPage(this.page);
    }
}