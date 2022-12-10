import { TOURS_SELECTORS } from "../locators/tours-selectors"

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
        cy.get(TOURS_SELECTORS.addTourBtn).should('have.id', 'add-tour-button')
    }
    dateMsgErrorCheck(){
        cy.xpath(TOURS_SELECTORS.dateMsgErr).should('contain.text', 'Data początku wycieczki musi być późniejsza niż wczoraj')
    }  
    defaultStartingPlace(){
        cy.get(TOURS_SELECTORS.defaultStartPlace).select("Istniejący")
        cy.get(TOURS_SELECTORS.departureTime).clear().type("9:00")
        }
    nameFieldErrorMsgCheck(){
        cy.xpath(`//*[text()='Pole Nazwa jest wymagane.']`).should('contain.text', 'Pole Nazwa jest wymagane.')    
    }          
    numberOfSeats(a){
        for(let n = 1; n < a; n ++){
            cy.get('[class="k-icon k-i-arrow-60-up"]').eq(0).click()
          }
    }
    negativeNumberOfSeats(a){
        for(let n = 1; n < a; n ++){
            cy.get('[class="k-icon k-i-arrow-60-down"]').eq(0).click()
          }
    }
    priceListErrorMsgCheck(){
        cy.xpath(`//*[text()='Pole Nazwa cennika jest wymagane.']`).should('contain.text', 'Pole Nazwa cennika jest wymagane.')    
    }
    typeDateOfTheTrip(date){
        cy.get('[class="k-picker-wrap k-state-default"]').eq(0).clear().type(date)
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