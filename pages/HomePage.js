//This is part of the Page Object Model (POM) design.



// Import "expect" from Playwright.expect is used to perform assertions/validations.
const {expect} =  require('@playwright/test');

// Import CommonMethods.
// This contains reusable methods such as click().
const CommonMethods = require('../utils/commonMethod.js');

// Create a class named HomePage.
// This class represents the Home Page of the application.
class HomePage{
    
    // Constructor receives the Playwright page object.
    // The page object is used to interact with elements on the browser page.
    // Constructor runs automatically when we create an object of the HomePage class.
    constructor(page)
    {
         
       // Store the Playwright page object in "this.page" for use throughout this class.
        this.page = page; 

        // Navigation links
        this.linkSignupLogin = page.getByText('Signup / Login');
        this.linkDeleteAccount = page.locator("//a[contains(text(),' Delete Account')]");
        this.linkLogout = page.locator("//a[contains(text(),' Logout')]");

       // User/account status messages
        this.txtAccountDeleted = page.locator("[data-qa='account-deleted']");
        this.txtLoggedInAsUser = page.locator("//a[contains(text(),'Logged in as')]");

    }

    // This method validates that the browser page title is "Automation Exercise".
    async validatePageTitle()
    {
        // Check that the current page has the expected title.
        await expect(this.page).toHaveTitle('Automation Exercise');
    }

    // This method opens the Signup / Login page.
    async openLoginPage()
    {
        // Use the reusable click method from CommonMethods to click the Signup / Login link.
        await CommonMethods.click(this.linkSignupLogin);
    }
    
    // This method verifies that the user is logged in.
    async validateUserIsLoggedIn()
    {
        // Check that the "Logged in as" element is visible.
         await expect(this.txtLoggedInAsUser).toBeVisible();
    }

    // This method deletes the current user's account.
    async deleteAccount()
    {
        // Use the reusable click method to click the Delete Account link.
        await CommonMethods.click(this.linkDeleteAccount);
    }

    // This method verifies that the account was successfully deleted.
    async validateAccountDeletedMessage()
    {
        // Check that the element contains exactly:"Account Deleted!"
        await expect(this.txtAccountDeleted).toHaveText('Account Deleted!');
    }

    // This method is intended to log the user out.
    async logout()
    {
        // Click the logout link using CommonMethods.
         await CommonMethods.click(this.linkLogout);
    }
}

// Export the HomePage class.Other files can import and create a HomePage object.
module.exports = HomePage;