class ScreenshotHelper 
{
    static async capture(page,name){

        await page.screenshot({
            path : `screenshots/${name}.png` ,
            fullPage : true ,
        });
    }
}
module.exports = ScreenshotHelper;
