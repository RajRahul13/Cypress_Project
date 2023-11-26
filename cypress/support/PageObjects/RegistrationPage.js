class RegistrationPage{
    getRegistrationPageURL(){
        return cy.visit('https://demo.nopcommerce.com/login?returnUrl=%2F')
    }

    getRegisterButton(){
        return cy.get('.new-wrapper > .buttons > .button-1').click()
    }

    getGenderRadioButton(){
        return cy.get('#gender-male')
    }

    getFirstName(){
        return cy.get('#FirstName')
    }

    getLastName(){
        return cy.get('#LastName')
    }

    getDateOfBirthDay(){
        return cy.get('[name="DateOfBirthDay"]')

    }

    getDateOfBirthMonth (){
        return cy.get('[name="DateOfBirthMonth"]')

    }

    getDateOfBirthYear (){
        return cy.get('[name="DateOfBirthYear"]')
        
    }

    getEmailBox(){
        return cy.get('#Email')
    }

    getCompanyBox(){
        return cy.get('#Company')
    }

    getNewletterCheckbox(){
        return cy.get('#Newsletter')
    }

    getPasswordBox(){
        return cy.get('#Password')
    }

    getConfirmPasswordBox(){
        return cy.get('#ConfirmPassword')
    }


}
export default RegistrationPage;