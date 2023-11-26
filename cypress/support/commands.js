// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
    Cypress.Commands.add('login', (email, password) => { 
         //Launch browser & open https://demo.nopcommerce.com/login?returnUrl=%2F
         cy.visit('https://demo.nopcommerce.com/login?returnUrl=%2F')

         //adding Login Details
         cy.get('#Email').type(email)
         cy.get('#Password').type(password)
 
         //clicking login button
         cy.get('form > .buttons > .button-1').click()
 
    })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })