export const TOURS_SELECTORS = {
    name: '#Name',
    priceList: "#PriceListId",
    addTourBtn: '#add-tour-button',
    addTripBtn:'[class="btn h-button btn-primary"]', //eq(2) //tutaj mamy problem co do selecta 
    defaultStartPlace: '#StartPlaces_0__Definition',
    departureTime: '#StartPlaces_0__DepartureTime',
    dateMsgErr: `//*[text()='Data początku wycieczki musi być późniejsza niż wczoraj']`, //xpathy też władowałem do pliku z selektroami
    seatsArrowUp: '[class="k-icon k-i-arrow-60-up"]',
    seatsArrowDown: '[class="k-icon k-i-arrow-60-down"]',
    typeOfTour: '#Type',
    dateOfTour: '[class="k-picker-wrap k-state-default"]'
    
}

