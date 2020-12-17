// Code your solution in this file!
function returnFirstTwoDrivers(array) {
    const first = function() {
        return [array[0], array[1]]
    }
    return first(array)
}

function returnLastTwoDrivers(array) {
    const last = function() {
        return [array[array.length - 2], array[array.length - 1]]
    }
    return last(array)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare, rate = fare) {
    return function() {
        return fare * rate
    }
}

function fareDoubler(fare) {
    const func = createFareMultiplier(fare, 2)
    return func(fare)
}

function fareTripler(fare) {
    const func = createFareMultiplier(fare, 3)
    return func(fare)
}

function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers)
}