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
12. Verify that the delivery address is same address filled at the time registration of account
13. Verify that the billing address is same address filled at the time registration of account
14. Click 'Delete Account' button
15. Verify 'ACCOUNT DELETED!' and click 'Continue' button

*/

const url = Cypress.env('base-url');

var randomEmail = require('random-email');


const randEmail = randomEmail({ domain: 'example.com' });
const randomPassword = Math.random().toString(36).slice(-8);

it ('Verify address details in checkout page', () => {
cy.visit(url);
cy.url().should('contains', url);
cy.get('a[href="/login"]').first().click({force : true})
cy.signinNew(Cypress.env('user'),randEmail, randomPassword)
cy.addToCart()
cy.get('a[href="/view_cart"]').first().click()
cy.get('.check_out').click();
cy.get('[href="/logout"]').click();
 });

 