// Code your solution in this file!

const returnFirstTwoDrivers = function(arrayofdrivers) {
    return arrayofdrivers.slice(0,2);
};

const returnLastTwoDrivers = function(arrayofdrivers) {
    return arrayofdrivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(fare) {
    return function(ride) {
        return fare * ride;
    }
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(arrayofdrivers, theOtherFunction) {
    return theOtherFunction(arrayofdrivers);
};