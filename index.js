// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0,2);
}

function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(num) {
  return function (n) {
      return n * num;
  }
}

function fareDoubler(num) {
  return createFareMultiplier(2)(num);
}

function fareTripler(num) {
  return createFareMultiplier(3)(num);
}

function selectDifferentDrivers(drivers, funct) {
  return funct(drivers);
}

