// Code your solution in this file!

//goal: declare const variable assigned to anonymous function
//anonymous function take array of drivers
//and return the first 2 in the array
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}


//goal: declare const assign to anonymous func
//anon func once again to take array of drivers
//and return the last 2 in array
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}


//create a const that selects the first and last 2 drivers found in above functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//high order func
//take arg as integer
//returns with anon func using mulitplier times the fare
function createFareMultiplier(theMultiplier){
    return function(fare){
        return fare * theMultiplier;
    }
}


const fareDoubler = createFareMultiplier(2);


const fareTripler = createFareMultiplier(3);

//
const selectDifferentDrivers = function(drivers, func) {
    return func(drivers);
} 