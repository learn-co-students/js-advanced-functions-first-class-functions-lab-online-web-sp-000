const returnFirstTwoDrivers = function(arrayOfDrivers) {
  return arrayOfDrivers.slice(0, 2);
}

const returnLastTwoDrivers = function(arrayOfDrivers) {
  return arrayOfDrivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function(num) {
    return num * multiplier
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, action) {
  return action(arrayOfDrivers);
}
