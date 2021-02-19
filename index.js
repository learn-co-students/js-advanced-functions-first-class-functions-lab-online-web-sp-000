// Code your solution in this file!

const returnFirstTwoDrivers = function(array) {
    let newArray = [array[0], array[1]]
    return newArray
}


const returnLastTwoDrivers = function(array) {
    let newArray = array.slice(-2)
    return newArray
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return function(fare){
        let total = fare*multiplier
        return total
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(driversArray, driverFn) {
    return driverFn(driversArray)
}
