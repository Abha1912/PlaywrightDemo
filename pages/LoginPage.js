const {expect} =  require ('@playwright/test');

// Import reusable common methods such as inputTextbox() and click().
const CommonMethods = require('../utils/commonMethod.js');

// Page Object class for the Login Page.
// This class contains Login Page locators and reusable actions/validations.
class LoginPage{

    // Constructor receives the Playwright page object.
    // The page object is used to interact with elements on the browser page.
    constructor(page)
    {
         // Store the Playwright page object in "this.page" for use throughout this class.
          this.page = page;

          // Login heading/text
          this.txtLoginHeading = page.locator("//div[@class='login-form']//h2");
          this.errorMessage = page.getByText('Your email or password is incorrect!');

          //inputFields
          this.inputEmail = page.locator("[data-qa='login-email']");
          this.inputPassword = page.locator("[data-qa='login-password']");

          // Navigation links/buttons
          this.btnLogin = page.locator("[data-qa='login-button']");
    }

    // Verifies that the Login Page heading is visible.
    async validateLoginHeading()
    {
        await expect(this.txtLoginHeading).toBeVisible();
    }

    // Logs in using the provided email address and password.
    async login(email,password)
    {
        await CommonMethods.inputTextbox(this.inputEmail,email);
        await CommonMethods.inputTextbox(this.inputPassword,password);
        await CommonMethods.click(this.btnLogin);
    }

    async validationMessage()
    {
        await expect(this.errorMessage).toHaveText('Your email or password is incorrect!');
    }
}

// Export the LoginPage class so it can be imported and used in test cases or Playwright fixtures.
module.exports = LoginPage;