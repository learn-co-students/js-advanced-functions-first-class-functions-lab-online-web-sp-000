// Code your solution in this file!

function returnFirstTwoDrivers(array) {
    const variable = function() {
        return (array.slice(0,2))
    }
    return variable(array)
}

function returnLastTwoDrivers(array) {
    const variable = function() {
        return (array.slice(array.length-2))
    }
    return variable(array)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function(fare){
        return fare*multiplier
    }
}

const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(driversArray, selectFunction) {
    return selectFunction(driversArray)
}