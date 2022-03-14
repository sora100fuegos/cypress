
var randomEmail = require('random-email');


const randEmail = randomEmail({ domain: 'example.com' });
const randomPassword = Math.random().toString(36).slice(-8);

const url  = Cypress.env('base-url')

    it ('sign in process', () =>  {
      cy.signinNew(Cypress.env('user'),randEmail, randomPassword)
    })
    

    it('check that the username is visible', () => {
  cy.get('b').contains(Cypress.env('user'));

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