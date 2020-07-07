const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2) // Use the slice method to return an array of the first 2 elements, from 0 to 2.
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2) // We then use the method with negative 2 to return the last 2 elements.
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] // Simply set our var equal to an array with our previously defined variables.

function createFareMultiplier(int){ // Acceptings the rate we want to multiply by...
    return function(fare) { // Returns a function that accepts a fare...
        return fare * int // ...and multiplies it by the 'int' passed in.
    }
}

const fareDoubler = function(fare){ // Takes in our submitted fare value...
    return createFareMultiplier(2)(fare) // ...and plugs it into our previously defined function to double it.
}

const fareTripler = function(fare){ // Same process here but we multiply by '3', hence the idea of tripling
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(drivers, driverFunction){
    return driverFunction(drivers)
}
