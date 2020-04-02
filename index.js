// Code your solution in this file!
    const returnFirstTwoDrivers = function(arr){
       return arr.slice(0,2)
    }


    const returnLastTwoDrivers = function(arr){
        return arr.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(int){
    return function multiply(fare){
      return fare * int
    }    
}


const fareDoubler = createFareMultiplier(2)



function selectDifferentDrivers(arr, func){
    if (func == returnFirstTwoDrivers){
       return returnFirstTwoDrivers(arr)
    }
    else {
       return returnLastTwoDrivers(arr)
    }
}


const fareTripler = createFareMultiplier(3)