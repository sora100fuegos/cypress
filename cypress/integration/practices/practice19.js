/*
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Click on 'Products' button
4. Verify that Brands are visible on left side bar
5. Click on any brand name
6. Verify that user is navigated to brand page and brand products are displayed
7. On left side bar, click on any other brand link
8. Verify that user is navigated to that brand page and can see products
*/


var randomEmail = require('random-email');

const url = Cypress.env('base-url');

 it ('View & Cart Brand Products', () => {
cy.visit(url);
cy.url().should('contains', url);
cy.get('a[href="/products"]').click({force :true})
cy.get('.brands-name').should('be.visible')
cy.get('a[href="/brand_products/Polo"]').click({force :true})
cy.url().should('contains',`${url}brand_products/Polo`);
cy.get('a[href="/brand_products/H&M"]').click({force :true})
cy.url().should('contains', `${url}brand_products/H&M`);


 });