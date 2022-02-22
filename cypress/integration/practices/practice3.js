
const url  = Cypress.env('base-url')


it('incorrect login with invalid username and password' , () => {
cy.visit(url)
cy.visit(`${url}/login`);
cy.login('example@google.com', 'example')
cy.get('p').contains('Your email or password is incorrect!').should('have.text', 'Your email or password is incorrect!')


});
