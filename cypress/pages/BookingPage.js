import { TOURS_SELECTORS } from "../locators/tours-selectors"
import {assertionMsg} from "../support/assertionMsg"
import {tourVariables} from "../support/tourVariables"

class bookingPage {

    addNameForTour(name,priceList){  
            cy.get(TOURS_SELECTORS.name).type(name) 
            cy.get(TOURS_SELECTORS.priceList).select(priceList)
        }

    addTourButtonClick(){
            cy.get(TOURS_SELECTORS.addTourBtn).click()
        }

    addTheTour(){
            cy.get(TOURS_SELECTORS.addTripBtn).eq(2).click()
        }

    confirmManagerPermission(){
            cy.get(TOURS_SELECTORS.addTourBtn).should('have.id', assertionMsg.MgrPer)
        } //

    dateMsgErrorCheck(){
        cy.xpath(TOURS_SELECTORS.dateMsgErr).should('contain.text', assertionMsg.DateErrMsg)
        }

    defaultStartingPlace(){
        cy.get(TOURS_SELECTORS.defaultStartPlace).select(tourVariables.defaultPlace)
        cy.get(TOURS_SELECTORS.departureTime).clear().type(tourVariables.defaultTime)
        }

    nameFieldErrorMsgCheck(){
        cy.xpath(assertionMsg.ReqNameMsgXP).should('contain.text', assertionMsg.ReqNameMsg)    
        }          
    numberOfSeats(a){
        for(let n = 1; n < a; n ++){
            cy.get(TOURS_SELECTORS.seatsArrowUp).eq(0).click()
          }
    }
    negativeNumberOfSeats(a){
        for(let n = 1; n < a; n ++){
            cy.get(TOURS_SELECTORS.seatsArrowDown).eq(0).click()
          }
    }
    priceListErrorMsgCheck(){
        cy.xpath(assertionMsg.priceListXP).should('contain.text', assertionMsg.ReqPriceListMsg)    
    }
    typeDateOfTheTrip(date){
        cy.get(TOURS_SELECTORS.dateOfTour).eq(0).clear().type(date)
    }
    typeOfTour(tour){
        if(tour == "polishTour"){
            cy.get(TOURS_SELECTORS.typeOfTour).select("0")
        }
        if(tour == "foreignTour"){
            cy.get(TOURS_SELECTORS.typeOfTour).select("1")
        }
    }
}
export default new bookingPage();