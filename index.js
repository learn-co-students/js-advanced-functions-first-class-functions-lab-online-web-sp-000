// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};


const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [
  returnFirstTwoDrivers, returnLastTwoDrivers
];

function fareDoubler(fare) {
  return fare * 2;
};

function fareTripler(fare) {
  return fare *3;
};

const createFareMultiplier = function (multiplier) {
  return function fare(num) {
    return num * multiplier;
  };
};

const fetchSpecifiedDrivers = function (drivers, returnFunction) {
  return returnFunction(drivers);
};
