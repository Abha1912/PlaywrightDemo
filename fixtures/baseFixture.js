const {test:base} =  require ('@playwright/test');

const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/LoginPage');

const test = base.extend({

    login: async ({page},use)=>{
          
          const login = new LoginPage(page);
          await use(login);
    },

    hp : async ({page},use) => {
           const hp = new HomePage(page);
           await use(hp);
    }

});

module.exports = { test };
