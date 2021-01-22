const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };


  const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function(multiply) {
    return function (value) {
        return multiply * value
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


const selectDifferentDrivers = function(drivers, whatDrivers) {
    return whatDrivers(drivers)
};
// This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() 
// or returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() 
// will return either the first two drivers or the last two drivers.

