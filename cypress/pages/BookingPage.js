class bookingPage {

    addNameForTour(name,priceList){  
            cy.get('[id="Name"]').type(name) 
            cy.get('[id="PriceListId"]').select(priceList)
        }
    addTourButtonClick(){
            cy.get('[id="add-tour-button"]').click()
        }   
    addTheTour(){
        cy.get('[class="btn h-button btn-primary"]').eq(2).click()
        }    
    defaultStartingPlace(){
        cy.get('[id="StartPlaces_0__Definition"]').select("Istniejący")
        cy.get('[id="StartPlaces_0__DepartureTime"]').clear().type("9:00")
        }
    nameFieldErrorMessageCheck(){
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
    priceListErrorMessageCheck(){
        cy.xpath(`//*[text()='Pole Nazwa cennika jest wymagane.']`).should('contain.text', 'Pole Nazwa cennika jest wymagane.')    
    }
    typeDateOfTheTrip(date){
        cy.get('[class="k-picker-wrap k-state-default"]').eq(0).clear().type(date)
    }
    typeOfTour(tour){
        if(tour == "polishTour"){
            cy.get('[id="Type"]').select("0")
        }
        if(tour == "foreignTour"){
            cy.get('[id="Type"]').select("1")
        }
    }
}
export default new bookingPage();