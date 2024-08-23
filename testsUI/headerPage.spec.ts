import { test, expect, Page } from '@playwright/test';
import { PageFactory } from '../src/pages/pageFactory';
import { Locators, LocatorsHeader, URLS } from '../constsUI/consts';
import { getRandomString } from '../constsUI/UIClient';

test.describe('21 vek - Header', () => {

    let page: Page;
    let pageFactory: PageFactory;
    let homePage: ReturnType<PageFactory['getHomePage']>;


    test.beforeEach(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();

        pageFactory = new PageFactory(page);
        homePage = pageFactory.getHomePage();


        await homePage.navigateTo();
        await context.clearCookies();
        await context.clearPermissions();

        const button = page.locator(Locators.AgreementCookie_button);
        await button.waitFor();
        await button.click();
    });

    test.afterEach(async () => {
        await page.close();
    });

    test('Бонусная программа', async () => {
        await page.click(LocatorsHeader.loyaltyProgramm);
        await page.waitForSelector(LocatorsHeader.modalViewForLoyaltyProgramm);

        expect(await page.isVisible(LocatorsHeader.modalViewForLoyaltyProgramm)).toBe(true);

        await page.click(Locators.buyAnything);
        await expect(page).toHaveURL(URLS.BASE_URL);
    });

    test('Главный логотип есть на странице', async () => {
        await homePage.verifyMainLogotype();
    });

    test('Изменение локации на рандомное значение', async () => {
        const newCity = getRandomString(5);

        await page.$(Locators.Location);
        await page.click(Locators.Location);
        await page.waitForSelector(LocatorsHeader.ModalViewForLocation);

        const modalForChangeCity = await page.isVisible(LocatorsHeader.ModalViewForLocation);
        expect(modalForChangeCity).toBe(true);

        await page.click(LocatorsHeader.PlaceHolderForLocation);
        await page.fill(LocatorsHeader.InputForNewCity, newCity);
        await page.click(LocatorsHeader.SaveNewLocation);
        await page.waitForSelector(LocatorsHeader.ErrorForInvalidLocation);

        const ErrorLocation = await page.isVisible(LocatorsHeader.ErrorForInvalidLocation);
        expect(ErrorLocation).toBe(true);
    });
});
