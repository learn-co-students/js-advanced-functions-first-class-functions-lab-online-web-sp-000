const returnFirstTwoDrivers = function(arr){
  return [arr[0], arr[1]]
}

const returnLastTwoDrivers = function(arr){
  return [arr[arr.length - 2], arr[arr.length - 1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

//higher-order function
const createFareMultiplier = function (int) {
  return function (fare) {
    return int * fare
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (array, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(array);
}
