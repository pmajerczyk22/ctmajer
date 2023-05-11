import { LOGIN_SELECTORS } from "../locators/login-selectors"
import {assertionMsg} from "../support/assertionMsg"

class loginPage{

    emptyLoginFieldMsgCheck(){
        cy.get(LOGIN_SELECTORS.emptyValidErr).contains(assertionMsg.reqlogMsg)
        cy.get(LOGIN_SELECTORS.emptyValidErr).contains(assertionMsg.reqPassMsg)
    } 
    
    verifyIncorrectLoginMsg(){
        cy.get(LOGIN_SELECTORS.logValidErr).contains(assertionMsg.validlog)    
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