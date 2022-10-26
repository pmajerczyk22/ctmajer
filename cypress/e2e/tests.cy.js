import testUser from "../../credentials/credentials.json"
import SampleUser from "../locators/SampleUser.js"

describe('Positive scenario - login to system', () => {
  it('visit the website', () => {
    cy.visit('/Account/Login?ReturnUrl=%2F')
    cy.login(testUser.login,testUser.pass)
  }) 
})