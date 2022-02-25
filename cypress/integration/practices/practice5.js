

it ('sign in process but with a mail already in use', () =>  {
   cy.signinNew("carlos","cienfuegossilvacarlos@gmail.com")
   cy.get('p').contains('Email Address already exist!').should('have.text', 'Email Address already exist!')
 
  })