const LocatorLogin = require ('../../locator/Login-page-locator')


class loginPage {

    async goOpenWeb () {
        cy.visit('https://www.kasirdemo.belajarqa.com')
        cy.xpath('//*[@class="chakra-button css-1n8i4of"]').should('be.visible')
    }

    async fillEmail () {
        cy.xpath(LocatorLogin.datatestid.email_input)
            .type("adityarendy20@gmail.com")
            .should('have.value',"adityarendy20@gmail.com")
    }

    async fillPassword () {
        cy.xpath(LocatorLogin.datatestid.password_input)
            .type("Qwer1234!")
            .should('have.value',"Qwer1234!")
    }

    async clickBtnLogin () {
        cy.xpath(LocatorLogin.datatestid.btn_login)
            .click()
        cy.xpath('//*[@class="css-1mqa38q"]')
            .should('contain', 'dashboard')
    }

    async clickBtnDaftar () {       
            cy.xpath(LocatorLogin.datatestid.btn_daftar)
            .click()
    }
    async VerifyLoginSuccess () {
        cy.xpath('//*[@class="css-1mqa38q"]')
            .should('contain', 'dashboard')
        
    }

}
module.exports = new loginPage()