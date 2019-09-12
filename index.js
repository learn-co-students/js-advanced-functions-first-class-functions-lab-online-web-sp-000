// Code your solution in this file!

const returnFirstTwoDrivers = function (listOfDrivers) {
  return listOfDrivers.slice(0, 2)
}

const returnLastTwoDrivers = function (listOfDrivers) {
  return listOfDrivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (num) {
  return function (fare) {
    return num * fare
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (listOfDrivers, unknownDrivers) {
  return unknownDrivers(listOfDrivers)
}
