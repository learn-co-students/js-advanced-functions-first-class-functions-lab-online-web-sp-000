// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){

    return drivers.slice(-2)

}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
  return function( fare){
    return integer * fare
  }
}

const fareDoubler = function(fare){
  return fare * 2
}

const fareTripler = function(fare){
  return fare *3
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
  return returnFirstTwoDrivers(drivers)

}
