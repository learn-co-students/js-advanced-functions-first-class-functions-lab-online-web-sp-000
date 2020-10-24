const returnFirstTwoDrivers = function(array) {
    return array.slice(0,2);
};

const returnLastTwoDrivers = function(array) {
   return array.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (a, b) => {
    return a * b;
};
