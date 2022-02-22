const url  = Cypress.env('base-url')

it ('login process and logout process' , () =>{

cy.visit(url);
cy.url().should('contains', url);
cy.visit(`${url}/login`);
cy.login('cienfuegossilvacarlos@gmail.com', '100fuegos')
cy.url().should('contains', url);
cy.get('b').contains('Carlos Cienfuegos');
cy.get('[href="/logout"]').click();

});

