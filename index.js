// Code your solution in this file!
const returnFirstTwoDrivers = function (arg){
    return arg.slice(0,2)    
}
const returnLastTwoDrivers = function (arg){
    return arg.slice(arg.length-2)    
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = function (factor) {
    return function(fare) {
        return (fare * factor)
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, fx){
    return fx(arrayOfDrivers)    
}
