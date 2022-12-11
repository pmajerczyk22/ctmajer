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
            cy.get(TOURS_SELECTORS.addTourBtn).should(assertionMsg.Id, assertionMsg.MgrPer)
        } //

    dateMsgErrorCheck(){
        cy.xpath(TOURS_SELECTORS.dateMsgErr).should(assertionMsg.Text, assertionMsg.DateErrMsg)
        }

    defaultStartingPlace(){
        cy.get(TOURS_SELECTORS.defaultStartPlace).select(tourVariables.defaultPlace)
        cy.get(TOURS_SELECTORS.departureTime).clear().type(tourVariables.defaultTime)
        }

    nameFieldErrorMsgCheck(){
        cy.xpath(assertionMsg.ReqNameMsgXP).should(assertionMsg.Text, assertionMsg.ReqNameMsg)    
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
        cy.xpath(assertionMsg.priceListXP).should(assertionMsg.Text, assertionMsg.ReqPriceListMsg)    
    }
    typeDateOfTheTrip(date){
        cy.get(TOURS_SELECTORS.dateOfTour).eq(0).clear().type(date)
    }
    typeOfTour(tour){
        if(tour == tourVariables.polish){
            cy.get(TOURS_SELECTORS.typeOfTour).select(tourVariables.selectPolishTour)
        }
        if(tour == tourVariables.foreign){
            cy.get(TOURS_SELECTORS.typeOfTour).select(tourVariables.selectForeignTour)
        }
    }
}
export default new bookingPage();