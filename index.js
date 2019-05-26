const returnFirstTwoDrivers = function(drivers) {
  const newDrivers = [];
  newDrivers.push(drivers[0]);
  newDrivers.push(drivers[1]);
  return newDrivers;
}

const returnLastTwoDrivers = function(drivers) {
  const newDrivers = [];
  newDrivers.push(drivers[drivers.length -2]);
  newDrivers.push(drivers[drivers.length -1]);
  return newDrivers;
}


selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number) {
   fareCharge = function(fare) {return fare * number};
   return fareCharge;
}

function fareDoubler(fare) {
  const doubleFare = createFareMultiplier(fare);
  return doubleFare(2);
}

function fareTripler(fare) {
  const tripleFare = createFareMultiplier(fare);
  return tripleFare(3);
}

function fetchSpecifiedDrivers(drivers, callback) {
  return callback(drivers);
}
