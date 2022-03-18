/*
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Scroll down page to bottom
5. Verify 'SUBSCRIPTION' is visible
6. Scroll up page to top
7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
*/

const url = Cypress.env('base-url');


it ('Verify Scroll Up without Arrow button and Scroll Down functionality', () => {

cy.visit(url);
cy.url().should('contains', url);
cy.scrollTo('bottom');
cy.get('h2').contains('Subscription').should('have.text', 'Subscription')
cy.scrollTo('top');
cy.get('h2').contains('Full-Fledged practice website for Automation Engineers').should('have.text', 'Full-Fledged practice website for Automation Engineers')

 });