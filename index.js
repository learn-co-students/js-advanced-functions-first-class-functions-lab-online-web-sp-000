// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(drivers.length - 2);
}

const selectingDrivers = [returnFirstTwoDrivers,
 returnLastTwoDrivers];

const createFareMultiplier = function(multi) {
  return function(fare) {
    return multi * fare;
  }
}

const fareDoubler = function(fare) {
  return fare * 2;
}

const fareTripler = function(fare) {
  return fare * 3;
}

const selectDifferentDrivers = function(arrayOfDrivers, funk) {
  if (funk === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers)
  } else {
    return returnLastTwoDrivers(arrayOfDrivers)
  }
}
