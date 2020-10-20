// Code your solution in this file!
const returnFirstTwoDrivers = function(driversArray) {
    return driversArray.slice(0, 2);
}

const returnLastTwoDrivers = function(driversArray) {
    return driversArray.slice(driversArray.length - 2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(integer) {
    return function (value) {
        return value * integer
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(array, fn) {
    return fn(array);
}