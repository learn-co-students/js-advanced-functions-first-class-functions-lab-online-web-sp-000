const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function returnFirstTwoDrivers() {
  const firstTwo = function(drivers) {
    return drivers.slice(0, 2);
  }
  return firstTwo(drivers);
}

function returnLastTwoDrivers() {
  const lastTwo = function(drivers) {
    return drivers.slice(-2)
  }
  return lastTwo(drivers);
}

function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  }
}

const fareDoubler = function(fare) {
  return fare * 2;
}

const fareTripler = function(fare) {
  return fare * 3;
}

function selectDifferentDrivers(drivers, func) {
  return func(drivers);
}
