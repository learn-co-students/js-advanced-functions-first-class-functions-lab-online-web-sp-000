
const returnFirstTwoDrivers = function(arr) {
        return arr.slice(0, 2);
};

const returnLastTwoDrivers = function(arr) {
      return arr.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
    return function(fare) {
        return fare * int;
    }
}

function fareDoubler(fare) {
    const doubler =createFareMultiplier(2)(fare);
    return doubler;
}

function fareTripler(fare) {
    const tripler =createFareMultiplier(3)(fare);
    return tripler;
}

function selectDifferentDrivers(arr, func) {
    return func(arr);
}

