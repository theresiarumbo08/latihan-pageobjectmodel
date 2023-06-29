import Page from "../page";

//class bisa terdiri dari object dan method function 
class HomePage extends Page{
    //object => element
    //method function => element interaction

    //ELEMENT LIST
    usernameLocator = '#user-name'
    passwordLocator = '#password'
    btSubmitLocator = '//*[@id="login-button"]'

    //ELEMENT METHOD
    //GET ELEMENT
    get usernameField () { 
        return $(this.usernameLocator);
    }

    get passwordField () {
        return $(this.passwordLocator);
    }

    get btnSubmit () {
        return $(this.btSubmitLocator)
    }

    get errMsgIncorrectPass(){
        return $('//*[contains(text(), "Epic sadface: Username and password do not match any user in this service")]')
    }

    //INTERACTION
    async inputUsername(username){
        return this.usernameField.setValue(username);
    }

    async inputPassword(password){
        return this.passwordField.setValue(password);
    }

    async clickLoginBtn(){
        return this.btnSubmit.click();
    }

    //cara lain    
    async login(username, password) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.btnSubmit.click();
    }

    async getErrMsgIncorrectPass(){
        await expect(this.errMsgIncorrectPass).toBeExisting()
    }

    open (path) {
        return browser.url(`https://www.saucedemo.com`)
    }
}

export default new HomePage();