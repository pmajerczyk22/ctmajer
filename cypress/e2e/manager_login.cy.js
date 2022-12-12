import testUser from "../../credentials/managerCredentials.json"
import loginPage from "../pages/loginPage.js"
import bookingPage from "../pages/BookingPage.js"

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
    bookingPage.confirmManagerPermission()
  })
  

})