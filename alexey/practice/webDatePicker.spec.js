/// <reference types="cypress" />

describe('test', () => {

    beforeEach('before', () => {
        cy.visit('http://www.akveo.com/ngx-admin');
        cy.contains('nb-card-header', 'Light').click();
    })

    it('assert property', () => {

        cy.contains('Forms').click();
        cy.contains('Datepicker').click();

        let date = new Date();
        date.setDate(date.getDate() = + 5);
        let futureDate = date.getDate();
        let futureMonth = date.toLocaleString('default', {month: 'short'})

        


        cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
            cy.wrap(input).click();
            cy.get('nb-calendar-day-picker').contains('17').click();
            cy.wrap(input).invoke('prop', 'value').should('contain', 'Apr 17, 2022');
        })
    })
})