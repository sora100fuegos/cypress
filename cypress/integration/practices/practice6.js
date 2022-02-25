
const subject = 'exmaple-subject';
const message = 'example-message';


it ('contactus-form', () =>  {
   cy.contactForm('carlos','cienfuegossilvacarlos@gmail.com',subject,message)
   cy.get('div').contains('Success! Your details have been submitted successfully.').should('have.text', 'Success! Your details have been submitted successfully.')

   })