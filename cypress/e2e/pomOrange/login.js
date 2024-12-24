export default class loginPage {
    static inputUsername(){
        return cy.get('input[placeholder="Username"]');
    }
    static inputPassword(){
        return cy.get('input[placeholder="Password"]');
    }
    static buttonLogin(){
        return cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]');
    }
}