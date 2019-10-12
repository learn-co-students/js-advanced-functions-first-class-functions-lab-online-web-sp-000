const returnFirstTwoDrivers = function (driversArr) {
  return driversArr.slice(0, 2)
}

const returnLastTwoDrivers = function (driversArr) {
  return driversArr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
  return function (fare) {
    return fare * int;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driversArr, func) {
  return func(driversArr);
}