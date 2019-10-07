// Code your solution in this file!
const returnFirstTwoDrivers = (driverArray) => {
    return driverArray.slice(0,2) 
};

const returnLastTwoDrivers = (driverArray) => {
    return driverArray.slice((driverArray.length - 2), driverArray.length)
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (int) => {
    return ((fare, multiplier = int) => {
        return fare * multiplier 
    })
};

const fareDoubler = createFareMultiplier(2); 

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (driverArray, fx) => {
    return (fx)(driverArray)
}; 

