// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  return [drivers[0], drivers[1]];
}

const returnLastTwoDrivers = function(drivers){
  const length = drivers.length;
  return [drivers[length - 2], drivers[length - 1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
  return function(fare){
    return fare * multiplier;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returnDriversFn){
  return returnDriversFn(drivers);
}
