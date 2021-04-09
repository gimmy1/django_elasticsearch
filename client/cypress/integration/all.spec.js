describe('Perusable', function () {
    it('Displays the home page.', function () {
      cy.visit('/');
      cy.get('h1').should('contain', 'Perusable');
    });
  });

  it('Displays a list of results.', function () {
    cy.intercept('GET', '**/api/v1/catalog/wines/**', { fixture: 'wines.json' }).as('getWines');
  
    cy.visit('/');
    cy.get('input#country').type('US');
    cy.get('input#points').type('92');
    // changed
    cy.get('input[placeholder="Enter a search term (e.g. cabernet)"]')
      .type('cabernet');
    cy.get('button').contains('Search').click();
    cy.wait('@getWines');
    cy.get('div.card-title').should('contain', 'Cabernet Sauvignon');
  });

  it('Displays wine search words.', function () {
    // Stub server
    cy.intercept(
      'GET', '**/api/v1/catalog/wine-search-words/**',
      { fixture: 'wine_search_words.json' }
    ).as('getWineSearchWords');
  
    cy.visit('/');
    cy.get('input[placeholder="Enter a search term (e.g. cabernet)"]')
      .type('cabarnet');
    cy.wait('@getWineSearchWords');
    cy.get('div#query').should('contain', 'cabernet');
  });