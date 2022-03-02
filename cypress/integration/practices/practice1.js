
var randomEmail = require('random-email');


const randEmail = randomEmail({ domain: 'example.com' });
const randomPassword = Math.random().toString(36).slice(-8);

const url  = Cypress.env('base-url')

    it ('sign in process', () =>  {
      cy.signinNew("carlos",randEmail)
    })
    
    it ('Enter account information process', () => {
        cy.get('b').contains('Enter Account Information');
        //cy.visit(`${url}/signup`);
        cy.get('#id_gender1').click();
        cy.get('#name').click();
        cy.get('#first_name').type('Carlos');
        cy.get('#last_name').type('Cienfuegos');

        cy.get('#days').select('30');
        cy.get('#months').select('7');
        cy.get('#years').select('1991');
        
        cy.get('#password').type(randomPassword);
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
        //cy.url().should('contains', `${url}/account_created`);
        cy.get('.btn-primary').click();

    });
    it('check that the username is visible', () => {
  cy.get('b').contains('carlos');

    });

    /*

    client.connect(err => {
        const collection = client.db("test").collection("users");
        // perform actions on the collection object
    
        const user = {
            email: randEmail,
            password: randomPassword    
        };
     
         collection.insertOne(user);
        client.close();
      });

      */