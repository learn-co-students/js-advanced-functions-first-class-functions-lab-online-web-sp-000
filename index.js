// Code your solution in this file!

const returnFirstTwoDrivers = (arr) => {
  let newArr = [];
  newArr.push(arr[0]);
  newArr.push(arr[1]);
  return newArr; 
}

const returnLastTwoDrivers = (arr) => {
  let newArr = arr.slice(-2); 
  return newArr; 
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (int) => {
  return function(fare) {
    return fare * int; 
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, func) => {
  return func(drivers); 
}