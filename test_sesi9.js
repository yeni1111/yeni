const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const chrome = require('selenium-webdriver/firefox');

describe('Google Search Test', function () {
    let driver;

//Login
    it('Visit SauceDemo dan cek page title', async function () {
        options = new chrome.Options();
        driver = await new Builder().forBrowser('firefox').build();
        
        // driver = await new Builder().forBrowser('chrome').build();
        //await driver.sleep(3000);
        
        await driver.get('https://www.saucedemo.com');
        await driver.sleep(1000);
        const title = await driver.getTitle();
        
        // assert: memastikan object sama persis
        assert.strictEqual(title, 'Swag Labs');

        // inputs
        let inputUsername = await driver.findElement(By.css('[data-test="username"]'))
        await driver.sleep(500);
        let inputPassword = await driver.findElement(By.xpath('//*[@data-test="password"]'))
        await driver.sleep(500);
        let buttonLogin = await driver.findElement(By.className('submit-button btn_action'))
        await inputUsername.sendKeys('standard_user')
        await inputPassword.sendKeys('secret_sauce')
        await driver.sleep(1000); 
        await buttonLogin.click()

        await driver.sleep(2000)
    });

    //Urutkan Produk dari Z-A
    it('Urutkan produk dari Z - A', async function () {
        let buttonOption = await driver.findElement(By.css('[data-test="product-sort-container"]'))
        await buttonOption.click();
        await driver.sleep(1500); 
        let option = await driver.findElement(By.css('option[value="za"]'))
        await option.click();
        await driver.sleep(2000)
      
    });

});