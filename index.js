// Code your solution in this file!
function returnFirstTwoDrivers(arr) {
  return arr.slice(0,2);
}

function returnLastTwoDrivers(arr) {
  return arr.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier) {
  return function(value) {
    return multiplier * value;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(array, fx) {
  return fx(array)
}
