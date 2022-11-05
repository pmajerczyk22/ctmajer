import testUser from "../../credentials/managerCredentials.json"
import selectPage from "../support/selectPage.js"
import exampleTour from "../support/tourNames.json"

const login = () => {
    cy.visit('/Account/Login?ReturnUrl=%2F')
    cy.login(testUser.login,testUser.pass)

}

describe('tests for adding tour function', () => {
    it('Positive scenario - manager add tour', () =>{
    login();    
    selectPage.addTourButtonClick()
    selectPage.addNameForTour(exampleTour.polishName2,exampleTour.polishPriceList2) 
    selectPage.numberOfSeats(50)
    selectPage.typeDateOfTheTrip()
    selectPage.typeOfTour("polishTour")
    selectPage.defaultStartingPlace()
    selectPage.addTheTour()    
  })

})