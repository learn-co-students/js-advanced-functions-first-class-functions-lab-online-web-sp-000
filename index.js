// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    let firstTwo = [];
    for (let i = 0; i <= 1; i++){
        firstTwo.push(drivers[i]);
    };
    return firstTwo;
}

const returnLastTwoDrivers = function(drivers) {
   let lastTwo =  drivers.slice(-2);

   return lastTwo;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier){
    return function(fare){
        return fare * multiplier;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, pickDrivers){
    return pickDrivers(drivers);
}