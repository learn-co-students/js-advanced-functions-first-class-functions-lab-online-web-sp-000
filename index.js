// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => {
    return [arr[0], arr[1]]
}

const returnLastTwoDrivers = (arr) => {
    return [arr[arr.length - 2], arr[arr.length - 1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (int) => {
    return (times) => {
        return int * times
    }
}

const fareDoubler = (fare) => {
    return fare * 2
}

const fareTripler = (fare) => {
    return fare * 3
}

const selectDifferentDrivers = (arr, fn) => {
    return fn(arr)
}