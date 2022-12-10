import testUser from "../../credentials/managerCredentials.json"
import bookingPage from "../pages/BookingPage.js"
import exampleTour from "../support/tourNames.json"
import loginPage from "../pages/LoginPage.js"

const login = () => {
    cy.visit('/Account/Login?ReturnUrl=%2F')
    loginPage.submitLogin(testUser.login,testUser.pass)

}

describe('tests for adding tour function', () => {
     it('Positive scenario - manager add polish tour', () =>{
     login();    
     bookingPage.addTourButtonClick()
     bookingPage.addNameForTour(exampleTour.polishName,exampleTour.polishPriceList) 
     bookingPage.numberOfSeats(50)
     bookingPage.typeDateOfTheTrip("2023-08-22")
     bookingPage.typeOfTour("polishTour")
     bookingPage.defaultStartingPlace()
     bookingPage.addTheTour()    
   })
   it('Positive scenario - manager add foreign tour', () =>{
     login();    
     bookingPage.addTourButtonClick()
     bookingPage.addNameForTour(exampleTour.foreignName,exampleTour.foreignPriceList) 
     bookingPage.numberOfSeats(50)
     bookingPage.typeDateOfTheTrip("2023-01-15")
     bookingPage.typeOfTour("foreignTour")
     bookingPage.defaultStartingPlace()
     bookingPage.addTheTour()    
  })
  
  it('Negative scenario - manager try to add tour with negative number of seats', () =>{
    login();    
    bookingPage.addTourButtonClick()
    bookingPage.addNameForTour(exampleTour.foreignName,exampleTour.foreignPriceList) 
    bookingPage.negativeNumberOfSeats(5)
    bookingPage.typeDateOfTheTrip("2022-12-03")
    bookingPage.typeOfTour("foreignTour")
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
    bookingPage.typeDateOfTheTrip("2020-01-07")
    bookingPage.typeOfTour("foreignTour")
    bookingPage.defaultStartingPlace()
    bookingPage.addTheTour()
    bookingPage.dateMsgErrorCheck()

})
})