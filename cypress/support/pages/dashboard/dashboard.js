const dashboardlocator = require('../../locator/dashboard-locator')

class dashboard {

    async openMenu () {
        cy.xpath(dashboardlocator.datatestid.menu_btn)
        .click()
        cy.wait (100)
    }

    async clickBtnLogout () {
        cy.xpath(dashboardlocator.datatestid.btn_logout)
        .click({force: true})
        
    }

    async verifyLogout () {
        cy.xpath('//*[@class="chakra-button css-1n8i4of"]')
        .should('be.visible')
        
    }


}
module.exports = new dashboard()