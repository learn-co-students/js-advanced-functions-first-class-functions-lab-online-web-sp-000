// Code your solution in this file!

function returnFirstTwoDrivers(drivers){
  return drivers.slice(0,2)
}

function returnLastTwoDrivers(drivers){
  return drivers.slice(-2)
}


let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
  return function(y){return y*int}
}

function fareDoubler(int){
  return int*2
}

function fareTripler(int){
  return int*3
}

function selectDifferentDrivers(array,func){
  return func(array)
}
