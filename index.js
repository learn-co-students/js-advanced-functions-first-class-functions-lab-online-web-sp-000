// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function (value){
        return multiplier * value
    }
}

function fareDoubler(doubleFare) {
    return doubleFare * 2
}

function fareTripler(tripleFare) {
    return tripleFare * 3
}

// function selectDifferentDrivers(arrayOfDrivers, func) {
//     return arrayOfDrivers.slice(0,2) 
//     // return arrayOfDrivers.slice(-2)
// }


const selectDifferentDrivers = function (arrayOfDrivers, func) {
    return func(arrayOfDrivers);
};