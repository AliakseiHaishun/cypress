describe("iFrame", () => {

    beforeEach(() => {
      cy.visit('https://kitchen.applitools.com/ingredients/iframe');
    });
  
    it('should find a table in the iframe', () => {
      cy.get('#the-kitchen-table')
        .its('0.contentDocument')
         .its('body')
         .then(cy.wrap)
         .find('#fruits-vegetables')
         .should('be.visible');
    });
  
  });