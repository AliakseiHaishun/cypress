/// <reference types="cypress" />


describe('test', () => {

    beforeEach('before', () => {
        cy.visit('http://www.akveo.com/ngx-admin')
        cy.contains('nb-card-header', 'Light').click()
    })

    it('invoke command', () => {

        cy.contains('Forms').click()
        cy.contains('Form Layout').click()

        //1
        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

        //2
        cy.get('[for="exampleInputEmail1"]').then( label => {
            expect(label.text()).to.equal('Email address')
        })

        //3
        cy.get('[for="exampleInputEmail1"]').invoke('text').then(text => {
            expect(text).to.equal('Email address')
        })

        cy.contains('nb-card', 'Basic form').find('nb-checkbox').click()
        .find('.custom-checkbox')
        .invoke('attr', 'class')
        .should('contain', 'checked')

        // .then(classValue => {
        //     expect(classValue).to.contain('checked')
        //   })

    })

    it('assert property', () => {

        cy.contains('Forms').click()
        cy.contains('Datepicker').click()

        cy.contains('nb-card', 'Common Datepicker')
        .find('input')
        .then(input => {
            cy.wrap(input).click()
            cy.get('nb-calendar-day-picker').contains('17').click()
            cy.wrap(input).invoke('prop', 'value')
            .should('contain', 'Apr 17, 2022')
        })
    })

    it.only('tables', () => {

        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()
    
        // //1
        // cy.get('tbody').contains('tr', 'Larry').then( tableRow => {
        //     cy.wrap(tableRow).find('.nb-edit').click()
        //     cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('25')
        //     cy.wrap(tableRow).find('.nb-checkmark').click()
        //     cy.wrap(tableRow).find('td').eq(6).should ('contain', '25')
        // })


        // //2
        // cy.get('thead').find('.nb-plus').click()
        // cy.get('thead').find('tr').eq (2).then( tableRow=> {
        //     cy.wrap(tableRow).find('[placeholder="First Name"]').type('Alexey')
        //     cy.wrap(tableRow).find('[placeholder="Last Name"]').type('Haishun')
        //     cy.wrap(tableRow).find('.nb-checkmark').click()
        // })
        // 
        cy.get('tbody tr').first().find('td').then( tableColumns => {
        //     cy.wrap(tableColumns).eq(2).should('contain', 'Alexey')
        //     cy.wrap(tableColumns).eq(3).should ('contain', 'Haishun')
        // })
        
        const age = [20, 30, 40, 200]

            cy.wrap(age).each( age => {
                cy.get('thead [placeholder="Age"]').clear().type(age)
                cy.wait (500)
                cy.get('tbody tr').each( tableRow=> { if( age == 200) {
                    cy.wrap (tableRow).should('contain', 'No data found')
                } else {
                    cy.wrap(tableRow).find('td').eq(6).should('contain', age)
                }
            })
        })
    })
})