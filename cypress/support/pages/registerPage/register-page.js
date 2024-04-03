const registerLocator = require('../../locator/register-page-locator')

class registerPage {

    async fillNamaToko (randomUser) {
        cy.xpath(registerLocator.datatestid.namatoko_input)
            .type(randomUser)
            .should('have.value',randomUser)
    }

    async fillEmail (randomEmail) {
        cy.xpath(registerLocator.datatestid.registerEmail_input)
            .type(randomEmail)
            .should('have.value',randomEmail)
    }

    async fillPassword () {
        cy.xpath(registerLocator.datatestid.registerPassword_input)
            .type("Qwer1234")
                .should('have.value',"Qwer1234")
    }

    async clickBtnDaftar () {
        cy.xpath(registerLocator.datatestid.registerBtn_daftar)
            .click()
    }

    async verifyDaftarSuccess () {
        cy.xpath(registerLocator.datatestid.VerifyPendaftaran)
            .should('contain', 'Toko berhasil didaftarkan')
        cy.wait(100)
        
            
    }

}
module.exports = new registerPage()