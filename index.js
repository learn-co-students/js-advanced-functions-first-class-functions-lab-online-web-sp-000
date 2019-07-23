const returnFirstTwoDrivers = function (drivers) {
    return [drivers[0], drivers[1]];
    // return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers) {
    return [drivers[drivers.length-2], drivers[drivers.length-1]]
    // return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number) {
    return function (fare) {
        return number * fare;
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)
}

function selectDifferentDrivers(drivers, selectingDrivers) {
    return selectingDrivers(drivers);

}