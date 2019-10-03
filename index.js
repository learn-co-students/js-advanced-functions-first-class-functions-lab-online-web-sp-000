const returnFirstTwoDrivers = function (array) {
    return array.slice(0, 2)
}


const returnLastTwoDrivers = function(driversArray) {
  return driversArray.slice(-2);
}

// const returnLastTwoDrivers = function (array) {
//   return array.slice(array.length -2);
// }


let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


let createFareMultiplier = function (integer) {
  return function (fare) {
    return fare * integer
  }
}


const fareDoubler = createFareMultiplier(2);


const fareTripler = createFareMultiplier(3);


function fetchSpecifiedDrivers(arrayOfDrivers, specifiedFunction) {
  return specifiedFunction(arrayOfDrivers);
}

// let fetchSpecifiedDrivers = function(arrayOfDrivers, specifiedFunction) {
//   if (specifiedFunction === returnFirstTwoDrivers) {
//     return returnFirstTwoDrivers(arrayOfDrivers)
//   }
//   if (specifiedFunction === returnLastTwoDrivers) {
//     return returnLastTwoDrivers(arrayOfDrivers)
//   }
// }