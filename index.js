// Code your solution in this file!
//   1) should return a new array containing the first two drivers from the passed-in array
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2);
}

//   2) should return an array of the last two drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
}

//   3) has the `returnFirstTwoDrivers` function to as its first element
//   4) has the `returnLastTwoDrivers` function to as its last element
//   5) allows us to invoke either function from the array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//   6) returns a function
//   7) should multiply a given value using the created multiplier
function createFareMultiplier(int) {
  // return a fn that takes in a fare as an arg and quadruples the fare
  return function(fare) {
    return fare * int
  }
}

//   8) Declare a variable with const and assign a fn returned by createFareMultiplier() to it
//   9) doubles fares
const fareDoubler = createFareMultiplier(2);

//   10) is a function + 11) triples fares
const fareTripler = createFareMultiplier(3);

//   12) returns the first 2 drivers when passed returnFirstTwoDrivers() as 2nd arg
//   13) returns the last 2 drivers when passed returnLastTwoDrivers() as 2nd arg
function selectDifferentDrivers(arrayOfDrivers, fnOption) {
  return fnOption(arrayOfDrivers);
};
