const returnFirstTwoDrivers = function(array) {
    return array.slice(0, 2)
}

const returnLastTwoDrivers = function(array) {
    return array.slice(array.length - 2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier
    }
}

function fareDoubler(fare) {
    return fare * 2
}

function fareTripler(fare) {
    return fare * 3
}

function selectDifferentDrivers(drivers, functionName) {
    return functionName(drivers)
}