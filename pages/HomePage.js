const {expect} =  require('@playwright/test');

const CommonMethods = require('../utils/CommonMethods.js');
const AppConstants = require('../constants/AppConstants.js');


class HomePage{

    constructor(page)
    {
        this.page = page; 
        
        this.title = page.getByText('Automation Exercise');
        this.linkSignUpLoginIn = page.getByText('Signup / Login');
        this.txtLoggedInAsUser = page.locator("//a[contains(text(),'Logged in as')]");
        this.linkDeleteAccount = page.locator("//a[contains(text(),' Delete Account')]");
        this.txtAccountDeleted = page.locator("[data-qa='account-deleted']");

    }

    async validateTitle()
    {
        await expect(this.page).toHaveTitle('Automation Exercise');
    }

    async openLoginPage()
    {
        CommonMethods.click(this.linkSignUpLoginIn);
    }
    
    async validateUserLogin()
    {
         await expect(this.txtLoggedInAsUser).toBeVisible();
    }

    async deleteAccount()
    {
        CommonMethods.click(this.linkDeleteAccount);
    }

    async validateAccountdeletedText()
    {
        await expect(this.txtAccountDeleted).toHaveText('Account Deleted!');
    }

    async userLogout()
    {
         CommonMethods.click(this.linkLogout);
    }
}

module.exports = HomePage;