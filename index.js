// Code your solution in this file!

let returnFirstTwoDrivers = function(array) {
  return array.slice(0,2);
}

let returnLastTwoDrivers = function(array) {
  return array.slice(-2)
}

  
let selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

let createFareMultiplier = function(int) {
  return function(value) { 
    return (int * value)
  };
};

 const fareDoubler = createFareMultiplier(2);
 
 const fareTripler = createFareMultiplier(3);
 
  const selectDifferentDrivers = function (drivers, choseDrivers) {
    return choseDrivers(drivers);
  };

  
