import { test, expect, Page } from '@playwright/test';
import { PageFactory } from '../src/pages/pageFactory';
import { Locators, LocatorsLogin } from '../constsUI/consts';
import { getRandomEmail, } from '../constsUI/UIClient';

test.describe('21 vek - HomePage', () => {


    let page: Page;
    let pageFactory: PageFactory;
    let homePage: ReturnType<PageFactory['getHomePage']>;
    let navigationBar: ReturnType<PageFactory['getNavigationBar']>;

    test.beforeEach(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();

        pageFactory = new PageFactory(page);
        homePage = pageFactory.getHomePage();
        navigationBar = pageFactory.getNavigationBar();

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

    test.describe('Регистрация', () => {

        test('Регистрация нового юзера', async () => {

            const randomEmail = getRandomEmail();

            await page.click(Locators.AccountButton);
            await page.click(Locators.LoginButton);
            await page.click(Locators.RegistrationButton);
            await page.fill(Locators.InputEmailForRegistration, randomEmail);
            await page.click(Locators.ContinueRegistration);
            await page.click(Locators.AgreeForCheckPersonaldata);
            await page.waitForSelector(Locators.SuccussRegistration);

            const succussRegistration = await page.isVisible(Locators.SuccussRegistration);
            expect(succussRegistration).toBe(true);
        });

        test('Регистрация с почтой, которая есть в БД', async () => {
            await page.click(Locators.AccountButton);
            await page.click(Locators.LoginButton);
            await page.click(Locators.RegistrationButton);
            await page.fill(Locators.InputEmailForRegistration, 'viktoria55555@bk.ru');
            await page.click(Locators.ContinueRegistration);
            await page.waitForSelector(Locators.FailerRegistration);

            const failerRegistration = await page.isVisible(Locators.FailerRegistration);
            expect(failerRegistration).toBe(true);
        });
    });

    test.describe('Логин', () => {

        test('Логин с валидными данными', async () => {

            await page.click(Locators.AccountButton);
            await page.click(Locators.LoginButton);

            await page.$(LocatorsLogin.formForLogin);
            await page.fill(LocatorsLogin.fillForEmail, LocatorsLogin.validEmailForLogin);
            await page.fill(LocatorsLogin.fillForPassword, LocatorsLogin.validPasswordForLogin);

            await page.click(LocatorsLogin.buttonEnter);
            await page.$(LocatorsLogin.moduleViewForAddPhone);
            await page.click(LocatorsLogin.closeModuleViewForAddPhone);
            await page.click(Locators.AccountButton);

            const loginUser = await page.locator(LocatorsLogin.user).textContent();
            expect(loginUser).toContain(LocatorsLogin.validEmailForLogin);
        });

        test('Логин с невалидным email', async () => {

            const randomEmail = getRandomEmail();

            await page.click(Locators.AccountButton);
            await page.click(Locators.LoginButton);

            await page.$(LocatorsLogin.formForLogin);
            await page.fill(LocatorsLogin.fillForEmail, randomEmail);
            await page.fill(LocatorsLogin.fillForPassword, LocatorsLogin.validPasswordForLogin);

            await page.click(LocatorsLogin.buttonEnter);
            await page.waitForSelector(LocatorsLogin.failerLogin);
            const failerLogin = await page.isVisible(LocatorsLogin.failerLogin);
            expect(failerLogin).toBe(true);
        });
    });

    test.describe('Поиск продукта', () => {

        test('Поиск валидного продукта и добавление в корзину', async () => {

            await page.$(Locators.PlaceHolderForSearch);
            await page.fill(Locators.PlaceHolderForSearch, 'iPhone 13');
            await page.press(Locators.PlaceHolderForSearch, 'Enter');

            await expect(page).toHaveURL(/.*\/search\/\?sa=&term=iPhone%2013/);
            const searchResultSelector = 'span:has-text("Запрос «iPhone 13»")';

            await page.waitForSelector(searchResultSelector);
            await page.waitForSelector(Locators.SearchResults);

            const searchResultText = await page.locator(searchResultSelector).textContent();
            expect(searchResultText).toContain('Запрос «iPhone 13»');

            await page.click(Locators.addToBasket);
            await page.waitForSelector(Locators.itemInBasket, { timeout: 5000 }); // Ждём до 5 секунд появления элемента
            const itemInBasket = await page.isVisible(Locators.itemInBasket);
            expect(itemInBasket).toBe(true);

            const element = await page.$(Locators.countOfBasket);
            if (element) {
                const textContent = await element.textContent();
                expect(textContent).toEqual("1");
            } else {
                throw new Error("Корзина пустая");
            }
        });
    });
});
