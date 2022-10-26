import testUser from "../../credentials/credentials.json"
import SampleUser from "../locators/SampleUser.js"

describe('test for login function', () => {
  beforeEach(() => {
    cy.visit('/Account/Login?ReturnUrl=%2F')
  })
  it('Negative scenario - try to login without credentials', () => {
    cy.get('[value="Zaloguj"]').click()
    cy.xpath(`//*[text()='Pole Login jest wymagane.']`).should('contain.text', 'Pole Login jest wymagane.')
    cy.xpath(`//*[text()='Pole Hasło jest wymagane.']`).should('contain.text', 'Pole Hasło jest wymagane.')
  })

  it('Negative scenario - login with incorrect credentials', () => {
    cy.login(testUser.incorrectLogin,testUser.incorrectPass)
    cy.xpath(`//*[text()='Nazwa użytkownika lub hasło jest niepoprawne']`).should('contain.text', 'Nazwa użytkownika lub hasło jest niepoprawne')
  })

  it('Positive scenario - login with correct credentials', () => {
    cy.login(testUser.login,testUser.pass)
  }) 
})