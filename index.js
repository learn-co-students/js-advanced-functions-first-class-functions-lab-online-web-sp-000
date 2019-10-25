function returnFirstTwoDrivers(array) {
  return array.slice(0,2);
}

function returnLastTwoDrivers(array) {
  return array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiple) {
  return function(value) {
    return multiple * value;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(array, driverFn) {
  return driverFn(array)
};