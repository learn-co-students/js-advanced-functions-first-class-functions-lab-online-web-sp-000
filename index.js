// Code your solution in this file!
const returnFirstTwoDrivers = function(anArray){
    return anArray.slice(0, 2)
//   return [anArray[0], anArray[1]]
}

const returnLastTwoDrivers = function(anArray){
    return anArray.slice(-2)
//   return [anArray[anArray.length - 1], anArray[anArray.length - 2]]
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] 

function createFareMultiplier(multiplyBy, fare){
    return function(fare){ return fare*multiplyBy}
//   return  multiplyBy * fare
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers( array, driverFunction){
  return driverFunction(array)
}


