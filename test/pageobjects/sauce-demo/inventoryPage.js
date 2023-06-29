import Page from "../page";

//class bisa terdiri dari object dan method function 
class InventoryPage extends Page{
    //object => element
    //method function => element interaction

    //ELEMENT LIST
    produkTitleLocator = '//span[contains(text(), "Products")]';

    //ELEMENT METHOD
    //GET ELEMENT
    get produkTitle () { 
        return $(this.produkTitleLocator);
    }

    //INTERACTION
    async getProductTitle(){
        return expect(this.produkTitle).toBeExisting()
    }

    open (path) {
        return browser.url(`https://www.saucedemo.com`)
    }
}

export default new InventoryPage();