// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
    let newArray = [];
    newArray.push(array[0], array[1]);
    return newArray;
}

const returnLastTwoDrivers = function(array) {
    let lastTwoArray = [];
    lastTwoArray = array.slice(-2);
    return lastTwoArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return function(fare) {
        return fare * int
    };
}

const fareDoubler = createFareMultiplier(2); 

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, f){
    return f(arrayOfDrivers);
}