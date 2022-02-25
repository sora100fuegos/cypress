/*

1.Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Test Cases' button
5. Verify user is navigated to test cases page successfully

*/
const url = Cypress.env('base-url')

it ('check test-cases page ', () =>  {
   cy.visit(url);

   cy.url().should('contains', `${url}`);
   cy.visit(`${url}/test_cases`);
cy.url().should('contains', `${url}/test_cases`);

});