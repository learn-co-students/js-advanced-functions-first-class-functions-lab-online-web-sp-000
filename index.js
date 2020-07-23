// Code your solution in this file!
const returnFirstTwoDrivers = function(driversArray) {
        return driversArray.slice(0,2)
    }

const returnLastTwoDrivers = function(lastDriversArray) {
    return lastDriversArray.slice(lastDriversArray.length - 2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(n) {
    return function(fare) {
        return (fare * n)
    }
}

const fareDoubler = function(fare) {
    return (fare * 2)
}

const fareTripler = function(fare) {
    return (fare * 3)
}

const selectDifferentDrivers = function(arrayOfDrivers, chosenFunction) {
    return chosenFunction(arrayOfDrivers)
}