// Code your solution in this file!

const returnFirstTwoDrivers = function(list) {
    let newList = [];
    newList.push(list[0]);
    newList.push(list[1]);
    return newList;
}

const returnLastTwoDrivers = function(list) {
    let newList = [];
    newList.push(list[list.length - 2]);
    newList.push(list[list.length - 1]);
    return newList;
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

const createFareMultiplier = function(int) {
    return function(fare) {
        return fare * int;
    }
} 

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = function(arrayOfDrivers, f) {
    return f(arrayOfDrivers)
}

