import testUser from "../../credentials/credentials.json"
import SampleUser from "../locators/SampleUser.js"

describe('Positive scenario - login by admin', () => {
  it('visit the website', () => {
    cy.visit('/Account/Login?ReturnUrl=%2F')
    SampleUser.login(testUser.login,testUser.pass)
  }) 
})