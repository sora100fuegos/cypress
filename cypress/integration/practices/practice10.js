
/*
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Scroll down to footer
5. Verify text 'SUBSCRIPTION'
6. Enter email address in input and click arrow button
7. Verify success message 'You have been successfully subscribed!' is visible

*/


 const url = Cypress.env('base-url');

 it ('show subscribed message successfully', () => {

cy.visit(url);
cy.scrollTo('bottom');
cy.get('h2').contains('Subscription').should('have.text', 'Subscription')
cy.get('#susbscribe_email').type('cienfuegossilvacarlos@gmail.com');
cy.get('#subscribe').click();

cy.get('#success-subscribe').should('be.visible');
 });