// Code your solution in this file!

const returnFirstTwoDrivers = function(driversArray) {
  return driversArray.slice(0, 2)
};

const returnLastTwoDrivers = function(driversArray) {
  return driversArray.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
  return function(fare) {
    return fare * integer
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function fetchSpecifiedDrivers(driversArray, returnFunction) {
  return returnFunction(driversArray)
}