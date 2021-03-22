// Code your solution in this file!
const returnFirstTwoDrivers = function (divers) {
    return [divers[0], divers[1]]
}
const returnLastTwoDrivers = function (divers) {
    return [divers[divers.length - 2], divers[divers.length - 1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    if (num === 4) {
        return function (fare) {
            return 4*fare;
        }
    }
    else
    {
        return function (fare) {
            return num*fare;
        }
    }
}

const fareDoubler = function (fare) {
    return createFareMultiplier(2)(fare)
}

const fareTripler = function (fare) {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers (divers, fn) {
    return fn(divers);
}