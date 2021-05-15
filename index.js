// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
    const selectedDrivers = arr.slice(0,2)
    return selectedDrivers
    }

const returnLastTwoDrivers = function(arr) {
    const selectedDrivers = arr.slice(-2)
    return selectedDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function(fare) {
        return fare * int
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(arr, func) {
    if (func === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arr);
    }
    else {
        return returnLastTwoDrivers(arr)
    }
}

