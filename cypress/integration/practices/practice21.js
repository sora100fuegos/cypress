/*

1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Click on 'Products' button
4. Verify user is navigated to ALL PRODUCTS page successfully
5. Click on 'View Product' button
6. Verify 'Write Your Review' is visible
7. Enter name, email and review
8. Click 'Submit' button
9. Verify success message 'Thank you for your review.'


*/

var randomEmail = require('random-email');
const url = Cypress.env('base-url');

 it ('Add review on product', () => {
cy.visit(url);
cy.url().should('contains', url);

cy.get('a[href="/products"]').click({force :true})
cy.url().should('contains', `${url}products`);
cy.get('a[href="/product_details/1"]').click()
cy.get('a[href="#reviews"]').should('be.visible')


cy.submitReview();
cy.get('review-section').should('be.visible')


 });