// CommonMethod class contains reusable helper methods that can be used across different Playwright test files.


class CommonMethod{

    // Constructor receives the Playwright page object.
    // The page object is used to interact with elements on the browser page.
    constructor(page){
         this.page = page ; 
    }

    // Static method to click on an element.
    // It first checks whether the element is visible and enabled before attempting to click it.
    static async click(locator)
    {
        // Check if the locator is visible and enabled.
        if (await locator.isVisible() && await locator.isEnabled())
        {
            // Click the element only when both conditions are true.
            await locator.click();
        }
    }

    // Static method to enter a value into a textbox/input field.
    // It checks whether the field is visible and editable before entering the value.
    static async inputTextbox(locator,value)
    {
        // Check if the textbox is visible and editable.
        if (await locator.isVisible() && await locator.isEditable())
        {
            // Fill the textbox with the provided value.
             await locator.fill(value);   
        }
    }

}

// Export the CommonMethod class so it can be imported and reused in other JavaScript test files.
module.exports = CommonMethod;
