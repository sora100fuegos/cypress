/*
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'Products' button
5. Hover over first product and click 'Add to cart'
6. Click 'Continue Shopping' button
7. Hover over second product and click 'Add to cart'
8. Click 'View Cart' button
9. Verify both products are added to Cart
10. Verify their prices, quantity and total price

*/

const url = Cypress.env('base-url');

 it ('add 2 products to cart successfully', () => {
cy.visit(url);
cy.url().should('contains', url);
cy.get('a[href="/products"]').click()
//cy.get('.overlay-content>[data-product-id="1"]').trigger('mouseover')
cy.get('.overlay-content>[data-product-id="1"]').click({multiple: true, force: true} )
cy.get('.close-modal').click();
cy.get('.overlay-content>a[data-product-id="2"]').click({ multiple: true , force: true} )
cy.get('.close-modal').click();
cy.get('a[href="/view_cart"]').first().click()
cy.get('#product-1').should('be.visible')
cy.get('#product-1>td.cart_price').should('be.visible')
cy.get('#product-1>td.cart_quantity').should('be.visible')
cy.get('#product-1>td.cart_total').should('be.visible')

cy.get('#product-2').should('be.visible')
cy.get('#product-2>td.cart_price').should('be.visible')
cy.get('#product-2>td.cart_quantity').should('be.visible')
cy.get('#product-2>td.cart_total').should('be.visible')


//cy.get('.btn-success').click();
//cy.url().should('contains', 'https://automationexercise.com/view_cart');

 });