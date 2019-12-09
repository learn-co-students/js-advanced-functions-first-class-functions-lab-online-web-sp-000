var returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0,2);
};

var returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2);
};

var selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

var createFareMultiplier = function(multi){
  return function(value){
    return multi*value;
  };
};

var fareDoubler = createFareMultiplier(2);

var fareTripler = createFareMultiplier(3);

var selectDifferentDrivers = function(drivers, someDrivers){
  return someDrivers(drivers);
};
