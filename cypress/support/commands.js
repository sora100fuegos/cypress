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


Cypress.Commands.add('signinNew', (name, email) => {

    cy.visit(`${url}/login`);
    cy.contains('New User Signup!');
    cy.get('[data-qa=signup-name]').type(name);
    cy.get('[data-qa=signup-email]').type(email);
    cy.get('[data-qa=signup-button]').click();
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
