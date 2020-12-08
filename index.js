const returnFirstTwoDrivers = function(drivers) {
    let arr = [drivers[0], drivers[1]]
    return arr
}

const returnLastTwoDrivers = function(drivers) {
    let back = drivers.length - 1
    return [drivers[back - 1], drivers[back]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return function(value) {
        console.log(value)
        return int * value
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, func) {
    return func(drivers)
}