// Code your solution in this file!

const returnFirstTwoDrivers = (driversArray) => {
return [driversArray[0], driversArray[1]]
}

const returnLastTwoDrivers = (a) => {
return [a[a.length - 2], a[a.length - 1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(qty) {
return (fare) => {
return (fare * qty)
}
}


const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, fn) {
return fn(drivers)
}