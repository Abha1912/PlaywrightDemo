class CommonMethods{

    constructor(page){
         this.page = page ; 
    }

    static async click(locator)
    {
        if (await locator.isVisible() && await locator.isEnabled())
        {
              await locator.click();
        }
    }

    static async inputTextbox(locator,value)
    {
        if (await locator.isVisible() && await locator.isEditable())
        {
             await locator.fill(value);   
        }
    }

}

module.exports = CommonMethods;
