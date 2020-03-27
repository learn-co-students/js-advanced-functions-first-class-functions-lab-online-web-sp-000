// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
    return [array[0], array[1]]
};

const returnLastTwoDrivers = function(array) {
    return array.slice(-2)
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const createFareMultiplier = function(int) {
    return (function(fare) {
        return fare * int;
    });
};

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare)
};

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare)
};

const selectDifferentDrivers = function(array, fn) {
    return fn(array);
};