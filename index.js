function returnFirstTwoDrivers(drivers) {
     return [drivers[0],drivers[1]]
}

function returnLastTwoDrivers(drivers) {
     return [drivers[drivers.length-2],drivers[drivers.length-1]]
}

let selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(multi) {
  return function fareMultiplier(num) {
    return multi*num
  };
}

const fareDoubler= createFareMultiplier(2)

const fareTripler= createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers,fn) {
  return fn(arrayOfDrivers)
}
