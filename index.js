// Code your solution in this file!

function returnFirstTwoDrivers(array) {
    return [array[0], array[1]];
}

function returnLastTwoDrivers(array) {
    return [array[array.length - 2], array[array.length - 1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number) {
    return function(fare) {
        return number * fare
    }
}

function fareDoubler(fare) {
    return createFareMultiplier(2)(fare);
}

function fareTripler(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(arrayOfDrivers, driverFunction) {
    return driverFunction(arrayOfDrivers);
}