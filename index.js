// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
  const newDrivers = drivers.slice(0, 2);
  return newDrivers;
};

const returnLastTwoDrivers = function(drivers) {
  const newDrivers = drivers.slice(-2);
  return newDrivers;
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function (fare) {
    return fare * multiplier;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function(drivers, selectedFunction) {
  return selectedFunction(drivers);
}
