// Code your solution in this file!
function returnFirstTwoDrivers (drivers) {
  const anon = function (drivers) {
    return drivers.slice(0,2);
  };
  return anon(drivers);
};

function returnLastTwoDrivers (drivers) {
  const anon = function (drivers) {
    return drivers.slice(-2);
  };
  return anon(drivers);
};

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
];

function createFareMultiplier(value) {
    return function(fare) {
    return value * fare;
  };
};

function fareDoubler(fare) {
  const double = createFareMultiplier(2);
  return double(fare);
};

function fareTripler(fare) {
  return createFareMultiplier(3)(fare);
};

function selectDifferentDrivers(drivers, option) {
  return option(drivers);
};
