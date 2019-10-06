// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
  const firstTwo = function(drivers) {
    return drivers.slice(0, 2);
  };
  return firstTwo(drivers);
}

function returnLastTwoDrivers(drivers) {
  const lastTwo = function(drivers) {
    return drivers.slice(-2);
  };
  return lastTwo(drivers);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number) {
  return function(fare) {
    return fare * number;
  };
}

function fareDoubler(fare) {
  const doubleFare = createFareMultiplier(2);
  return doubleFare(fare);
}

function fareTripler(fare) {
  const tripleFare = createFareMultiplier(3);
  return tripleFare(fare);
}

function selectDifferentDrivers(drivers, fn) {
  return fn(drivers);
}
