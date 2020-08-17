const returnFirstTwoDrivers = function(array) {
    return array.slice(0, 2);
}
const returnLastTwoDrivers = function(array) {
    return array.slice(array.length - 2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(i) {
    return function(mult) {
        return i * mult;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, func) {
    return func(drivers);
}