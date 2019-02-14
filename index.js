// Code your solution in this file!
const returnFirstTwoDrivers = function(divers) {
  return divers.slice(0,2);
};

const returnLastTwoDrivers = function(divers) {
  return divers.slice(-2);
};

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(drivers, cb) {
  return cb(drivers);
}
