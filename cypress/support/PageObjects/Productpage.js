class Productpage{
    getProductTitle(){
        return cy.get('.product-title > a')
    }

    getProductQuantityBox(){
        return cy.get('#product_enteredQuantity_19')
    }

    getAddtoCartButton(){
        return cy.get('#add-to-cart-button-19')
    }

    getShoppingCartButton(){
        return cy.get('.cart-label')
    }

    getProductTotal(){
        return cy.get('.product-subtotal')
    }
}
export default Productpage;