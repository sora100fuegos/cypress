

it ('sign in process but with a mail already in use', () =>  {
   const url  = Cypress.env('base-url')

   cy.visit(`${url}/login`);

   cy.contains('New User Signup!');

   cy.get('[data-qa=signup-name]').type('carlos');
    cy.get('[data-qa=signup-email]').type('cienfuegossilvacarlos@gmail.com');
    cy.get('[data-qa=signup-button]').click();
   cy.get('p').contains('Email Address already exist!').should('have.text', 'Email Address already exist!')
 
  })