/*

1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'Cart' button
5. Scroll down to footer
6. Verify text 'SUBSCRIPTION'
7. Enter email address in input and click arrow button
8. Verify success message 'You have been successfully subscribed!' is visible

*/

const url = Cypress.env('base-url');

 it ('subscribe on cart page successfully', () => {

cy.visit(url);
cy.url().should('contains', url);
cy.get('a[href="/view_cart"]').first().click()
cy.scrollTo('bottom');
cy.get('h2').contains('Subscription').should('have.text', 'Subscription')
cy.get('#susbscribe_email]').type('cienfuegossilvacarlos@gmail.com');
cy.get('#subscribe').click();

cy.get('#success-subscribe').should('be.visible');

 });