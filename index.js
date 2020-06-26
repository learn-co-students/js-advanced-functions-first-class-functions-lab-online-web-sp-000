// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
    let result = []
    for(let i = 0; i < 2; i++){
        result.push(arr[i]);
    }
    return result;
}

const returnLastTwoDrivers = function(arr) {
    let result = []
    for(let i = arr.length - 2; i <= arr.length - 1; i++){
        result.push(arr[i])
    }

    return result;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (int) => {
    if(int === 4){
        return function(fare) {
            return fare * 4;
        }
    }else {

    } return function(fare){
        return fare * int;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, whichDrivers) {
    return whichDrivers(drivers);
}