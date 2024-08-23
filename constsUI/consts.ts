export enum URLS {
    BASE_URL = 'https://www.21vek.by/',
    URL_LG_catalog = 'https://www.21vek.by/info/brands/lg.html',
}

export enum Locators {
    Logotype = '//div[@class="logotype"]',
    ButtonForCatalog = 'button.styles_catalogButton__z9L_j span',
    SearchResults = '#content > div.b-content > h1',
    PlaceHolderForSearch = 'input[placeholder="Поиск товаров"]',
    AgreementCookie_button = '#modal-cookie > div > div.AgreementCookie_content__zYgGo.AgreementCookie_stepOne__cH1pQ > div.AgreementCookie_buttons__zhpxj > button.Button-module__button.Button-module__blue-primary > div',
    AccountButton = 'span.userToolsText',
    LoginButton = '[data-testid="loginButton"]',
    RegistrationButton = 'button.styles_secondaryAction__H7V7H',
    Location = 'button.styles_localityBtn__qrGFQ',  //button[@class='styles_localityBtn__qrGFQ']
    LogoLGButton = '//*[@id="header"]/div[1]/div[5]/div/div[2]/div[2]/a[1]',
    LogoLG = 'h1[style*="background: url(\'https://www.21vek.by/img/tmp/brends/big/lg.png?1510841010\')"]',
    SpecSaleLG = '//h2[contains(text(), "Специальные предложения LG")]',
    showMoreSalesLG = '.g-button.j-brand-sales-show-more',
    catalolSpecSaleLG = '//*[@id="content"]/div/div[2]/div',
    addToBasket = '//*[@id="j-result-page-1"]/div[1]/div/ul/li[1]/dl/dd/div/form/button',
    itemInBasket = '//*[@id="j-result-page-1"]/div[1]/div/ul/li[1]/dl/dd/div/a',
    countOfBasket = 'span[data-testid="header-count"]',
    modalViewForLoyaltyProgramm = '//*[@id="page_header"]',
    buyAnything = '#content > div > div.b-page > a',
    InputEmailForRegistration = '[data-testid="register-form-email"]',
    ContinueRegistration = '//div[contains(@class, "Button-module__buttonText") and text()="Продолжить"]',
    AgreeForCheckPersonaldata = '//div[contains(@class, "Button-module__buttonText") and text()="Соглашаюсь"]',
    SuccussRegistration = '.SuccessScreen_successMessageWrapper___Hk_F',
    FailerRegistration = 'span.styles_errorText__LEN7M',
}


export enum LocatorsHeader {
    loyaltyProgramm = '//*[@id="header"]/div/div[1]/div/div/ul[1]/li[2]/a',
    ModalViewForLocation = '//*[@id="modal"]/div/div/div[2]',
    PlaceHolderForLocation = '//*[@id="modal"]/div/div/div[2]/form/div/div[2]/div[2]/div/div/div[1]/div',
    InputForNewCity = 'input#react-select-2-input',
    SaveNewLocation = '//*[@id="modal"]/div/div/div[2]/form/div/div[3]',
    ErrorForInvalidLocation = '//*[@id="modal"]/div/div/div[2]/form/div/div[2]/div[3]/span[1]',
    modalViewForLoyaltyProgramm = '//*[@id="page_header"]',
}

export enum LocatorsLogin {
    formForLogin = '//*[@id="modal"]/div/div/div[2]/div/div/form',
    fillForEmail = '//*[@id="login-email"]',
    fillForPassword = '//*[@id="login-password"]',
    validEmailForLogin = '12345678@mailsac.com',
    validPasswordForLogin = '75baecab',
    buttonEnter = '//*[@id="modal"]/div/div/div[2]/div/div/form/div/div[3]/button[1]/div',
    moduleViewForAddPhone = '//*[@id="modal"]/div[2]/div/div[2]/div/form/h5',
    closeModuleViewForAddPhone = '//*[@id="modal"]/div[2]/div/div[1]/div[2]/button/div',
    user = '//*[@id="userToolsDropDown"]/div/span',
    failerLogin = '//*[@id="modal"]/div/div/div[2]/div/div/form/div/div[1]/div[3]/span[2]/span'
}

