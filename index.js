// Code your solution in this file!

const returnFirstTwoDrivers = function(array) {
    return array.slice(0, 2);
};

const returnLastTwoDrivers = function(array) {
    return array.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    return function(fare) {return fare * num};
};

function fareDoubler(fare) {return fare * 2;};

function fareTripler(fare) {return fare * 3;};

function selectDifferentDrivers(array, action) {
    return action(array);
};