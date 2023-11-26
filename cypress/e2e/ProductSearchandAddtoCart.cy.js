//Product Search & add to cart functionality

/// <reference types="cypress" />
import HomePage from "../support/PageObjects/Homepage"
import Productpage from "../support/PageObjects/Productpage"

describe('Product Search & add to cart TestSuite', function(){

    it('Product Search & add to cart TestCase', function(){
        const homePage = new HomePage()
        const productPage = new Productpage()

        //Launch browser & open url e.g-https://demo.nopcommerce.com/
        homePage.getURL()

        //Enter text in search box & click on Search button
        homePage.getSearchBox().type('HTC One Mini Blue')
        homePage.getSearchBox().should('have.value','HTC One Mini Blue')
        homePage.getSearchButton().click()

        //Click on add to cart & provide quantity 2.
        productPage.getProductTitle().click()
        productPage.getProductQuantityBox().clear().type(2)
        productPage.getProductQuantityBox().should('have.value','2')
        productPage.getAddtoCartButton().click()
        cy.wait(2000)

        //Click on shopping cart link at top of page
        productPage.getShoppingCartButton().click()

        //Verify the total amount.
        productPage.getProductTotal().contains('$200.00')
        

    })

})