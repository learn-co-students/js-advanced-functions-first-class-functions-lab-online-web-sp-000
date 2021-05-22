// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
    const [first, second] = array;
    let firstTwo = [first, second];
    return firstTwo;
}

const returnLastTwoDrivers = function(array) {
    let i = array.length;
    let lastTwo = [array[i - 2], array[i - 1]];
    return lastTwo;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return function(fare) {
        return fare * int;
    }
}

function fareDoubler(fare) {
    const double = createFareMultiplier;
    return double(2)(fare);
}

function fareTripler(fare) {
    const triple = createFareMultiplier;
    return triple(3)(fare);
}

function selectDifferentDrivers(drivers, func) {
    return func(drivers);
}