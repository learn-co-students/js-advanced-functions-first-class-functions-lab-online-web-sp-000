// Code your solution in this file!
 const returnFirstTwoDrivers = (array) => array.slice(0, 2)

 const returnLastTwoDrivers = (array) => array.slice(-2)

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

 const createFareMultiplier = function(integer) {
    return function(fare) {
        return fare * integer
    }
 }

 const fareDoubler = createFareMultiplier(2)

 const fareTripler = createFareMultiplier(3)

 const selectDifferentDrivers = (array, driverFunction) => driverFunction(array)