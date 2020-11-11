// Code your solution in this file!
const returnFirstTwoDrivers = function(a){
    return (a.slice(0, 2))
}

const returnLastTwoDrivers = function(a){
    return a.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers ]

const createFareMultiplier = function(a){
    return function(b){
       return  a * b
    }  
 }

 const fareDoubler = createFareMultiplier(2)

 const fareTripler = createFareMultiplier(3)

 const selectDifferentDrivers = function (drivers, moreDrivers) {
    return moreDrivers(drivers);
  }

 


