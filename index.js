// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  let twoDrivers = [];
  twoDrivers.push(drivers[0]);
  twoDrivers.push(drivers[1]);
  return twoDrivers;
};

const returnLastTwoDrivers = function(drivers) {
  let twoDrivers = [];
  twoDrivers.push(drivers[drivers.length - 2]);
  twoDrivers.push(drivers[drivers.length - 1]);
  return twoDrivers;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(number1) {
  return function multiplyFair(number2){
    return number1 * number2;
  }
}


const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, task){
  for(let i = 0; i < selectingDrivers.length; i++){
    if(selectingDrivers[i] === task){
      return selectingDrivers[i](drivers);
    }
  }
}

