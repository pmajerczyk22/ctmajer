import testUser from "../../credentials/managerCredentials.json"
import bookingPage from "../pages/BookingPage.js"
import exampleTour from "../support/tourNames.json"
import loginPage from "../pages/LoginPage.js"
import { tourVariables } from "../support/tourVariables"

const login = () => {
    cy.visit('/Account/Login?ReturnUrl=%2F')
    loginPage.submitLogin(testUser.login,testUser.pass)

}

describe('tests for adding tour function', () => {
     it('Positive scenario - manager add polish tour', () =>{
     login();    
     bookingPage.addTourButtonClick()
     bookingPage.addNameForTour(exampleTour.polishName,exampleTour.polishPriceList) 
     bookingPage.numberOfSeats(5)
     bookingPage.typeDateOfTheTrip(tourVariables.correctDate)
     bookingPage.typeOfTour(tourVariables.polish)
     bookingPage.defaultStartingPlace()
     bookingPage.addTheTour()   
   })
    it('Check if polish tour was correctly added', () =>{
    login();    
    bookingPage.checkIfTourAdded(exampleTour.polishName)    
  })

   it('Positive scenario - manager add foreign tour', () =>{
     login();    
     bookingPage.addTourButtonClick()
     bookingPage.addNameForTour(exampleTour.foreignName,exampleTour.foreignPriceList) 
     bookingPage.numberOfSeats(5)
     bookingPage.typeDateOfTheTrip(tourVariables.correctDate)
     bookingPage.typeOfTour(tourVariables.foreign)
     bookingPage.defaultStartingPlace()
     bookingPage.addTheTour()
      
  })
    it('Check if foreign tour was correctly added', () =>{
    login();    
    bookingPage.checkIfTourAdded(exampleTour.polishName)    
  })

  
  it('Negative scenario - manager try to add tour with negative number of seats', () =>{
    login();    
    bookingPage.addTourButtonClick()
    bookingPage.addNameForTour(exampleTour.foreignName,exampleTour.foreignPriceList) 
    bookingPage.negativeNumberOfSeats(5)
    bookingPage.typeDateOfTheTrip(tourVariables.pastDate)
    bookingPage.typeOfTour(tourVariables.foreign)
    bookingPage.defaultStartingPlace()
    bookingPage.addTheTour()    
  })

  it('Negative scenario - manager try to add empty tour', () =>{
        login();    
        bookingPage.addTourButtonClick()
        bookingPage.addTheTour()  
        bookingPage.nameFieldErrorMsgCheck()
        bookingPage.priceListErrorMsgCheck()  
  })
  it('Negative scenario - manager try to add tour with past date', () =>{
    login();    
    bookingPage.addTourButtonClick()
    bookingPage.addNameForTour(exampleTour.foreignName,exampleTour.foreignPriceList) 
    bookingPage.numberOfSeats(5)
    bookingPage.typeDateOfTheTrip(tourVariables.pastDate)
    bookingPage.typeOfTour(tourVariables.foreign)
    bookingPage.defaultStartingPlace()
    bookingPage.addTheTour()
    bookingPage.dateMsgErrorCheck()

})
})