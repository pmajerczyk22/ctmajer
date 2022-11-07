import testUser from "../../credentials/userCredentials.json"
import LoginPage from "../pages/LoginPage.js"

describe('tests for login function', () => {
  beforeEach(() => {
    cy.visit('/Account/Login?ReturnUrl=%2F')
  })
  it('Negative scenario - try to login without credentials', () => {
    LoginPage.loginButton().click()
    LoginPage.emptyLoginFieldMessageCheck()
  })

  it('Negative scenario - login with incorrect credentials', () => {
    LoginPage.submitLogin(testUser.incorrectLogin,testUser.incorrectPass)
    LoginPage.incorrectLoginFieldMessageCheck()
  })

  it('Positive scenario - login with correct credentials', () => {
    LoginPage.submitLogin(testUser.login,testUser.pass)
  }) 
})