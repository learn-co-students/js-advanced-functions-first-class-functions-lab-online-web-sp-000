// Code your solution in this file!
const returnFirstTwoDrivers = function(driver){
  return driver.slice(0, 2);
};

const returnLastTwoDrivers = function(driver){
  return driver.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
  return function(fare){
    return fare*int;
  };
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(drivers, selectingDrivers){
  return selectingDrivers(drivers);
}