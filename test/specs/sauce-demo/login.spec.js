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

    describe('I success login to Sauce Demo Homepage',()=>{
        it('Login with valid data',async () => {
            //buka url
            await browser.url('https://www.saucedemo.com/') 
            await browser.pause(1)

            await $('#user-name').setValue('standard_user')
            await $('#password').setValue('secret_sauce')

            //click login button
            await $('#login-button').click()

            //success login
            let productTitle = await $('//span[contains(text(), "Products")]')
            await expect(productTitle).toBeExisting()
            
        }) ,
        it('Login with invalid data',async () => {
            //buka url
            await browser.url('https://www.saucedemo.com/') 
            await browser.pause(1)

            await $('#user-name').setValue('standard_user')
            await $('#password').setValue('secret_sauce123')

            //click login button
            await $('#login-button').click()

            //unsuccessful login
            let errorMessage = await $('//*[contains(text(), "Epic sadface: Username and password do not match any user in this service")]')
            await expect(errorMessage).toBeExisting()
        }) 
    })  