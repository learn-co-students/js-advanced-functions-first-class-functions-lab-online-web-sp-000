// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
  return array.slice(0,2);
}

const returnLastTwoDrivers = function(array) {
  return array.slice((array.length - 2), array.length);
}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers,
]

function createFareMultiplier(num) {
  return function() {return (num * num)} ;
}

function fareDoubler(num) {
  const mult = (createFareMultiplier(num)()/num) + num ;
  return mult
}

function fareTripler(num) {
  const mult = (createFareMultiplier(num)()/num) + (2 * num) ;
  return mult
}

function fetchSpecifiedDrivers(array, funct) {
  return funct(array);
}
