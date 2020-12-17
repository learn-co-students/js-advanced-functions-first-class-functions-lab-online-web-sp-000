// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
function returnFirstTwoDrivers(drivers){
    let first = function(guys){
       return [`${guys[0]}`, `${guys[1]}`]
        
   }
   return first(drivers)
}

function returnLastTwoDrivers(drivers){
    let first = function(guys){
       return [`${guys[guys.length-2]}`, `${guys[guys.length-1]}`]
        
   }
   return first(drivers)
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
    return function(fare){
        return (fare * num)
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, func){
    return func(drivers)
} 