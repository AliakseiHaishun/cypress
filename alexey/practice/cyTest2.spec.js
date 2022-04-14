/// <reference types="cypress" />

describe ('test 1', () => {


      it('.type() - type into a DOM element', () => {

        cy.visit('https://onliner.by/')

        // cy.visit('https://example.cypress.io/commands/actions')

        // // // https://on.cypress.io/type
        // // cy.get('.action-email')
        // //   .type('fake@email.com').should('have.value', 'fake@email.com')
    
        // //   // .type() with special character sequences
        // //   .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
        // //   .type('{del}{selectall}{backspace}')
    
        // //   // .type() with key modifiers
        // //   .type('{alt}{option}') //these are equivalent
        // //   .type('{ctrl}{control}') //these are equivalent
        // //   .type('{meta}{command}{cmd}') //these are equivalent
        // //   .type('{shift}')

        // cy.get('.action-disabled')
        // // Ignore error checking prior to type
        // // like whether the input is visible or disabled
        // .type('disabled error checking', { force: true })
        // .should('have.value', 'disabled error checking')
      })
})