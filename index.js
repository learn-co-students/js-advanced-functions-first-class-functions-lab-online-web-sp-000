// Code your solution in this file!

//declare variable const (returnFirstTwoDrivers) assigned to
//anonymous fucntion: function(arr)
//assigned function accepts array of drivers as an arg
//returns first two drivers in the array 
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

  //array w two elements 
  //two functions that were previously defined 
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

  function createFareMultiplier(int) {
    return function (fare){ return fare * int}
  }

  function fareDoubler(fare) {
    const cost = createFareMultiplier(2)
    return cost(fare)
  }
  
  function fareTripler(fare){
    const cost2 = createFareMultiplier(3)
    return cost2(fare)
  }
  
  //will return either first two drivers or last two drivers
  function selectDifferentDrivers(arr, func){
    return func(arr)
  }