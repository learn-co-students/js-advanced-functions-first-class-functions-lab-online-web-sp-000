// Code your solution in this file!
const returnFirstTwoDrivers = (a) => {
    return [a[0], a[1]]
}

const returnLastTwoDrivers = (a) =>{
    return a.slice(-2)
}

const selectingDrivers =  [returnFirstTwoDrivers, returnLastTwoDrivers]

 // returns a function that will multiply a fare for a ride accordingly
function createFareMultiplier(a) {
    return function(fare) {
        return fare * a
    }
}

function fareDoubler(fare) {
    return (createFareMultiplier(2)(fare))
}

function fareTripler(fare) {
    return (createFareMultiplier(3)(fare))
}

function selectDifferentDrivers(driversArray, func ) {
    if (func == returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(driversArray)
    } else {
        return returnLastTwoDrivers(driversArray)
    }
}