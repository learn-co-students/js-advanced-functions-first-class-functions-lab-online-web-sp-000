const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2); // return the first two drivers in the array.
}; // The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2); //return the last two drivers in the array.
};

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

//This is a higher-order function that takes in one argument, an integer,
// and returns a function that will multiply a fare for a ride accordingly.
// If createFareMultiplier() receives an argument of 4, it will return a
// function that takes in a fare as an argument and quadruples the fare.
const createFareMultiplier = function (multiplyValue) {
    return function (fare) {
      return multiplyValue * fare;
    };
};

const fareDoubler = createFareMultiplier(2);

// fareTripler() — Declare a variable with const and assign a function
//  returned by createFareMultiplier() to it. Invoke createFareMultiplier()
//  in such a way that the new fareTripler() function accepts a fare as its
//  lone argument and triples it.
const fareTripler = createFareMultiplier(3);

//This function takes two arguments, an array of drivers and 
//  returnFirstTwoDrivers().  Based on these two arguments, selectDifferentDrivers()
//  will return the first two drivers 
const selectDifferentDrivers = function (drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
};

