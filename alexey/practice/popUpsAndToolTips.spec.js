/// <reference types="cypress" />

describe('test', () => {

    beforeEach('before', () => {
        cy.visit('http://www.akveo.com/ngx-admin');
        cy.contains('nb-card-header', 'Light').click();
    })

    it('test', () => {

        cy.contains('Tables & Data').click();
        cy.contains('Smart Table').click();


        //2
        const stub = cy.stub()
        cy.on('window:confirm', stub);
        cy.get('tbody tr').first().find('.nb-trash').click().then( () => {
            expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
        })




    })
})