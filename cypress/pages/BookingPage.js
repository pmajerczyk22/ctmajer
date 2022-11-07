class BookingPage {

    // addNameForPolishTour(){
    //     function randomPolishTourName(){
    //         const polishTours = ["Spływ Dunajcem", "Kraków i Wieliczka", "Szczawnica", "Energylandia", "Magiczny Kraków", "Wadowice Oświęcim" ]
    //         var randomPolishTour = polishTours[Math.floor(Math.random()*polishTours.length)];
    //         return randomPolishTour
    //     }
    //         cy.get('[id="Name"]').type(randomPolishTourName()) 
    //     }

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
                
    numberOfSeats(a){
        for(let n = 1; n < a; n ++){
            cy.get('[class="k-icon k-i-arrow-60-up"]').eq(0).click()
          }
    }

    typeDateOfTheTrip(){
        cy.get('[class="k-picker-wrap k-state-default"]').eq(0).clear().type("2022-11-22")
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

export default new BookingPage();