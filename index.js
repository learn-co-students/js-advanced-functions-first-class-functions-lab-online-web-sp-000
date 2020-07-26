// Code your solution in this file!
const returnFirstTwoDrivers = (drivers = []) => drivers.slice(0, 2);
const returnLastTwoDrivers = (drivers = []) => drivers.slice(-2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = (mutiplyer) => { return (fare) => mutiplyer * fare; };
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = (drivers, select) => select(drivers);
