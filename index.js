// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return [drivers[0], drivers[1]]
}

const returnLastTwoDrivers = function (drivers) {
  let i = drivers.length - 1;
  return [drivers[i - 1], drivers[i]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(amt = 1) {
  return function(x) {
    return x * amt
  }
}

function fareDoubler(fare = 0) {
  const fareMultiplier = createFareMultiplier(2)

  return fareMultiplier(fare)
}

function fareTripler(fare = 0) {
  const fareMulti = createFareMultiplier(3)

  return fareMulti(fare)
}

function selectDifferentDrivers(arr, func) {
  return func(arr)
}
