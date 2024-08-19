export enum URLS {
    BASE_URL = 'https://www.21vek.by/',
    URL_LG_catalog = 'https://www.21vek.by/info/brands/lg.html',
}

export enum Locators {
    SearchResults = '#content > div.b-content > h1',
    PlaceHolderForSearch = 'input[placeholder="Поиск товаров"]',
    AgreementCookie_button = '#modal-cookie > div > div.AgreementCookie_content__zYgGo.AgreementCookie_stepOne__cH1pQ > div.AgreementCookie_buttons__zhpxj > button.Button-module__button.Button-module__blue-primary > div',
    ContinueRegistration = '//div[contains(@class, "Button-module__buttonText") and text()="Продолжить"]',
    AgreeForCheckPersonaldata = '//div[contains(@class, "Button-module__buttonText") and text()="Соглашаюсь"]',
    SuccussRegistration = '.SuccessScreen_successMessageWrapper___Hk_F',
    FailerRegistration = 'span.styles_errorText__LEN7M',
    InputEmailForRegistration = '[data-testid="register-form-email"]',
    AccountButton = 'span.userToolsText',
    LoginButton = '[data-testid="loginButton"]',
    RegistrationButton = 'button.styles_secondaryAction__H7V7H',
    Location = 'button.styles_localityBtn__qrGFQ',
    ModalViewForLocation = '//*[@id="modal"]/div/div/div[2]',
    PlaceHolderForLocation = '//*[@id="modal"]/div/div/div[2]/form/div/div[2]/div[2]/div/div/div[1]/div',
    ErrorForInvalidLocation = '//*[@id="modal"]/div/div/div[2]/form/div/div[2]/div[3]/span[1]',
    SaveNewLocation = '//*[@id="modal"]/div/div/div[2]/form/div/div[3]',
    InputForNewCity = 'input#react-select-2-input',
    LogoLGButton = '//*[@id="header"]/div[1]/div[5]/div/div[2]/div[2]/a[1]',
    LogoLG = 'h1[style*="background: url(\'https://www.21vek.by/img/tmp/brends/big/lg.png?1510841010\')"]',
    SpecSaleLG = '//h2[contains(text(), "Специальные предложения LG")]',
    showMoreSalesLG = '.g-button.j-brand-sales-show-more',
    catalolSpecSaleLG = '//*[@id="content"]/div/div[2]/div',
    addToBasket = '//*[@id="j-result-page-1"]/div[1]/div/ul/li[1]/dl/dd/div/form/button',
    itemInBasket = '//*[@id="j-result-page-1"]/div[1]/div/ul/li[1]/dl/dd/div/a',
    countOfBasket = 'span[data-testid="header-count"]'
}

export function getRandomString(length: any) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// Функция генерации случайного email
export function getRandomEmail() {
    const randomString = getRandomString(10);
    return `${randomString}@example.com`;
}
