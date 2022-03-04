/*

1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Products' button
5. Verify user is navigated to ALL PRODUCTS page successfully
6. The products list is visible
7. Click on 'View Product' of first product
8. User is landed to product detail page
9. Verify that detail detail is visible: product name, category, price, availability, condition, brand

*/

const url = Cypress.env('base-url')
const product = ['Blue Top' ,'Category: Women > Tops','Rs. 500' ,'Availability: In Stock','Condition: New','Brand: Polo']
it('check the product list', () => 
{
cy.visit(url);
cy.url().should('contains', url);
cy.get('a[href*="/products"]').click()
cy.url().should('contains', 'https://automationexercise.com/products');
cy.get('a[href="/product_details/1"]').click()
cy.url().should('contains', 'https://automationexercise.com/product_details/1');

var text1 =""
const article = cy.get('.product-information').each(($el, index, $list) => {
  
    text1 = $el.text()
    cy.log(text1)
    
    
        // $el.contains( ['Blue Top' ,'Category: Women > Tops','Rs. 500' ,'Availability: In Stock','Condition: New','Brand: Polo'])
 });
cy.log(text1)
  const elements = cy.get('.product-information').then((els) => {
   // we get a list of jQuery elements
   // let's convert the jQuery object into a plain array
   let  els2 = els.text()
   
   return (
     Cypress.$.makeArray(els2)
       // and extract inner text from each
    .map((els2) => els2.innerText)
   )
 })
 //.should('deep.equal', ['Blue Top' ,'Category: Women > Tops','Rs. 500' ,'Availability: In Stock','Condition: New','Brand: Polo'])
//console.log(elements)

})