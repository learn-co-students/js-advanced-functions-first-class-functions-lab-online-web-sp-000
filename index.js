// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  let firstTwo = drivers.slice(0, 2);
  return firstTwo;
};

const returnLastTwoDrivers = function (drivers) {
  let lastTwo = drivers.slice(2, 4);
  return lastTwo;
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function (num) {
  return function (int) {
    return num * int;
  };
};

const fareDoubler = function (num) {
  return num * 2;
};

const fareTripler = function (num) {
  return num * 3;
};

function selectDifferentDrivers(drivers, driversFunction) {
  if (driversFunction === returnFirstTwoDrivers)
    return returnFirstTwoDrivers(drivers);
  else {
    return returnLastTwoDrivers(drivers);
  }
}
