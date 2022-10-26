import testUser from "../../credentials/credentials.json"
import selectPage from "../support/selectPage.js"

describe('tests for login function', () => {
  beforeEach(() => {
    cy.visit('/Account/Login?ReturnUrl=%2F')
  })
  it('Negative scenario - try to login without credentials', () => {
    selectPage.loginButton().click()
    selectPage.emptyLoginFieldMessageCheck()
  })

  it('Negative scenario - login with incorrect credentials', () => {
    cy.login(testUser.incorrectLogin,testUser.incorrectPass)
    selectPage.incorrectLoginFieldMessageCheck()
  })

  it('Positive scenario - login with correct credentials', () => {
    cy.login(testUser.login,testUser.pass)
  }) 
})