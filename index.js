// Code your solution in this file!

const returnFirstTwoDrivers = function(list) {
    return list.slice(0,2);
}

const returnLastTwoDrivers = function(list) {
    return list.slice(list.length-2, list.length);
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function createFareMultiplier(multiplier) {
    let innerFunction = function(fare){
        return multiplier * fare;
    };
    return innerFunction;
}

function fareDoubler(fare) {
    return createFareMultiplier(2)(fare);
}

function fareTripler(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(driverArray, fn) {
    return fn(driverArray);
}