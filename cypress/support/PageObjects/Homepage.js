class HomePage{

    getURL(){
        return cy.visit('https://demo.nopcommerce.com/')
    }
    getSearchBox(){
        return cy.get('#small-searchterms')
    }

    getSearchButton(){
        return cy.get('#small-search-box-form > .button-1')
    }

    getRegisterButton(){
       return cy.get('.ico-register')
    }

    getLoginButton(){
       return cy.get('.ico-login')
    }

    getWishlistButton(){
       return cy.get('.wishlist-label')
    }

    getShoppingcartButton(){
       return cy.get('.cart-label')
    }

}
export default HomePage;