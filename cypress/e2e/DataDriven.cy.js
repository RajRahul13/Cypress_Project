///Data Driven Functionality
//Registration functionality

/// <reference types="cypress" />
import RegistrationPage from "../support/PageObjects/RegistrationPage"

describe('Registration functionality TestSuite', function(){

    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })

    it('Registration functionality TestCase', function(){
        const registrationPage = new RegistrationPage()

        //Launch browser & open https://demo.nopcommerce.com/login?returnUrl=%2F
        registrationPage.getRegistrationPageURL()
        registrationPage.getRegisterButton()

        //Locate Radio buttons & select any one from that buttons
        registrationPage.getGenderRadioButton().click()

        //Insert data in textbox
        registrationPage.getFirstName().type(this.data.FirstName)
        registrationPage.getLastName().type(this.data.LastName)

        //Select values from dropdowns.
        registrationPage.getDateOfBirthDay().select(this.data.DateOfBirthDay)
        registrationPage.getDateOfBirthMonth().select(this.data.DateOfBirthMonth)
        registrationPage.getDateOfBirthYear().select(this.data.DateOfBirthYear)

        //adding additional details
        registrationPage.getEmailBox().type(this.data.Email)
        registrationPage.getCompanyBox().type(this.data.CompanyName)
        registrationPage.getNewletterCheckbox().uncheck()

        //adding Password
        registrationPage.getPasswordBox().type(this.data.Password)
        registrationPage.getConfirmPasswordBox().type(this.data.Password)

      
    })

})    