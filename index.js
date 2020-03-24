const returnFirstTwoDrivers = function(array){
  return array.slice(0,2);
}

const returnLastTwoDrivers = function(a) {
  return a.slice(Math.max(a.length - 2))
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
  return function(fare) {
    return integer * fare
  }
}

const fareDoubler = function(fare){
  return fare * 2
}

const fareTripler = function(fare){
  return fare * 3
}

function selectDifferentDrivers(array, returnDrivers) {
  return returnDrivers(array)
}
