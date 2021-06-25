// Code your solution in this file!
const returnFirstTwoDrivers = function(driverArr) {
    return [driverArr[0], driverArr[1]];
};

const returnLastTwoDrivers = function(driverArr) {
    return [driverArr[driverArr.length - 2], driverArr[driverArr.length -1]];
};

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];

function createFareMultiplier(multiplier) {
    return function(fare) { 
        return multiplier * fare; 
    };
};

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
};

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
};

function selectDifferentDrivers(driverArr, driverFunc) {
    return driverFunc(driverArr);
}