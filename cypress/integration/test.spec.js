context('Network Requests', function() {

  beforeEach(function() {
    cy.visit('/');
  });

  it('test-test', () => {
    cy.server();
    cy.route('http://echo.jsontest.com/name/Per', { 'name': 'mocked per' }).as('getper');
    cy.get('[data-cy=button]').click();
    cy.get('[data-cy=result_holder]').should('contain', 'mocked per');
    //cy.wait('@getper').its('status').should('eq', 200)
    // cy.wait('@getper')
    //   .its('request.body')
    //   .should('deep.equal', {
    //     'name': 'ikke per',
    //   });
  });
});


