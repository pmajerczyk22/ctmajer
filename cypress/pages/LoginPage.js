import { LOGIN_SELECTORS } from "../locators/login-selectors"
import AssertionMsg from "../support/AssertionMsg.json"

class loginPage{

    emptyLoginFieldMsgCheck(){
        cy.xpath(LOGIN_SELECTORS.RequieredLogMsg).should('contain.text', AssertionMsg.ReqLogMsg )
        cy.xpath(LOGIN_SELECTORS.RequieredPassMsg).should('contain.text', AssertionMsg.ReqPassMsg)
    } 
    
    verifyIncorrectLoginMsg(){
         cy.xpath(LOGIN_SELECTORS.incorrectLogMsg).should('contain.text', AssertionMsg.IncLogPassMsg)    
     }

    loginButton(){
        return cy.get(LOGIN_SELECTORS.logBtn)
    }
    
    submitLogin(username, password){
        cy.get(LOGIN_SELECTORS.login).type(username)
        cy.get(LOGIN_SELECTORS.pass).type(password)
        cy.get(LOGIN_SELECTORS.logBtn).click()
    }

}

export default new loginPage();