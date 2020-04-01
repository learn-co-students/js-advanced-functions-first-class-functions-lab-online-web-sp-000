const returnFirstTwoDrivers = function(drivers) {
  return (drivers.slice(0, 2));
};

const returnLastTwoDrivers = (function(drivers) {
  const array = [];
  array.push(drivers[drivers.length - 2])
  array.push(drivers[drivers.length - 1])
  return array;
})

const selectingDrivers = []
  selectingDrivers.push(returnFirstTwoDrivers);
  selectingDrivers.push(returnLastTwoDrivers);

function createFareMultiplier(multiplier) {
  let fareFunction = function(fare) {
    return( fare * multiplier)
  }
  return fareFunction
}

function fareDoubler(fare) {
  return(fare * 2)
}

function fareTripler(fare) {
  return fare + fareDoubler(fare)
}

function selectDifferentDrivers(arrayOfDrivers, fn) {

  if(fn === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers)
  } else {
    return returnLastTwoDrivers(arrayOfDrivers)
  }

}
