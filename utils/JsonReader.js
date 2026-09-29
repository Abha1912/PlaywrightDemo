// Import the login test data from the JSON file.
// The path is relative to the current JavaScript file.
const loginData = require('../testData/loginData.json');


// JsonReader class is responsible for reading and providing access to JSON test data.

class JsonReader{

    // Static method used to get the login test data.
    // Because this method is static, we can call it directly using JsonReader.login() without creating an object of the JsonReader class.
    static login()
    {
        // Return the complete loginData object loaded from loginData.json.
        return loginData;
    }

}

// Export the JsonReader class so it can be imported and used in other test files.
module.exports=JsonReader;