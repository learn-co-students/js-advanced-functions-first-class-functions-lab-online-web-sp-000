// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers)  { 
  return drivers.slice(0, 2)
}


const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
  return function(fare) {
    return num * fare;
  }  
}
//createFareMultiplier(4)(1)


function fareDoubler(fare) {
  const x = createFareMultiplier(2)
  return x(fare);
}

function fareTripler(fare) {
  const t = createFareMultiplier(3)
  return t(fare);
}


function selectDifferentDrivers(drivers, fn) {
  return fn(drivers)
}