const selectingDrivers = [ ]
const returnFirstTwoDrivers = function(driver){
    const newDriver =  driver.slice(0,2)
    return newDriver
}

const returnLastTwoDrivers = function(driver){
    const newDriver =  driver.slice(2)
    return newDriver
}
selectingDrivers.push(returnFirstTwoDrivers)
selectingDrivers.push(returnLastTwoDrivers)


const createFareMultiplier = function(num){
   return function(){
      return num * 5
   }
}

const  fareDoubler = function(num){
   return num * 2
}

const fareTripler = function(num){
    return num * 3
}

const  selectDifferentDrivers = function(drivers, functn){
    return functn(drivers)
}