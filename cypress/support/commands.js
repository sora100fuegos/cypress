// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';

const url  = Cypress.env('base-url')

Cypress.Commands.add('login', (username, password) => {
    cy.get('[data-qa=login-email]').type(username);
    cy.get('[data-qa=login-password]').type(password);
    cy.get('[data-qa=login-button]').click();
})


Cypress.Commands.add('signinNew', (name, email ,password) => {

    //cy.visit(`${url}/login`);
    cy.contains('New User Signup!');
    cy.get('[data-qa=signup-name]').type(name);
    cy.get('[data-qa=signup-email]').type(email);
    cy.get('[data-qa=signup-button]').click();
    cy.get('b').contains('Enter Account Information');
    //cy.visit(`${url}/signup`);
    cy.get('#id_gender1').click();
    cy.get('#name').click();
    cy.get('#first_name').type('Carlos');
    cy.get('#last_name').type('Cienfuegos');

    cy.get('#days').select('30');
    cy.get('#months').select('7');
    cy.get('#years').select('1991');
    
    cy.get('#password').type(password);
    cy.get('#newsletter').click();
    cy.get('#optin').click();
    cy.get('#address1').type('Secoya 3133');
    cy.get('#state').type('Jalisco');
    cy.get('#city').type('Guadalajara');
    cy.get('#zipcode').type('44980');
    cy.get('#mobile_number').type('+523322097163');
    

    cy.get('#address2').type('secoy');
    cy.get('.btn:nth-child(22)').click();
    
    
    Cypress.Cookies.defaults({
        preserve: 'sessionid',
      })
    cy.url().should('contains', `${url}account_created`);
    cy.get('.btn-primary').click();
})

Cypress.Commands.add('contactForm', (name, email, subject,message) => {

    cy.visit(`${url}/contact_us`);
    cy.get('h2').contains('Get In Touch').should('have.text', 'Get In Touch');
    cy.get('[data-qa=name]').type(name);
    cy.get('[data-qa=email]').type(email);
    cy.get('[data-qa=subject]').type(subject);
    cy.get('[data-qa=message]').type(message);
    cy.get('[name="upload_file"]').attachFile('example.jpg');
    cy.get('[data-qa=submit-button]').click();
})

Cypress.Commands.add('addToCart', () => {

    cy.get('.overlay-content>[data-product-id="1"]').click({multiple: true, force: true} )
    cy.get('.close-modal').click();
    cy.get('.overlay-content>a[data-product-id="2"]').click({ multiple: true , force: true} )
    cy.get('.close-modal').click();

})


Cypress.Commands.add('addCardInfo', () => {

cy.get('[data-qa=name-on-card]').type(Cypress.env('user'))
cy.get('[data-qa=card-number]').type('1234')

cy.get('.card-cvc').type('500');
cy.get('.card-expiry-month').type('12');
cy.get('.card-expiry-year').type('3000');
cy.get('#submit').click();

})

Cypress.Commands.add('searchProduct', () => {

    cy.get('a[href*="/products"]').click()
    cy.get('#search_product').type(Cypress.env('product'))
    cy.get('#submit_search').click()
    cy.get('h2').contains('Searched Products').should('have.text', 'Searched Products')
    
})

Cypress.Commands.add('submitReview', () => {

    cy.get('#name').type('carlos')
    cy.get('#email').type('cienfuegossilvacarlos@gmail.com')
    cy.get('#review').type('this product is good')
    cy.get('#button-review').click()

})
    