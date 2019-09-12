// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  }

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

  const createFareMultiplier = function (x) {
    return function (result) {
      return result * x
    };
  }

  const fareDoubler = createFareMultiplier(2);

  const fareTripler = createFareMultiplier(3);

  const selectDifferentDrivers = function (driivers, chooseDriver) {
    return chooseDriver(driivers);
  }
