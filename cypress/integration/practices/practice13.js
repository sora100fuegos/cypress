/*
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'View Product' for any product on home page
5. Verify product detail is opened
6. Increase quantity to 4
7. Click 'Add to cart' button
8. Click 'View Cart' button
9. Verify that product is displayed in cart page with exact quantity
*/
const url = Cypress.env('base-url');

 it ('verify product quantity in card', () => {
cy.visit(url);
cy.url().should('contains', url);

cy.get('a[href="/product_details/1"]').click()
cy.url().should('contains', `${url}product_details/1`);
cy.get('#quantity').clear()
cy.get('#quantity').type('4')
cy.get('.cart').click();
cy.get('.btn-success').click();
cy.get('a[href="/view_cart"]').first().click()
cy.get('#product-1 .disabled').should('have.text', '4')

 });