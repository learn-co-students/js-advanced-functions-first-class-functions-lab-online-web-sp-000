const returnFirstTwoDrivers = function(arrayOfDrivers) {return [arrayOfDrivers[0], arrayOfDrivers[1]]};

const returnLastTwoDrivers = function(arrayOfDrivers) {return [arrayOfDrivers[arrayOfDrivers.length -2], arrayOfDrivers[arrayOfDrivers.length -1]]};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
  return function fareMultiplier(num) {
    return num * fare 
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, driverFunction) {
  return driverFunction(arrayOfDrivers)
}