// Code your solution in this file!
function returnFirstTwoDrivers(arr) {
  return [arr[0], arr[1]]
}

function returnLastTwoDrivers(arr) {
  return [arr[arr.length - 2], arr[arr.length - 1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
  return function(fare) {
    return integer * fare
  }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, func) {
  return func(arrayOfDrivers);
}