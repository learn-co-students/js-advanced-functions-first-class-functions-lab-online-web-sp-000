// Code your solution in this file!
const returnFirstTwoDrivers= function(driversArray){
    const selectingDrivers= driversArray.slice(0,2)
    return selectingDrivers;
}

const returnLastTwoDrivers= function(driversArray){
    const selectingDrivers= driversArray.slice(driversArray.length-2,driversArray.length)
    return selectingDrivers;
}

const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
    return function(fare){
        return fare*num;
    }
}

const fareDoubler= createFareMultiplier(2);
const fareTripler= createFareMultiplier(3);

function selectDifferentDrivers(driversArray, func){
    return func(driversArray);
}