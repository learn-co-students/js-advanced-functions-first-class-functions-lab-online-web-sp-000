const returnFirstTwoDrivers = function(drivers){
    let newArray = [];
    newArray.push(drivers[0], drivers[1]);
    return newArray;
}

const returnLastTwoDrivers = function(drivers){
    let newArray = [];
    newArray.push(drivers[drivers.length - 2], drivers[drivers.length - 1]);
    return newArray;
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(n){
    return function multiplyByN(int){
        return (int * n);
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, returnFirstTwoDrivers, returnLastTwoDrivers){
    return returnFirstTwoDrivers(drivers)
}
