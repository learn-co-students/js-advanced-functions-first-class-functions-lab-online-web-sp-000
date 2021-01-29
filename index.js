// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
  const firstTwoDrivers = drivers.slice(0, 2)
  return firstTwoDrivers
}

const returnLastTwoDrivers = function (drivers) {
  const lastTwoDrivers = drivers.slice(-2)
  return lastTwoDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return multiplier * fare;
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (drivers, secondArgument) {
  return secondArgument(drivers) 
}
