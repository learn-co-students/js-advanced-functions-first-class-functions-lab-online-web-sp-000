// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare){
  let myFunction = function(multiplier){
    return fare * multiplier;
  }
  return myFunction;
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selectDrivers){
  return selectDrivers(drivers);
}