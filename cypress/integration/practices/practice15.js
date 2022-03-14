

/*

1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'Signup / Login' button
5. Fill all details in Signup and create account
6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
7. Verify ' Logged in as username' at top
8. Add products to cart
9. Click 'Cart' button
10. Verify that cart page is displayed
11. Click Proceed To Checkout
12. Verify Address Details and Review Your Order
13. Enter description in comment text area and click 'Place Order'
14. Enter payment details: Name on Card, Card Number, CVC, Expiration date
15. Click 'Pay and Confirm Order' button
16. Verify success message 'Your order has been placed successfully!'
17. Click 'Delete Account' button
18. Verify 'ACCOUNT DELETED!' and click 'Continue' button


*/
// dif numero 3336993832

var randomEmail = require('random-email');


const randEmail = randomEmail({ domain: 'example.com' });
const randomPassword = Math.random().toString(36).slice(-8);
const url = Cypress.env('base-url');

 it ('Place Order: Register before Checkout', () => {
cy.visit(url);
cy.url().should('contains', url);

cy.get('a[href="/login"]').first().click({force : true})

cy.signinNew(Cypress.env('user'),randEmail, randomPassword)

it('check that the username is visible', () => {
    cy.get('b').contains('carlos');
  
      });

cy.addToCart()
cy.get('a[href="/view_cart"]').first().click()

cy.url().should('contains', `${url}view_cart`);

cy.get('.check_out').click();



cy.get('a[href="/view_cart"]').first().click()
cy.get('.check_out').click();

cy.get('.form-control').type('ejemplo-comentario');
cy.get('a[href="/payment"]').click();


cy.get('[data-qa=name-on-card]').type(Cypress.env('user'))
cy.get('[data-qa=card-number]').type('1234')

cy.get('.card-cvc').type('500');
cy.get('.card-expiry-month').type('12');
cy.get('.card-expiry-year').type('3000');
cy.get('#submit').click();

cy.get('p').contains('Congratulations! Your order has been confirmed!').should('be.visible')
//cy.get('Congratulations! Your order has been confirmed!').should('be.visible')




 });