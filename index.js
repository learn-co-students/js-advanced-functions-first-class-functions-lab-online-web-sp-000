// Code your solution in this file!

const returnFirstTwoDrivers = function(driversArray) {
    let newArray = []

    newArray.push(driversArray[0],driversArray[1])

    return newArray 
    
   
}


const returnLastTwoDrivers = function(ray) {
    let array = ray.slice(-2)
    return array 
}

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

 const createFareMultiplier  = function(num){
    return function (value){
      return  num * value
    }
 }

 const fareDoubler = createFareMultiplier(2)

 const fareTripler = createFareMultiplier(3)
    
 
   
 const selectDifferentDrivers = function(drivers, whichDrivers ){
    return whichDrivers(drivers)
 }
















    








