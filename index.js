// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
  return [drivers[0], drivers[1]];
}

const returnLastTwoDrivers = function(drivers){
  return [drivers[drivers.length -2], drivers[drivers.length-1]];
}

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplyNum){
  return function(num) {
        return multiplyNum * num;
  };
};

const fareDoubler = createFareMultiplier(2);


const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(drivers, func){
   return func(drivers);
}
