// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    const top2 = function() {
        return drivers.slice(0, 2)
    }
    return top2()
}

function returnLastTwoDrivers(drivers) {
    const last2 = function() {
        return drivers.slice(Math.max(drivers.length - 2))
    }
    return last2();
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(outInt) {
    return function(inInt) {
        return outInt * inInt;
    }
}

function fareDoubler(fare) {
    return createFareMultiplier(fare)(2);
}

function fareTripler(fare) {
    return createFareMultiplier(fare)(3);
}

function selectDifferentDrivers(drivers, fun) {
    return fun(drivers);
}

