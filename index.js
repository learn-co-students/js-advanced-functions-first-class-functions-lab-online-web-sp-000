// Code your solution in this file!


const returnFirstTwoDrivers = (arrayOfDrivers) =>{
    return arrayOfDrivers.slice(0, 2)
}

const returnLastTwoDrivers = (arrayOfDrivers) =>{
    return arrayOfDrivers.slice(-2)
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


const createFareMultiplier = (multiplier) =>{
    return function(fare){
        return fare * multiplier
    }
}


const fareDoubler = (fare) =>{
    return createFareMultiplier(2)(fare)
}


const fareTripler = (fare) =>{
    return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = (arrayOfDrivers, driver) =>{
    return driver(arrayOfDrivers)
}