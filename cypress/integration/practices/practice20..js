/*
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Click on 'Products' button
4. Verify user is navigated to ALL PRODUCTS page successfully
5. Enter product name in search input and click search button
6. Verify 'SEARCHED PRODUCTS' is visible
7. Verify all the products related to search are visible
8. Add those products to cart
9. Click 'Cart' button and verify that products are visible in cart
10. Click 'Signup / Login' button and submit login details
11. Again, go to Cart page
12. Verify that those products are visible in cart after login as well

*/

var randomEmail = require('random-email');

const url = Cypress.env('base-url');

 it ('Search Products and Verify Cart After Login', () => {
cy.visit(url);
cy.url().should('contains', url);

cy.get('a[href="/products"]').click({force :true})
cy.url().should('contains', `${url}products`);
cy.searchProduct();

cy.get('.features_items>div').should('be.visible').get('.add-to-cart').click({ force: true ,  multiple: true })

  cy.get('a[href="/view_cart"]').first().click({force :true})
  cy.get('#cart_info').should('be.visible')
  cy.get('a[href="/login"]').first().click({force :true})
  cy.login('cienfuegossilvacarlos@gmail.com', '100fuegos')
  cy.get('a[href="/view_cart"]').first().click({force :true})
  cy.get('#cart_info').should('be.visible')

 });