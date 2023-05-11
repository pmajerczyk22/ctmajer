export const TOURS_SELECTORS = {
    name: '#Name',
    nameErr: '#Name-error',
    priceList: "#PriceListId",
    priceListErr:'#PriceListId-error',
    addTourBtn: '#add-tour-button',
    addTripBtn:'[class="btn h-button btn-primary"]', //eq(2) //tutaj mamy problem co do selecta 
    defaultStartPlace: '#StartPlaces_0__Definition',
    departureTime: '#StartPlaces_0__DepartureTime',
    dateMsgErr: '[class="validation-summary-errors"]',
    seatsArrowUp: '[class="k-icon k-i-arrow-60-up"]',
    seatsArrowDown: '[class="k-icon k-i-arrow-60-down"]',
    typeOfTour: '#Type',
    dateOfTour: '[class="k-picker-wrap k-state-default"]',
    tourAdded: 'td',
    tourDeleted: '[class="glyphicon glyphicon-remove"]'
   
}

