// Code your solution in this file!
const returnFirstTwoDrivers = function returnFirstTwoDrivers(drivers) {
  return [drivers[0],drivers[1]]
}

const returnLastTwoDrivers = function returnLastTwoDrivers(drivers) {
  return [drivers[drivers.length-2],drivers[drivers.length-1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
  return function (value) {
    return multiplier * value
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function fetchSpecifiedDrivers(array, driverSelector) {
  return driverSelector(array)
}
