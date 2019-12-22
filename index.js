const returnFirstTwoDrivers = drivers => drivers.slice(0, 2);

const returnLastTwoDrivers = drivers => drivers.slice(-2);

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, func) {
    return func(drivers)
}
