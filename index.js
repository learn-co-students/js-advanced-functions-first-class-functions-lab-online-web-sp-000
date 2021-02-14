// Code your solution in this file!


  function returnFirstTwoDrivers(array) {
    const newArray = [ array[0], array[1] ]  
    return newArray
  }

  function returnLastTwoDrivers(array) {
    const newArray = [ array[array.length-2], array[array.length-1]]  
    return newArray
  }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(rate) {
    return function(fare) { return fare * rate }

    };


const  fareDoubler = createFareMultiplier(2);
const  fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(array, someFunctionX) {
    return someFunctionX(array)
};

