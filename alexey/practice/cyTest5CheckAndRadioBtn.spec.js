/// <reference types="cypress" />


describe('test', () => {

    beforeEach('before', () => {
        cy.visit('http://www.akveo.com/ngx-admin')
        cy.contains('nb-card-header', 'Light').click()
    })

    it('assert property', () => {

        cy.contains('Forms').click()
        cy.contains('Datepicker').click()

        cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
            cy.wrap(input).click()
            cy.get('nb-calendar-day-picker').contains('17').click()
            cy.wrap(input).invoke('prop', 'value').should('contain', 'Apr 17, 2022')
        })
    })

    it('radio button', () => {

        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then( radioBtn => {

            cy.wrap(radioBtn)
            .first()
            .check({force: true})
            .should('be.checked')

            cy.wrap(radioBtn)
            .eq(1)
            .check({force: true})

            cy.wrap(radioBtn)
            .first()
            .should('not.be.checked')

            cy.wrap(radioBtn)
            .eq(2)
            .should('be.disabled')
        })
    })

    it('check boxes', () => {

        cy.contains('Modal & Overlays').click()
        cy.contains('Toastr').click()

        cy.get('[type="checkbox"]').check({force:true})




    })

    it.only('lists and dropdown', () => {

        // //1
        // cy.get('nav nb-select').click()
        // cy.get('.option-list').contains('Dark').click()
        // cy.get('nav nb-select').should('contain', 'Dark')
        // cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(34, 43, 69)')

        //2
        cy.get('nav nb-select').then(dropdown => {
            cy.wrap(dropdown).click()
            cy.get('.option-list nb-option').each( (listItem, index) => {
                const itemText = listItem.text().trim()

                const colors = {
                    "Light": "rgb(255, 255, 255)",
                    "Dark": "rgb(34, 43, 69)",
                    "Cosmic": "rgb(50, 50, 89)",
                    "Corporate": "rgb(255, 255, 255)"
                }

                cy.wrap(listItem).click()
                cy.wrap(dropdown).should('contain', itemText)
                cy.get('nb-layout-header nav').should('have.css', 'background-color', colors[itemText])
                if(index < 3){
                    cy.wrap(dropdown).click()
                }
            })

        })


    })
})