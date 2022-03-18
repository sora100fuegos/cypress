/*
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Scroll to bottom of page
4. Verify 'RECOMMENDED ITEMS' are visible
5. Click on 'Add To Cart' on Recommended product
6. Click on 'View Cart' button
7. Verify that product is displayed in cart page

*/

const url = Cypress.env('base-url');

it ('Add to cart from Recommended items', () => {
cy.visit(url);
cy.url().should('contains', url);
cy.scrollTo(0,7500);
cy.get('h2').should('be.visible')

cy.get('.active > .col-sm-4:nth-child(1) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
cy.get('.text-center > a[href="/view_cart"]').click()
cy.get('#cart_info').should('be.visible')

 });