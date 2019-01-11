const returnFirstTwoDrivers = function(drivers) {
  let newDrivers = []
  newDrivers.push(drivers[0], drivers[1])
  return newDrivers
}

const returnLastTwoDrivers = function(drivers) {
  let newDrivers = []
  newDrivers.push(drivers[drivers.length - 2], drivers[drivers.length - 1])
  return newDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
  return function(num) {
    return num * integer
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(array, fun) {
  return fun(array)
}
