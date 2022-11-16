import testUser from "../../credentials/userCredentials.json"
import loginPage from "../pages/LoginPage.js"

describe('tests for login function', () => {
  beforeEach(() => {
    cy.visit('/Account/Login?ReturnUrl=%2F')
  })
  it('Negative scenario - try to login without credentials', () => {
    loginPage.loginButton().click()
    loginPage.emptyLoginFieldMsgCheck()
  })

  it('Negative scenario - login with incorrect credentials', () => {
    loginPage.submitLogin(testUser.incorrectLogin,testUser.incorrectPass)
    loginPage.verifyIncorrectLoginMsg()
  })

  it('Positive scenario - login with correct credentials', () => {
    loginPage.submitLogin(testUser.login,testUser.pass)
  }) 
})