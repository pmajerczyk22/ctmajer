import LoginPage from "../pages/LoginPage";
import { assertionMsg } from "../support/assertionMsg";
import { LOGIN_SELECTORS } from "../locators/login-selectors";


describe('proby asercji', () =>{
    it('proby asercji', () =>{
        cy.visit('/')
        LoginPage.loginButton().click()
       
    })

})


//