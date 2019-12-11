// Code your solution in this file!

const returnFirstTwoDrivers = (array) => {
  return [array[0], array[1]];
};

const returnLastTwoDrivers = (array) => {
  return [array[array.length - 2], array[array.length - 1]];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (integer) => {
  return fare => {
    return integer * fare
  };
};

const fareDoubler = (fare) => {
  return createFareMultiplier(2)(fare);
};

const fareTripler = (fare) => {
  return createFareMultiplier(3)(fare);
}


const selectDifferentDrivers = (arrayOfDrivers, fn) => {
  return fn(arrayOfDrivers);
};
