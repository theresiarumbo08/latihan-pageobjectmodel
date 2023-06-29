//TEST CASE
// BUKA SAUCE DEMO
    //BUKA URL
// INPUT EMAIL
    //ID : user-name
//INPUT PASSWORD
    //ID : password
// CLICK LOGIN BUTTON
    //ID : login-button
// SUCCESS XPATH
    //XPATH : //span[contains(text(), 'Products)]

//panggil page
import homePage from "../pageobjects/sauce-demo/homePage"
import inventoryPage from "../pageobjects/sauce-demo/inventoryPage"
import utils from "../helper/utils"

describe('I success login to Sauce Demo Homepage',()=>{
    it('Login with valid data',async () => {
        //buka url
        await homePage.open()
        utils.pause(1)

        //input username dan password
        // await $('#user-name').setValue('standard_user')
        await homePage.inputUsername('standard_user')
        // await $('#password').setValue('secret_sauce')
        await homePage.inputPassword('secret_sauce')

        //click login button
        // await $('#login-button').click()
        await homePage.clickLoginBtn()

        //success login
        await inventoryPage.getProductTitle()
        // let productTitle = await $('//span[contains(text(), "Products")]')
        // await expect(productTitle).toBeExisting()
            
    }) ,
        
    it('Login with invalid data',async () => {
        //buka url
        await homePage.open();
        utils.pause(1);

        await homePage.login('standard_user','121344');

        //unsuccessful login
        await homePage.getErrMsgIncorrectPass();
    }) 
})  