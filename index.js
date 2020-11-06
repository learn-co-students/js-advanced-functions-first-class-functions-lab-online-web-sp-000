// Code your solution in this file!
function returnFirstTwoDrivers(array) {
  return [array[0], array[1]];
}

function returnLastTwoDrivers(array) {
  return [array[array.length-2], array[array.length-1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function fareDoubler(fare) {
  return fare * 2;
}
function fareTripler(fare) {
  return fare * 3;
}
function fareQuintupler(fare) {
  return fare * 4;
}

function selectDifferentDrivers(array, drivers) {
  return drivers(array)
}
