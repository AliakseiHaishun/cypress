/// <reference types="cypress" />

describe ('onliner.by', () => {

    beforeEach('base page url', () => {
        cy.visit('https://onliner.by/');
    })

    //final
    it.only('search test 3', () => {
      cy.get('.fast-search__form').type('X');

      cy.get('.modal-iframe').its('0.contentDocument').its('body').should('not.be.undefined')
      .then(searchResult => {
        cy.wrap(searchResult).find('.search__result').should('have.length.at.least', 1);

        cy.wrap(searchResult).find('.search__input').type('iaomi').should('have.value', 'Xiaomi').wait(3000)
        
        cy.wrap(searchResult).find('.product__title-link').invoke('text')
        .then(text => {
          expect(text).include('Xiaomi');
        })
      })
    })
  })



    it('search test 2', () => {

        cy.get('.fast-search__form').type('X');

      cy.get('.modal-iframe').its('0.contentDocument').its('body').should('not.be.undefined')
      .then(form => {
        cy.wrap(form).find('.search__result').should('have.length.at.least', 1);

        cy.wrap(form).find('.search__input').type('iaomi').then(searchResult => {
          cy.wrap(searchResult).should('have.value', 'Xiaomi');
            cy.wrap(form).find('.search__results').find('.search__result').find('.result__wrapper')
            .find('.product__title-link').invoke('text').then(text => {
              expect(text).include('xiaomi')
            })
        })
        })
      })

      /// <reference types="cypress" />

// describe ('onliner.by', () => {

//   beforeEach('base page url', () => {
//       cy.visit('https://onliner.by/');
//   })

//   //final
//   it('search test 3', () => {
//     cy.get('.fast-search__form').type('X');

//     cy.get('.modal-iframe').its('0.contentDocument').its('body').should('not.be.undefined')
//     .then(searchResult => {
//       cy.wrap(searchResult).find('.search__result').should('have.length.at.least', 1);

//       cy.wrap(searchResult).find('.search__input').type('iaomi')
//       .then (func => {
//         cy.wrap(func).should('have.value', 'Xiaomi').wait(4000);
//         cy.wrap(func).parentsUntil('.search search_active-compare').find('.product__title-link').invoke('text')
//         .then(text => {
//                     expect(text).include('Xiaomi');
//                   })
//       })
//     })
//   })
// })

























    it('searh testing', () => {

      cy.get('.fast-search__form')
      .type('x')

      .get('.modal-iframe').its('0.contentDocument').its('body').then(cy.wrap)
      .find('.search__result').should('have.length.at.least', 1)

      cy.get('.modal-iframe').its('0.contentDocument').its('body').then(cy.wrap)
      .find('.search__input').type('iaomi').should('have.value', 'xiaomi')

       cy.get('.modal-iframe').its('0.contentDocument').its('body').then(cy.wrap)
       .contains('Смартфон Xiaomi Redmi Note 11 6GB/128GB международная версия (графитовый серый)')
       .should('have.text', 'Смартфон Xiaomi Redmi Note 11 6GB/128GB международная версия (графитовый серый)')
    })