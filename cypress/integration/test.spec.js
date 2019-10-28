describe('Cypress', () => {
  it('test-test', () => {

    cy.visit('/');


    cy.server();
    cy.route('http://echo.jsontest.com/name/per', { 'name': 'ikke per' }).as('save');

    cy.get('[data-cy=button]').click();

    cy.log('Hepp');

    cy.get('[data-cy=result_holder]').should('contain','Per');

    cy.wait('@save')
      .its('request.body')
      .should('deep.equal', {
        'name': 'ikke per',
      });

  });
});


