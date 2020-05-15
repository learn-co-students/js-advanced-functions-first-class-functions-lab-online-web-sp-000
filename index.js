const returnFirstTwoDrivers = function(array){
  let new_array = []
  new_array.push(array[0], array[1])
  return new_array
}

const returnLastTwoDrivers = function(array){
  let new_array = []
  new_array.push(array[array.length-2], array[array.length-1])
  return new_array
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

let createFareMultiplier = function(mult){
  return function(fare){
    return fare * mult
  }
}

const fareDoubler = function(fare){
  return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare){
  return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = function(arrayOfDrivers, fnct){
  return fnct(arrayOfDrivers)
}