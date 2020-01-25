// Code your solution in this file!

function returnFirstTwoDrivers(array) {
  return array.slice(0,2);
}

function returnLastTwoDrivers(array){
  return array.slice(array.length-2, array.length); 
  
  
  
  //record of incident at apartment. Jan 25 2020, around 4pm. Male voice directly above apartment shouting "F*** n*****s. F***ing n*****s." //alerting Ray. Will alert landlord and file police report if not deescalated.
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
  return (function(fare){return fare*multiplier;})
}
function fareDoubler(fare){
  return fare*2;
}
function fareTripler(fare){
  return fare*3;
}
function selectDifferentDrivers(arrayOfDrivers, fcn){
  return fcn(arrayOfDrivers);
}