/// <reference types="cypress" />

describe ('example.cypress.io', () => {

    beforeEach('open base page', () => {
        cy.visit('https://example.cypress.io/commands/navigation')
    })

    it('click', () => {
        
        cy.location('pathname').should('include', 'navigation')

cy.go('back')
.wait(4000)
cy.location('pathname').should('not.include', 'navigation')

cy.go('forward')
.wait(4000)
cy.location('pathname').should('include', 'navigation')

// clicking back
cy.go(-1)
.wait(4000)

cy.location('pathname').should('not.include', 'navigation')

// clicking forward
cy.go(1)
.wait(4000)

cy.location('pathname').should('include', 'navigation')
    })
})