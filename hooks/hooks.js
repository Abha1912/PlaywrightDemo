// Import the "test" function from Playwright Test
const {test} = require ('@playwright/test');

// Import the appConstant class/file This contains the BASE_URL of the application
const AppConstant = require('../constants/appConstant.js');

// Import the screenshothelper classmThis is used to capture screenshots when a test fails
const ScreenshotHelper = require('../utils/screenshotHelper.js');


// beforeAll() runs ONE TIME before all test cases start
test.beforeAll(async ()  => {
     console.log("-------------------------------------------");
     console.log(" Paywright Testcase Execution Started");
     console.log("-------------------------------------------");
});

// beforeEach() runs before EVERY individual test case { page }
// The page comes from Playwright's built-in fixtures. page represents a browser tab/page.
test.beforeEach (async ({page}) => {
      console.log ("Open Application....");

        // Open the application using the BASE_URL. BASE_URL comes from appConstant.js
        await page.goto(AppConstant.BASE_URL);
        //page.goto() is asynchronous.Playwright needs to wait for the navigation operation.
       //Wait until Playwright completes the navigation before continuing.

});

// afterEach() runs after EVERY individual test case
// testInfo = contains information about the test that just finished
test.afterEach (async ({page}, testInfo) => {

    // Check whether the actual test status is different from the status that was expected
    // Example: expectedStatus = "passed" and status = "failed"
    // Since they are different, the condition becomes true.
    if(testInfo.status !== testInfo.expectedStatus){

        // Capture a screenshot of the page
        // testInfo.title gives the test case name
        // replace(/\s+/g, "_") replaces spaces with underscores
        // \s → whitespace ,+ → one or more ,g → replace all matching occurrences
        // Example: "Login with valid user" becomes: "Login_with_valid_user"
        // The screenshot will be saved as: screenshots/Login_with_valid_user.png
        await ScreenshotHelper.capture(page,testInfo.title.replace(/\s+/g, "_"));

        console.log(`Screenshot captured : ${testInfo.title}`);
    }
    
});

// afterAll() runs ONE TIME after all test cases are completed
test.afterAll(async () => {

        console.log("-------------------------------------------");
        console.log("Playwright Testcase Execution Completed");
        console.log("-------------------------------------------");

});

