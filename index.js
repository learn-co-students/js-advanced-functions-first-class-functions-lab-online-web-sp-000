// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplyFare) {
    return function (fare) {
        return multiplyFare * fare
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const fetchSpecifiedDrivers = function (drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
}