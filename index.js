// Code your solution in this file!
const returnFirstTwoDrivers = function(funcArray){
  return [funcArray[0], funcArray[1]];
}
const returnLastTwoDrivers = function(funcArray){
  return [funcArray[funcArray.length-2], funcArray[funcArray.length-1]];
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(fare){
  return function(multiplier){
    return multiplier*fare;
  }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(funcArray, selectorfunction)
{
  return selectorfunction(funcArray)
}
