// Define a class named screenshothelper
class ScreenshotHelper 
{
    // Define a static asynchronous method named capture
    // the method is static, you don't need to create an object of screenshothelper. You can call it directly
    // It accepts two parameters:page = the Playwright page object,name = the name of the screenshot file
    static async capture(page,name){

        // Take a screenshot of the current page
        await page.screenshot({

            // Specify where the screenshot should be saved
            // Example: if name = "login", the file will be:screenshots/login.png
            path : `screenshots/${name}.png` ,

            // Capture the complete webpage, including content
            // that is not currently visible on the screen
            fullPage : true ,
        });
    }
}

// Export the screenshothelper class so it can be imported and used in other files
module.exports = ScreenshotHelper;
