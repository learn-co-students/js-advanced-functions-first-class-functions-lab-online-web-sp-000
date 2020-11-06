// Code your solution in this file!
function returnFirstTwoDrivers(array) {
  return [array[0], array[1]];
}

function returnLastTwoDrivers(array) {
  return [array[array.length-2], array[array.length-1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplyValue) {
  return function (value) {
    return multiplyValue * value;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const fareQuintupler = createFareMultiplier(4);


function selectDifferentDrivers(array, drivers) {
  return drivers(array)
}
