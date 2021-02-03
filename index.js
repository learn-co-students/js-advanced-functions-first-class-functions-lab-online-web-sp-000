const returnFirstTwoDrivers = function(drivas){
    return drivas.slice(0, 2)
}
const returnLastTwoDrivers = function(drivas){
    return drivas.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(epicInt){
    return function(fare){
        return fare * epicInt
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(driverArray, eitherDriver){
    return eitherDriver(driverArray)
}