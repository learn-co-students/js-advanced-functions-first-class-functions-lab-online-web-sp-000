// Code your solution in this file!

const returnFirstTwoDrivers = function(array){
    return [array[0], array[1]]
}

const returnLastTwoDrivers = function(array){
    let number = array.length - 1
    return [array[number - 1], array[number]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
    return function(fare){
        return fare * integer
    }
}

function fareDoubler(fare){
    return fare * 2
}

function fareTripler(fare){
    return fare * 3
}

function selectDifferentDrivers(array, method){
    return method(array)
}