// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(drivers.length - 2, drivers.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function (fare) { return multiplier * fare; };
}

const fareDoubler = function (fare) {
  return createFareMultiplier(2)(fare);
}

const fareTripler = function (fare) {
  return createFareMultiplier(3)(fare);
}

function fetchSpecifiedDrivers(drivers, selectedFunction) {
  return selectedFunction(drivers);
}

// Completed lab as part of Version 7.  I either worked on my copy of the master or the
// "Fork This Lab" element isn't working.
