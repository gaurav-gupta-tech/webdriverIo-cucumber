const { Given, When, Then } = require('cucumber');
const LoginPage= require('../pageobjects/login.page');
const SecurePage= require('../pageobjects/secure.page');
//import { Given, When, Then } from 'cucumber';

//import LoginPage from '../pageobjects/login.page';
//import SecurePage from '../pageobjects/secure.page';
const login=new LoginPage();
const secure= new SecurePage();



Given(/^I am on the (\w+) page$/, (page) => {
    login.open()
});

When(/^I login with (\w+) and (.+)$/, (username, password) => {
    login.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, (message) => {
    expect(secure.flashAlert).toBeExisting();
    expect(secure.flashAlert).toHaveTextContaining(message);
});

