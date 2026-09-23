const loginData = require('../testData/loginData.json');

class JsonReader{

    static login()
    {
        return loginData;
    }

}

module.exports=JsonReader;