/*

Test Case 17: Remove Products From Cart
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Add products to cart
5. Click 'Cart' button
6. Verify that cart page is displayed
7. Click 'X' button corresponding to particular product
8. Verify that product is removed from the cart

*/


var randomEmail = require('random-email');


const url = Cypress.env('base-url');

 it (' Remove Products From Cart', () => {
cy.visit(url);
cy.url().should('contains', url);
cy.addToCart()
cy.get('a[href="/view_cart"]').first().click()

cy.url().should('contains', `${url}view_cart`);

cy.get('#product-1 .cart_quantity_delete').click();

cy.get('.table-condensed').should("have.length",1) 
 

 });