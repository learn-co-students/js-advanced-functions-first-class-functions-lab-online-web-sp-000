// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  let newDrivers = [];
    for (let i=0; i<2; i++){
      newDrivers.push(drivers[i]);
    }
    return newDrivers;
  }

  const returnLastTwoDrivers = function(drivers){
    let newDrivers = [];
        newDrivers.push(drivers[drivers.length - 2]);
        newDrivers.push(drivers[drivers.length - 1]);
      return newDrivers;
    }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer){
  return function(fare){
  let result = fare * integer;
  return result;
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
  return returnFirstTwoDrivers(drivers);
}
