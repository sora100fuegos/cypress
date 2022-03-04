
/*
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Products' button
5. Verify user is navigated to ALL PRODUCTS page successfully
6. Enter product name in search input and click search button
7. Verify 'SEARCHED PRODUCTS' is visible
8. Verify all the products related to search are visible

*/


const url = Cypress.env('base-url')
const product = ['Blue Top' ,'Category: Women > Tops','Rs. 500' ,'Availability: In Stock','Condition: New','Brand: Polo']
it('check the product list', () => {
cy.visit(url);
cy.url().should('contains', url);
cy.get('a[href*="/products"]').click()
cy.get('#search_product').type(Cypress.env('product'))
cy.get('#submit_search').click()
cy.get('h2').contains('Searched Products').should('have.text', 'Searched Products')


cy.get(".features_items>div").should('be.visible');
});