import { LOGIN_SELECTORS } from "../locators/login-selectors"
import {assertionMsg} from "../support/assertionMsg"

class loginPage{

    emptyLoginFieldMsgCheck(){
        cy.xpath(LOGIN_SELECTORS.RequieredLogMsg).should(assertionMsg.Text, assertionMsg.ReqlogMsg)
        cy.xpath(LOGIN_SELECTORS.RequieredPassMsg).should(assertionMsg.Text, assertionMsg.ReqPassMsg)
    } 
    
    verifyIncorrectLoginMsg(){
         cy.xpath(LOGIN_SELECTORS.incorrectLogMsg).should(assertionMsg.Text, assertionMsg.IncLogPassMsg)    
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