// Code your solution in this file!
const returnFirstTwoDrivers = function(driverArr) {
    return driverArr.slice(0, 2)
}

const returnLastTwoDrivers = function(driverArr) {
    return driverArr.slice(driverArr.length - 2, driverArr.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier 
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(driverArr, func) {
    return func(driverArr)
}