// Code your solution in this file!

const returnFirstTwoDrivers = function (array){
  return array.slice(0, 2);
}

const returnLastTwoDrivers = function (array){
  return array.slice(array.length-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(n){
  return function(mul){return n*mul;}
}

// equals createFareMultiplier(2)(10)
const fareDoubler = createFareMultiplier(2)

// equals createFareMultiplier(3)(12)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(array, fun){
  return fun(array);
}
