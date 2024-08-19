import { test, expect, Page } from '@playwright/test';
import { PageFactory } from '../src/pages/pageFactory';
import { Locators, URLS } from '../constsUI/consts';

test.describe('21 vek - catalogPage', () => {

    let page: Page;
    let pageFactory: PageFactory;
    let homePage: ReturnType<PageFactory['getHomePage']>;
    let catalogPage: ReturnType<PageFactory['getCatalogPage']>;
    let navigationBar: ReturnType<PageFactory['getNavigationBar']>;


    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage();
        pageFactory = new PageFactory(page);
        homePage = pageFactory.getHomePage();
        catalogPage = pageFactory.getCatalogPage();
        navigationBar = pageFactory.getNavigationBar();
        const context = await browser.newContext();

        await homePage.navigateTo();
        await context.clearCookies();
        await context.clearPermissions();

        const button = page.locator(Locators.AgreementCookie_button);
        await button.waitFor();
        await button.click();
        await homePage.navigationBar.goToCatalogPage();
    });

    test.afterAll(async () => {
        await page.close();
    });

    test('Переход на страницу каталога, кнопка "Каталог товаров" задизейблена', async () => {
        await catalogPage.verifyCatalogButtonInActive();
        await catalogPage.verifyCatalogActive();
    });

    test('Проверка спец предложений для LG', async () => {
        await page.click(Locators.LogoLGButton);
        await expect(page).toHaveURL(URLS.URL_LG_catalog);

        const [logoLG, specSaleLG, showMoreLG, catalolSpecSaleLG] = await Promise.all([
            page.isVisible(Locators.LogoLG),
            page.isVisible(Locators.SpecSaleLG),
            page.isVisible(Locators.showMoreSalesLG),
            page.isVisible(Locators.catalolSpecSaleLG),
        ]);

        expect(logoLG).toBe(true);
        expect(specSaleLG).toBe(true);
        expect(showMoreLG).toBe(true);
        expect(catalolSpecSaleLG).toBe(true);
    });



});