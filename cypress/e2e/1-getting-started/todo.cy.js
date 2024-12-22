describe('Fitur Login', () => {
 it('Test Function Login with Valid Credentials', () => {
   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   cy.get('input[placeholder="Username"]').type('Admin');
   cy.get('input[placeholder="Password"]').type('admin123');
   cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
  })
})
describe('Fitur Login', () => {
  it('Test Function Login with Invalid Username and Password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[placeholder="Username"]').type('Adminn');
    cy.get('input[placeholder="Password"]').type('adminn123');
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
   })
 })
 describe('Fitur Login', () => {
  it('Test Function Login with Invalid Uppercase', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[placeholder="Username"]').type('ADMIN');
    cy.get('input[placeholder="Password"]').type('ADMIN123');
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
   })
 })
 describe('Fitur Login', () => {
  it('Test Function Login with Blank Input', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
   })
 })
 describe('Fitur Login', () => {
  it('Test Function Login with User Doesnt Exist', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[placeholder="Username"]').type('BukanAdmin');
    cy.get('input[placeholder="Password"]').type('bukanadmin123');
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
   })
 })
 describe('Fitur Login', () => {
  it('Test Function Login with Space Between', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[placeholder="Username"]').type('A d m i n');
    cy.get('input[placeholder="Password"]').type('adminn123');
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
   })
 })