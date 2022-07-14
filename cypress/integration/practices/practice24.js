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
19. Click 'Download Invoice' button and verify invoice is downloaded successfully.
20. Click 'Continue' button
21. Click 'Delete Account' button
22. Verify 'ACCOUNT DELETED!' and click 'Continue' button
*/

const url = Cypress.env('base-url');

var randomEmail = require('random-email');


const randEmail = randomEmail({ domain: 'example.com' });
const randomPassword = Math.random().toString(36).slice(-8);

it ('Download Invoice after purchase order', () => {

cy.visit(url);
cy.url().should('contains', url);
cy.get('a[href="/login"]').first().click({force : true})
cy.signinNew(Cypress.env('user'),randEmail, randomPassword)
cy.addToCart()
cy.get('a[href="/view_cart"]').first().click()
cy.get('.check_out').click();
cy.get('.form-control').type('ejemplo-comentario');
cy.get('a[href="/payment"]').click();
cy.addCardInfo();



cy.url().then(url => {
    const new_url ="https://www.automationexercise.com/download_invoice/"+url.slice(url.length-3,url.length)
    cy.downloadFile(new_url,'cypress/fixtures/Download', 'test.txt')
    cy.readFile('cypress/fixtures/Download/test.txt').should('contain', url.slice(url.length-3,url.length))
  });

cy.get('[data-qa=continue-button]').click()
cy.get('[href="/logout"]').click();
 });