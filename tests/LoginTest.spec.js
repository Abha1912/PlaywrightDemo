//const {test,expect} =  require ('@playwright/test');
const {test,expect} = require('../fixtures/baseFixture.js');
const AppConstants = require('../constants/AppConstants');
const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/LoginPage');
//const loginData = require('../testData/loginData.json');
const JsonReader = require('../utils/JsonReader.js');
require('../hooks/hooks.js');


test('TC002 Login User with correct email and password',async({hp,login})=>{

    const loginData = JsonReader.login();

    await hp.validateTitle();
    await hp.openLoginPage();

    await login.validateLoginText();

    await login.userLogin(
        loginData.validUser.email,
        loginData.validUser.password
    );

    await hp.validateUserLogin();

    await hp.deleteAccount();
    await hp.validateAccountdeletedText();

});