import testUser from "../../credentials/managerCredentials.json"
import BookingPage from "../pages/BookingPage.js"
import exampleTour from "../support/tourNames.json"
import LoginPage from "../pages/LoginPage.js"

const login = () => {
    cy.visit('/Account/Login?ReturnUrl=%2F')
    LoginPage.submitLogin(testUser.login,testUser.pass)

}

describe('tests for adding tour function', () => {
    it('Positive scenario - manager add polish tour', () =>{
    login();    
    BookingPage.addTourButtonClick()
    BookingPage.addNameForTour(exampleTour.polishName,exampleTour.polishPriceList) 
    BookingPage.numberOfSeats(50)
    BookingPage.typeDateOfTheTrip()
    BookingPage.typeOfTour("polishTour")
    BookingPage.defaultStartingPlace()
    BookingPage.addTheTour()    
  }) 
    


})