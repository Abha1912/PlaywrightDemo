// Import the "test" object from Playwright.
// Rename "test" to "base" so we can extend it with our own fixtures.
const {test:base} =  require ('@playwright/test');

// Import the HomePage class from the pages folder.
// This class contains locators and methods related to the Home Page.
const HomePage = require('../pages/homePage');
// Import the LoginPage class from the pages folder.
// This class contains locators and methods related to the Login Page.
const LoginPage = require('../pages/loginPage');


// Create a new custom "test" object by extending Playwright's base test.
// We are adding our own fixtures: loginPage and homePage.
const test = base.extend({
    
    // Create a custom fixture called "loginPage".
    // page = Playwright's built-in page fixture.
    // use = function used to provide the created LoginPage object to the test case.

    loginPage: async ({page},use)=>{
          
        // Create an object of the LoginPage class.
        // Pass Playwright's page object to the LoginPage constructor.
        const loginPage = new LoginPage(page);
         
        // Make the loginPage object available to the test.
        await use(loginPage);
    },

    // Create another custom fixture called "homePage".
    homePage : async ({page},use) => {
           const homePage  = new HomePage(page);
           await use(homePage);
    }

});


// Export our customized "test" object.
// Other test files can import this "test" and use loginPage and homePage as fixtures.
module.exports = { test };
