//Login functionality

/// <reference types="cypress" />

describe('Login functionality TestSuite', function(){

    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })

    it('Login functionality TestCase', function(){

       cy.login(this.data.Email,this.data.Password) 
       
    })

})    