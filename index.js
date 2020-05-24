// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2)
}
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2)
}

//selectingDrivers — This is an array containing two elements: the two functions that we previously defined (returnFirstTwoDrivers() and returnLastTwoDrivers()).
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

//createFareMultiplier() — This is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a
//fare for a ride accordingly. If createFareMultiplier() receives an argument of 4, it will return a function that takes in a fare as an
//argument and quadruples the fare.

function createFareMultiplier(i) {
  return function fare(m) {
    return i * m
  }
}

//fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it.
//Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.

const num = createFareMultiplier

function fareDoubler(num) {
  return num * 2
}

//fareTripler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its lone argument and triples it.
function fareTripler(num) {
  return num * 3
}
//selectDifferentDrivers() — This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers()
//function. Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.

function selectDifferentDrivers(array, funct) {
  if (funct === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(array)
  }
    else {
      return returnLastTwoDrivers(array)
    }
}
