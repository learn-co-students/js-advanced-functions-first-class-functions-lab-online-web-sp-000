// Code your solution in this file!
const returnFirstTwoDrivers = function (arr) {
  const newArr = [];
  newArr[0] = arr[0];
  newArr[1] = arr[1];
  return newArr
}

const returnLastTwoDrivers = function (arr) {
  const newArr = []
  newArr[1] = arr[arr.length-1]
  newArr[0] = arr[arr.length-2]
  return newArr
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(int) {
  return function (fare){ return fare * int}
}

function fareDoubler(fare) {
  const hello = createFareMultiplier(2)
  return hello(fare)
}

function fareTripler(fare){
  const goodbye = createFareMultiplier(3)
  return goodbye(fare)
}

function selectDifferentDrivers(arr, func){
  return func(arr)
}
