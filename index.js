const returnFirstTwoDrivers = function(driversArray) {
    return driversArray.slice(0,2);
}

const returnLastTwoDrivers = function(driversArray) {
    return driversArray.slice(driversArray.length - 2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(integer) {
    return function(fare) {
        return (fare * integer)
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = function(driversArray, chosenFunction) {
    return chosenFunction(driversArray)
}