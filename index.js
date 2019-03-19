// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
  let first = array.slice(0,2)
  return first;
}

const returnLastTwoDrivers = function(array){
  let first = array.slice(-2)
  return first;
}

const selectingDrivers =  [ returnFirstTwoDrivers, returnLastTwoDrivers ];

const createFareMultiplier = function(fare){
  return function (value) {
    return fare * value;
  };
};


const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


function fetchSpecifiedDrivers(array, func) {
 return func(array);
}