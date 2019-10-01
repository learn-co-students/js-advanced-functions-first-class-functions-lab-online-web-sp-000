// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
<<<<<<< HEAD
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

const createFareMultiplier = function (integer) {
  return function (fare) {
  return integer * fare
  };
};

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (drivers, whichDrivers) {
  return whichDrivers(drivers);
=======
  return drivers.slice(0, 1);
>>>>>>> 3d5501c945d106d1e888556efd8294472284fa9f
};
