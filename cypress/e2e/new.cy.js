/// <reference types="cypress" />
it('google search consol', function() {
    cy.visit('https://www.youtube.com/')
    cy.get('#search-input > #search').type('Automation step by step')
    cy.get('[aria-label="سبسکرپشنز"] > #endpoint').click()
    cy.get('#start > ytd-topbar-logo-renderer.style-scope > #logo > div.style-scope > .ytd-topbar-logo-renderer > #logo-icon').click()
    cy.get('#search-input > #search').clear()
    

})
