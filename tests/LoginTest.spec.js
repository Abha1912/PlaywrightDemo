// Import Playwright's test and expect functions from the custom baseFixture file.
const {test} = require('../fixtures/baseFixture.js');

// Import the JsonReader utility.This is used to read login test data from the JSON file.
const JsonReader = require('../utils/jsonReader.js');

// Import the common Playwright hooks.
// These hooks handle actions such as opening the application before each test and taking screenshots when a test fails.
require('../hooks/hooks.js');

// Define the test case.
// "homePage" and "loginPage" are custom fixtures provided by baseFixture.js.
test('TC002 Login User with correct email and password',async({homePage,loginPage})=>{

    // Read login credentials from the JSON test data file.
    // The login() method returns the login test data.
    const loginData = JsonReader.login();

    // Validate that the Home Page title is correct.
    await homePage.validatePageTitle();

    // Click the "Signup / Login" link to open the Login Page.
    await homePage.openLoginPage();

    // Verify that the Login Page heading is visible.
    await loginPage.validateLoginHeading();

    // Login using the valid email and password retrieved from the JSON test data.
        await loginPage.login(
        loginData.validUser.email,
        loginData.validUser.password
    );


    await homePage.validateUserIsLoggedIn();

    //await homePage.deleteAccount();
    //await homePage.validateAccountDeletedMessage();

});