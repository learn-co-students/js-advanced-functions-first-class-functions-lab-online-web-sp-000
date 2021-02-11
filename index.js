// Code your solution in this file!
const returnFirstTwoDrivers= function(arr) {
   const result = [];
   result.push(arr[0]);
   result.push(arr[1]);
   return result
}

const returnLastTwoDrivers= function(arr) {
    const result = [];
    result.push(arr[arr.length - 2]);
    result.push(arr[arr.length - 1]);
    return result
 }

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

 function createFareMultiplier(times) {
    return function(value) {
        return times * value
    }
 }
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, func) {
   if (func === returnFirstTwoDrivers) {
       return returnFirstTwoDrivers(arrayOfDrivers);
   } else {
       return returnLastTwoDrivers(arrayOfDrivers);
   }
}