// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2, 4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function() {
        return int * int
    }
}

const fareDoubler = function(int) {
    return int + int
}

const fareTripler = function(int) {
    return int * 3
}

function selectDifferentDrivers(drivers, func) {
        return func(drivers)
    }