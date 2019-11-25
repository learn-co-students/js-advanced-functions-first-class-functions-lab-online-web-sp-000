// Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2)
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function(num) {
        return num * multiplier
    }
}

function fareDoubler(num) {
    return num * 2
}

function fareTripler(num) {
    return num * 3
}

function selectDifferentDrivers(drivers, method) {
    return method(drivers)
}