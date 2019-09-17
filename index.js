const returnFirstTwoDrivers = function (drivers) {

    // return a new array containing the first two drivers
    // from the passed-in array
    return drivers.slice(0, 2);
};


const returnLastTwoDrivers = function (drivers) {

    // return an array of the last two drivers
    return drivers.slice(-2);
};


const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];


const createFareMultiplier = function (multiplyValue) {

    // returns a function
    return function (value) {

        // should multiply a given value using the created multiplier
        return multiplyValue * value;
    };
};


const fareDoubler = createFareMultiplier(2);


const fareTripler = createFareMultiplier(3);


// returns the first && last two drivers when passed returnFirstTwoDrivers()
// as the second argument
const selectDifferentDrivers = function (drivers, whichDrivers) {

    return whichDrivers(drivers);
};
