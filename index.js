const returnFirstTwoDrivers = function(arr){
    return arr.slice(0,2)  
}

const returnLastTwoDrivers = function(arr){
    return arr.slice((arr.length-2), arr.length)  
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplyValue) {
    return function (value) {
      return multiplyValue * value;
    };
  };

  const fareDoubler = createFareMultiplier(2);

  const fareTripler = createFareMultiplier(3);
  
  const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
  };