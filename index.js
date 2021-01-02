// Code your solution in this file!

const returnFirstTwoDrivers = function(array){
    return array.slice(0,2)
}

const returnLastTwoDrivers = function(array){
    return array.slice(Math.max(array.length - 2, 0))
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers ]

const createFareMultiplier = function(multiplier){
    return function(fare){
      return fare * multiplier
    }
}

const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare)
  }

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = function(arrayOfDrivers, aFunction){
    return aFunction(arrayOfDrivers)
}