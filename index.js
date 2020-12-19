// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    let firstDrivers = []
    for (let i = 0; i < drivers.length; i++) {
        if (drivers.indexOf(drivers[i]) <= 1) {
            firstDrivers.push(drivers[i])
        }
    }
    return firstDrivers
}

const returnLastTwoDrivers = function(drivers) {
    let lastDrivers = []
    for (let i = 0; i < drivers.length; i++) {
        if (drivers.indexOf(drivers[i]) > 1) {
            lastDrivers.push(drivers[i])
        }
    }
    return lastDrivers
}


const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

const createFareMultiplier = function() {
    return function multiplier(value) {
        return value * value
    }
}

const fareDoubler = function(fare) {
    return (createFareMultiplier()(fare / 2) - 5)
}

const fareTripler = function(fare) {
    return (createFareMultiplier()(fare / 2) - fare + fare)
}

const selectDifferentDrivers = function(drivers, driverFunc) {
    let driverFuncResult = driverFunc(drivers)
    return driverFuncResult
}