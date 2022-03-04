const url = Cypress.env('base-url');

 it ('verify product quantity in card', () => {
cy.visit(url);
cy.url().should('contains', url);
cy.url.should('contains', url);

cy.get('a[href="/products"]').click()
cy.url.should('contains', `${url}/products`);
//cy.get('.overlay-content').trigger('mouseover')
cy.get('.overlay-content>[data-product-id="1"]').click({multiple: true, force: true} )
cy.get('.btn-success').click();
cy.get('.overlay-content>a[data-product-id="2"]').click({ multiple: true , force: true} )
cy.get('.btn-success').click();
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