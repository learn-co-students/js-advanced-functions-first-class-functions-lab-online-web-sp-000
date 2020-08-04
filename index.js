// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
    return arr.slice(0, 2);
}

const returnLastTwoDrivers = function(arr) {
    return arr.slice(arr.length-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return function(fare) {
        return fare * int;
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(arr, func) {
    return func(arr)
}