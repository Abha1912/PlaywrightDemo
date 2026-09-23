const {test} = require ('@playwright/test');

const AppConstants = require('../constants/AppConstants.js');
const ScreenshotHelper = require('../utils/ScreenshotHelper.js');

test.beforeAll(async ()  => {

     console.log("-------------------------------------------");
     console.log(" Paywright Testcase Execution Started");
     console.log("-------------------------------------------");

});

test.beforeEach (async ({page}) => {
      console.log ("Open Application....");
      await page.goto(AppConstants.BASE_URL);
});

test.afterEach (async ({page}, testInfo) => {

    if(testInfo.status !== testInfo.expectedStatus){

        await ScreenshotHelper.capture(page,testInfo.title.replace(/\s+/g, "_"));

        console.log(`Screenshot captured : ${testInfo.title}`);
    }

});

test.afterAll(async () => {

        console.log("-------------------------------------------");
        console.log("Playwright Testcase Execution Completed");
        console.log("-------------------------------------------");

});

