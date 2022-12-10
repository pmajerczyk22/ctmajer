import { LOGIN_SELECTORS } from "../locators/login-selectors"


describe('testujemy selektory', () => {
  beforeEach(() => {
    cy.visit('/Account/Login?ReturnUrl=%2F')
  })
  it('test selektora login', () => {
    cy.get(LOGIN_SELECTORS.login).type("test") 
    cy.get(LOGIN_SELECTORS.password).type("test")
    cy.get(LOGIN_SELECTORS.logBtn).click()
  })


})