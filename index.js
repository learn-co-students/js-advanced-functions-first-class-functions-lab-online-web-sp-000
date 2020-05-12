// Code your solution in this file!
function returnFirstTwoDrivers(array) {
    return array.slice(0,2)
}

function returnLastTwoDrivers(array) {
    return array.slice(array.length-2, array.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number) {
    return function (fare) {
        return number * fare
    }
}

function fareDoubler(fare) {
    return createFareMultiplier(2)(fare)
}

function fareTripler(fare) {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(drivers, func) {
    return func(drivers)
}