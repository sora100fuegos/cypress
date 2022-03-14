/*

1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that categories are visible on left side bar
4. Click on 'Women' category
5. Click on any category link under 'Women' category, for example: Dress
6. Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
7. On left side bar, click on any sub-category link of 'Men' category
8. Verify that user is navigated to that category page

*/


var randomEmail = require('random-email');

const url = Cypress.env('base-url');

 it ('View Category Products', () => {
cy.visit(url);
cy.url().should('contains', url);

cy.get('#accordian').should('be.visible')

cy.get('a[href="/category_products/1"]').click({force :true})
cy.get('h2').contains('Women - Dress Products').should('have.text', 'Women - Dress Products')
cy.get('a[href="/category_products/3"]').click({force :true})

 

 });