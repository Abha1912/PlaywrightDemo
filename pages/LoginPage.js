const {expect} =  require ('@playwright/test');

const loginData = require('../testData/loginData.json');
const CommonMethods = require('../utils/CommonMethods.js');
const AppConstants = require('../constants/AppConstants.js');

class LoginPage{

    constructor(page)
    {
          this.page = page;

          this.txtLogin = page.locator("//div[@class='login-form']//h2");
          this.ipEmailAddress = page.locator("[data-qa='login-email']");
          this.ipPassword = page.locator("[data-qa='login-password']");
          this.btnLogin = page.locator("[data-qa='login-button']");
          this.linkLogout = page.locator("//a[contains(text(),' Logout')]");
    }

    async validateLoginText()
    {
        await expect(this.txtLogin).toBeVisible();
    }

    async userLogin(email,password)
    {
        await CommonMethods.inputTextbox(this.ipEmailAddress,email);
        await CommonMethods.inputTextbox(this.ipPassword,password);
        await CommonMethods.click(this.btnLogin);
    }

}
  
module.exports = LoginPage;