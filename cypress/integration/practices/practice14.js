/*
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Add products to cart
5. Click 'Cart' button
6. Verify that cart page is displayed
7. Click Proceed To Checkout
8. Click 'Register / Login' button
9. Fill all details in Signup and create account
10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
11. Verify ' Logged in as username' at top
12.Click 'Cart' button
13. Click 'Proceed To Checkout' button
14. Verify Address Details and Review Your Order
15. Enter description in comment text area and click 'Place Order'
16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
17. Click 'Pay and Confirm Order' button
18. Verify success message 'Your order has been placed successfully!'
19. Click 'Delete Account' button
20. Verify 'ACCOUNT DELETED!' and click 'Continue' button
*/


var randomEmail = require('random-email');


const randEmail = randomEmail({ domain: 'example.com' });
const randomPassword = Math.random().toString(36).slice(-8);
const url = Cypress.env('base-url');

 it ('Place Order: Register while Checkout', () => {
cy.visit(url);
cy.url().should('contains', url);

cy.addToCart()
cy.get('a[href="/view_cart"]').first().click()

cy.url().should('contains', `${url}view_cart`);

cy.get('.check_out').click();

cy.get('a[href="/login"]').first().click({force : true})

    cy.signinNew(Cypress.env('user'),randEmail, randomPassword)

  it('check that the username is visible', () => {
    cy.get('b').contains('carlos');
  
      });
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